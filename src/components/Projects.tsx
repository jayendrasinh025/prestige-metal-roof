import React, { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECT_GALLERY, ProjectItem } from '../data/roofingData';
import { ResilientImage } from './ResilientImage';

interface ProjectsProps {
  onRequestProjectQuote: (projectTitle: string) => void;
}

type FilterCategory = 'all' | 'charcoal' | 'architectural-red' | 'craftsmanship';

const FILTER_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'charcoal', label: 'Charcoal & Slate' },
  { id: 'architectural-red', label: 'Crimson & Espresso' },
  { id: 'craftsmanship', label: 'Installation & Fleet' },
];

export const Projects: React.FC<ProjectsProps> = ({ onRequestProjectQuote }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((item) => item.category === activeFilter);

  const selectedProject: ProjectItem | null =
    selectedProjectIndex !== null && filteredProjects[selectedProjectIndex]
      ? filteredProjects[selectedProjectIndex]
      : null;

  const handlePrev = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex(
      (selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length
    );
  }, [selectedProjectIndex, filteredProjects.length]);

  const handleNext = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
  }, [selectedProjectIndex, filteredProjects.length]);

  useEffect(() => {
    if (selectedProjectIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProjectIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex, handlePrev, handleNext]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 bg-[#0E1015] border-b border-white/[0.08]"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 mb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
              <span className="font-mono text-[#C89D66]">04</span>
              <span aria-hidden="true">·</span>
              <span className="tracking-wider font-medium text-[#D1D5DB]">
                PROJECT GALLERY
              </span>
            </div>
            <h2
              id="projects-heading"
              className="font-display font-extrabold text-white tracking-tight leading-[1.06]"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              BUILT WITH PRECISION.
              <br />
              <span className="text-[#9CA3AF]">MADE TO STAND OUT.</span>
            </h2>
          </div>

          {/* Interactive Filter Bar (Functional Segmented Buttons) */}
          <div
            role="tablist"
            aria-label="Filter projects by roof finish and stage"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#14171F] border border-white/10 rounded-sm self-start lg:self-end"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedProjectIndex(null);
                    setActiveFilter(tab.id);
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#F4F5F7] text-[#0B0C0E] font-semibold shadow-xs'
                      : 'text-[#B8BFC9] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            const spanClass =
              activeFilter === 'all' ? project.gridSpanClass : 'md:col-span-6';
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`${spanClass} group relative flex flex-col bg-[#12151B] border border-white/10 rounded-sm overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProjectIndex(idx)}
                  aria-label={`Inspect project: ${project.title}`}
                  className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89D66]"
                >
                  <ResilientImage
                    src={project.image}
                    alt={`${project.title} - ${project.roofProfile}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Expand Affordance Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xs bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#F4F5F7] group-hover:text-[#0B0C0E] transition-all duration-200">
                    <Expand className="w-4 h-4" />
                  </div>

                  {/* Card Footer Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    {/* Clean unboxed metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#D1D5DB] mb-1.5">
                      <span className="font-mono text-[#C89D66]">{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.roofProfile}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          FULLSCREEN LIGHTBOX MODAL
         ===================================================================== */}
      <AnimatePresence>
        {selectedProject && selectedProjectIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProjectIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#111318] border border-white/15 rounded-sm overflow-hidden shadow-2xl"
            >
              {/* Top Bar of Lightbox */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <span className="font-mono text-[#C89D66]">
                    0{selectedProjectIndex + 1} / 0{filteredProjects.length}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-white font-medium">{selectedProject.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.propertyType}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProjectIndex(null)}
                  aria-label="Close project viewer"
                  className="inline-flex items-center justify-center w-9 h-9 text-[#D1D5DB] hover:text-white bg-white/[0.06] hover:bg-white/[0.14] rounded-xs transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[16/10] max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />

                {/* Previous / Next Controls */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous project"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xs bg-black/70 hover:bg-[#F4F5F7] text-white hover:text-[#0B0C0E] border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next project"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xs bg-black/70 hover:bg-[#F4F5F7] text-white hover:text-[#0B0C0E] border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Project Details & Quote CTA */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#111318] border-t border-white/10">
                <div className="max-w-2xl">
                  <p className="text-xs font-mono text-[#C89D66] mb-1">
                    {selectedProject.roofProfile}
                  </p>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#B8BFC9] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProjectIndex(null);
                    onRequestProjectQuote(title);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.1em] text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>INQUIRE ABOUT SIMILAR ROOF</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
