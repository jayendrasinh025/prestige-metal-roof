import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_LIST } from '../data/roofingData';
import { ResilientImage } from './ResilientImage';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 bg-[#0E1015] border-b border-white/[0.08]"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
              <span className="font-mono text-[#C89D66]">02</span>
              <span aria-hidden="true">·</span>
              <span className="tracking-wider font-medium text-[#D1D5DB]">
                CORE CAPABILITIES
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-display font-extrabold text-white tracking-tight leading-[1.06]"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              ROOFING SOLUTIONS.
              <br />
              <span className="text-[#9CA3AF]">BUILT AROUND YOU.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#B8BFC9] max-w-md leading-relaxed">
            Tailored metal roofing installations, full roof replacements, and targeted
            repairs executed with architectural precision.
          </p>
        </div>

        {/* Editorial Alternating Service Chapters */}
        <div className="divide-y divide-white/10">
          {SERVICES_LIST.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 md:py-16 first:pt-0 last:pb-0 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Editorial Copy Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-sm font-semibold text-[#C89D66]">
                          {service.number} — {service.title}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                        {service.description}
                      </h3>

                      <p className="text-sm sm:text-base text-[#B8BFC9] leading-relaxed mb-6">
                        {service.extendedDetails}
                      </p>

                      {/* Clean unboxed specification points */}
                      <ul className="space-y-2.5 border-t border-white/10 pt-5 mb-8">
                        {service.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#D1D5DB]"
                          >
                            <span className="font-mono text-[#C89D66] shrink-0">
                              0{i + 1}.
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => onSelectServiceForQuote(service.formServiceValue)}
                        className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold tracking-[0.1em] text-white bg-white/[0.06] hover:bg-[#F4F5F7] hover:text-[#0B0C0E] border border-white/15 rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>REQUEST {service.title} QUOTE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Large Architectural Photograph Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 bg-[#12151B]">
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-[#D1D5DB]">
                        <span className="font-medium text-white">{service.caption}</span>
                        <span className="font-mono text-[#C89D66]">{service.number} / 04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
