import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_INFO } from '../data/roofingData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Our Projects', id: 'projects' },
  { label: 'Contact', id: 'quote' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);

      const sections = ['home', 'about', 'services', 'projects', 'quote'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.45)]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="font-display text-base sm:text-lg font-extrabold tracking-[0.14em] text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89D66]"
        >
          PRESTIGE METAL ROOF
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#D1D5DB]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89D66] ${
                  isActive ? 'text-white' : 'text-[#B8BFC9]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#C89D66] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'quote')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.1em] text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] hover:text-[#0B0C0E] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89D66]"
          >
            {BRAND_INFO.primaryCta}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-white hover:text-[#C89D66] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89D66]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0E1015]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`py-3.5 text-base font-medium border-b border-white/[0.06] flex items-center justify-between transition-colors ${
                    activeSection === link.id ? 'text-[#C89D66]' : 'text-[#F4F5F7] hover:text-[#C89D66]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#8E95A5]">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, 'quote')}
                className="w-full py-3.5 px-5 text-xs font-semibold tracking-[0.12em] text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] rounded-sm transition-colors text-center"
              >
                {BRAND_INFO.primaryCta}
              </button>
              <div className="flex items-center justify-between text-xs text-[#9CA3AF] pt-2">
                <a href={BRAND_INFO.phoneHref} className="hover:text-white transition-colors font-mono">
                  {BRAND_INFO.phoneDisplay}
                </a>
                <span>·</span>
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
