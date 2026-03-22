import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText } from 'react-icons/hi';

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative w-full pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card flex flex-col items-center text-center py-16 px-8 relative overflow-hidden"
        >
          {/* Animated background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>

          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary-500/20 transform rotate-3">
            <HiDocumentText className="text-4xl text-white transform -rotate-3" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Want to know more?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            Download my resume to get a comprehensive overview of my education, 
            skills, and experience in building web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1dgjrvPNjq5VN_yeXyo898XVn8Qih_MA4/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary"
            >
              <span className="flex items-center gap-2">
                <HiDownload className="text-xl" />
                View & Download Resume
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
