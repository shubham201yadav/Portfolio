import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';

const profiles = [
  {
    name: 'LeetCode',
    icon: FaCode,
    url: 'https://leetcode.com/u/Darksky741/',
    color: 'hover:text-yellow-500',
    bg: 'hover:bg-yellow-500/10 hover:border-yellow-500/30'
  },
  {
    name: 'GeeksforGeeks',
    icon: FaCode,
    url: 'https://www.geeksforgeeks.org/profile/official6lqa',
    color: 'hover:text-green-500',
    bg: 'hover:bg-green-500/10 hover:border-green-500/30'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/shubham201yadav',
    color: 'hover:text-white',
    bg: 'hover:bg-white/10 hover:border-white/30'
  }
];

export default function Profiles() {
  return (
    <section id="profiles" className="section-padding w-full pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="heading-gradient text-4xl mb-4">Coding Profiles</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">Where I practice my problem-solving skills and push code.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`glass flex items-center gap-4 px-8 py-5 rounded-2xl transition-all duration-300 ${profile.color} ${profile.bg} border border-transparent`}
            >
              <profile.icon className="text-3xl" />
              <span className="font-bold text-lg">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
