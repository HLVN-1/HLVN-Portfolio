"use client"; // Required for GSAP animations in a client-side component

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  //   const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Text animations
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      // Button animation
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "-=0.3"
      );
  }, []);

  return (
    <div>
      <section
        id="hero"
        className="h-screen m-o bg-gradient-with-noise bg-blend-multiply bg-cover text-white flex flex-col justify-center items-center text-center"
      >
        <h1 ref={headingRef} className="text-5xl font-bold mb-4">
          Welcome to my humble portfolio page!
        </h1>
        <p ref={subTextRef} className="text-xl">
          Front-End Developer | GSAP Enthusiast | Responsive Design
        </p>
        <a
          href="https://github.com/HLVN-1"
          target="_blank"
          rel="noopener noreferrer"
          ref={buttonRef}
          className="px-6 py-3 bg-yellow-500 rounded-lg hover:bg-yellow-600"
          id="explorebtn"
        >
          Explore My Work
        </a>
        {/* // Icons for GitHub and LinkedIn */}
        {/* <div className="flex space-x-4 mt-4">
  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
    <img src="/github-icon.svg" alt="GitHub" className="h-8 w-8" />
  </a>
  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-8 w-8" />
  </a>
</div> */}
      </section>
    </div>
  );
}
