import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ResilientImage } from './ResilientImage';

interface FinalCtaProps {
  onNavigate: (sectionId: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onNavigate }) => {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-28 md:py-36 overflow-hidden bg-[#08090C] border-b border-white/10"
    >
      {/* Full-Width Architectural Photograph with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ResilientImage
          src="/assets/aistudio/redrooftwo-CSqJMYfF_f5a353c1.jpeg"
          alt="Multi-gable residence with a precision architectural metal roof"
          className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/95 via-[#08090C]/75 to-[#08090C]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-[#0B0C0E]/70" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-mono tracking-[0.14em] text-[#C89D66] mb-4">
            ARCHITECTURAL PROTECTION · BUILT FOR GENERATIONS
          </p>

          <h2
            id="final-cta-heading"
            className="font-display font-extrabold text-white tracking-tight leading-[1.05] mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
              textWrap: 'balance',
            }}
          >
            YOUR ROOF DESERVES BETTER.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#D1D5DB] leading-relaxed mb-10 max-w-2xl">
            Discover the difference of a thoughtfully designed metal roofing solution.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.12em] text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] rounded-sm transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>GET YOUR FREE ROOFING QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
