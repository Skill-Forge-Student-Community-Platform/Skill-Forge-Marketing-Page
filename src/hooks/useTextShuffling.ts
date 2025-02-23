'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useTextShuffling = (finalText: string) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [letters, setLetters] = useState<string[]>(finalText.split(''));
  const intervalHandles = useRef<number[]>([]);

  const animateScale = (element: HTMLElement) => {
    gsap.fromTo(element,
      { scale: 1 },
      { scale: 0.8, duration: 0.5, ease: "power2.out" }
    );
  };

  const clearBlurEffect = (letters: HTMLSpanElement[]) => {
    letters.forEach((letter, index) => {
      if (letter) {
        gsap.to(letter, {
          filter: 'blur(0px)',
          duration: 0.5,
          delay: index * 0.05,
          ease: "power2.out"
        });
      }
    });
  };

  const shuffleText = () => {
    if (!containerRef.current) return;
    setIsShuffling(true);

    // Clear previous intervals
    intervalHandles.current.forEach(handle => clearInterval(handle));
    intervalHandles.current = [];

    // Initial scale animation
    animateScale(containerRef.current);

    // Setup shuffling for each letter
    finalText.split('').forEach((_, index) => {
      const handle = setInterval(() => {
        if (!isShuffling) return;
        setLetters(prev => {
          const newLetters = [...prev];
          newLetters[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
          return newLetters;
        });
      }, 50);

      intervalHandles.current.push(handle);
    });

    // Stop shuffling and reveal final text
    setTimeout(() => {
      intervalHandles.current.forEach(handle => clearInterval(handle));
      setLetters(finalText.split(''));

      gsap.to(containerRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });

      const currentLetters = letterRefs.current.filter(ref => ref !== null) as HTMLSpanElement[];
      clearBlurEffect(currentLetters);
      setIsShuffling(false);
    }, 1500);
  };

  useEffect(() => {
    setLetters(finalText.split(''));
    letterRefs.current = new Array(finalText.length).fill(null);
  }, [finalText]);

  useEffect(() => {
    return () => {
      intervalHandles.current.forEach(handle => clearInterval(handle));
    };
  }, []);

  return { letters, shuffleText, isShuffling, containerRef, letterRefs };
};
