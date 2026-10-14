// data.js - Verified Open Climate Science, Earth Systems & Assessment Catalog
const CLIMATE_DATA = {
  courses: [
    // =========================================================================
    // 1. PHYSICAL CLIMATE SCIENCE & PALEOCLIMATE
    // =========================================================================
    {
      id: "mit-12-340x",
      code: "12.340 / 12.340x",
      title: "Global Warming Science",
      provider: "MIT OpenCourseWare",
      level: "Undergraduate",
      domain: "Physical Climate Science",
      summary: "Taught by Prof. Kerry Emanuel, Prof. Daniel Cziczo, and Prof. David McGee. Rigorous introduction to the physical principles governing planetary climate, radiative forcing, climate feedbacks, ocean thermal inertia, and paleoclimate proxies.",
      courseUrl: "https://ocw.mit.edu/courses/12-340-global-warming-science-spring-2012/",
      altUrl: "https://ocw.mit.edu/courses/12-340x-global-warming-science-spring-2020/",
      altLabel: "Open 2020 Interactive Edition (12.340x)",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.340+Global+Warming+Science",
      searchQuery: "MIT OCW 12.340 Global Warming Science Kerry Emanuel",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-340-global-warming-science-spring-2012/pages/syllabus/" },
        { label: "Lecture Notes & PDFs", url: "https://ocw.mit.edu/courses/12-340-global-warming-science-spring-2012/pages/lecture-notes/" },
        { label: "Assignments & Problem Sets", url: "https://ocw.mit.edu/courses/12-340-global-warming-science-spring-2012/pages/assignments/" }
      ],
      lectures: [
        "Planetary energy budget and zero-dimensional radiative equilibrium",
        "One-dimensional radiative-convective atmospheric models",
        "Molecular spectroscopy and infrared absorption by CO2, H2O, and CH4",
        "Water vapor, lapse rate, cloud, and surface ice-albedo feedbacks",
        "Transient climate response, equilibrium climate sensitivity, and ocean heat uptake",
        "Aerosols, cloud microphysics, and volcanic radiative forcing",
        "Paleoclimate proxies: Oxygen isotopes, foraminifera, and ice-core gas inclusions",
        "Milankovitch orbital mechanics: Precession, obliquity, and eccentricity cycles"
      ]
    },
    {
      id: "mit-1-84j",
      code: "1.84J / 12.807J",
      title: "Atmospheric Chemistry",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Physical Climate Science",
      summary: "Taught by Prof. Jesse Kroll. Detailed overview of the chemical transformations controlling trace species in the Earth's atmosphere, stratospheric ozone chemistry, tropospheric oxidizing capacity, and aerosol chemistry.",
      courseUrl: "https://ocw.mit.edu/courses/1-84j-atmospheric-chemistry-fall-2013/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=1.84J+Atmospheric+Chemistry",
      searchQuery: "MIT OCW 1.84J Atmospheric Chemistry Jesse Kroll",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/1-84j-atmospheric-chemistry-fall-2013/pages/syllabus/" },
        { label: "Lecture Notes (PDF Slides)", url: "https://ocw.mit.edu/courses/1-84j-atmospheric-chemistry-fall-2013/pages/lecture-notes/" },
        { label: "Assignments", url: "https://ocw.mit.edu/courses/1-84j-atmospheric-chemistry-fall-2013/pages/assignments/" }
      ],
      lectures: [
        "Atmospheric structure, transport timescales, and chemical kinetics",
        "Stratospheric ozone: The Chapman mechanism and catalytic destruction cycles (NOx, HOx, ClOx, BrOx)",
        "The Antarctic ozone hole, polar stratospheric clouds, and CFC photolysis",
        "Tropospheric oxidizing capacity: OH radical photochemistry and methane oxidation",
        "NOx-VOC-Ozone sensitivity regimes and urban photochemical smog",
        "Organic aerosols, secondary organic aerosol (SOA) formation, and radiative effects"
      ]
    },
    {
      id: "mit-12-842",
      code: "12.842",
      title: "Climate Physics and Chemistry",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Physical Climate Science",
      summary: "Taught by Prof. Carl Wunsch, Prof. Edward Boyle, and Prof. Kerry Emanuel. Graduate inquiry into coupled atmosphere-ocean physics, marine biogeochemistry, isotopic tracers, and quaternary climate variability.",
      courseUrl: "https://ocw.mit.edu/courses/12-842-climate-physics-and-chemistry-fall-2008/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.842+Climate+Physics+and+Chemistry",
      searchQuery: "MIT OCW 12.842 Climate Physics and Chemistry",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-842-climate-physics-and-chemistry-fall-2008/pages/syllabus/" },
        { label: "Lecture Notes", url: "https://ocw.mit.edu/courses/12-842-climate-physics-and-chemistry-fall-2008/pages/lecture-notes/" },
        { label: "Projects & Problem Sets", url: "https://ocw.mit.edu/courses/12-842-climate-physics-and-chemistry-fall-2008/pages/projects/" }
      ],
      lectures: [
        "Radiative transfer equations and atmospheric moist convection",
        "Meridional heat transport partitioning between atmosphere and ocean",
        "Wind-driven gyres, Sverdrup balance, and western boundary intensification",
        "Deep water formation, abyssal overturning, and buoyancy forcing",
        "Marine carbon chemistry, alkalinity budgets, and the biological pump",
        "Radiocarbon (14C), uranium-series dating, and deep-ocean ventilation rates",
        "Dansgaard-Oeschger events, Heinrich layers, and millennial bipolar seesaws"
      ]
    },
    {
      id: "mit-12-740",
      code: "12.740",
      title: "Paleoceanography",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Physical Climate Science",
      summary: "Taught by Prof. Edward Boyle. Reconstructing past ocean circulation, chemical cycling, and climate change over Cenozoic and Pleistocene timescales using marine sediment cores, coral reefs, and isotopic proxies.",
      courseUrl: "https://ocw.mit.edu/courses/12-740-paleoceanography-spring-2008/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.740+Paleoceanography",
      searchQuery: "MIT OCW 12.740 Paleoceanography Edward Boyle",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-740-paleoceanography-spring-2008/pages/syllabus/" },
        { label: "Lecture Slides & Notes", url: "https://ocw.mit.edu/courses/12-740-paleoceanography-spring-2008/pages/lecture-notes/" },
        { label: "Readings & Datasets", url: "https://ocw.mit.edu/courses/12-740-paleoceanography-spring-2008/pages/readings/" }
      ],
      lectures: [
        "Deep-sea piston coring, stratigraphy, and geomagnetic polarity timescales",
        "Oxygen (δ18O) and carbon (δ13C) isotope fractionation in foraminifera",
        "Paleo-temperature estimation: Mg/Ca ratios, alkenones, and faunal assemblages",
        "Coral U/Th dating and eustatic sea-level terrace reconstructions",
        "Cd/Ca and δ13C tracers of glacial North Atlantic Intermediate Water (GNAIW)",
        "Ice-core greenhouse gas records and glacial-interglacial CO2 mechanisms"
      ]
    },
    {
      id: "mit-climate-primer",
      code: "RES.ENV-005",
      title: "Climate Science, Risk & Solutions: A Climate Primer",
      provider: "MIT OpenCourseWare",
      level: "Introductory / Non-Credit",
      domain: "Physical Climate Science",
      summary: "Created by Prof. Kerry Emanuel. Interactive primer summarizing the foundational lines of evidence for anthropogenic climate change, radiative physics, hurricane risk modeling, and decarbonization technologies.",
      courseUrl: "https://ocw.mit.edu/courses/res-env-005-climate-science-risk-solutions-a-climate-primer/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=RES.ENV-005+Climate+Primer",
      searchQuery: "MIT OCW RES.ENV-005 Climate Science Risk Solutions",
      directLinks: [
        { label: "Course Videos", url: "https://ocw.mit.edu/courses/res-env-005-climate-science-risk-solutions-a-climate-primer/resources/videos/" },
        { label: "MIT Climate Primer Interactive Site", url: "https://climateprimer.mit.edu/" }
      ],
      lectures: [
        "19th-century foundations: Fourier, Foote, Tyndall, and Arrhenius",
        "Instrumental temperature records, satellite radiometry, and paleoclimate ice cores",
        "Carbon isotopes (13C/12C and 14C) as fingerprints of fossil fuel combustion",
        "Extreme event risks: Tropical cyclone intensity, storm surges, and hydrological extremes",
        "Economic risk valuation, carbon pricing, and clean energy transition pathways"
      ]
    },
    {
      id: "yale-gg-140",
      code: "GG 140",
      title: "The Atmosphere, the Ocean, and Environmental Change",
      provider: "Open Yale Courses",
      level: "Undergraduate",
      domain: "Physical Climate Science",
      summary: "Taught by Prof. Ronald B. Smith. Quantitative survey of the physical processes controlling Earth's atmosphere, ocean circulation, hydrological cycle, ozone chemistry, and anthropogenic climate change.",
      courseUrl: "https://oyc.yale.edu/geology-and-geophysics/gg-140",
      searchQuery: "Open Yale Courses GG 140 Ronald Smith Atmosphere Ocean",
      lectures: [
        "Atmospheric composition, the ideal gas law, and hydrostatic balance",
        "Vertical thermal structure of the atmosphere and residence times",
        "Greenhouse effect mechanics and planetary habitability",
        "Thermodynamics of water phase changes, adiabatic lapse rates, and stability",
        "Cloud microphysics, precipitation mechanisms, and severe convective storms",
        "Global wind systems, Hadley circulation, and the Coriolis force",
        "Ocean bathymetry, salinity-temperature-density (CTD) profiles, and thermohaline flow",
        "El Niño-Southern Oscillation (ENSO) and equatorial ocean-atmosphere coupling"
      ]
    },
    {
      id: "uchicago-phsc-13400",
      code: "PHSC 13400",
      title: "Global Warming I: The Science and Modeling of Climate Change",
      provider: "University of Chicago / Coursera",
      level: "Introductory / Undergraduate",
      domain: "Physical Climate Science",
      summary: "Taught by Prof. David Archer. Combines fundamental physics and Earth system biogeochemistry with interactive numeric simulations of infrared radiative transfer and long-term carbon cycle dynamics.",
      courseUrl: "https://www.coursera.org/learn/global-warming",
      searchQuery: "David Archer Global Warming Science Modeling University of Chicago",
      lectures: [
        "Blackbody radiation, Stefan-Boltzmann law, and Wien's displacement law",
        "Multi-layer radiative-transfer models and band saturation physics",
        "Weathering of silicate rocks and the geological Urey thermostat",
        "Ocean carbonate chemistry, Bjerrum plots, and anthropogenic ocean acidification",
        "Perturbations to the terrestrial biosphere and soil carbon reservoirs",
        "Methane hydrate stability zones and abrupt paleoclimate warming (PETM)"
      ]
    },

    // =========================================================================
    // 2. CLIMATE DYNAMICS, FLUID MECHANICS & MODELING
    // =========================================================================
    {
      id: "mit-12-003",
      code: "12.003",
      title: "Atmosphere, Ocean and Climate Dynamics",
      provider: "MIT OpenCourseWare",
      level: "Undergraduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. Raffaele Ferrari (originally designed with Prof. John Marshall). Explores the fluid dynamics and thermodynamics governing large-scale circulation of the atmosphere and ocean, rotating tank experiments, and geostrophic balances.",
      courseUrl: "https://ocw.mit.edu/courses/12-003-atmosphere-ocean-and-climate-dynamics-fall-2008/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.003+Atmosphere+Ocean+and+Climate+Dynamics",
      searchQuery: "MIT OCW 12.003 Atmosphere Ocean and Climate Dynamics",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-003-atmosphere-ocean-and-climate-dynamics-fall-2008/pages/syllabus/" },
        { label: "Lecture Notes", url: "https://ocw.mit.edu/courses/12-003-atmosphere-ocean-and-climate-dynamics-fall-2008/pages/lecture-notes/" },
        { label: "Rotating Tank Labs", url: "https://ocw.mit.edu/courses/12-003-atmosphere-ocean-and-climate-dynamics-fall-2008/pages/labs/" },
        { label: "Assignments", url: "https://ocw.mit.edu/courses/12-003-atmosphere-ocean-and-climate-dynamics-fall-2008/pages/assignments/" }
      ],
      lectures: [
        "Global radiative equilibrium and meridional differential heating",
        "Hydrostatic balance, potential temperature, and static stability",
        "Kinematics of rotating reference frames and the Coriolis acceleration",
        "Geostrophic balance, thermal wind equations, and baroclinic jets",
        "General circulation of the atmosphere: Hadley cell and mid-latitude eddies",
        "Ekman transport, wind stress curl, and upwelling/downwelling dynamics",
        "Abyssal ocean circulation and conveyor belt energetics"
      ]
    },
    {
      id: "mit-12-307",
      code: "12.307",
      title: "Weather and Climate Laboratory",
      provider: "MIT OpenCourseWare",
      level: "Undergraduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. John Marshall and Dr. Lodovica Illari. Hands-on experimental fluid dynamics course using rotating water tanks paired with real-time meteorological reanalysis data to study fronts, cyclones, and ocean gyres.",
      courseUrl: "https://ocw.mit.edu/courses/12-307-weather-and-climate-laboratory-spring-2009/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.307+Weather+and+Climate+Laboratory",
      searchQuery: "MIT OCW 12.307 Weather and Climate Laboratory",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-307-weather-and-climate-laboratory-spring-2009/pages/syllabus/" },
        { label: "Lab Projects & Tank Guides", url: "https://ocw.mit.edu/courses/12-307-weather-and-climate-laboratory-spring-2009/pages/projects/" },
        { label: "Tools & Weather Data Guides", url: "https://ocw.mit.edu/courses/12-307-weather-and-climate-laboratory-spring-2009/pages/tools/" }
      ],
      lectures: [
        "Rotating tank spin-up, Taylor columns, and geostrophic adjustment",
        "Radial density gradients, thermal wind balance, and polar front cones",
        "Baroclinic instability: Dishpan eddies vs. mid-latitude synoptic weather systems",
        "Ekman pumping, wind-driven ocean gyres, and western boundary currents"
      ]
    },
    {
      id: "mit-12-810",
      code: "12.810",
      title: "Dynamics of the Atmosphere",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. Paul O'Gorman. Graduate-level treatment of large-scale atmospheric circulation, internal gravity waves, quasi-geostrophic theory, baroclinic instability, Eliassen-Palm fluxes, and general circulation maintenance.",
      courseUrl: "https://ocw.mit.edu/courses/12-810-dynamics-of-the-atmosphere-spring-2023/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.810+Dynamics+of+the+Atmosphere",
      searchQuery: "MIT OCW 12.810 Dynamics of the Atmosphere Paul O'Gorman",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-810-dynamics-of-the-atmosphere-spring-2023/pages/syllabus/" },
        { label: "Lecture Notes (Full PDFs)", url: "https://ocw.mit.edu/courses/12-810-dynamics-of-the-atmosphere-spring-2023/pages/lecture-notes/" },
        { label: "Problem Sets", url: "https://ocw.mit.edu/courses/12-810-dynamics-of-the-atmosphere-spring-2023/pages/assignments/" }
      ],
      lectures: [
        "Primitive equations in pressure and log-pressure coordinates",
        "Inviscid axisymmetric Hadley circulation models (Held-Hou theory)",
        "Rossby wave propagation, stationary wave ray tracing, and topographic forcing",
        "Baroclinic instability: Charney and Eady theoretical models",
        "Wave-mean flow interactions, Eliassen-Palm flux, and Transformed Eulerian Mean (TEM)",
        "General circulation maintenance, eddy momentum fluxes, and jet stream dynamics"
      ]
    },
    {
      id: "mit-12-800",
      code: "12.800 / RES.12-001",
      title: "Fluid Dynamics of the Atmosphere and Ocean",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. Glenn Flierl. First-year graduate formulation of geophysical fluid dynamics, Navier-Stokes equations on a rotating sphere, vorticity theorems, and shallow-water approximations, paired with the 2024 Topics in Fluid Dynamics essay collection.",
      courseUrl: "https://ocw.mit.edu/courses/12-800-fluid-dynamics-of-the-atmosphere-and-ocean-fall-2004/",
      altUrl: "https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/",
      altLabel: "Open 2024 Fluid Dynamics Essays (RES.12-001)",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.800+Fluid+Dynamics+of+the+Atmosphere+and+Ocean",
      searchQuery: "MIT OCW 12.800 Fluid Dynamics Atmosphere Ocean",
      directLinks: [
        { label: "12.800 Syllabus", url: "https://ocw.mit.edu/courses/12-800-fluid-dynamics-of-the-atmosphere-and-ocean-fall-2004/pages/syllabus/" },
        { label: "12.800 Lecture Notes", url: "https://ocw.mit.edu/courses/12-800-fluid-dynamics-of-the-atmosphere-and-ocean-fall-2004/pages/lecture-notes/" },
        { label: "RES.12-001 (2024) Fluid Dynamics Book", url: "https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/" }
      ],
      lectures: [
        "Continuum mechanics, Eulerian vs. Lagrangian conservation laws",
        "Equations of state for moist air and compressible seawater",
        "Boussinesq approximation, scale analysis, and Rossby/Ekman numbers",
        "Circulation, Kelvin's theorem, and Ertel potential vorticity conservation",
        "Homogeneous shallow-water equations and Poincare/Kelvin waves",
        "Quasi-geostrophic potential vorticity equations and Rossby wave dispersion"
      ]
    },
    {
      id: "mit-12-950",
      code: "12.950",
      title: "Atmospheric and Oceanic Modeling",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. John Marshall, Prof. Kerry Emanuel, and Dr. Alistair Adcroft. Numerical methods for General Circulation Models (GCMs), finite-volume discretization, Arakawa staggered grids, and sub-grid scale parameterizations.",
      courseUrl: "https://ocw.mit.edu/courses/12-950-atmospheric-and-oceanic-modeling-spring-2004/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.950+Atmospheric+and+Oceanic+Modeling",
      searchQuery: "MIT OCW 12.950 Atmospheric and Oceanic Modeling",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-950-atmospheric-and-oceanic-modeling-spring-2004/pages/syllabus/" },
        { label: "Lecture Notes", url: "https://ocw.mit.edu/courses/12-950-atmospheric-and-oceanic-modeling-spring-2004/pages/lecture-notes/" },
        { label: "Modeling Projects", url: "https://ocw.mit.edu/courses/12-950-atmospheric-and-oceanic-modeling-spring-2004/pages/projects/" }
      ],
      lectures: [
        "Discretization of advection-diffusion equations and Courant-Friedrichs-Lewy (CFL) stability",
        "Staggered Arakawa grids (A, B, C, D grids) for geostrophic adjustment",
        "Coordinate vertical systems: Pressure, sigma, and isopycnal coordinates",
        "Parameterization of mesoscale geostrophic eddies (Gent-McWilliams scheme)",
        "Ocean surface mixed-layer and diapycnal mixing schemes (KPP)",
        "Moist cumulus convection and cloud microphysical parameterizations in GCMs"
      ]
    },
    {
      id: "mit-12-802",
      code: "12.802",
      title: "Wave Motion in the Ocean and the Atmosphere",
      provider: "MIT OpenCourseWare",
      level: "Graduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. Paola Rizzoli. Mathematical analysis of geophysical waves in rotating and stratified fluids, phase and group velocity kinematics, internal gravity waves, and equatorial wave dynamics.",
      courseUrl: "https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.802+Wave+Motion+in+the+Ocean+and+the+Atmosphere",
      searchQuery: "MIT OCW 12.802 Wave Motion in the Ocean and the Atmosphere",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/pages/syllabus/" },
        { label: "Handwritten & Typeset Lecture Notes", url: "https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/pages/lecture-notes/" }
      ],
      lectures: [
        "WKB approximation, dispersion relations, and group velocity energy propagation",
        "Internal gravity waves in continuously stratified fluids and Garrett-Munk spectra",
        "Topographic Lee waves and upward momentum transport",
        "Planetary Rossby waves, reflection at western boundaries, and beta-plane channels",
        "Equatorial beta-plane dynamics: Matsuno-Gill model, Yanai, and Equatorial Kelvin waves"
      ]
    },
    {
      id: "mit-12-006j",
      code: "12.006J / 18.353J",
      title: "Nonlinear Dynamics: Chaos",
      provider: "MIT OpenCourseWare",
      level: "Undergraduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. Daniel Rothman. Explores bifurcation theory, deterministic chaos, Lorenz attractors, and non-linear feedbacks in Earth's carbon cycle and glacial-interglacial transitions.",
      courseUrl: "https://ocw.mit.edu/courses/12-006j-nonlinear-dynamics-chaos-fall-2022/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.006J+Nonlinear+Dynamics+Chaos",
      searchQuery: "MIT OCW 12.006J Nonlinear Dynamics Chaos Daniel Rothman",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-006j-nonlinear-dynamics-chaos-fall-2022/pages/syllabus/" },
        { label: "Lecture Notes", url: "https://ocw.mit.edu/courses/12-006j-nonlinear-dynamics-chaos-fall-2022/pages/lecture-notes/" },
        { label: "Instructor Insights", url: "https://ocw.mit.edu/courses/12-006j-nonlinear-dynamics-chaos-fall-2022/pages/instructor-insights/" }
      ],
      lectures: [
        "One-dimensional flows, saddle-node bifurcations, and hysteresis in ice-albedo models",
        "Two-dimensional phase planes, limit cycles, and Hopf bifurcations",
        "Rayleigh-Benard convection and derivation of the Lorenz-63 equations",
        "Strange attractors, Lyapunov exponents, and weather predictability horizons",
        "Fractal geometry, box-counting dimension, and scale invariance in geophysics"
      ]
    },
    {
      id: "mit-12-086",
      code: "12.086 / 12.586",
      title: "Modeling Environmental Complexity",
      provider: "MIT OpenCourseWare",
      level: "Undergraduate / Graduate",
      domain: "Climate Dynamics",
      summary: "Taught by Prof. Daniel Rothman. Mathematical and statistical modeling of complex environmental phenomena, including anomalous diffusion, scaling laws in hydrology, carbon cycle perturbations, and power-law distributions.",
      courseUrl: "https://ocw.mit.edu/courses/12-086-modeling-environmental-complexity-fall-2014/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=12.086+Modeling+Environmental+Complexity",
      searchQuery: "MIT OCW 12.086 Modeling Environmental Complexity Daniel Rothman",
      directLinks: [
        { label: "Course Syllabus", url: "https://ocw.mit.edu/courses/12-086-modeling-environmental-complexity-fall-2014/pages/syllabus/" },
        { label: "Full Lecture Notes", url: "https://ocw.mit.edu/courses/12-086-modeling-environmental-complexity-fall-2014/pages/lecture-notes/" }
      ],
      lectures: [
        "Random walks, continuum diffusion, and hydrodynamic dispersion",
        "Percolation theory, porous media transport, and fracture networks",
        "Scaling laws in river networks: Hack's law and Horton's ratios",
        "Statistical mechanics of extreme climate events and heavy-tailed distributions",
        "Stochastic differential equations in global carbon cycle stability"
      ]
    },

    // =========================================================================
    // 3. REMOTE SENSING, METEOROLOGY & EARTH OBSERVATION
    // =========================================================================
    {
      id: "nasa-arset-fundamentals",
      code: "ARSET-01",
      title: "Fundamentals of Satellite Remote Sensing for Earth Systems",
      provider: "NASA Earthdata / ARSET",
      level: "Introductory / Professional",
      domain: "Remote Sensing & Observation",
      summary: "Official NASA Applied Remote Sensing Training program covering satellite orbital mechanics, active vs. passive sensors, spectral signatures, and monitoring atmospheric aerosols, hydrology, and land cover.",
      courseUrl: "https://www.earthdata.nasa.gov/learn/trainings",
      searchQuery: "NASA ARSET Fundamentals of Remote Sensing trainings",
      lectures: [
        "Electromagnetic spectrum radiative transfer and atmospheric windows",
        "Orbital mechanics: Geostationary (GOES) vs. sun-synchronous polar orbits (MODIS, VIIRS, Landsat)",
        "Spatial, spectral, radiometric, and temporal resolution trade-offs",
        "Active microwave radar (SAR, NISAR) and LiDAR (ICESat-2, GEDI) for cryosphere and biomass",
        "Retrieving geophysical Level 1 through Level 4 gridded climate products in NASA Worldview"
      ]
    },
    {
      id: "ucar-comet-meted",
      code: "METED-CLIM",
      title: "Climatology, Synoptic Meteorology & Hydroclimate Modules",
      provider: "UCAR / COMET MetEd",
      level: "Undergraduate / Professional",
      domain: "Remote Sensing & Observation",
      summary: "University Corporation for Atmospheric Research (UCAR) open training modules used by national meteorological services worldwide for weather forecasting, satellite meteorology, and hydroclimate extremes.",
      courseUrl: "https://www.meted.ucar.edu/",
      searchQuery: "UCAR COMET MetEd climate science and meteorology courses",
      lectures: [
        "Skew-T Log-P thermodynamic diagrams and convective available potential energy (CAPE)",
        "Dual-polarization radar and multispectral geostationary satellite interpretation",
        "Subseasonal-to-seasonal (S2S) climate prediction and teleconnection indices (NAO, PDO, MJO)",
        "Tropical cyclone genesis, Dvorak intensity estimation, and extratropical transition",
        "Hydrometeorological extremes, drought indices, and flash flood modeling"
      ]
    },

    // =========================================================================
    // 4. ENERGY SYSTEMS, MITIGATION & POLICY
    // =========================================================================
    {
      id: "mit-res-env-003",
      code: "RES.ENV-003",
      title: "EarthDNA's Climate 101",
      provider: "MIT OpenCourseWare",
      level: "Introductory / Non-Credit",
      domain: "Energy Systems & Mitigation",
      summary: "Taught by Prof. Dava Newman and Brandon Leshchinskiy. Combines NASA Earth observation data with system-wide decarbonization strategies, covering circular economies, clean energy transitions, and community climate action.",
      courseUrl: "https://ocw.mit.edu/courses/res-env-003-earthdnas-climate-101-fall-2019/",
      ocwSearchUrl: "https://ocw.mit.edu/search/?q=RES.ENV-003+EarthDNA",
      searchQuery: "MIT OCW RES.ENV-003 EarthDNA Climate 101 Dava Newman",
      directLinks: [
        { label: "Course Videos", url: "https://ocw.mit.edu/courses/res-env-003-earthdnas-climate-101-fall-2019/pages/videos/" },
        { label: "Presentation & Slide Deck", url: "https://ocw.mit.edu/courses/res-env-003-earthdnas-climate-101-fall-2019/pages/presentation-application-and-related-files/" }
      ],
      lectures: [
        "Earth's vital signs from space: NASA satellite monitoring of ice sheets, sea level, and CO2",
        "Impacts across heatwaves, coastal flooding, and marine ecosystems",
        "Decarbonization levers across electricity, transport, buildings, and agriculture",
        "Effective science communication and systems-level climate leadership"
      ]
    },
    {
      id: "drawdown-climate-solutions-101",
      code: "CS-101",
      title: "Climate Solutions 101",
      provider: "Project Drawdown",
      level: "Introductory",
      domain: "Energy Systems & Mitigation",
      summary: "Presented by Dr. Jonathan Foley. Quantitative breakdown of emissions sources, carbon sinks, and sector-by-sector technological and nature-based interventions capable of reaching point of drawdown.",
      courseUrl: "https://drawdown.org/climate-solutions-101",
      searchQuery: "Project Drawdown Climate Solutions 101 course",
      lectures: [
        "Stopping the sources: Global emissions attribution across electricity, food, industry, and transport",
        "Supporting the sinks: Terrestrial forest carbon, peatlands, coastal blue carbon, and ocean sinks",
        "Grid decarbonization: Utility-scale photovoltaics, wind turbines, and grid-scale storage",
        "Food system transformation: Reducing food waste, methane management, and regenerative cropping",
        "Industrial decarbonization: Refrigerant management (HFCs), alternative cement, and circular materials"
      ]
    },
    {
      id: "ucsd-bending-the-curve",
      code: "ENVR-102",
      title: "Bending the Curve: Climate Change Solutions",
      provider: "UC San Diego / Coursera",
      level: "Undergraduate",
      domain: "Energy Systems & Mitigation",
      summary: "Developed by Prof. Veerabhadran Ramanathan and University of California faculty. Multi-disciplinary roadmap integrating super-pollutant mitigation, renewable engineering, economics, and governance.",
      courseUrl: "https://www.coursera.org/learn/climate-change-solutions",
      searchQuery: "UC San Diego Bending the Curve Climate Change Solutions Coursera",
      lectures: [
        "Short-Lived Climate Pollutants (SLCPs): Black carbon, methane, tropospheric ozone, and HFCs",
        "Scalable zero-carbon electricity grids, microgrids, and electrified transportation",
        "Social justice, public health co-benefits of clean air, and climate ethics",
        "Market mechanisms: Carbon taxes, cap-and-trade systems, and green climate bonds",
        "Negative emissions technologies: Direct air capture, bioenergy with CCS, and enhanced weathering"
      ]
    },
    {
      id: "sdg-climate-action",
      code: "SDG-13",
      title: "Climate Action: Solutions for a Resilient Planet",
      provider: "SDG Academy / edX",
      level: "Intermediate",
      domain: "Policy & Adaptation",
      summary: "Developed by the UN Sustainable Development Solutions Network (SDSN). Covers international climate law, Paris Agreement NDC architecture, deep decarbonization pathways, and adaptation finance.",
      courseUrl: "https://www.edx.org/school/sdg-academy",
      searchQuery: "SDG Academy Climate Action Solutions for a Resilient Planet edX",
      lectures: [
        "UNFCCC history: From Kyoto Protocol to the Paris Agreement 1.5°C/2°C architecture",
        "Nationally Determined Contributions (NDCs) and Long-Term Low-Emission Development Strategies",
        "Decarbonizing hard-to-abate sectors: Aviation, maritime shipping, steel, and ammonia",
        "Climate risk insurance, Loss and Damage funds, and sovereign climate finance",
        "Ecosystem-based adaptation, coastal flood defense, and climate-resilient agriculture"
      ]
    }
  ],

  publications: [
    // =========================================================================
    // 1. INTERGOVERNMENTAL & AUTHORITATIVE SCIENTIFIC REPORTS
    // =========================================================================
    {
      category: "Intergovernmental Assessments & Global Status Reports",
      items: [
        {
          title: "IPCC Sixth Assessment Report (AR6): The Physical Science Basis (WG I)",
          author: "Intergovernmental Panel on Climate Change (IPCC)",
          year: "2021",
          url: "https://www.ipcc.ch/report/ar6/wg1/",
          description: "Comprehensive scientific assessment of radiative forcing, paleoclimate context, equilibrium climate sensitivity, carbon budgets, regional climate projections, and extreme event attribution."
        },
        {
          title: "IPCC Sixth Assessment Report (AR6): Impacts, Adaptation and Vulnerability (WG II)",
          author: "Intergovernmental Panel on Climate Change (IPCC)",
          year: "2022",
          url: "https://www.ipcc.ch/report/ar6/wg2/",
          description: "Evaluates observed and projected impacts on terrestrial, freshwater, and marine ecosystems, human health, food security, urban infrastructure, and limits to adaptation."
        },
        {
          title: "IPCC Sixth Assessment Report (AR6): Mitigation of Climate Change (WG III)",
          author: "Intergovernmental Panel on Climate Change (IPCC)",
          year: "2022",
          url: "https://www.ipcc.ch/report/ar6/wg3/",
          description: "Detailed techno-economic assessment of global emission trends, integrated assessment models (IAMs), sectoral decarbonization pathways, and carbon dioxide removal (CDR)."
        },
        {
          title: "IPCC AR6 Synthesis Report (SYR) & Special Reports (SR15, SROCC, SRCCL)",
          author: "Intergovernmental Panel on Climate Change (IPCC)",
          year: "2018–2023",
          url: "https://www.ipcc.ch/reports/",
          description: "Includes the AR6 Synthesis Report alongside landmark Special Reports on Global Warming of 1.5°C, The Ocean and Cryosphere in a Changing Climate, and Climate Change and Land."
        },
        {
          title: "UNEP Emissions Gap & Adaptation Gap Reports",
          author: "United Nations Environment Programme (UNEP)",
          year: "Annual Series",
          url: "https://www.unep.org/resources/emissions-gap-report",
          description: "Annual authoritative scientific audits quantifying the gap between pledged national GHG reductions (NDCs) and the emission pathways required to keep global warming below 1.5°C and 2°C."
        },
        {
          title: "WMO State of the Global Climate & Greenhouse Gas Bulletins",
          author: "World Meteorological Organization (WMO)",
          year: "Annual Monitoring",
          url: "https://wmo.int/our-mandate/climate/state-of-the-global-climate",
          description: "Official global tracking of atmospheric mole fractions of CO2, CH4, and N2O, ocean heat content, global mean sea level rise, glacier mass balance, and polar sea-ice extent."
        },
        {
          title: "Fifth National Climate Assessment (NCA5)",
          author: "U.S. Global Change Research Program (USGCRP)",
          year: "2023",
          url: "https://nca2023.globalchange.gov/",
          description: "Congressionally mandated multi-agency report analyzing physical earth system trends, hydrological shifts, regional socioeconomic risks, and mitigation progress across North America."
        },
        {
          title: "Copernicus European State of the Climate (ESOTC) & ERA5 Reanalysis",
          author: "Copernicus Climate Change Service (C3S) / ECMWF",
          year: "Annual / Continuous",
          url: "https://climate.copernicus.eu/esotc",
          description: "Operational climate reanalysis monitoring surface air temperatures, marine heatwaves, European cryosphere changes, and global hydrological anomalies."
        },
        {
          title: "IEA Net Zero Roadmap & World Energy Outlook",
          author: "International Energy Agency (IEA)",
          year: "Annual / Flagship",
          url: "https://www.iea.org/reports/net-zero-roadmap-a-global-pathway-to-keep-the-15-0c-goal-in-reach",
          description: "Quantitative energy systems modeling detailing clean energy investment milestones, fossil fuel demand peaks, critical mineral supply chains, and power grid transformation."
        }
      ]
    },

    // =========================================================================
    // 2. OPEN-ACCESS TEXTBOOKS & COMPUTATIONAL MONOGRAPHS
    // =========================================================================
    {
      category: "Open-Access University Textbooks & Computational Books",
      items: [
        {
          title: "The Climate Laboratory (Interactive Python & climlab Textbook)",
          author: "Brian E. J. Rose (University at Albany, SUNY)",
          year: "Open Access / Continuous",
          url: "https://brian-rose.github.io/ClimateLaboratoryBook/",
          description: "Executable Jupyter-based textbook teaching radiative-convective equilibrium, energy balance models, feedbacks, and atmospheric dynamics using the open-source Python climlab package."
        },
        {
          title: "Introduction to Climate Science (CC BY-NC 4.0)",
          author: "Andreas Schmittner (Oregon State University)",
          year: "Open Textbook Edition",
          url: "https://open.oregonstate.education/climatescience/",
          description: "Comprehensive undergraduate open textbook covering climate observations, paleoclimate archives, electromagnetic radiation budgets, carbon isotopes, ocean acidification, climate models, and ethics."
        },
        {
          title: "Practical Meteorology: An Algebra-based Survey of Atmospheric Science",
          author: "Roland Stull (University of British Columbia)",
          year: "Open Access (CC BY-NC-SA 4.0)",
          url: "https://www.eoas.ubc.ca/books/Practical_Meteorology/",
          description: "940-page open-access reference covering atmospheric thermodynamics, moisture variables, atmospheric stability, cloud microphysics, geostrophic winds, general circulation, and weather radar."
        },
        {
          title: "Climate System Dynamics and Modelling",
          author: "Hugues Goosse (Université catholique de Louvain)",
          year: "Open Educational Resource / Cambridge",
          url: "https://www.climate.be/textbook/",
          description: "Detailed quantitative treatment of the coupled atmosphere-ocean-cryosphere-biosphere system, numerical model hierarchies, data assimilation, and quaternary climate dynamics."
        },
        {
          title: "Introduction to Physical Oceanography",
          author: "Robert H. Stewart (Texas A&M University)",
          year: "Open Access Monograph",
          url: "https://oaktrust.library.tamu.edu/handle/1969.1/160688",
          description: "Classic open-access university textbook detailing oceanic heat and water budgets, equations of motion, Coriolis effects, Ekman layers, geostrophic currents, wind-driven gyres, and equatorial oceanography."
        },
        {
          title: "Principles of Planetary Climate (Companion Code & Workbook)",
          author: "Raymond T. Pierrehumbert (University of Oxford)",
          year: "Open Companion Repository",
          url: "https://geosci.uchicago.edu/~rtp1/PrinciplesPlanetaryClimate/",
          description: "Python scripts, spectroscopic datasets, and computational exercises accompanying Pierrehumbert's planetary climate physics monograph (runaway greenhouse, snowball Earth, and real-gas radiation)."
        },
        {
          title: "Atmospheric Chemistry: Open Lecture Notes & Models",
          author: "Daniel J. Jacob (Harvard University)",
          year: "Open Author Archive",
          url: "https://acmg.seas.harvard.edu/education",
          description: "Full open-access textbook chapters and lecture slides covering atmospheric transport, box models, stratospheric ozone photochemistry, tropospheric oxidizing capacity (OH), and aerosol radiative forcing."
        }
      ]
    },

    // =========================================================================
    // 3. INTERACTIVE SIMULATORS & EMPIRICAL DATA PORTALS
    // =========================================================================
    {
      category: "Open Climate Simulators & Empirical Data Portals",
      items: [
        {
          title: "IPCC WGI Interactive Atlas",
          author: "IPCC Working Group I / Santander Meteorology Group",
          year: "AR6 Interactive Tool",
          url: "https://interactive-atlas.ipcc.ch/",
          description: "Spatial and temporal analysis tool for exploring CMIP6, CMIP5, and CORDEX climate projections, extreme heat/precipitation indices, and paleoclimate reconstructions across global reference regions."
        },
        {
          title: "University of Chicago Online Climate Models (MODTRAN, RRTM, Carbon Cycle)",
          author: "David Archer (University of Chicago)",
          year: "Interactive Web Simulators",
          url: "https://climatemodels.uchicago.edu/",
          description: "Browser-based execution of research-grade radiative transfer models (MODTRAN, RRTM), 1D ice-albedo Energy Balance Models, Milankovitch orbital insolation calculators, and GEOCARB carbon models."
        },
        {
          title: "En-ROADS & C-ROADS Global Climate Policy Simulators",
          author: "Climate Interactive & MIT Sloan Sustainability Initiative",
          year: "Continuous",
          url: "https://www.climateinteractive.org/en-roads/",
          description: "Fast system-dynamics climate and energy simulation model testing how carbon pricing, electrification, renewable subsidies, methane controls, and afforestation impact global temperature through 2100."
        },
        {
          title: "NOAA Global Monitoring Laboratory (GML) & Climate.gov",
          author: "National Oceanic and Atmospheric Administration (NOAA)",
          year: "Real-Time Observational Data",
          url: "https://gml.noaa.gov/ccgg/trends/",
          description: "Direct access to the Mauna Loa CO2 Keeling Curve, global flask network measurements of CH4, N2O, and SF6, halocarbon trends, and surface radiation network observations."
        },
        {
          title: "NASA GISS Surface Temperature Analysis (GISTEMP v4)",
          author: "NASA Goddard Institute for Space Studies",
          year: "Monthly Updates",
          url: "https://data.giss.nasa.gov/gistemp/",
          description: "Empirical reconstruction of global surface temperature anomalies combining meteorological station data (GHCN) and ocean sea-surface temperature measurements (ERSST), with open source code."
        }
      ]
    }
  ]
};