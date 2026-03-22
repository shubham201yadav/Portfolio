import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightningBolt, HiCode } from 'react-icons/hi';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="section-padding relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="heading-gradient text-4xl mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              Hello! I'm a passionate Software Developer with a strong foundation in computer science
              and a drive to build impactful digital solutions. My journey in tech started with a curiosity
              about how things work on the internet, which quickly evolved into a deep love for coding.
            </p>
            <p>


              I am currently pursuing B.Tech(CSE) from Lovely Professional University.
              I am a quick learner and a team player with a strong work ethic.
              I am passionate about building scalable and efficient software solutions.
            </p>
            <p>
              When I'm not entirely immersed in VS Code, you can find me solving algorithmic challenges,
              exploring new open-source projects, or learning about the latest advancements in web dev.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6">
            <div className="glass-card flex items-start gap-4">
              <div className="p-3 bg-primary-500/20 text-primary-400 rounded-xl">
                <HiAcademicCap className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Education</h3>
                <p className="text-slate-400">B.Tech in Computer Science Engineering (CSE)</p>
                <p className="text-sm text-slate-500 mt-1">Lovely Professional University • 2023 - 2027</p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4">
              <div className="p-3 bg-fuchsia-500/20 text-fuchsia-400 rounded-xl">
                <HiLightningBolt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Problem Solving</h3>
                <p className="text-slate-400">200+ problems solved on LeetCode & GFG</p>
                <p className="text-sm text-slate-500 mt-1">Consistent participant in coding contests</p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                <HiCode className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Development</h3>
                <p className="text-slate-400">Built scalable full-stack applications</p>
                <p className="text-sm text-slate-500 mt-1">Experience with React, Node.js, and Cloud</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
