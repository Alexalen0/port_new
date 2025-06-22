import React, { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = parallaxRef.current;
      const text = textRef.current;

      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      if (text) {
        text.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div
        ref={textRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Alex Varghese
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
            Software Developer & Data Scientist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions through code, transforming data into
            insights, and building the future one algorithm at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://github.com/Alexalen0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex3v/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:alex3alen@gmail.com"
            className="p-3 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
