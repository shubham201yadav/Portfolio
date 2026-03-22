import React from 'react';
import { motion } from 'framer-motion';

// Mock data representing 6 image cards.
// They use placeholder images which can be replaced with real certificates later.
const certifications = [
  { id: 1, image: 'https://drive.google.com/file/d/19CNzAhDrgHfEUpk-zwOBhss_0OA5-030/view', title: 'Generative AI' },
  { id: 2, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop', title: 'Full Stack Web Development' },
  { id: 3, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop', title: 'AWS Cloud Practitioner' },
  { id: 4, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', title: 'React Performance Optimization' }
  
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding w-full pt-32 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-gradient text-4xl mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">Achievements and specializations I have acquired.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-2 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 rounded-xl overflow-hidden bg-dark-800">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay indicating it's an image card */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80 z-10"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-white font-medium text-lg lg:text-base xl:text-lg group-hover:text-primary-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
