'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

export default function GlobalMouseMask() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  // Create the mask SVG dynamically
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Create SVG mask if it doesn't exist
      if (!document.getElementById('mouse-mask-svg')) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", "mouse-mask-svg");
        svg.setAttribute("width", "40");
        svg.setAttribute("height", "40");
        svg.setAttribute("viewBox", "0 0 40 40");
        svg.style.display = "none";

        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "20");
        circle.setAttribute("cy", "20");
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "white");

        svg.appendChild(circle);
        document.body.appendChild(svg);
      }
    }
  }, []);

  // Global styles
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.id = 'mouse-mask-styles';

    // Define the CSS
    styleElement.innerHTML = `
      .mouse-mask-layer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
      }

      .mouse-mask-content {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #3b82f6, #1d4ed8);
        mask-image: url('data:image/svg+xml;base64,${btoa('<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/></svg>')}');
        mask-repeat: no-repeat;
      }

      /* Add hover-mask-trigger class to any element you want to trigger the mask expansion */
      .hover-mask-trigger {
        transition: color 0.3s ease;
      }

      /* When hovered, text will be visible through the mask */
      .hover-mask-trigger:hover {
        color: #fff !important;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }

      /* Some default elements to make interactive with the mask */
      h1, h2, h3, button, a, .feature-card {
        color: currentColor;
      }
    `;

    // Append to head
    if (!document.getElementById('mouse-mask-styles')) {
      document.head.appendChild(styleElement);
    }

    return () => {
      // Clean up
      if (document.getElementById('mouse-mask-styles')) {
        document.getElementById('mouse-mask-styles')?.remove();
      }
    };
  }, []);

  // Add hover-mask-trigger class to interactive elements
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add the class to common interactive elements
      const elements = document.querySelectorAll('h1, h2, h3, p, button, a, .feature-card');
      elements.forEach(el => {
        el.classList.add('hover-mask-trigger');
      });

      // Set up event listeners
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      document.querySelectorAll('.hover-mask-trigger').forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        document.querySelectorAll('.hover-mask-trigger').forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, []);

  return (
    <div className="mouse-mask-layer">
      <motion.div
        className="mouse-mask-content"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </div>
  );
}
