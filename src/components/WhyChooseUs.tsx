import React from 'react';
import { motion } from 'motion/react';
import { VALUE_PROPOSITIONS } from '../data/roofingData';
import { ResilientImage } from './ResilientImage';

interface WhyChooseUsProps {
  onNavigate: (sectionId: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="py-24 md:py-32 bg-[#0B0C0E] border-b border-white/[0.08]"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 mb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
              <span className="font-mono text-[#C89D66]">03</span>
              <span aria-hidden="true">·</span>
              <span className="tracking-wider font-medium text-[#D1D5DB]">
                THE PRESTIGE STANDARD
              </span>
            </div>
            <h2
              id="why-choose-heading"
              className="font-display font-extrabold text-white tracking-tight leading-[1.06]"
              style={{
                fontSize: 'clamp(2rem, 3.6vw, 3.35rem)',
                textWrap: 'balance',
              }}
            >
              CRAFTSMANSHIP YOU CAN SEE.
              <br />
              <span className="text-[#9CA3AF]">QUALITY YOU CAN TRUST.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#B8BFC9] leading-relaxed">
              Every roof we install is defined by disciplined preparation, clean
              architectural sightlines, and materials selected to withstand demanding
              seasonal weather.
            </p>
          </div>
        </div>

        {/* Main Asymmetric Layout: Left Value Propositions, Right Photographic Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left 7 Columns: 5 Editorial Value Propositions */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {VALUE_PROPOSITIONS.map((item, idx) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-2">
                  <span className="font-mono text-sm font-semibold text-[#C89D66]">
                    {item.index}
                  </span>
                </div>
                <div className="sm:col-span-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-[#8E95A5]">
                      {item.detail}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#B8BFC9] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right 5 Columns: On-Site Craftsmanship & Fleet Photography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Fleet & Completed Residence Photo */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-[#12151B]">
              <ResilientImage
                src="/assets/aistudio/IMG_20261106_235635_b83f3fe6.jpg"
                alt="Prestige Metal Roof service truck parked outside a completed residential metal roofing project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-xs font-mono text-[#C89D66] mb-1">
                  ON-SITE EXECUTION
                </p>
                <p className="text-sm font-medium text-white">
                  Dedicated crews and organized jobsite management from start to finish.
                </p>
              </div>
            </div>

            {/* Secondary Architectural Roofline Detail */}
            <div className="p-6 bg-[#12151B] border border-white/10 rounded-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                <div className="sm:col-span-5 aspect-[4/3] overflow-hidden rounded-xs border border-white/10">
                  <ResilientImage
                    src="/assets/aistudio/IMG_20261106_235752_67850ed7.jpg"
                    alt="Multi-hipped charcoal metal roof in Ajax, Ontario"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7">
                  <p className="text-xs font-mono text-[#C89D66] mb-1">
                    ARCHITECTURAL CONTINUITY
                  </p>
                  <h3 className="text-base font-display font-bold text-white mb-2">
                    Built for Complex Rooflines
                  </h3>
                  <p className="text-xs text-[#B8BFC9] leading-relaxed mb-4">
                    Whether your property features steep gables, dormers, turrets, or
                    low-slope porch transitions, our metal systems are custom-fitted on site.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('quote')}
                    className="text-xs font-semibold tracking-wider text-white hover:text-[#C89D66] transition-colors cursor-pointer"
                  >
                    REQUEST A CONSULTATION →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
