'use client';

import { useEffect, useState, useCallback } from 'react';
import { useTextShuffling } from '../hooks/useTextShuffling';
import Image from 'next/image';
import designExample1Image from "../assets/images/design-example-1 1.png";
import designExample2Image from "../assets/images/design-example-1 2.png";
import Pointer from '../components/Pointer';

export default function Hero() {
    const texts = ["SKILL-UP", "TEAM-UP", "LEVEL-UP"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const { letters, shuffleText, isShuffling, containerRef, letterRefs } = useTextShuffling(texts[currentIndex]);

    // Memoize the text rotation logic
    const rotateText = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        shuffleText();
    }, [shuffleText, texts.length]);

    useEffect(() => {
        const interval = setInterval(rotateText, 3000); // Change text every 3 seconds
        return () => clearInterval(interval);
    }, [rotateText]);

    return (
      <section className="py-14 overflow-x-clip ">
          <div className=" container  relative">
            {/* use block to display them */}
            <div className=' absolute -left-64 top-16 hidden lg:hidden'>
              <Image
                    src={designExample1Image}
                    alt="Movable Image"
              />
            </div>
            <div className=' absolute -right-96 -top-16  hidden lg:hidden'>
              <Image
                    src={designExample2Image}
                    alt="Movable Image"
              />
            </div>
            <div className='absolute left-44 top-80  hidden lg:block'>
              <Pointer name='Dulitha' />
            </div>
            <div className='absolute right-80  hidden lg:block'>
              <Pointer name='Lakshan' color='red ' />
            </div>
            <div className="flex justify-center ">
                <div className=" inline-flex py-1 px-3 bg-gradient-to-r from-violet-800 to-blue-500  rounded-full text-neutral-950 font-semibold ">✨ Forge Your Skills, Define Your future </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium text-center mt-6">Elevate Your Skills. Expand Your Network. Excel Together.</h1>
            <div className="flex items-center justify-center text-5xl mt-16 mb-16 font-medium">
                <div className=" items-center justify-center font-torwelten">
                    <div
                        ref={containerRef}
                        className="inline-block "
                        style={{
                            transformOrigin: 'center',
                            fontSize: '1.8rem',
                            willChange: 'transform'
                        }}
                    >
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                ref={el => {
                                    if (el) letterRefs.current[index] = el;
                                }}
                                style={{
                                    display: 'inline-block',
                                    filter: isShuffling ? 'blur(8px)' : 'blur(0px)',
                                    transition: 'filter 0.5s ease-out'
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <p className="  justify-center text-center text-xl text-white/50 mt-8 max-w-auto ">Your journey to success starts here - build, compete, and stand out.</p>
            <p className=" justify-center text-center text-xl text-white/50 mt-1 max-w-auto">A centralized hub designed to streamline competitions, enhance skills, and unlock career opportunities.</p>
          </div>
            <div className="flex justify-center mt-8">
              {/* <button>Join the Revolution!</button> */}
              <button className="flex border border-white/15 rounded-full p-2 mt mt-8">Challenge Yourself – Begin Now!</button>
            </div>

      </section>

    );
}
