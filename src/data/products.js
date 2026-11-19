export const productsData = [
  {
    slug: 'easy-evenness-tester',
    name: 'easy Evenness Tester',
    code: 'TMS-EASY',
    category: 'Laboratory Solutions',
    categorySlug: 'laboratory',
    tagline: 'High-Precision Capacitive & Optical Evenness Testing for Yarn, Roving, and Sliver',
    badge: 'Flagship Metrology System',
    description: 'The Tomsic "easy" Evenness Tester is an internationally recognized quality control system designed to measure the mass variation, evenness, and surface imperfection of yarn, roving, and sliver. Operating on capacitive principles with optional optical hairiness measurement, it matches international industry reference standards while providing an exceptionally simple 3-click user interface and modular architecture.',
    primaryImage: '/assets/easy-evenness-tester.jpg',
    gallery: [
      { url: '/assets/easy-evenness-tester.jpg', title: 'easy Evenness Tester System with 24-Position Creel' },
      { url: '/assets/easy-sensor-detail.jpg', title: 'Capacitive Measuring Slot & Tension Control' },
      { url: '/assets/easy-chassis.jpg', title: 'Modular Hardware Chassis & Drive System' },
      { url: '/assets/easy-creel.jpg', title: '24-Position Automatic Yarn Changer (Autochanger)' },
      { url: '/assets/easy-autofeeder.jpg', title: 'AutoFeeder Tension-Free Sliver Delivery System' }
    ],
    features: [
      {
        title: 'Full International Standard Alignment',
        description: 'Numerical and graphical results (spectrograms, variance-length curves, 3D diagrams) align precisely with worldwide textile standards. Approved and operated by world-leading textile houses including Ermenegildo Zegna and Botto Giuseppe.'
      },
      {
        title: '3-Click Software Workflow',
        description: 'Operated via Microsoft .NET technology on standard commercial PCs (Windows 10 / 11 ready). All parameters and measuring units configured in a unified single screen, running tests in just 3 clicks.'
      },
      {
        title: 'Link Job Synchronized Database',
        description: 'Direct bi-directional database link with the Tomsic TMS45 Count Analyser automatically pulls real yarn count data into the test run, eliminating human transcription error.'
      },
      {
        title: 'Modular Extractable Hardware Architecture',
        description: 'Each functional slot is completely independent and user-extractable. Embedded diagnostic self-tests minimize maintenance time and eliminate costly proprietary technician visits.'
      },
      {
        title: 'Extensive 25-Year Database History',
        description: 'Storage for historical production data spanning decades with instant one-click export to Microsoft Excel, Word, PDF, or network mainframes.'
      }
    ],
    applications: [
      'Staple yarn evenness testing (Cotton, Wool, Linen, Synthetics, and Blends)',
      'Roving regularity and mass distribution analysis',
      'Card and drawframe sliver mass variation control',
      'Yarn imperfection indexing (Thin places, Thick places, and Neps)',
      'Optical hairiness index and distribution measurement',
      'Spinning mill quality certification and comparative benchmarking'
    ],
    specifications: [
      { parameter: 'Measurement Principle (Evenness)', value: 'Capacitive sensor slot with high-frequency signal processing' },
      { parameter: 'Measurement Principle (Hairiness)', value: 'Optical sensor module (optional)' },
      { parameter: 'Measurement Principle (Count)', value: 'Mass measurement integration with AutoCount' },
      { parameter: 'Standard Measuring Range', value: 'Approx. 1 tex to 12 ktex (Yarn, Roving, and Sliver)' },
      { parameter: 'Extended Range (ECS3-EXT Sensor)', value: '24 to 40 g/m (up to ~30 ktex) for heavy wool and acrylic sliver' },
      { parameter: 'Testing Speeds', value: 'Selectable test speeds up to 400 m/min' },
      { parameter: 'Autochanger Capacity', value: '24 package positions with automatic bobbin feed' },
      { parameter: 'Creel Capacity', value: '24-position creel system with low-friction yarn guides' },
      { parameter: 'Computer Interface', value: 'Standard PC, monitor, keyboard, printer (no proprietary internal PCI cards)' },
      { parameter: 'Operating System Compatibility', value: 'Windows 10 / Windows 11 (Microsoft .NET Framework)' },
      { parameter: 'Database Storage', value: 'Relational SQL database, historical records, free export to Excel/Word' },
      { parameter: 'Language Support', value: 'Multilingual (English, Italian, Chinese, Spanish, Portuguese, German, Turkish)' }
    ],
    modularOptions: [
      { name: 'Hairiness Optical Module', description: 'Measures yarn hairiness index simultaneously with evenness' },
      { name: '24-Position Autochanger', description: 'Fully automated continuous testing of up to 24 yarn packages' },
      { name: 'AutoCount Module', description: 'Direct yarn count test integration feeding actual count into Easy database' },
      { name: 'AutoFeeder Delivery System', description: 'Tension-free delivery system for delicate slivers (wool, silk, linen) with optional integrated scale' },
      { name: 'ECS3-EXT External Sensor', description: 'Dedicated external sensor (L=120 mm) with specialized feed cylinders for heavy wool & acrylic' }
    ],
    officialCatalogName: 'TOMSIC General Metrology Catalogue (Laboratory Line)',
    relatedProducts: ['tensotester-3', 'tms60-nep-trash', 'easyf-filament', 'tms45-count-analyser']
  },
  {
    slug: 'tensotester-3',
    name: 'TensoTester3 — Strength Tester',
    code: 'TMS-TT3',
    category: 'Laboratory Solutions',
    categorySlug: 'laboratory',
    tagline: 'Automatic Constant Rate of Elongation (C.R.E.) Tensile Tester for Yarns and Leas',
    badge: 'Universal Tensile Testing',
    description: 'The TensoTester3 is a fully automated tensile strength and elongation tester designed according to international Constant Rate of Elongation (C.R.E.) standards. Equipped with a 24-position autochanger and rapid-interchange load cells ranging from 3 kg up to 500 kg, it performs unattended batch tensile evaluations of yarns, skeins, and technical textiles with precision repeatability.',
    primaryImage: '/assets/tensotester3-main.png',
    gallery: [
      { url: '/assets/tensotester3-main.png', title: 'TensoTester3 Automated System' },
      { url: '/assets/tensotester3-clamps.jpg', title: 'Precision Pneumatic Clamping Assembly' },
      { url: '/assets/tensotester3-overview.jpg', title: 'On-Board Creel and Waste Evacuation System' }
    ],
    features: [
      {
        title: 'C.R.E. Standard Measurement Principle',
        description: 'Complies fully with ISO 2062, ASTM D2256, and international textile standards for single-strand and lea tensile testing.'
      },
      {
        title: 'Rapid Interchangeable Load Cells',
        description: 'Quick-release sensor mechanism allows rapid cell swaps from 3 kg up to 100 kg (and 500 kg with special lea clamps) in seconds.'
      },
      {
        title: 'Continuous 24-Package Autochanger',
        description: 'Integrated pneumatic changer processes 24 yarn packages sequentially with automatic waste aspiration and yarn catching.'
      },
      {
        title: 'On-Board Turbo Blower System',
        description: 'High-suction pneumatic evacuation automatically removes broken yarn remnants after every test cycle, preventing clamp contamination.'
      },
      {
        title: 'Unified Link Job Integration',
        description: 'Shares common database architecture with Tomsic Evenness Tester and Count Analyser for comprehensive quality records.'
      }
    ],
    applications: [
      'Single yarn breaking force, tenacity (cN/tex, RKM), and elongation testing',
      'Lea and skein breaking strength measurement (up to 500 kg load)',
      'Work of rupture and elastic deformation profiling',
      'Filament and continuous synthetic yarn tensile verification',
      'Sewing thread and technical industrial yarn quality assurance'
    ],
    specifications: [
      { parameter: 'Measurement Method', value: 'Constant Rate of Elongation (C.R.E.)' },
      { parameter: 'Testing Speed', value: 'Infinitely adjustable up to 5,000 mm/min' },
      { parameter: 'Test Gauge Length', value: 'Adjustable up to 500 mm (standard 250 mm / 500 mm)' },
      { parameter: 'Available Load Cells', value: '3, 6, 10, 15, 20, 25, 50, 100 kg (optional 500 kg for Lea tests)' },
      { parameter: 'Load Cell Accuracy', value: 'Class 0.5 (±0.5% of indicated value)' },
      { parameter: 'Autochanger Capacity', value: '24 bobbin positions with automated yarn clamp feed' },
      { parameter: 'Pneumatic System', value: 'On-board turbo blower yarn waste evacuation' },
      { parameter: 'Working Pressure', value: '6 bar compressed air' },
      { parameter: 'Software Platform', value: 'Microsoft .NET, Windows 10/11, comprehensive statistical reports' }
    ],
    modularOptions: [
      { name: 'Special Lea Clamps (500 kg)', description: 'Heavy-duty clamping fixtures for skein/lea tensile evaluations' },
      { name: 'Interchangeable 3 kg / 10 kg / 50 kg Load Cells', description: 'Factory-calibrated precision strain gauge cells' },
      { name: 'Bar Code Reader', description: 'Instant package lot identification and automated test parameter selection' }
    ],
    officialCatalogName: 'TensoTester3 Technical Specification Sheet',
    relatedProducts: ['easy-evenness-tester', 'tms45-count-analyser', 'tms60-nep-trash']
  },
  {
    slug: 'tms60-nep-trash',
    name: 'TMS60 Nep and Trash Tester',
    code: 'TMS60',
    category: 'Laboratory Solutions',
    categorySlug: 'laboratory',
    tagline: 'High-Speed Optical Impurity and Seed-Coat Fragment Classifier for Cotton Slivers',
    badge: 'ITMA 2023 Breakthrough',
    description: 'Unveiled at ITMA 2023 in Milan, the TMS60 Nep and Trash Tester represents Tomsic’s latest generation in raw material impurity diagnostics. 100% designed and built in Savogna d’Isonzo, Italy, the TMS60 rapidly counts and categorizes neps, trash particles, dust, and seed-coat fragments in card and drawframe slivers, enabling spinning mills to fine-tune opening, cleaning, and carding efficiency.',
    primaryImage: '/assets/tms60-nep-trash.jpg',
    gallery: [
      { url: '/assets/tms60-nep-trash.jpg', title: 'TMS60 Nep and Trash Tester with Integrated Display' }
    ],
    features: [
      {
        title: 'High-Resolution Optical Particle Classification',
        description: 'Advanced electro-optical sensors differentiate between botanical trash, seed-coat neps, fiber neps, and fine dust particles.'
      },
      {
        title: 'Immediate Card & Cleaning Diagnostic',
        description: 'Pinpoints whether high yarn nep counts originate from raw cotton quality or worn card clothing, optimizing maintenance cycles.'
      },
      {
        title: '100% Made in Italy Engineering',
        description: 'Designed, precision machined, assembled, and quality-verified at Tomsic’s Savogna d’Isonzo manufacturing facility.'
      },
      {
        title: 'Comprehensive Image and Spectrogram Archiving',
        description: 'Digital capture of detected impurities provides visual validation of trash classification alongside quantitative counts.'
      }
    ],
    applications: [
      'Carding machine efficiency assessment (Nep removal efficiency NRE%)',
      'Seed-coat fragment identification in raw and processed slivers',
      'Blowroom cleaning efficiency verification',
      'Cotton ginning and lint quality evaluation',
      'Comber noil and sliver cleanliness benchmarking'
    ],
    specifications: [
      { parameter: 'Analyzed Material', value: 'Card sliver, drawframe sliver, raw cotton web' },
      { parameter: 'Detection Categories', value: 'Fiber neps, seed-coat neps, botanical trash, fine dust' },
      { parameter: 'Measurement Principle', value: 'High-speed electro-optical scanning and image analysis' },
      { parameter: 'Sample Length', value: 'Configurable test length per sliver pass' },
      { parameter: 'Data Reporting', value: 'Neps/gram, trash size distribution (microns), total dust index' },
      { parameter: 'Construction', value: 'Solid industrial steel chassis, 100% Italian manufacturing' }
    ],
    modularOptions: [
      { name: 'High-Capacity Sliver Feeder', description: 'Smooth motorized feeding mechanism for uniform web presentation' },
      { name: 'Extended Spectrogram Software Module', description: 'Periodic fault frequency analysis for drafting mechanisms' }
    ],
    officialCatalogName: 'TMS60 Product Launch Brochure — ITMA Milan',
    relatedProducts: ['easy-evenness-tester', 'tensotester-3', 'cotton-sugar-test-tms54']
  },
  {
    slug: 'easyf-filament',
    name: 'easyF — Evenness Tester for Filament',
    code: 'TMS-EASY-F',
    category: 'Laboratory Solutions',
    categorySlug: 'laboratory',
    tagline: 'Dedicated Regularity and Mass Variation Analyzer for Synthetic Continuous Filaments',
    badge: 'Synthetic & Filament QC',
    description: 'Introduced at ITMA Barcelona, the easyF is customized specifically for manufacturers and processors of synthetic continuous filament yarns (POY, DTY, FDY). Featuring low-friction sapphire and ceramic guides, rapid yarn transport, and specialized capacitance geometry, it captures micro-variations without inducing filament electrostatic charge or tension distortion.',
    primaryImage: '/assets/easyf-filament.jpg',
    gallery: [
      { url: '/assets/easyf-filament.jpg', title: 'easyF Filament Evenness Tester' }
    ],
    features: [
      {
        title: 'Zero-Electrostatic Filament Handling',
        description: 'Special ceramic guides and ground path eliminate static electricity build-up common to POY and DTY synthetic polymers.'
      },
      {
        title: 'Continuous High-Speed Transport',
        description: 'Precision motorized drive pulls filament smoothly at speeds up to 400 m/min without flattening or stretching the yarn cross-section.'
      },
      {
        title: 'Tight Capacitance Tolerances',
        description: 'Sensor electronics calibrated specifically for low-denier synthetic fibers (Polyester, Polyamide, Polypropylene, Viscose).'
      }
    ],
    applications: [
      'POY, DTY, and FDY synthetic yarn mass uniformity testing',
      'Texturing fault detection (draw variations, surging, friction inconsistencies)',
      'Spinning finish and polymer blend consistency monitoring'
    ],
    specifications: [
      { parameter: 'Fibre Types', value: 'Polyester (PES), Polyamide (PA 6 / PA 6.6), Polypropylene (PP), Rayon' },
      { parameter: 'Count Range', value: '10 dtex to 2,000 dtex continuous filament' },
      { parameter: 'Measurement Sensor', value: 'High-sensitivity capacitive slot for low denier filaments' },
      { parameter: 'Software', value: 'easyF Dedicated Suite with periodic defect & surging spectrograms' }
    ],
    modularOptions: [
      { name: 'Rotary Bobbin Stand', description: 'Vibration-damped spool rack for industrial texturing bobbins' }
    ],
    officialCatalogName: 'easyF Technical Sheet — Synthetic Filament Testing',
    relatedProducts: ['easy-evenness-tester', 'tensotester-3']
  },
  {
    slug: 'tms45-count-analyser',
    name: 'TMS45 — Count Analyser',
    code: 'TMS45',
    category: 'Laboratory Solutions',
    categorySlug: 'laboratory',
    tagline: 'Automatic Yarn, Roving, and Sliver Count Determination with Direct Database Link',
    badge: 'Precision Count Metrology',
    description: 'The TMS45 Count Analyser is an automated electronic yarn count determination station. Integrating a precision electronic balance with automated length calculation, it seamlessly communicates with Tomsic’s "easy" Evenness Tester and TensoTester3 through proprietary Link Job technology, feeding real count measurements directly into global quality indices.',
    primaryImage: '/assets/tms45-count-analyser.jpg',
    gallery: [
      { url: '/assets/tms45-count-analyser.jpg', title: 'TMS45 High-Precision Count Analyser Station' }
    ],
    features: [
      {
        title: 'Link Job Direct Integration',
        description: 'Eliminates manual keyboard entry of yarn numbers into testers, preventing expensive lot grading misclassifications.'
      },
      {
        title: 'Multi-Unit Calculation',
        description: 'Instant conversion between all global count systems: Nm, Ne, tex, dtex, Denier, and grains/yd.'
      },
      {
        title: 'High-Resolution Balance',
        description: 'Industrial precision balance with draft shield and rapid settling time for high-throughput laboratory workflow.'
      }
    ],
    applications: [
      'Sliver, roving, and yarn count (linear density) verification',
      'Wrap reel skein mass weighing and statistical lot variation (CV% of count)',
      'Moisture regain mass compensation'
    ],
    specifications: [
      { parameter: 'Resolution', value: '0.001 g (1 mg) or 0.0001 g (0.1 mg optional)' },
      { parameter: 'Supported Count Systems', value: 'Ne, Nm, tex, dtex, Den, Worsted, Woollen, Grains/yd' },
      { parameter: 'Connectivity', value: 'RS-232 / USB / Ethernet to Tomsic Network and PC' },
      { parameter: 'Calibration', value: 'Internal and external motorized standard weight calibration' }
    ],
    modularOptions: [
      { name: 'EleWrap XT Reel Interface', description: 'Direct synchronization with motorized wrap reel' }
    ],
    officialCatalogName: 'TMS45 Technical Datasheet',
    relatedProducts: ['easy-evenness-tester', 'tensotester-3']
  },
  {
    slug: 'card-autoleveller-tms25-r2c',
    name: 'Card Autoleveller TMS25-R2C',
    code: 'TMS25-R2C',
    category: 'Spinning Solutions',
    categorySlug: 'spinning',
    tagline: 'Patented Short-Term Card Autolevelling System with Slub & Thick Places Monitoring',
    badge: '70% Count Variation Reduction',
    description: 'The Tomsic TMS25-R2C is a globally patented short-term card autoleveller engineered both for original equipment card manufacturers and for modernizing existing industrial cards (Rieter C4/C10/C50/C51, Trützschler DK740/760/803, Marzoli CX300/400, Crosrol MK4/MK5). By measuring web thickness before coiling and controlling feed roller drives via high-speed digital servo loops, it slashes 1-meter count variation by up to 70%.',
    primaryImage: '/assets/card-autoleveller-tms25.jpg',
    gallery: [
      { url: '/assets/card-autoleveller-tms25.jpg', title: 'TMS25-R2C Installed on Industrial Card' },
      { url: '/assets/card-autoleveller-diagram.png', title: 'Autoleveller Control Circuit and Real-Time Graphing' }
    ],
    features: [
      {
        title: 'Patented Short-Term Regulation',
        description: 'True real-time short-term card autoleveller that corrects sliver thickness deviations over short lengths before material reaches the coiler can.'
      },
      {
        title: 'Built-in Thick Places Monitoring',
        description: 'Integrated monitoring detects sudden heavy slubs and foreign matter intrusions, logging time histories and triggering automatic stop motions.'
      },
      {
        title: 'Complete Upgrade Kit Provided',
        description: 'Supplied as a complete turnkey retrofit package including precision measuring head, digital control processor, servo drives, timing belts, and brackets.'
      },
      {
        title: '70% Reduction in 1-Meter CV',
        description: 'Consistently improves the 1-meter count variation (CVm 1m) of older cards to meet modern ring and rotor spinning quality thresholds.'
      }
    ],
    applications: [
      'Carding machine count regulation for short and medium staple cotton',
      'Modernization and modernization of older carding machines',
      'Thick places detection and automatic card stop-motion control',
      'Sliver uniformity optimization for open-end rotor and vortex spinning'
    ],
    specifications: [
      { parameter: 'Compatibility', value: 'Rieter (C4, C10, C50), Trützschler (DK740, DK760, DK803), Marzoli, Crosrol MK4/MK5' },
      { parameter: 'Autolevelling Principle', value: 'Displacement measuring tongues with high-resolution digital rotary transducer' },
      { parameter: 'Control Actuator', value: 'High-dynamic AC brushless servo motor on feed roller drive' },
      { parameter: 'Regulation Range', value: '±25% to ±30% sliver weight compensation' },
      { parameter: 'Response Time', value: 'Millisecond closed-loop digital signal processing' },
      { parameter: 'Operator Interface', value: 'Multilingual graphic terminal displaying continuous sliver graph and alerts' }
    ],
    modularOptions: [
      { name: 'Slub Inventor Software Extension', description: 'Patterned thick place insertion for intentional slub/flammé yarn production' },
      { name: 'Mill Central Monitoring Network Interface', description: 'Centralized RS-485 / Ethernet connection for plant-wide card CV tracking' }
    ],
    officialCatalogName: 'TMS25-R2C Card Autoleveller Comprehensive Brochure',
    relatedProducts: ['drawframe-autoleveller-tms25-r2d', 'sliver-quality-monitor-tms25-qm2', 'gill-box-autoleveller']
  },
  {
    slug: 'drawframe-autoleveller-tms25-r2d',
    name: 'Drawframe Autoleveller TMS25-R2D',
    code: 'TMS25-R2D',
    category: 'Spinning Solutions',
    categorySlug: 'spinning',
    tagline: 'High-Speed Closed-Loop Drafting Regulation for Drawframes (Short and Long Fibres)',
    badge: 'High-Speed Precision Drafting',
    description: 'Built on Tomsic’s decades-long pedigree of electronic engineering for drawframe pioneer VOUK, the TMS25-R2D provides digital closed-loop regulation of drawframe drafting zones at delivery speeds up to 1,000 m/min. Available in dedicated configurations for short cotton staple as well as long wool and synthetic fibres, it guarantees consistent sliver count entering the roving frame or open-end rotor.',
    primaryImage: '/assets/card-autoleveller-tms25.jpg',
    gallery: [
      { url: '/assets/card-autoleveller-tms25.jpg', title: 'Drawframe Autoleveller Electronics Assembly' },
      { url: '/assets/card-autoleveller-diagram.png', title: 'Closed-Loop Drafting Control Architecture' }
    ],
    features: [
      {
        title: 'Heritage of Vouk Drawframe Expertise',
        description: 'Engineered by the team that originated electronic control systems for VOUK drawframes, reflecting 60+ years of drafting physics knowledge.'
      },
      {
        title: 'Long Fibre & Short Fibre Variants',
        description: 'Configurable sensor heads and drafting servo kinematics tailored for cotton short fibers or worsted/synthetic long fibres.'
      },
      {
        title: 'Spectrogram and Periodic Fault Suppression',
        description: 'Real-time FFT spectrogram monitors drafting roller eccentricity and alerts maintenance to mechanical wear.'
      }
    ],
    applications: [
      'First and second passage drawframe autolevelling in spinning mills',
      'Worsted and semi-worsted spinning preparation',
      'Delivery count standardization for high-speed rotor and air-jet spinning'
    ],
    specifications: [
      { parameter: 'Delivery Speed Support', value: 'Up to 1,000 m/min continuous drafting speed' },
      { parameter: 'Measuring Principle', value: 'Pair of groove-and-tongue measuring rollers with inductive displacement sensor' },
      { parameter: 'Correction Length', value: 'Short-term autolevelling correcting down to sub-meter sliver intervals' },
      { parameter: 'Processor', value: 'Dedicated real-time digital signal processor (DSP)' }
    ],
    modularOptions: [
      { name: 'Long Fibre Dedicated Measuring Roller Head', description: 'Extended roller geometry designed for wool and long synthetic staples' }
    ],
    officialCatalogName: 'TMS25-R2D Drawframe Autoleveller Specification',
    relatedProducts: ['card-autoleveller-tms25-r2c', 'gill-box-autoleveller', 'sliver-quality-monitor-tms25-qm2']
  },
  {
    slug: 'gill-box-autoleveller',
    name: 'New Generation Gill Box Autoleveller',
    code: 'TMS-GILLBOX',
    category: 'Spinning Solutions',
    categorySlug: 'spinning',
    tagline: 'High-Performance Autolevelling Upgrade for Long-Fibre Gill Boxes (Wool & Acrylic)',
    badge: 'Long Fibre Innovation',
    description: 'Released specifically to address the specialized requirements of the wool, acrylic, and flax sectors, the new generation Tomsic Gill Box Autoleveller brings modern digital closed-loop regulation to existing chain gill and screw gill machines (Cognetex, Sant’Andrea Novara, NSC Schlumberger). It delivers superior long-fibre uniformity while drastically cutting electrical power draw.',
    primaryImage: '/assets/gillbox-autoleveller.jpg',
    gallery: [
      { url: '/assets/gillbox-autoleveller.jpg', title: 'New Generation Tomsic Gill Box Autoleveller' }
    ],
    features: [
      {
        title: 'Modern Retrofit for Classic Gill Boxes',
        description: 'Replaces obsolete analog electronic boards and mechanical gear differentials with state-of-the-art brushless servo drives.'
      },
      {
        title: 'Specialized Wool & Acrylic Drafting Algorithms',
        description: 'Compensates for long-fibre inter-fiber friction dynamics and crimp behavior characteristic of worsted tops.'
      },
      {
        title: 'Reduced Maintenance & Energy Consumption',
        description: 'Direct servo coupling eliminates mechanical belts, clutches, and oil baths, saving energy and downtime.'
      }
    ],
    applications: [
      'Worsted wool top preparation and blending',
      'Acrylic tow-to-top converting lines',
      'Flax and blended long-staple drafting passages'
    ],
    specifications: [
      { parameter: 'Machine Compatibility', value: 'NSC Schlumberger, Cognetex, Sant’Andrea Novara, Vouk long fibre drawframes' },
      { parameter: 'Drive System', value: 'Digital synchronous AC servo motor with energy recovery braking' },
      { parameter: 'HMI Screen', value: 'Color touch interface with intuitive graphic setup and diagnostics' }
    ],
    modularOptions: [
      { name: 'Full Electrical Cabinet Retrofit Kit', description: 'Pre-wired IP54 electrical enclosure ready for rapid weekend installation' }
    ],
    officialCatalogName: 'Tomsic Gill Box Autoleveller Technical Announcement',
    relatedProducts: ['drawframe-autoleveller-tms25-r2d', 'card-autoleveller-tms25-r2c']
  },
  {
    slug: 'sliver-quality-monitor-tms25-qm2',
    name: 'Sliver Quality Monitoring TMS25-QM2',
    code: 'TMS25-QM2',
    category: 'Spinning Solutions',
    categorySlug: 'spinning',
    tagline: 'Continuous Online Sliver Count and Periodic Regularity Surveillance for Cards & Drawframes',
    badge: 'Continuous Online Quality',
    description: 'The TMS25-QM2 is an online quality monitoring system that mounts directly onto production drawframes and cards. Acting as an independent supervisory sentinel, it continuously checks sliver count, detects out-of-tolerance drift, identifies periodic draft waves (spectrogram peaks), and commands immediate machine stoppage before defective sliver enters spinning cans.',
    primaryImage: '/assets/sliver-quality-monitor.jpg',
    gallery: [
      { url: '/assets/sliver-quality-monitor.jpg', title: 'TMS25-QM2 Sliver Quality Monitor Sensor' }
    ],
    features: [
      {
        title: 'Real-Time Spectrogram Calculation',
        description: 'Online FFT analysis identifies gear tooth wear, eccentric rollers, and defective drive belts before yarn defects manifest.'
      },
      {
        title: 'Instant Cut-Off / Stop Motion',
        description: 'Safeguards the mill against massive off-count production by stopping the machine the moment tolerances are breached.'
      },
      {
        title: 'Industry 4.0 Central Connectivity',
        description: 'Exports shift production metrics and quality spectrograms to plant ERP and mill management networks.'
      }
    ],
    applications: [
      'Card sliver online count surveillance',
      'Drawframe delivery quality monitoring',
      'Periodic defect prevention and predictive mechanical maintenance'
    ],
    specifications: [
      { parameter: 'Sensor Principle', value: 'Precision displacement caliper or capacitive sensor' },
      { parameter: 'Data Logging', value: 'Shift reports, CV%, A%, count variation, periodic fault alerts' },
      { parameter: 'Interface', value: 'Industrial RS-485 / Modbus / Ethernet output' }
    ],
    modularOptions: [
      { name: 'Mill Central Server Software', description: 'Monitors all mill cards and drawframes on a central dashboard' }
    ],
    officialCatalogName: 'TMS25-QM2 Quality Monitoring Datasheet',
    relatedProducts: ['card-autoleveller-tms25-r2c', 'drawframe-autoleveller-tms25-r2d']
  },
  {
    slug: 'cotton-sugar-test-tms54',
    name: 'Cotton Sugar Test — TMS54',
    code: 'TMS54',
    category: 'Sugar Solutions',
    categorySlug: 'sugar',
    tagline: 'Standardized 15-Minute Chemical Test Method to Determine Sugar Contamination in Raw Cotton',
    badge: '15-Minute Stickiness Test',
    description: 'The Tomsic TMS54 Cotton Sugar Test is a simple, standardized, and cost-effective chemical testing methodology engineered to determine the exact sugar concentration in raw cotton bales within 15 minutes. By detecting insect honeydew (from aphids and whiteflies) in bale samples before blending, it prevents sticky cotton from causing catastrophic roller lapping and yarn breaks in carding and spinning.',
    primaryImage: '/assets/cotton-sugar-tms54.jpg',
    gallery: [
      { url: '/assets/cotton-sugar-tms54.jpg', title: 'TMS54 Cotton Sugar Test Chemical Kit & Reagents' }
    ],
    features: [
      {
        title: 'Fast 15-Minute Chemical Evaluation',
        description: 'Delivers conclusive sugar contamination levels in 15 minutes, allowing incoming cotton warehouse shipments to be screened before release to production.'
      },
      {
        title: 'Protection Against Spindle Lapping',
        description: 'Prevents insect honeydew sugars from adhering to card clothing, drawframe drafting cots, and spinning ring travelers.'
      },
      {
        title: 'Economical Per-Sample Cost',
        description: 'Requires minimal equipment investment and low chemical consumable cost compared to expensive thermomechanical sticky cotton instruments.'
      },
      {
        title: 'Colorimetric Scale Accuracy',
        description: 'Provides standardized color-graded quantitative classification from non-sticky (grade 0) to severe sticky contamination.'
      }
    ],
    applications: [
      'Raw cotton bale incoming quality inspection and sorting',
      'Bale laydown formulation to manage average stickiness thresholds',
      'Supplier quality dispute resolution and claim documentation',
      'Spinning preparation optimization for sticky cotton harvests'
    ],
    specifications: [
      { parameter: 'Test Duration', value: 'Approximately 15 minutes per sample' },
      { parameter: 'Detected Compounds', value: 'Entomological sugars (melezitose, trehalulose) and plant sugars (glucose, fructose)' },
      { parameter: 'Reading Method', value: 'Standardized colorimetric comparison with calibrated reference scale' },
      { parameter: 'Recommended Sample Size', value: 'Representative 5 g lint sample per bale lot' },
      { parameter: 'Chemical Formulations', value: 'Designed for use with Tomsic TMS55 Glucosil calibrated reagent' }
    ],
    modularOptions: [
      { name: 'TMS54 Laboratory Starter Kit', description: 'Complete set with reaction beakers, test tubes, calibrated pipettes, and colorimetric scale' },
      { name: 'Consumable Reagent Refill Packs', description: 'Economical bulk packaging for high-volume harvest testing' }
    ],
    officialCatalogName: 'TOMSIC Cotton Sugar Solutions Technical Leaflet',
    relatedProducts: ['glucosil-sugar-solution-tms55', 'tms60-nep-trash', 'easy-evenness-tester']
  },
  {
    slug: 'glucosil-sugar-solution-tms55',
    name: 'Glucosil — Sugar Solution TMS55',
    code: 'TMS55',
    category: 'Sugar Solutions',
    categorySlug: 'sugar',
    tagline: 'Calibrated Chemical Reagent Formulation for Quantitative Cotton Sugar Analysis',
    badge: 'Calibrated Reagent System',
    description: 'Glucosil (TMS55) is Tomsic’s specialized, laboratory-calibrated chemical reagent solution formulated specifically for use in conjunction with the TMS54 Cotton Sugar Test. Manufactured in Italy under stringent chemical purity controls, Glucosil ensures repeatable colorimetric reaction kinetics, allowing laboratories to achieve consistent results regardless of environmental ambient temperatures.',
    primaryImage: '/assets/glucosil-tms55.png',
    gallery: [
      { url: '/assets/glucosil-tms55.png', title: 'Glucosil TMS55 Calibrated Chemical Reagent Bottle' }
    ],
    features: [
      {
        title: 'Standardized Reaction Kinetics',
        description: 'Formulated to provide uniform reaction rates across varying laboratory temperature ranges.'
      },
      {
        title: 'High Chemical Purity',
        description: 'Manufactured and bottled in Italy with analytical grade purity for maximum shelf stability.'
      },
      {
        title: 'Direct Pairing with TMS54 Protocol',
        description: 'Optimized concentration specifically calibrated against the Tomsic sugar colorimetric evaluation charts.'
      }
    ],
    applications: [
      'Laboratory testing of sticky cotton honeydew levels',
      'Standardized calibration of spinning mill raw material testing benches'
    ],
    specifications: [
      { parameter: 'Packaging', value: 'Sealed chemical-resistant laboratory bottles' },
      { parameter: 'Shelf Life', value: 'Stable storage up to 24 months under standard laboratory conditions' },
      { parameter: 'Compatibility', value: 'Exclusively calibrated for TMS54 Cotton Sugar Test methodology' },
      { parameter: 'Origin', value: '100% Formulated and bottled in Italy' }
    ],
    modularOptions: [
      { name: 'Multipack Reagent Carton', description: 'Box of 6 bottles for spinning mill harvest testing season' }
    ],
    officialCatalogName: 'Glucosil Safety & Application Data Sheet',
    relatedProducts: ['cotton-sugar-test-tms54', 'easy-evenness-tester']
  }
];
