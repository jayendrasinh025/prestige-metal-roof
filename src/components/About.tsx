import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ASSEMBLY_LAYERS } from '../data/roofingData';
import { ResilientImage } from './ResilientImage';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [activeLayerId, setActiveLayerId] = useState<string>(ASSEMBLY_LAYERS[0].id);
  const [photoView, setPhotoView] = useState<'assembly' | 'finished'>('assembly');

  const activeLayer =
    ASSEMBLY_LAYERS.find((layer) => layer.id === activeLayerId) || ASSEMBLY_LAYERS[0];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 md:py-32 bg-[#0B0C0E] border-b border-white/[0.08]"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Kicker */}
        <div className="flex items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
            <span className="font-mono text-[#C89D66]">01</span>
            <span aria-hidden="true">·</span>
            <span className="tracking-wider font-medium text-[#D1D5DB]">
              ARCHITECTURAL PHILOSOPHY &amp; STRUCTURAL INTEGRITY
            </span>
          </div>
          <span className="hidden sm:inline text-xs font-mono text-[#8E95A5]">
            PRESTIGE METAL ROOF
          </span>
        </div>

        {/* Split Layout: Editorial Narrative Left, Architectural Photography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h2
                id="about-heading"
                className="font-display font-extrabold text-white tracking-tight leading-[1.06] mb-7"
                style={{
                  fontSize: 'clamp(2rem, 3.6vw, 3.25rem)',
                  textWrap: 'balance',
                }}
              >
                MORE THAN A ROOF.
                <br />
                <span className="text-[#9CA3AF]">A LONG-TERM INVESTMENT.</span>
              </h2>

              <div className="space-y-5 text-[#D1D5DB] text-base leading-relaxed max-w-[65ch]">
                <p>
                  A roof defines both the structural security and the architectural character
                  of your property. While conventional roofing materials gradually degrade
                  under seasonal temperature swings, heavy precipitation, and ultraviolet
                  exposure, a properly engineered metal roof is built for enduring performance.
                </p>
                <p>
                  At Prestige Metal Roof, we approach every roofline as a complete structural
                  envelope. By combining breathable underlayment membranes, precision-leveled
                  timber strapping, and custom-formed steel panels, we deliver a roofing system
                  that protects your property while elevating its exterior presence.
                </p>
              </div>
            </div>

            {/* Interactive 4-Layer Structural Anatomy Explorer */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#C89D66]">
                  INTERACTIVE ROOF ASSEMBLY SPECIFICATION
                </span>
                <span className="text-xs text-[#8E95A5]">Select a layer to inspect</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {ASSEMBLY_LAYERS.map((layer) => {
                  const isSelected = layer.id === activeLayerId;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setActiveLayerId(layer.id)}
                      className={`text-left p-3 rounded-sm border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#171A21] border-[#C89D66] text-white'
                          : 'bg-[#111318]/70 border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                      }`}
                    >
                      <span className="block font-mono text-xs text-[#C89D66] mb-1">
                        {layer.index}
                      </span>
                      <span className="block text-xs font-semibold leading-snug line-clamp-2">
                        {layer.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Layer Detail Box */}
              <div className="p-5 bg-[#12151B] border border-white/10 rounded-sm">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-base font-display font-bold text-white">
                    {activeLayer.index}. {activeLayer.name}
                  </h3>
                </div>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-3">
                  {activeLayer.description}
                </p>
                <p className="text-xs font-mono text-[#9CA3AF]">
                  {activeLayer.technicalNote}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Architectural Metal-Roof Photograph with View Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 min-h-[420px] sm:min-h-[520px] w-full overflow-hidden rounded-sm border border-white/10 bg-[#12151B] group">
              {photoView === 'assembly' ? (
                <ResilientImage
                  src="/assets/aistudio/strapping-C3gu0sM0_b9e8669c.jpeg"
                  alt="Prestige Metal Roof installation craftsmanship showing matte black metal panels over timber battens and Topdach 150 breather membrane"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <ResilientImage
                  src="/assets/aistudio/redrooftwo-CSqJMYfF_f5a353c1.jpeg"
                  alt="Completed multi-gable brick home with architectural crimson metal roof"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}

              {/* Subtle bottom gradient for caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Top-Right View Mode Switcher */}
              <div className="absolute top-4 right-4 z-10 inline-flex p-1 bg-black/65 backdrop-blur-md border border-white/15 rounded-sm">
                <button
                  type="button"
                  onClick={() => setPhotoView('assembly')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    photoView === 'assembly'
                      ? 'bg-[#F4F5F7] text-[#0B0C0E]'
                      : 'text-[#D1D5DB] hover:text-white'
                  }`}
                >
                  Sub-Roof Craftsmanship
                </button>
                <button
                  type="button"
                  onClick={() => setPhotoView('finished')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    photoView === 'finished'
                      ? 'bg-[#F4F5F7] text-[#0B0C0E]'
                      : 'text-[#D1D5DB] hover:text-white'
                  }`}
                >
                  Completed Exterior
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-[#C89D66] mb-1">
                    {photoView === 'assembly'
                      ? 'GENUINE INSTALLATION DETAIL · STRAPPING & MEMBRANE'
                      : 'COMPLETED ARCHITECTURAL PROFILE · MULTI-GABLE ESTATE'}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white max-w-md">
                    {photoView === 'assembly'
                      ? 'Precision 1×4 timber batten grid over breather membrane prior to interlocking steel panel completion.'
                      : 'Cohesive roofline transformation combining steep gables, porch canopies, and custom perimeter trim.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-4 py-2.5 text-xs font-semibold tracking-wider text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  DISCUSS YOUR PROPERTY
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
