import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/roofingData';

interface ProcessProps {
  onNavigate: (sectionId: string) => void;
}

export const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section
      aria-labelledby="process-heading"
      className="py-24 md:py-32 bg-[#0B0C0E] border-b border-white/[0.08]"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
              <span className="font-mono text-[#C89D66]">05</span>
              <span aria-hidden="true">·</span>
              <span className="tracking-wider font-medium text-[#D1D5DB]">
                HOW WE WORK
              </span>
            </div>
            <h2
              id="process-heading"
              className="font-display font-extrabold text-white tracking-tight leading-[1.06]"
              style={{
                fontSize: 'clamp(2rem, 3.6vw, 3.35rem)',
                textWrap: 'balance',
              }}
            >
              A CLEARER PATH TO A BETTER ROOF.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="self-start md:self-end px-5 py-2.5 text-xs font-semibold tracking-[0.1em] text-white bg-white/[0.06] hover:bg-[#F4F5F7] hover:text-[#0B0C0E] border border-white/15 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            START STEP 01 — CONSULTATION
          </button>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-white/15"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-8 lg:pl-0 border-l border-white/15 lg:border-l-0"
                >
                  {/* Step Marker Node */}
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    aria-pressed={isSelected}
                    className="w-full text-left group cursor-pointer focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className={` -ml-[41px] lg:ml-0 inline-flex items-center justify-center w-12 h-12 rounded-sm font-mono text-xs font-semibold border transition-colors duration-200 ${
                          isSelected
                            ? 'bg-[#C89D66] text-[#0B0C0E] border-[#C89D66]'
                            : 'bg-[#12151B] text-white border-white/20 group-hover:border-[#C89D66]'
                        }`}
                      >
                        {step.number}
                      </span>
                      <span className="font-mono text-xs text-[#8E95A5] lg:hidden">
                        STEP {step.number}
                      </span>
                    </div>

                    <div
                      className={`p-6 rounded-sm border transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#141820] border-white/25'
                          : 'bg-[#111318]/70 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <p className="font-mono text-xs text-[#C89D66] mb-2">
                        {step.number} — {step.title}
                      </p>
                      <h3 className="font-display text-lg font-bold text-white mb-4 leading-snug">
                        {step.description}
                      </h3>

                      <ul className="space-y-2 pt-4 border-t border-white/10">
                        {step.deliverables.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-xs text-[#B8BFC9] leading-relaxed flex items-start gap-2"
                          >
                            <span className="font-mono text-[#C89D66] shrink-0">·</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
