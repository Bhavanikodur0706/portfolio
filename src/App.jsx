import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
import myImage from './assets/mypic.jpeg';
export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Redux', 'React Query', 'Bootstrap', 'Tailwind CSS', 'Material UI'],
    backend: ['Node.js', 'PHP', 'RESTful API', 'SQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'Figma', 'Agile/Scrum', 'WordPress', 'WooCommerce']
  };

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Modsoft Technology AI Development',
      location: 'Dubai, UAE',
      period: '11-2023 TO 12-2024',
      highlights: [
        'Developed dynamic React.js applications with Redux state management',
        'Built scalable applications using modern JavaScript (ES6+)',
        'Integrated RESTful APIs using Node.js and PHP',
        'Implemented WooCommerce e-commerce solutions',
        'Enhanced Angular.js projects with new features'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Next-Engineering Consultants',
      location: 'Dubai, UAE',
      period: '12-2022 TO 11-2023',
      highlights: [
        'Developed responsive features using React.js, Material UI, and Redux',
        'Built scalable interfaces with modular component architecture',
        'Translated Figma designs into pixel-perfect interfaces',
        'Integrated frontend with Node.js and PHP backend services',
        'Optimized performance through efficient state management'
      ]
    },
    {
      title: 'Frontend and Web Developer',
      company: 'Drive7 Services',
      location: 'Dubai, UAE',
      period: '08-2019 TO 12-2020',
      highlights: [
        'Designed interactive dashboards using React.js and Material UI',
        'Created web interfaces from scratch using Figma',
        'Managed database operations using SQL',
        'Conducted manual testing and troubleshooting',
        'Optimized UI performance and debugged complex issues'
      ]
    }
  ];

  const projects = [
    { name: 'Next Engineering Corporate Website', tech: 'React.js, Tailwind CSS, API Integration', link: 'https://next-engineering.com' },
    { name: 'Freakins E-commerce Platform', tech: 'React.js, WooCommerce, Redux', link: 'https://freakins.com' },
    { name: 'Drive7 GPS Dashboard', tech: 'React.js, Real-time Data, Bootstrap', link: 'https://drive7gps.com' },
    { name: 'Gold Gym Fitness Platform', tech: 'React.js, Material UI', link: 'https://goldgymsite.netlify.app' },
    { name: 'E-commerce Shopping Site', tech: 'React.js, Redux, Cart Management', link: 'https://eshoping-site.netlify.app' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out mix-blend-difference"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
        }}
      />

      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            BK
          </h1>
          <div className="flex gap-8">
            {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-slate-950 rounded-full overflow-hidden border-4 border-slate-900">
                <img 
                  src={myImage} 
                  alt="Bhavani Kodur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
            Bhavani Kodur
          </h1>
          <h2 className="text-4xl text-gray-300 mb-8 animate-fadeIn">Full Stack Developer</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn">
            Results-driven Full-Stack Developer with 2+ years of UAE experience specializing in React.js development. 
            Building scalable, high-performance web applications with modern JavaScript.
          </p>
          <div className="flex gap-6 justify-center animate-fadeIn">
            <a href="mailto:bhavanikodur14@gmail.com" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a href="https://www.linkedin.com/in/bhavani-kodur" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400 cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="text-2xl font-semibold">Technical Expertise</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Specialized in building modern web applications using React.js, Redux, and Node.js. 
                  Experienced in creating responsive, user-friendly interfaces with optimal performance.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <p className="text-gray-400">
                  <strong>Bachelor of Technology</strong><br />
                  JNTU Hyderabad (2014-2018)
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                    <h4 className="text-cyan-400 font-semibold mb-4 capitalize">{category.replace('frontend', 'Frontend').replace('backend', 'Backend').replace('tools', 'Tools & Workflows')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-slate-700/50 rounded-full text-sm hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">{job.title}</h3>
                    <p className="text-xl text-gray-300 mt-2">{job.company}</p>
                    <p className="text-gray-500 mt-1">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Briefcase size={20} className="text-cyan-400" />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" size={32} />
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-200 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:gap-4 transition-all">
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm currently available for new opportunities. Let's build something amazing together!
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:bhavanikodur14@gmail.com" className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group">
              <Mail className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">bhavanikodur14@gmail.com</p>
            </a>
            <a href="tel:+971588270367" className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group">
              <Phone className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+971 588270367</p>
            </a>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <MapPin className="mx-auto mb-4 text-cyan-400" size={40} />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Dubai Silicon Oasis, Dubai, UAE</p>
            <p className="text-cyan-400 mt-2">Available Immediately • Willing to Relocate</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <div className="mb-8">
      <a
        href="/Bhavani-Kodur-Resume.pdf"
        download="Bhavani-Kodur-Resume.pdf"
        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 font-semibold text-lg"
      >
        <svg
          className="w-6 h-6 group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download Resume
      </a>
    </div>

    <p className="text-gray-400">
      © 2024 Bhavani Kodur. Built with React & Tailwind CSS
    </p>

    <div className="flex gap-6 justify-center mt-4">
      <a
        href="https://www.linkedin.com/in/bhavani-kodur"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://github.com/bhavanikodur"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="mailto:bhavanikodur14@gmail.com"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  </div>
</footer>


      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeIn:nth-child(1) { animation-delay: 0.1s; }
        .animate-fadeIn:nth-child(2) { animation-delay: 0.2s; }
        .animate-fadeIn:nth-child(3) { animation-delay: 0.3s; }
        .animate-fadeIn:nth-child(4) { animation-delay: 0.4s; }
        .animate-fadeIn:nth-child(5) { animation-delay: 0.5s; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}