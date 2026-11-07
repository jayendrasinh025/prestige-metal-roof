import React from 'react';
import { Sun, Moon, ArrowDown, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TimeOfDay, BRAND_INFO } from '../data/roofingData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  timeOfDay: TimeOfDay;
  onToggleTimeOfDay: (mode: TimeOfDay) => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  timeOfDay,
  onToggleTimeOfDay,
  onNavigate,
}) => {
  const isMorning = timeOfDay === 'morning';

  return (
    <section
      id="home"
      aria-label="Prestige Metal Roof Hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-[#08090C] pt-24 pb-10 md:pt-28 md:pb-12 select-none"
    >
      {/* =====================================================================
          MULTI-LAYER PHOTOGRAPHIC & ATMOSPHERIC ENVIRONMENT (MORNING vs NIGHT)
         ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* MORNING PHOTOGRAPHIC STATE */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMorning ? 1 : 0,
            scale: isMorning ? 1.02 : 1.07,
          }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <ResilientImage
            src="/assets/aistudio/IMG_20261106_235621_af019959.jpg"
            alt="Contemporary stone and brick residence with a gleaming dark architectural metal roof under morning sunlight"
            className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.08] saturate-[0.92]"
          />
          {/* Warm Morning Sunlight Cast from Upper Right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 82% 16%, rgba(253, 224, 171, 0.34) 0%, rgba(217, 155, 82, 0.16) 32%, rgba(12, 15, 20, 0.55) 72%, rgba(9, 11, 15, 0.88) 100%)',
            }}
          />
          {/* Morning Specular Roof Sheen */}
          <div
            className="absolute inset-0 mix-blend-screen opacity-60"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,244,214,0.22) 0%, rgba(255,255,255,0.06) 38%, transparent 65%)',
            }}
          />
        </motion.div>

        {/* NIGHT PHOTOGRAPHIC STATE */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMorning ? 0 : 1,
            scale: isMorning ? 1.06 : 1.01,
          }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Base architectural structure graded for deep blue-grey nocturnal atmosphere */}
          <ResilientImage
            src="/assets/aistudio/IMG_20261106_235621_af019959.jpg"
            alt="Architectural metal roof residence at night with dramatic exterior lighting and moonlight reflections"
            className="w-full h-full object-cover object-center brightness-[0.36] contrast-[1.28] saturate-[0.55] hue-rotate-[195deg]"
          />
          {/* Secondary Night Winter/Moonlight Texture Layer */}
          <div className="absolute inset-0 opacity-25 mix-blend-lighten">
            <ResilientImage
              src="/assets/aistudio/IMG_20261106_235606_b2dce2b7.jpg"
              alt="Moonlit metal roof profile texture"
              className="w-full h-full object-cover object-top brightness-50 contrast-125"
            />
          </div>
          {/* Deep Nocturnal Blue-Slate Environmental Wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 75% 14%, rgba(148, 184, 235, 0.16) 0%, rgba(15, 23, 42, 0.72) 48%, rgba(6, 9, 15, 0.94) 100%)',
            }}
          />
          {/* Warm Architectural Exterior Soffit & Window Illumination Glows */}
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{
              background:
                'radial-gradient(260px 180px at 56% 52%, rgba(245, 166, 70, 0.38) 0%, transparent 75%), radial-gradient(220px 150px at 36% 54%, rgba(245, 158, 60, 0.30) 0%, transparent 70%), radial-gradient(320px 180px at 22% 72%, rgba(251, 191, 100, 0.24) 0%, transparent 75%)',
            }}
          />
          {/* Subtle Metallic Moonlight Ridge Reflection */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(165deg, rgba(186, 214, 247, 0.14) 0%, transparent 42%, rgba(8, 11, 18, 0.85) 100%)',
            }}
          />
        </motion.div>

        {/* =====================================================================
            ATMOSPHERIC FOG & ENVIRONMENTAL DEPTH LAYERS (MORNING & NIGHT)
           ===================================================================== */}
        {/* Layer 1: High Horizon Mist */}
        <div
          className={`absolute -inset-x-20 top-[12%] h-[420px] pointer-events-none transition-opacity duration-1000 animate-fog-slow ${
            isMorning ? 'opacity-65' : 'opacity-35'
          }`}
          style={{
            background: isMorning
              ? 'radial-gradient(ellipse 65% 45% at 62% 45%, rgba(241, 238, 230, 0.28) 0%, rgba(214, 220, 228, 0.12) 48%, transparent 78%)'
              : 'radial-gradient(ellipse 65% 45% at 58% 45%, rgba(110, 136, 175, 0.22) 0%, rgba(30, 41, 59, 0.12) 50%, transparent 78%)',
            filter: 'blur(36px)',
          }}
        />

        {/* Layer 2: Drifting Roofline Fog Bank */}
        <div
          className={`absolute -inset-x-24 bottom-[8%] h-[360px] pointer-events-none transition-opacity duration-1000 animate-fog-reverse ${
            isMorning ? 'opacity-75' : 'opacity-45'
          }`}
          style={{
            background: isMorning
              ? 'radial-gradient(ellipse 70% 50% at 40% 60%, rgba(235, 230, 220, 0.25) 0%, rgba(180, 190, 204, 0.10) 55%, transparent 82%)'
              : 'radial-gradient(ellipse 70% 50% at 42% 60%, rgba(71, 95, 130, 0.24) 0%, rgba(15, 23, 38, 0.16) 55%, transparent 82%)',
            filter: 'blur(42px)',
          }}
        />

        {/* Measured Contrast Scrim for Guaranteed WCAG AA Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/92 via-[#08090C]/68 to-[#08090C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/35 to-transparent" />
      </div>

      {/* =====================================================================
          TOP HERO CONTROL BAR: ATMOSPHERIC TOGGLE & ENVIRONMENT INDICATOR
         ===================================================================== */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 pt-2 sm:pt-4 flex flex-wrap items-center justify-between gap-4">
        {/* Clean unboxed architectural metadata */}
        <div className="flex items-center gap-2.5 text-xs tracking-wider text-[#D1D5DB]">
          <span className="font-medium text-white">ARCHITECTURAL METAL ROOFING</span>
          <span aria-hidden="true" className="text-[#C89D66]">·</span>
          <span className="text-[#9CA3AF]">RESIDENTIAL &amp; COMMERCIAL</span>
        </div>

        {/* Interactive Morning / Night Glass-Effect Toggle */}
        <div
          role="group"
          aria-label="Hero Atmospheric Lighting Mode"
          className="inline-flex items-center p-1 rounded-sm bg-black/55 backdrop-blur-md border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        >
          <button
            type="button"
            onClick={() => onToggleTimeOfDay('morning')}
            aria-pressed={isMorning}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] rounded-xs transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              isMorning
                ? 'bg-[#F4F5F7] text-[#0B0C0E] shadow-sm'
                : 'text-[#B8BFC9] hover:text-white'
            }`}
          >
            <Sun className={`w-3.5 h-3.5 ${isMorning ? 'text-[#B87D3B]' : 'text-[#9CA3AF]'}`} />
            <span>MORNING</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleTimeOfDay('night')}
            aria-pressed={!isMorning}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] rounded-xs transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              !isMorning
                ? 'bg-[#1E293B] text-white border border-white/20 shadow-sm'
                : 'text-[#B8BFC9] hover:text-white'
            }`}
          >
            <Moon className={`w-3.5 h-3.5 ${!isMorning ? 'text-[#93C5FD]' : 'text-[#9CA3AF]'}`} />
            <span>NIGHT</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          MAIN HERO EDITORIAL CONTENT & ARCHITECTURAL DETAIL CARD
         ===================================================================== */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: Primary Editorial Headline & Conversion CTAs */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs sm:text-sm font-mono tracking-[0.14em] text-[#C89D66] mb-4">
                {isMorning
                  ? '06:45 AM · MORNING FOG & SOLAR REFLECTANCE'
                  : '09:30 PM · NOCTURNAL WEATHER & THERMAL SHIELD'}
              </p>

              <h1
                className="font-display font-extrabold text-white tracking-tight leading-[1.03] mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.75rem)',
                  textWrap: 'balance',
                }}
              >
                BUILT TO PROTECT.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5E7EB] to-[#9CA3AF]">
                  DESIGNED TO LAST.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#D1D5DB] max-w-2xl leading-relaxed mb-9 font-normal">
                Premium metal roofing solutions that combine lasting protection,
                exceptional craftsmanship and architectural elegance.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-semibold tracking-[0.1em] text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                >
                  <span>GET A FREE ROOFING QUOTE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-semibold tracking-[0.1em] text-white bg-white/[0.06] hover:bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>EXPLORE OUR WORK</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Coordinated Atmospheric & Material Detail Glass Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/55 backdrop-blur-md border border-white/15 rounded-sm p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                <div>
                  <p className="text-xs font-mono text-[#9CA3AF]">
                    {isMorning ? 'DAYLIGHT INSPECTION' : 'EVENING ARCHITECTURAL VIEW'}
                  </p>
                  <h2 className="text-sm font-display font-bold text-white mt-0.5">
                    {isMorning
                      ? 'Precision Profile & Timber Strapping'
                      : 'All-Season Structural Protection'}
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#C89D66] shrink-0">
                  {isMorning ? 'MORNING' : 'NIGHT'}
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs mb-4 border border-white/10">
                <AnimatePresence mode="wait">
                  {isMorning ? (
                    <motion.div
                      key="morning-detail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="w-full h-full"
                    >
                      <ResilientImage
                        src="/assets/aistudio/strapping-C3gu0sM0_b9e8669c.jpeg"
                        alt="Close-up of matte metal roof panels installed over timber battens and breather membrane"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="night-detail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="w-full h-full relative"
                    >
                      <ResilientImage
                        src="/assets/aistudio/redrooftwo-CSqJMYfF_f5a353c1.jpeg"
                        alt="Multi-gable architectural metal roof at dusk"
                        className="w-full h-full object-cover brightness-75 contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/80 via-transparent to-[#090D16]/30" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                {isMorning
                  ? 'Engineered with breathable underlayment, 1×4 timber strapping, and high-tensile steel panels that reflect solar radiation and shed morning condensation.'
                  : 'Interlocking metal seams and custom-bent perimeter flashings guard your property through nocturnal storms, heavy snow loads, and freeze-thaw cycles.'}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-white hover:text-[#C89D66] transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89D66]" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-[#C89D66] hover:text-white transition-colors font-medium cursor-pointer"
                >
                  Inspect Assembly →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          BOTTOM HERO BAR & SUBTLE SCROLL INDICATOR
         ===================================================================== */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#9CA3AF]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-white font-medium">Services</span>
          <span aria-hidden="true">·</span>
          <span>Metal Roof Installation</span>
          <span aria-hidden="true">·</span>
          <span>Metal Roof Replacement</span>
          <span aria-hidden="true">·</span>
          <span>Metal Roof Repairs</span>
          <span aria-hidden="true">·</span>
          <span>Residential &amp; Commercial</span>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('about')}
          aria-label="Scroll to introduction section"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D1D5DB] hover:text-white transition-colors cursor-pointer group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C89D66] transition-transform duration-200 group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};
