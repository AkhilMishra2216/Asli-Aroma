import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Sparkles, Sun } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Authenticity: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-[#C89B3C]" />,
      number: '01',
      title: '100% Authentic',
      description: 'Cold-stone ground at low RPMs below 35°C. Never heated or chemically extracted to strip out precious oleoresins.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#C89B3C]" />,
      number: '02',
      title: 'Carefully Sourced',
      description: 'Single-estate farmer partnerships across Kerala, Kashmir & Rajasthan. Direct provenance with verified lot numbers.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#C89B3C]" />,
      number: '03',
      title: 'Naturally Aromatic',
      description: 'Triple-sealed UV glass jars displace oxygen with food-grade nitrogen to safeguard volatile terpenes until your first unsealing.'
    },
    {
      icon: <Sun className="w-6 h-6 text-[#C89B3C]" />,
      number: '04',
      title: 'Rooted in Tradition',
      description: 'Harvested according to Ayurvedic seasonal cycles to support digestive Agni, vibrant color, and holistic kitchen wellness.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#064D3B] text-[#F6F0E4] relative overflow-hidden border-b border-[#C89B3C]/30">
      
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0d634e] via-[#064D3B] to-[#002117] opacity-60 pointer-events-none" />

      {/* Terroir Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C89B3C 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          theme="emerald"
          tagline="THE HOLISTIC STANDARD"
          title="Aroma You"
          italicTitle="Can Feel."
          subtitle="Untouched by harsh industrial heat, each harvest preserves the sacred volatile oil matrix, natural vibrancy, and Ayurvedic prana."
          className="mx-auto text-center"
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group bg-[#003427]/70 backdrop-blur-sm border border-[#C89B3C]/30 hover:border-[#C89B3C] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow relative"
            >
              {/* Corner Hairlines */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C89B3C]/60" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C89B3C]/60" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-none bg-[#064D3B] border border-[#C89B3C] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-[#C89B3C] tracking-widest">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#F6F0E4] group-hover:text-[#C89B3C] transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#eed5cb]/80 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="mt-6 pt-4 border-t border-[#C89B3C]/20 flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[#C89B3C]">
                <span>Pure Terroir</span>
                <span>◆</span>
                <span>0% Adulterants</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
