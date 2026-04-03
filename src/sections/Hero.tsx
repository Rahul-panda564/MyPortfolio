import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState('');
  const fullText = 'FULL STACK DEVELOPER';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Name animation - character reveal
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      );

      // Description fade in
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.8
      );

      // Image scale and fade
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        0.5
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.2
      );

      // Social links
      tl.fromTo(
        socialsRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6 },
        1.4
      );

      // Continuous image breathing animation
      gsap.to(imageRef.current, {
        scale: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-gray-400 text-sm sm:text-base tracking-widest mb-4 font-medium">
              HELLO, I'M
            </p>

            {/* Name */}
            <h1
              ref={nameRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight"
            >
              RAHUL
              <br />
              <span className="gradient-text">KUMAR PANDA</span>
            </h1>

            {/* Title with Typewriter */}
            <div className="h-8 sm:h-10 mb-6">
              <span
                ref={titleRef}
                className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-purple-400"
              >
                {typedText}
                <span className="typewriter-cursor" />
              </span>
            </div>

            {/* Description */}
            <p
              ref={descRef}
              className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I craft scalable web applications with modern technologies.
              Passionate about clean code, user experience, and solving real-world
              problems through technology.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="https://github.com/Rahul-panda564"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass rounded-full text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>

            {/* Social Links */}
            <div ref={socialsRef} className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Rahul-panda564"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-panda-770118178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/_rahulpanda__?igsh=OWd1ZGF2MHhkdnJt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/30 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Rahul_Panda_10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/30 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div ref={imageRef} className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-40 animate-pulse-glow" />

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="gradient-border w-full h-full rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0f1a]">
                    <img
                      src="/Profile.jpeg"
                      alt="Portrait of Rahul Kumar Panda"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-[center_18%]"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-float">
                <span className="text-sm font-semibold gradient-text">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full animate-float-delayed">
                <span className="text-sm font-semibold text-pink-400">TypeScript</span>
              </div>
              <div className="absolute top-1/2 -right-8 glass px-4 py-2 rounded-full animate-float">
                <span className="text-sm font-semibold text-purple-400">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
