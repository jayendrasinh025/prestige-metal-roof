import React, { useState } from 'react';
import { Phone, Mail, Globe, Instagram, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_INFO } from '../data/roofingData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectServiceForQuote: (serviceName: string) => void;
}

const FOOTER_SERVICES = [
  'Metal Roof Installation',
  'Metal Roof Replacement',
  'Metal Roof Repairs',
  'Residential Roofing',
  'Commercial Roofing',
];

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectServiceForQuote,
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#07080A] text-[#9CA3AF] pt-20 pb-12 border-t border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block font-display text-lg font-extrabold tracking-[0.14em] text-white mb-4"
            >
              PRESTIGE METAL ROOF
            </a>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm mb-6">
              Premium metal roofing solutions that combine lasting protection,
              exceptional craftsmanship and architectural elegance for residential
              and commercial properties.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prestige Metal Roof on Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#D1D5DB] hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-sm transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>Instagram</span>
              </a>
              <a
                href={BRAND_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prestige Metal Roof Official Website"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#D1D5DB] hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-sm transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>prestigemetalroof.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono tracking-wider text-white mb-5">
              NAVIGATION
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Our Projects', id: 'projects' },
                { label: 'Contact', id: 'quote' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono tracking-wider text-white mb-5">
              SERVICES
            </h3>
            <ul className="space-y-3 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service)}
                    className="text-left text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono tracking-wider text-white mb-5">
              CONTACT
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-xs font-mono text-[#6B7280] mb-1">
                  PHONE
                </span>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-white hover:text-[#C89D66] transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89D66]" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <span className="block text-xs font-mono text-[#6B7280] mb-1">
                  EMAIL
                </span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="inline-flex items-center gap-2 text-white hover:text-[#C89D66] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C89D66] shrink-0" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li>
                <span className="block text-xs font-mono text-[#6B7280] mb-1">
                  WEBSITE
                </span>
                <a
                  href={BRAND_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D1D5DB] hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C89D66] shrink-0" />
                  <span>https://prestigemetalroof.com/</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={legalModal === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLegalModal(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-[#111318] border border-white/15 rounded-sm p-6 sm:p-8 text-sm text-[#D1D5DB] max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <h2 className="font-display text-lg font-bold text-white">
                  {legalModal === 'privacy'
                    ? 'Privacy Policy — Prestige Metal Roof'
                    : 'Terms and Conditions — Prestige Metal Roof'}
                </h2>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  aria-label="Close legal notice"
                  className="p-2 text-[#9CA3AF] hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {legalModal === 'privacy' ? (
                <div className="space-y-4 leading-relaxed text-xs sm:text-sm">
                  <p>
                    Prestige Metal Roof respects your privacy. Information submitted
                    through our quote enquiry form—including your name, telephone
                    number, email address, property type, and project description—is
                    used solely to respond to your roofing enquiry and prepare a
                    project consultation.
                  </p>
                  <p>
                    We do not sell, rent, or distribute your personal contact
                    information to third-party marketers. For questions regarding your
                    enquiry records, contact us directly at{' '}
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-white underline"
                    >
                      {BRAND_INFO.email}
                    </a>{' '}
                    or {BRAND_INFO.phoneDisplay}.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 leading-relaxed text-xs sm:text-sm">
                  <p>
                    All roofing consultations, assessments, and project scopes
                    provided through this website are subject to an on-site property
                    inspection and written project agreement with Prestige Metal Roof.
                  </p>
                  <p>
                    Project photographs displayed on this website illustrate metal
                    roofing installations and architectural profiles. Specific panel
                    profiles, snow-retention hardware, and trim configurations are
                    determined during your formal project assessment.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
