import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'GSAP', level: 88 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Django', level: 85 },
      { name: 'DRF', level: 82 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 88 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQLite', level: 85 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 72 },
      { name: 'Figma', level: 80 },
    ],
  },
];

const techStack = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'AWS',
  'Tailwind',
  'GSAP',
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      // Category cards animation
      categoriesRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        }
      });

      // Orbit rotation
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest mb-4">
            EXPERTISE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            TECHNICAL <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on development
            experience across the full stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => { categoriesRef.current[index] = el; }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125'
                      : 'bg-purple-600'
                  }`}
                />
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/30"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Orbit */}
        <div className="relative flex justify-center items-center py-20">
          {/* Center Core */}
          <div className="absolute z-10 w-32 h-32 glass-strong rounded-full flex items-center justify-center">
            <span className="font-display text-lg font-bold gradient-text text-center">
              MY
              <br />
              STACK
            </span>
          </div>

          {/* Orbit Rings */}
          <div ref={orbitRef} className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px]">
            {/* Inner Ring */}
            <div className="absolute inset-8 sm:inset-12 border border-purple-600/20 rounded-full" />

            {/* Outer Ring */}
            <div className="absolute inset-0 border border-pink-600/20 rounded-full" />

            {/* Tech Items */}
            {techStack.map((tech, index) => {
              const angle = (index / techStack.length) * 360;
              const radius = index % 2 === 0 ? 160 : 220;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={tech}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="skill-orb glass px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background Glow */}
          <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Built' },
            { value: '8+', label: 'Technologies' },
            { value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
