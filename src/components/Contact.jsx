import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative w-full pt-32">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-gradient text-4xl mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card flex items-center gap-6 p-6">
              <div className="w-14 h-14 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-2xl shrink-0">
                <HiMail />
              </div>
              <div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">Email</h3>
                <a href="mailto:official0shiva@gmail.com" className="text-white font-medium hover:text-primary-400 transition-colors">
                  official0shiva@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card flex items-center gap-6 p-6">
              <div className="w-14 h-14 bg-fuchsia-500/20 text-fuchsia-400 rounded-full flex items-center justify-center text-2xl shrink-0">
                <HiLocationMarker />
              </div>
              <div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">Location</h3>
                <p className="text-white font-medium">Jalandhar, Punjab, India</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/shubhamyadav123/" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/shubham201yadav" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-slate-400 text-sm font-medium ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-slate-400 text-sm font-medium ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-slate-400 text-sm font-medium ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Just saying hi!"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-slate-400 text-sm font-medium ml-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full shadow-primary-500/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
