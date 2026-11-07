import React, { useState, useEffect } from 'react';
import { Phone, Mail, Globe, Check, Copy, ExternalLink, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/roofingData';

interface QuoteFormProps {
  preselectedService: string | null;
  preselectedProject: string | null;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'Residential' | 'Commercial';
  serviceRequired: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceRequired?: string;
  projectDescription?: string;
}

const SERVICE_OPTIONS = [
  'Metal Roof Installation',
  'Metal Roof Replacement',
  'Metal Roof Repairs',
  'Residential Roofing',
  'Commercial Roofing',
];

export const QuoteForm: React.FC<QuoteFormProps> = ({
  preselectedService,
  preselectedProject,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceRequired: 'Metal Roof Installation',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [preparedEnquiry, setPreparedEnquiry] = useState<{
    subject: string;
    body: string;
    mailtoHref: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService && SERVICE_OPTIONS.includes(preselectedService)) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: preselectedService,
        propertyType:
          preselectedService === 'Commercial Roofing' ? 'Commercial' : prev.propertyType,
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedProject) {
      setFormData((prev) => {
        const prefix = `Reference Project: ${preselectedProject}\n`;
        if (prev.projectDescription.includes(preselectedProject)) return prev;
        return {
          ...prev,
          projectDescription: prefix + prev.projectDescription,
        };
      });
    }
  }, [preselectedProject]);

  const validate = (data: FormState): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const digitsOnly = data.phone.replace(/\D/g, '');
    if (!data.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      newErrors.phone = 'Please enter a valid 10-digit phone number (e.g. +1 647 621 3760).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!data.serviceRequired) {
      newErrors.serviceRequired = 'Please select a required roofing service.';
    }

    if (!data.projectDescription.trim() || data.projectDescription.trim().length < 12) {
      newErrors.projectDescription =
        'Please provide a brief description of your roof or project requirements (at least 12 characters).';
    }

    return newErrors;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    const updated = { ...formData, [field]: value } as FormState;
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      serviceRequired: true,
      projectDescription: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const subject = `Roofing Quote Request: ${formData.serviceRequired} (${formData.propertyType}) - ${formData.fullName.trim()}`;
    const bodyLines = [
      'PRESTIGE METAL ROOF — QUOTE ENQUIRY',
      '----------------------------------------',
      `Full Name: ${formData.fullName.trim()}`,
      `Phone Number: ${formData.phone.trim()}`,
      `Email Address: ${formData.email.trim()}`,
      `Property Type: ${formData.propertyType}`,
      `Service Required: ${formData.serviceRequired}`,
      '',
      'Project Description:',
      formData.projectDescription.trim(),
      '----------------------------------------',
    ];
    const body = bodyLines.join('\n');
    const mailtoHref = `mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const payload = {
      subject,
      body,
      mailtoHref,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    try {
      localStorage.setItem('prestige_last_quote_enquiry', JSON.stringify({ ...formData, ...payload }));
    } catch {
      // Ignore storage quota errors
    }

    setPreparedEnquiry(payload);
  };

  const handleCopyBrief = async () => {
    if (!preparedEnquiry) return;
    try {
      await navigator.clipboard.writeText(preparedEnquiry.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API restricted
    }
  };

  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="py-24 md:py-32 bg-[#0E1015] border-b border-white/[0.08]"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Lead & Direct Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
              <span className="font-mono text-[#C89D66]">06</span>
              <span aria-hidden="true">·</span>
              <span className="tracking-wider font-medium text-[#D1D5DB]">
                PROJECT ENQUIRY
              </span>
            </div>

            <h2
              id="quote-heading"
              className="font-display font-extrabold text-white tracking-tight leading-[1.06] mb-5"
              style={{
                fontSize: 'clamp(2rem, 3.6vw, 3.25rem)',
                textWrap: 'balance',
              }}
            >
              LET&apos;S TALK ABOUT YOUR ROOF.
            </h2>

            <p className="text-base text-[#B8BFC9] leading-relaxed mb-10">
              Tell us a little about your roofing project. Our team will be ready to
              discuss your requirements.
            </p>

            {/* Direct Contact Specifications */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-xs font-mono text-[#8E95A5] mb-1.5">
                  DIRECT TELEPHONE
                </p>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-3 text-lg sm:text-xl font-display font-bold text-white hover:text-[#C89D66] transition-colors font-mono"
                >
                  <Phone className="w-4 h-4 text-[#C89D66]" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-[#8E95A5] mb-1.5">
                  EMAIL ENQUIRIES
                </p>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="inline-flex items-center gap-3 text-base font-medium text-white hover:text-[#C89D66] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#C89D66] shrink-0" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-[#8E95A5] mb-1.5">
                  OFFICIAL WEBSITE
                </p>
                <a
                  href={BRAND_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-mono text-[#D1D5DB] hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#C89D66] shrink-0" />
                  <span>prestigemetalroof.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#12151B] border border-white/10 rounded-sm p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="quote-fullName"
                    className="block text-xs font-mono tracking-wider text-[#D1D5DB] mb-2"
                  >
                    FULL NAME <span className="text-[#C89D66]">*</span>
                  </label>
                  <input
                    id="quote-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onBlur={() => handleBlur('fullName')}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(touched.fullName && errors.fullName)}
                    className={`w-full px-4 py-3 text-sm text-white bg-[#0B0C0E] border rounded-sm placeholder:text-[#6B7280] focus:outline-none transition-colors ${
                      touched.fullName && errors.fullName
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/15 focus:border-[#C89D66]'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-xs font-mono tracking-wider text-[#D1D5DB] mb-2"
                  >
                    PHONE NUMBER <span className="text-[#C89D66]">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder="+1 647 000 0000"
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    className={`w-full px-4 py-3 text-sm text-white bg-[#0B0C0E] border rounded-sm placeholder:text-[#6B7280] focus:outline-none transition-colors font-mono ${
                      touched.phone && errors.phone
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/15 focus:border-[#C89D66]'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="quote-email"
                    className="block text-xs font-mono tracking-wider text-[#D1D5DB] mb-2"
                  >
                    EMAIL ADDRESS <span className="text-[#C89D66]">*</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    className={`w-full px-4 py-3 text-sm text-white bg-[#0B0C0E] border rounded-sm placeholder:text-[#6B7280] focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/15 focus:border-[#C89D66]'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Property Type */}
                <div>
                  <span className="block text-xs font-mono tracking-wider text-[#D1D5DB] mb-2">
                    PROPERTY TYPE <span className="text-[#C89D66]">*</span>
                  </span>
                  <div
                    role="radiogroup"
                    aria-label="Property Type"
                    className="grid grid-cols-2 gap-2 p-1 bg-[#0B0C0E] border border-white/15 rounded-sm h-[46px]"
                  >
                    {(['Residential', 'Commercial'] as const).map((type) => {
                      const active = formData.propertyType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => handleChange('propertyType', type)}
                          className={`text-xs font-semibold rounded-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                            active
                              ? 'bg-[#F4F5F7] text-[#0B0C0E]'
                              : 'text-[#9CA3AF] hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label
                  htmlFor="quote-service"
                  className="block text-xs font-mono tracking-wider text-[#D1D5DB] mb-2"
                >
                  SERVICE REQUIRED <span className="text-[#C89D66]">*</span>
                </label>
                <select
                  id="quote-service"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={(e) => handleChange('serviceRequired', e.target.value)}
                  onBlur={() => handleBlur('serviceRequired')}
                  className="w-full px-4 py-3 text-sm text-white bg-[#0B0C0E] border border-white/15 rounded-sm focus:outline-none focus:border-[#C89D66] transition-colors"
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-[#0B0C0E] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="quote-description"
                  className="block text-xs font-mono tracking-wider text-[#D1D5DB] mb-2"
                >
                  PROJECT DESCRIPTION <span className="text-[#C89D66]">*</span>
                </label>
                <textarea
                  id="quote-description"
                  name="projectDescription"
                  rows={4}
                  required
                  value={formData.projectDescription}
                  onChange={(e) => handleChange('projectDescription', e.target.value)}
                  onBlur={() => handleBlur('projectDescription')}
                  placeholder="Share details about your roof, approximate size or stories, preferred metal colour, or any repair concerns..."
                  aria-invalid={Boolean(touched.projectDescription && errors.projectDescription)}
                  className={`w-full px-4 py-3 text-sm text-white bg-[#0B0C0E] border rounded-sm placeholder:text-[#6B7280] focus:outline-none transition-colors resize-y ${
                    touched.projectDescription && errors.projectDescription
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/15 focus:border-[#C89D66]'
                  }`}
                />
                {touched.projectDescription && errors.projectDescription && (
                  <p role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.projectDescription}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs sm:text-sm font-semibold tracking-[0.12em] text-[#0B0C0E] bg-[#F4F5F7] hover:bg-[#C89D66] rounded-sm transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
                >
                  REQUEST MY FREE QUOTE
                </button>
              </div>
            </form>

            {/* Transparent, Integration-Ready Direct Email Enquiry Dispatch Panel */}
            {preparedEnquiry && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-[#0B0C0E] border border-[#C89D66]/60 rounded-sm"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C89D66] shrink-0" />
                    <h3 className="text-sm font-display font-bold text-white">
                      Quote Enquiry Validated &amp; Ready to Send
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#9CA3AF]">
                    {preparedEnquiry.timestamp}
                  </span>
                </div>

                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-5">
                  Your project details have been formatted for direct delivery to{' '}
                  <span className="text-white font-medium">{BRAND_INFO.email}</span>.
                  Select your preferred dispatch method below or call{' '}
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="text-[#C89D66] underline hover:text-white font-mono"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                  .
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={preparedEnquiry.mailtoHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-[#0B0C0E] bg-[#C89D66] hover:bg-[#F4F5F7] rounded-sm transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>SEND VIA EMAIL CLIENT</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#C89D66]" />
                    <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY QUOTE BRIEF'}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
