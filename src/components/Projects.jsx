import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and a seamless checkout experience. Features advanced search and filtering.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    demo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool allowing teams to organize projects, assign tasks, and track progress using kanban boards.',
    tech: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
    demo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=600&h=400&fit=crop'
  },
  {
    title: 'AI Chat Interface',
    description: 'Responsive chat interface utilizing OpenAI API. Features markdown support, code highlighting, and conversation history context.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind'],
    demo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application showing current conditions, forecasting, and interactive maps using multiple weather data APIs.',
    tech: ['Vanilla JS', 'HTML5', 'CSS3', 'Weather API'],
    demo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative w-full pt-32">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-gradient text-4xl mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-1 rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden rounded-xl w-full bg-dark-800">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Links overlay */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-dark-900/80 hover:bg-primary-500 rounded-full text-white backdrop-blur-sm transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-dark-900/80 hover:bg-primary-500 rounded-full text-white backdrop-blur-sm transition-colors">
                    <HiOutlineExternalLink className="text-xl" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
