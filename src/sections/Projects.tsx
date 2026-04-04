import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: 'FoodSave',
    description:
      'AI-enabled food redistribution platform connecting donors, NGOs, and volunteers to reduce food waste. Features role-based workflows for donation creation, pickup coordination, delivery tracking, and impact analytics.',
    image: 'project-foodsave.jpg',
    tech: ['React', 'TypeScript', 'Django', 'DRF', 'SQLite'],
    liveUrl: 'https://rahul-panda564.github.io/FoodSave/',
    githubUrl: 'https://github.com/Rahul-panda564/FoodSave',
  },
  {
    id: 2,
    name: 'VelvetRose',
    description:
      'High-end florist aesthetic website with premium e-commerce experience. Features botanical artistry showcase, product catalog, and romantic styling with smooth GSAP animations.',
    image: 'project-velvetrose.jpg',
    tech: ['React', 'Vite', 'GSAP', 'TypeScript'],
    liveUrl: 'https://rahul-panda564.github.io/VelvetRose',
    githubUrl: 'https://github.com/Rahul-panda564/VelvetRose',
  },
  {
    id: 3,
    name: 'Trekify',
    description:
      'Premium camping and outdoor gear rental platform with destination-first planning. Features curated gear catalog, clean pricing cards, and modern UX for adventure enthusiasts.',
    image: 'project-trekify.jpg',
    tech: ['JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://rahul-panda564.github.io/Trekify',
    githubUrl: 'https://github.com/Rahul-panda564/Trekify',
  },
  {
    id: 4,
    name: 'NexusAI',
    description:
      'AI SaaS chat interface with scroll-driven animations and simulated conversational flow. Features cinematic UI, GSAP ScrollTrigger effects, and production-style frontend architecture.',
    image: 'project-nexusai.jpg',
    tech: ['React', 'TypeScript', 'GSAP', 'Framer Motion'],
    liveUrl: 'https://rahul-panda564.github.io/AI_SAAS_CHAT_INTERFACE/',
    githubUrl: 'https://github.com/Rahul-panda564/AI_SAAS_CHAT_INTERFACE',
  },
];

export default function Projects() {
  const baseUrl = import.meta.env.BASE_URL;
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest mb-4">
            MY WORK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            FEATURED <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development skills
            and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="project-card group relative glass rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={`${baseUrl}${project.image}`}
                  alt={project.name}
                  className="project-image w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag px-3 py-1 text-xs font-medium text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repo
                  </a>
                </div>
              </div>

              {/* Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Rahul-panda564"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
