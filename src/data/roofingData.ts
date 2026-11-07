export type TimeOfDay = 'morning' | 'night';

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  formServiceValue: string;
  description: string;
  extendedDetails: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'charcoal' | 'architectural-red' | 'craftsmanship';
  categoryLabel: string;
  location: string;
  roofProfile: string;
  propertyType: string;
  image: string;
  aspectClass: string;
  gridSpanClass: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface AssemblyLayer {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  description: string;
  technicalNote: string;
}

export const BRAND_INFO = {
  name: 'Prestige Metal Roof',
  website: 'https://prestigemetalroof.com/',
  email: 'prestigemetalroof@gmail.com',
  phoneDisplay: '+1 647 621 3760',
  phoneHref: 'tel:+16476213760',
  instagramUrl: 'https://www.instagram.com/',
  primaryCta: 'FREE ROOFING QUOTE',
};

export const ASSEMBLY_LAYERS: AssemblyLayer[] = [
  {
    id: 'steel-profile',
    index: '01',
    name: 'Precision-Formed Architectural Metal Panels',
    subtitle: 'Exterior Weather Shield',
    description:
      'High-tensile profiled steel panels engineered to shed rain, snow, and ice while resisting wind uplift and seasonal thermal expansion.',
    technicalNote: 'Interlocking seam geometry · Concealed or weather-sealed fastening system',
  },
  {
    id: 'strapping-grid',
    index: '02',
    name: 'Kiln-Dried Timber Strapping & Batten Grid',
    subtitle: 'Structural Leveling & Thermal Air Cavity',
    description:
      'Horizontal and vertical timber battens create a dead-level fastening plane and a continuous sub-roof ventilation channel that reduces heat transfer.',
    technicalNote: '1×4 structural strapping · Continuous airflow corridor beneath metal panels',
  },
  {
    id: 'breather-membrane',
    index: '03',
    name: 'High-Permeability Breather Roofing Membrane',
    subtitle: 'Secondary Moisture Barrier',
    description:
      'Specialized vapour-permeable underlayment membrane (such as Topdach 150) blocks liquid water infiltration while allowing internal moisture vapour to escape.',
    technicalNote: 'Hydrophobic outer protection · High vapour permeability rating',
  },
  {
    id: 'perimeter-flashing',
    index: '04',
    name: 'Custom Ridge, Valley & Eave Flashings',
    subtitle: 'Architectural Edge Detailing',
    description:
      'Bespoke-bent metal flashings, snow guards, and vented ridge caps seal every roof transition, dormer, skylight, and fascia edge.',
    technicalNote: 'Custom brake-formed transitions · Integrated snow-retention hardware',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    id: 'metal-roof-installation',
    title: 'METAL ROOF INSTALLATION',
    formServiceValue: 'Metal Roof Installation',
    description:
      'Precision installation designed to bring lasting protection and a refined architectural finish to your property.',
    extendedDetails:
      'Every installation begins with meticulous deck preparation, breathable synthetic underlayment, precision-leveled timber strapping, and custom-fitted metal panels tailored to your roofline geometry.',
    highlights: [
      'Breathable underlayment & timber batten air gap',
      'Custom-formed valley, hip, and ridge flashings',
      'Clean jobsite management and thorough magnetic sweep',
    ],
    image: '/assets/aistudio/strapping-C3gu0sM0_b9e8669c.jpeg',
    imageAlt:
      'Close-up of Prestige Metal Roof installation showing dark matte metal panels over wooden strapping and Topdach 150 breather membrane',
    caption: 'Precision Batten Strapping & Breather Membrane Assembly',
  },
  {
    number: '02',
    id: 'metal-roof-replacement',
    title: 'METAL ROOF REPLACEMENT',
    formServiceValue: 'Metal Roof Replacement',
    description:
      'Upgrade your existing roof with a modern metal roofing solution built for durability and visual appeal.',
    extendedDetails:
      'Transition from aging asphalt shingles to a permanent architectural metal roof. We inspect the underlying structure, install a high-performance moisture barrier, and transform the exterior character of your home.',
    highlights: [
      'Complete transition from deteriorating shingle systems',
      'Enhanced curb appeal in charcoal, slate, espresso, or crimson profiles',
      'Integrated snow-guard retention and ventilation upgrades',
    ],
    image: '/assets/aistudio/IMG_20261106_235704_08cba01b.jpg',
    imageAlt: 'Two-story brick residence upgraded with an architectural espresso metal roof',
    caption: 'Full Residential Metal Roof Upgrade',
  },
  {
    number: '03',
    id: 'metal-roof-repairs',
    title: 'METAL ROOF REPAIRS',
    formServiceValue: 'Metal Roof Repairs',
    description:
      'Professional roofing repair solutions to address damage and help protect your property.',
    extendedDetails:
      'Targeted diagnostics and restoration for metal roof assemblies, including flashing resealing, storm or impact remediation, fastener replacement, valley clearing, and snow-guard reinforcement.',
    highlights: [
      'Flashing, ridge cap, and chimney transition remediation',
      'Weatherproofing inspection and fastener restoration',
      'Winter ice and snow-load hardware adjustments',
    ],
    image: '/assets/aistudio/IMG_20261106_235606_b2dce2b7.jpg',
    imageAlt: 'Residential metal roof with snow guards performing in winter snow conditions',
    caption: 'All-Season Weather & Snow-Load Protection',
  },
  {
    number: '04',
    id: 'residential-commercial-roofing',
    title: 'RESIDENTIAL & COMMERCIAL ROOFING',
    formServiceValue: 'Residential Roofing',
    description:
      'Metal roofing solutions tailored to the needs of residential and commercial properties.',
    extendedDetails:
      'From custom single-family residences and multi-gable estates to commercial buildings, we configure panel profiles, gauges, and drainage details to suit the architectural and structural demands of your property.',
    highlights: [
      'Multi-gable residential estates & custom homes',
      'Commercial properties requiring low-maintenance protection',
      'Coordinated colour and profile selection for any facade',
    ],
    image: '/assets/aistudio/redrooftwo-CSqJMYfF_f5a353c1.jpeg',
    imageAlt: 'Large brick residence featuring a custom crimson multi-gable metal roof system',
    caption: 'Complex Multi-Gable Architectural Execution',
  },
];

export const VALUE_PROPOSITIONS = [
  {
    index: '01',
    title: 'Precision-Focused Workmanship',
    description:
      'From dead-level 1×4 timber strapping to hand-finished valley and dormer flashings, every seam and fastener is placed with disciplined architectural accuracy.',
    detail: 'Structured batten grid · Clean sightlines',
  },
  {
    index: '02',
    title: 'Durable Metal Roofing Solutions',
    description:
      'Engineered to withstand harsh Canadian winters, freeze-thaw cycles, heavy snow loads, and driving rain without curling, cracking, or granule loss.',
    detail: 'All-season resilience · High wind & snow resistance',
  },
  {
    index: '03',
    title: 'Attention to Architectural Details',
    description:
      'Complex rooflines, bay window accents, wrap-around porches, and steep gables are finished with cohesive trim work that elevates the entire facade.',
    detail: 'Custom-bent trim · Cohesive exterior harmony',
  },
  {
    index: '04',
    title: 'Professional Service',
    description:
      'Clear communication from your initial consultation through project execution, with dedicated on-site crews and respectful property protection.',
    detail: 'Transparent scope · Dedicated on-site fleet',
  },
  {
    index: '05',
    title: 'Residential & Commercial Applications',
    description:
      'Versatile metal roofing systems tailored for detached family homes, bungalows, custom estates, and commercial buildings.',
    detail: 'Tailored specifications · Residential & commercial scale',
  },
];

export const PROJECT_GALLERY: ProjectItem[] = [
  {
    id: 'mantis-rd-crimson-estate',
    title: 'Multi-Gable Brick Residence',
    category: 'architectural-red',
    categoryLabel: 'Architectural Red & Espresso',
    location: 'Greater Toronto Area, ON',
    roofProfile: 'Crimson Profiled Metal Tile System',
    propertyType: 'Residential Estate',
    image: '/assets/aistudio/redrooftwo-CSqJMYfF_f5a353c1.jpeg',
    aspectClass: 'aspect-[16/10]',
    gridSpanClass: 'md:col-span-8',
    description:
      'Complete metal roof installation across a complex multi-gable two-story brick residence, including custom porch canopy integration and bay-window roof detailing.',
  },
  {
    id: 'timber-strapping-assembly',
    title: 'Breather Membrane & Strapping Grid',
    category: 'craftsmanship',
    categoryLabel: 'Installation & Fleet',
    location: 'On-Site Installation Detail',
    roofProfile: 'Matte Charcoal Profile over Topdach 150 Membrane',
    propertyType: 'Structural Assembly',
    image: '/assets/aistudio/strapping-C3gu0sM0_b9e8669c.jpeg',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'md:col-span-4',
    description:
      'Exposed stage inspection showcasing Topdach 150 breather roofing membrane, precision-spaced 1×4 timber battens, and interlocking matte charcoal metal panels.',
  },
  {
    id: 'stone-gable-obsidian',
    title: 'Contemporary Stone & Brick Residence',
    category: 'charcoal',
    categoryLabel: 'Charcoal & Slate',
    location: 'Ontario',
    roofProfile: 'Obsidian Black Profiled Metal Roof',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235621_af019959.jpg',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'md:col-span-5',
    description:
      'High-contrast obsidian metal roof paired with natural stone and grey brickwork, complete with lower porch canopy and integrated snow guards.',
  },
  {
    id: 'brick-manor-espresso',
    title: 'Red-Brick Residence & Wrap-Around Canopy',
    category: 'architectural-red',
    categoryLabel: 'Architectural Red & Espresso',
    location: 'Ontario',
    roofProfile: 'Deep Espresso Architectural Metal',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235704_08cba01b.jpg',
    aspectClass: 'aspect-[16/10]',
    gridSpanClass: 'md:col-span-7',
    description:
      'Warm espresso metal roof harmonizing with classic variegated red brickwork, featuring a continuous lower garage and entryway roof transition.',
  },
  {
    id: 'ajax-slate-residence-13',
    title: 'Ajax Double-Garage Brick Home',
    category: 'charcoal',
    categoryLabel: 'Charcoal & Slate',
    location: 'Ajax, ON',
    roofProfile: 'Graphite Slate Metal System',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235716_7b321437.jpg',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'md:col-span-4',
    description:
      'Full roof replacement in Ajax, Ontario featuring multi-level hipped rooflines and two-tier snow-retention bars along upper and lower eaves.',
  },
  {
    id: 'maple-charcoal-residence',
    title: 'Maple Arch-Window Brick Residence',
    category: 'charcoal',
    categoryLabel: 'Charcoal & Slate',
    location: 'Maple, ON',
    roofProfile: 'Matte Charcoal Metal Roof',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235728_e2f4f64d.jpg',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'md:col-span-4',
    description:
      'Precision metal roofing project in Maple, Ontario with custom portico gable detailing and crisp white fascia alignment.',
  },
  {
    id: 'winter-snow-guard-performance',
    title: 'Winter Snow-Load & Dormer Execution',
    category: 'craftsmanship',
    categoryLabel: 'Installation & Fleet',
    location: 'Ontario',
    roofProfile: 'Black Metal Roof with Snow Retention System',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235606_b2dce2b7.jpg',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'md:col-span-4',
    description:
      'Steep-slope black metal roof with integrated dormer and linear snow-retention guards demonstrating controlled winter snow management.',
  },
  {
    id: 'ajax-steep-gable-77',
    title: 'Ajax Steep-Gable Stone Entry Home',
    category: 'charcoal',
    categoryLabel: 'Charcoal & Slate',
    location: 'Ajax, ON',
    roofProfile: 'Deep Charcoal Metal Roof',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235814_dcffa24e.jpg',
    aspectClass: 'aspect-[16/10]',
    gridSpanClass: 'md:col-span-6',
    description:
      'High-pitched front gable and stone archway residence in Ajax finished with a deep charcoal metal roof system.',
  },
  {
    id: 'on-site-fleet-441',
    title: 'On-Site Execution & Dual-Gable Brick Home',
    category: 'craftsmanship',
    categoryLabel: 'Installation & Fleet',
    location: 'Ontario',
    roofProfile: 'Matte Black Profiled Metal Roof',
    propertyType: 'Residential',
    image: '/assets/aistudio/IMG_20261106_235831_ee854396.jpg',
    aspectClass: 'aspect-[16/10]',
    gridSpanClass: 'md:col-span-6',
    description:
      'Completed dual-gable red-brick residence with wrap-around porch and garage eyebrow roof, captured with the Prestige Metal Roof service fleet on site.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'INITIAL CONSULTATION',
    description: 'Discuss your roofing requirements and property.',
    deliverables: [
      'Review property type (residential or commercial) and architectural style',
      'Discuss roof age, current issues, and aesthetic preferences',
      'Answer initial questions regarding metal profiles and finishes',
    ],
  },
  {
    number: '02',
    title: 'PROJECT ASSESSMENT',
    description: 'Understand the scope of your roofing needs.',
    deliverables: [
      'Evaluate roof geometry, pitch, valleys, dormers, and ventilation',
      'Assess existing decking condition and flashing transitions',
      'Identify snow-retention and drainage requirements',
    ],
  },
  {
    number: '03',
    title: 'ROOFING SOLUTION',
    description: 'Determine the appropriate roofing approach.',
    deliverables: [
      'Recommend installation, full replacement, or targeted repair scope',
      'Select metal profile, colour finish, underlayment, and strapping plan',
      'Provide a clear, itemized roofing quote with no hidden surprises',
    ],
  },
  {
    number: '04',
    title: 'PROJECT EXECUTION',
    description: 'Move forward with the agreed roofing work.',
    deliverables: [
      'Coordinate material delivery and site protection protocols',
      'Execute membrane, timber strapping, panel installation, and custom trim',
      'Perform final walkthrough and thorough site cleanup',
    ],
  },
];
