import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-blob"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-primary-500 font-medium mb-4 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I am
          </motion.h2>
          <motion.h1
            className="heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Shubham Yadav
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl text-slate-300 font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Software Developer | Problem Solver
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I build exceptional and accessible digital experiences for the web.
            Passionate about transforming complex problems into elegant, intuitive designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <a href="https://drive.google.com/file/d/1dgjrvPNjq5VN_yeXyo898XVn8Qih_MA4/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
              <HiDownload className="text-xl" />
              Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              View Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-fuchsia-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

          {/* Profile Picture Placeholder */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/10 overflow-hidden glass shadow-2xl z-10">
            {/* Replace src with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
