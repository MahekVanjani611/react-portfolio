import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Typed from "typed.js";
import "../App.css";

const Hero = ({ id, personalData, scrollToSection }) => {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  // Laptop typing area dimensions
  const laptopHeight = 260; // height of the screen
  const laptopWidth = 480; // width of the screen
  const [fontSize, setFontSize] = useState(20); // initial font size

  // Your profile highlights
  const profileStrings = [
    "&lt;Hi, I'm Mahek /&gt;",
    "// Software Engineer Intern @ NVIDIA ",
    "/* Passionate about building efficient, scalable systems */",
    "const expertise = ['C++', 'Node.js', 'React', 'Deep Learning'];",
    "function solveComplexProblems() { return 'joy'; }",
    "// Member - Career Development Cell & Product Club, IIT Jodhpur ",
    "/* I love blending technology with creativity */",
    "while (learning) { grow(); innovate(); }",
    "return 'Turning ideas into impactful solutions ';"
  ];

  // Dynamically calculate font size to fit all lines
  useEffect(() => {
    const lineHeightMultiplier = 1.5; // space between lines
    const calculatedFontSize = Math.floor(laptopHeight / (profileStrings.length * lineHeightMultiplier));
    setFontSize(calculatedFontSize);
  }, [profileStrings.length]);

  // Initialize Typed.js
  useEffect(() => {
    if (!typedEl.current) return;

    const options = {
      strings: profileStrings,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      smartBackspace: false,
      fadeOut: true,
      fadeOutDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    typedInstance.current = new Typed(typedEl.current, options);

    return () => {
      if (typedInstance.current) typedInstance.current.destroy();
    };
  }, [profileStrings]);

  return (
    <section id={id} className="hero-section">
      <div className="hero-container flex flex-col md:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="hero-content md:w-1/2 text-center md:text-left">
          <h1 className="hero-title">{personalData.name}</h1>
          <h2 className="hero-subtitle">{personalData.title}</h2>
          <p className="hero-description">{personalData.tagline}</p>

          <div className="hero-actions flex gap-3 justify-center md:justify-start mt-4">
            <Button
              className="btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="hero-social flex gap-4 justify-center md:justify-start mt-6">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="social-link"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Laptop */}
        <div className="hero-right md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <div className="hero-animation relative w-full flex justify-center items-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 600 400"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Laptop Screen */}
              <rect
                x="50"
                y="50"
                width="500"
                height="280"
                rx="15"
                fill="#0a0a0a"
                stroke="#D9FB06"
                strokeWidth="2"
              />

              {/* Typing Area */}
              <foreignObject x="60" y="60" width={laptopWidth} height={laptopHeight}>
                <div
                  ref={typedEl}
                  style={{
                    color: "#D9FB06",
                    fontFamily: "monospace",
                    fontSize: `${fontSize}px`,
                    lineHeight: 1.4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "100%",
                    width: "100%",
                    padding: "5px",
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                ></div>
              </foreignObject>

              {/* Blinking Cursor
              <rect x="530" y="80" width="10" height="25" fill="#D9FB06" opacity="1">
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </rect> */}

              {/* Laptop Base */}
              <rect
                x="40"
                y="330"
                width="520"
                height="25"
                rx="8"
                fill="#1a1a1a"
                stroke="#D9FB06"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator mt-15">
          <button
            className="scroll-button"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll Down"
          >
            <ChevronDown size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
