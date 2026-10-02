import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { PROCESS_TIMELINE_STEPS } from '../data/mockData';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#FFF8F6] relative border-b border-[#C89B3C]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tagline="THE ARTISANAL LIFECYCLE"
          title="From Soil"
          italicTitle="to Savor"
          subtitle="Our six-stage artisanal discipline guarantees biological purity and maximum volatile potency from plantation earth to dining table."
        />

        {/* Step Numbers Connecting Line (Desktop) */}
        <div className="relative mt-16 sm:mt-20">
          
          {/* Subtle gold line running behind numbers */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 relative z-10">
            {PROCESS_TIMELINE_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-4 sm:p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#F6F0E4] border-[#C89B3C] shadow-md -translate-y-1'
                      : 'bg-transparent border-transparent hover:border-[#C89B3C]/30'
                  }`}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-semibold mb-4 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#064D3B] text-[#F6F0E4] border-[#C89B3C] shadow-gold-glow scale-110'
                        : 'bg-[#EFE6D4] text-[#7A1624] border-[#C89B3C]/40 group-hover:border-[#C89B3C]'
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Step Title */}
                  <h4 className="font-serif text-base sm:text-lg font-medium text-[#241711] leading-snug group-hover:text-[#064D3B] transition-colors">
                    {step.title}
                  </h4>

                  {/* Step Tagline */}
                  <p className="text-[11px] text-[#7A1624] font-medium uppercase tracking-wider mt-1">
                    {step.tagline}
                  </p>

                  {/* Short text snippet */}
                  <p className="text-xs text-[#404944] mt-2 line-clamp-3 leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase Box */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-6 sm:p-8 bg-[#F6F0E4] border-2 border-[#C89B3C] shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-left flex-grow">
              <div className="flex items-center gap-2 text-[#7A1624] text-xs label-caps mb-1.5">
                <span className="font-mono text-[#064D3B] font-bold">
                  PHASE {PROCESS_TIMELINE_STEPS[activeStep].step}
                </span>
                <span className="text-[#C89B3C]">◆</span>
                <span>{PROCESS_TIMELINE_STEPS[activeStep].tagline}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#241711]">
                {PROCESS_TIMELINE_STEPS[activeStep].title}
              </h3>
              <p className="mt-2 text-sm text-[#241711]/90 leading-relaxed">
                {PROCESS_TIMELINE_STEPS[activeStep].description}
              </p>
              <p className="mt-2 text-xs text-[#404944] font-mono leading-relaxed bg-[#EFE6D4] p-3 border-l-2 border-[#C89B3C]">
                {PROCESS_TIMELINE_STEPS[activeStep].detail}
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end flex-shrink-0">
              <span className="label-caps text-[10px] text-[#7A1624] mb-2">QUALITY GATEWAY</span>
              <div className="px-4 py-2 bg-[#064D3B] text-[#F6F0E4] text-xs font-mono tracking-widest border border-[#C89B3C]">
                PASSED 100% PURE
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
