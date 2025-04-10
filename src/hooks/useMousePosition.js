import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", updateMousePosition);

      // Set initial position to center of screen
      setMousePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return mousePosition;
};

export default useMousePosition;
