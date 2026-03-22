import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiPython, SiExpress, SiMongodb, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiMysql } from 'react-icons/si';

const skillsData = [
  {
    category: 'Programming & Markup Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', progress: '85%' },
      { name: 'Python', icon: SiPython, color: 'text-yellow-500', progress: '90%' },
      { name: 'Java', icon: FaJava, color: 'text-red-500', progress: '80%' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', progress: '85%' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', progress: '95%' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', progress: '90%' },
    ]
  },
  {
    category: 'Frameworks and Libraries',
    skills: [
      { name: 'ReactJS', icon: FaReact, color: 'text-blue-400', progress: '90%' },
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', progress: '80%' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400', progress: '85%' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', progress: '80%' },
      { name: 'NumPy', icon: SiNumpy, color: 'text-blue-500', progress: '75%' },
      { name: 'Pandas', icon: SiPandas, color: 'text-indigo-400', progress: '80%' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-orange-500', progress: '70%' },
      { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500', progress: '65%' },
    ]
  },
  {
    category: 'Tools and Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', progress: '90%' },
      { name: 'GitHub', icon: FaGithub, color: 'text-white', progress: '85%' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-400', progress: '60%' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-400', progress: '50%' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', progress: '80%' },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding relative w-full pt-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-gradient text-4xl mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 line-clamp-2 md:line-clamp-1 truncate" title={category.category}>
                {category.category}
              </h3>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div key={sIdx} variants={itemVariants} className="group">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-slate-300 font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className="text-slate-500 text-sm whitespace-nowrap">{skill.progress}</span>
                    </div>
                    <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.progress }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-fuchsia-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
