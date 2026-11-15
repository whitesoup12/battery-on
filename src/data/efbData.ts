export interface EfbPerformanceStep {
  stepNumber: number;
  title: string;
  description: string;
  targetField: string;
  uiValue: string;
  whyItMatters: string;
  pilotTip?: string;
}

export const EFB_TAKEOFF_PERF_STEPS: EfbPerformanceStep[] = [
  {
    stepNumber: 1,
    title: 'Select Departure Airport & Runway',
    description:
      'Open the Performance app on your cockpit EFB tablet. Tap the Airport field and confirm your departure ICAO (e.g., KLAX), then select your departure runway (e.g., 25R).',
    targetField: 'DEP AIRPORT / RUNWAY',
    uiValue: 'KLAX / 25R (12,091 ft)',
    whyItMatters:
      'Available Takeoff Run (TORA) and runway slope directly determine how much thrust reduction can safely be commanded without running out of pavement before rotation.',
    pilotTip:
      'Selecting the runway also takes into account obstacle clearance gradients at the departure end of that specific strip.',
  },
  {
    stepNumber: 2,
    title: 'Sync Live Weather / METAR',
    description:
      'Tap the "SYNC METAR" or "FETCH WEATHER" button on the EFB. This pulls live simulator temperature, barometric pressure, wind direction/velocity, and runway surface condition.',
    targetField: 'WEATHER & SURFACE',
    uiValue: '250°/12KT • OAT 18°C • QNH 29.92 • DRY',
    whyItMatters:
      'Headwinds increase lift and shorten takeoff rolls, while high ambient temperatures reduce air density. Wet or contaminated runways reduce friction, demanding lower V1 speeds.',
    pilotTip:
      'Always ensure the runway condition matches simulator weather: if it is raining, switch runway condition from DRY to WET to calculate safer rejected-takeoff stopping distances.',
  },
  {
    stepNumber: 3,
    title: 'Import Current Aircraft Weight',
    description:
      'Tap "SYNC AIRCRAFT" or "COPY WEIGHT". The EFB queries your current zero fuel weight and fuel in tanks to compute Takeoff Gross Weight (TOW).',
    targetField: 'AIRCRAFT GROSS WEIGHT',
    uiValue: 'ZFW: 61.5 T • TOW: 68.8 T (Airbus) / 152.0 KLBS (Boeing)',
    whyItMatters:
      'Heavier aircraft require higher speeds for the wings to generate sufficient lift to unstick from the ground ($V_R$) and safely climb on one engine ($V_2$).',
    pilotTip:
      'Ensure fueling and passenger boarding are completed before calculating, otherwise you will have to recalculate if passengers are added later.',
  },
  {
    stepNumber: 4,
    title: 'Select Flap Configuration & Air Conditioning',
    description:
      'Choose your planned takeoff flap setting (e.g., Flaps 1+F on Airbus, Flaps 5 on Boeing). Specify whether Air Conditioning Packs will be ON or OFF during takeoff.',
    targetField: 'AERO CONFIG & BLEEDS',
    uiValue: 'FLAPS 1+F (or 5) • PACKS ON • ANTI-ICE OFF',
    whyItMatters:
      'Higher flap settings produce more lift for shorter runways but increase drag. Takeoff with Air Conditioning Packs OFF provides up to 5% extra engine thrust by not bleeding compressor air.',
    pilotTip:
      'Normal airline standard is Takeoff with Packs ON for passenger comfort, unless high takeoff weight or short runway requires Packs OFF.',
  },
  {
    stepNumber: 5,
    title: 'Tap "CALCULATE" to Compute Speeds & Trim',
    description:
      'Press the prominent "CALCULATE" button. In a fraction of a second, the aerodynamic computer calculates maximum allowed thrust reduction, exact V-speeds, and mechanical pitch trim.',
    targetField: 'CALCULATION OUTPUT',
    uiValue: 'V1: 142 • VR: 144 • V2: 148 • FLEX: 58°C • TRIM: 1/UP0.5',
    whyItMatters:
      'Provides FAA/EASA certified numbers tailored precisely to the current weather, runway length, obstacle profile, and aircraft weight.',
    pilotTip:
      'The calculated Flex / Assumed temperature (e.g. 58°C) tells the FADEC how much it can de-rate the engines to prevent thermal stress and save thousands in engine maintenance.',
  },
  {
    stepNumber: 6,
    title: 'Send Directly to FMS / MCDU (One-Click Sync)',
    description:
      'Tap the "SEND TO FMS" or "EXPORT TO FMS" button on the EFB. Look down at your MCDU/FMC: all speeds, flex temperature, and pitch trim units are instantly transferred without typing!',
    targetField: 'FMS DATA LINK',
    uiValue: 'SENT ➔ MCDU / FMC TAKEOFF PAGE AUTO-POPULATED',
    whyItMatters:
      'Eliminates pilot scratchpad typing errors (which are a leading cause of runway excursions in real aviation).',
    pilotTip:
      'Open the Takeoff page on your CDU (PERF on Airbus, TAKEOFF REF on Boeing) and tap each speed key once to confirm and display speed bugs on the Primary Flight Display.',
  },
];

export interface EfbFeatureDetail {
  id: string;
  title: string;
  category: 'PERF' | 'DISPATCH' | 'SERVICES' | 'SIMBRIEF' | 'SETTINGS';
  icon: string;
  summary: string;
  keyFunctions: string[];
  howToUse: string;
  pilotTip: string;
}

export const EFB_FEATURE_LIST: EfbFeatureDetail[] = [
  {
    id: 'efb-perf',
    title: 'Performance & V-Speed Calculator',
    category: 'PERF',
    icon: 'Gauge',
    summary:
      'Computes certified takeoff and landing distances, optimal V-speeds (V1, Vr, V2), Assumed/Flex thrust reductions, and stabilizer trim.',
    keyFunctions: [
      'Takeoff Performance: Runway length, slope, wind, surface condition (Dry/Wet).',
      'One-Click FMS Uplink: Sends V1, VR, V2, Flex Temp, and Trim directly to the MCDU/FMC.',
      'Landing Performance: Calculates required runway distance based on weight, flap selection, and autobrake mode (Low/Med/Max).',
      'Go-Around Gradient check: Verifies engine-out climb performance over departure obstacles.',
    ],
    howToUse:
      'Open Performance app on tablet. Tap "Sync Weather" and "Sync Weight". Pick runway and flap setting. Tap "Calculate", then tap "Send to FMS".',
    pilotTip:
      'On rainy or snowy days, always remember to toggle the runway condition to WET or CONTAMINATED. This lowers V1 so you can safely stop on slippery tarmac.',
  },
  {
    id: 'efb-simbrief',
    title: 'SimBrief Integration & OFP Viewer',
    category: 'SIMBRIEF',
    icon: 'CloudDownload',
    summary:
      'Directly links your SimBrief account to display your full Operational Flight Plan (OFP), weather reports, and flight summary in the cockpit.',
    keyFunctions: [
      'Pilot ID Linking: Enter your numeric SimBrief Pilot ID or username in EFB Settings.',
      'Live OFP Import: Pulls current flight number, route string, cruising altitude, payload, and block fuel.',
      'Interactive Route Map: Displays your enroute waypoints, FIR boundaries, and alternate airports on a high-res chart.',
      'Weather Briefing: Live METAR, TAF, SIGMETs, and enroute turbulence forecasts.',
    ],
    howToUse:
      'In EFB Settings, type your SimBrief Pilot ID. Switch to the SimBrief or Dispatch tab, then tap "Import Latest OFP".',
    pilotTip:
      'Generate your flight plan on SimBrief before spawning in MSFS. When you turn on the cockpit battery and EFB, your flight plan will be ready to import with one click.',
  },
  {
    id: 'efb-dispatch',
    title: 'Payload & Fuel Loading (Mass & Balance)',
    category: 'DISPATCH',
    icon: 'Scale',
    summary:
      'Controls passenger boarding, cargo distribution, and aircraft refueling directly through realistic simulation flows.',
    keyFunctions: [
      'Passenger Boarding: Visual cabin seating charts with real-time, fast, or instant boarding options.',
      'Cargo Loading: Forward, Aft, and Bulk cargo bay loading.',
      'Refueling: Match SimBrief planned block fuel with a single tap or use fuel sliders.',
      'Center of Gravity (CG): Visual MAC percentage graph ensuring load stays within safe forward and aft flight limits.',
    ],
    howToUse:
      'Navigate to the "Aircraft" or "Payload & Fuel" page. Tap "Sync with OFP" to match SimBrief weights, then select "Start Boarding".',
    pilotTip:
      'If you are flying on VATSIM or tight on time, select "Instant Boarding" in the EFB settings to load passengers and fuel immediately without waiting 15 minutes.',
  },
  {
    id: 'efb-services',
    title: 'Ground Services & Pushback Tug Control',
    category: 'SERVICES',
    icon: 'Truck',
    summary:
      'Controls ground equipment, jetways, passenger stairs, baggage loaders, external power carts, and interactive pushback steering.',
    keyFunctions: [
      'External Power Cart (GPU): Connects/disconnects ground power cart and wheel chocks.',
      'Jetways & Stairs: Calls airport jetway or opens passenger boarding doors.',
      'Catering & Baggage: Summons baggage belt loaders and catering trucks.',
      'Interactive Pushback Tug: Controls pushback steering with interactive directional arrows, reverse speed, and parking brake coordination.',
    ],
    howToUse:
      'Open the Ground Services page. Tap "GPU" to connect ground power before starting APU. During pushback, tap "Call Tug" and steer using the on-screen rudder arrows.',
    pilotTip:
      'Connecting the GPU on the EFB is what causes the green "AVAIL" light to illuminate on the overhead EXT PWR pushbutton!',
  },
  {
    id: 'efb-settings',
    title: 'Cockpit Customization & Sim Options',
    category: 'SETTINGS',
    icon: 'Sliders',
    summary:
      'Customizes avionics behavior, measurement units, audio volume, and simulation realism settings.',
    keyFunctions: [
      'Units Toggle: Switch between Metric (Kilograms / hPa) and Imperial (Pounds / inHg).',
      'IRS Alignment Time: Instant (0 sec), Fast (1 min), or Realistic (7 min).',
      'Cockpit Sound Balancing: Adjust engine volume, avionics cooling fan hum, and passenger cabin announcements.',
      'Dual Tablet Sync: Control Captain and First Officer side tablets independently.',
    ],
    howToUse:
      'Tap the Settings gear icon in the lower corner of the EFB to configure units and realism preferences.',
    pilotTip:
      'Set IRS Alignment to "Fast" if you want realistic startup flow without having to wait 7 full minutes at the gate.',
  },
];

export interface PreCreatedRouteWorkflow {
  system: 'Airbus' | 'Boeing';
  aircraftName: string;
  uplinkMethod: string;
  autoImportedFields: string[];
  mandatoryManualSteps: string[];
  stepByStepFlow: {
    step: number;
    title: string;
    action: string;
    notes: string;
  }[];
}

export const PRE_CREATED_ROUTE_AIRBUS: PreCreatedRouteWorkflow = {
  system: 'Airbus',
  aircraftName: 'Airbus A320neo (v2) & A330-300 (iniBuilds)',
  uplinkMethod: 'SimBrief / EFB Direct ATSU / AOC Uplink',
  autoImportedFields: [
    'Origin & Destination Airports (FROM/TO)',
    'Alternate Airport & Distance',
    'Flight Number & Callsign',
    'Cost Index (CI)',
    'Cruise Flight Level & Temperature Profile',
    'Enroute Airways & Navigational Fixes',
    'Enroute Forecast Winds & Tropopause Altitude',
  ],
  mandatoryManualSteps: [
    'Select Active Departure Runway & SID (ATC winds determine runway)',
    'Select Destination STAR & Approach Procedure',
    'Inspect & Clear Discontinuities on F-PLAN',
    'Verify ZFW / ZFWCG on INIT B page (double-click auto-fill)',
    'Calculate V-speeds on EFB & Send to Takeoff PERF page',
  ],
  stepByStepFlow: [
    {
      step: 1,
      title: 'Generate Flight on SimBrief & Import into EFB',
      action: 'Generate OFP on SimBrief. On cockpit EFB tablet, open SimBrief page and tap "FETCH LATEST OFP".',
      notes: 'Links flight data to the aircraft’s Air Traffic Services Unit (ATSU).',
    },
    {
      step: 2,
      title: 'MCDU: Uplink Route Header (INIT REQUEST)',
      action: 'Press INIT key. Press LSK 2R (INIT REQUEST*). Scratchpad flashes "UPLINK INSERT".',
      notes: 'Populates FROM/TO (e.g. KLAX/KSFO), ALTN, FLT NBR, Cost Index, and CRZ FL automatically!',
    },
    {
      step: 3,
      title: 'MCDU: Align IRS Coordinates',
      action: 'Verify GPS coordinates match gate position. Press LSK 6L (ALIGN IRS).',
      notes: 'Synchronizes ADIRS with aircraft position.',
    },
    {
      step: 4,
      title: 'MCDU: Assign Departure Runway & SID',
      action: 'Press F-PLAN key. Tap LSK 1L (KLAX). Tap DEPARTURE. Select active runway (e.g. 25R) and SID (e.g. CASTA2.AVE). Tap INSERT* (LSK 6R).',
      notes: 'Crucial: Uplink routes do not include runways because real-world winds dictate active runway at pushback.',
    },
    {
      step: 5,
      title: 'MCDU: Assign Arrival STAR & Approach',
      action: 'On F-PLAN, scroll down to KSFO. Tap LSK next to KSFO, tap ARRIVAL, select ILS 28R and STAR BSR3. Tap INSERT*.',
      notes: 'Ensures vertical descent path (T/D) and fuel predictions calculate accurately.',
    },
    {
      step: 6,
      title: 'MCDU: Clear Discontinuities & Verify in PLAN Mode',
      action: 'Press CLR key on any "--- F-PLAN DISCONTINUITY ---". Set EFIS knob to PLAN and step through waypoints.',
      notes: 'Verifies enroute airway connections were imported smoothly.',
    },
    {
      step: 7,
      title: 'MCDU: Confirm Weights on INIT B',
      action: 'Press INIT key, press horizontal arrow (➔) for INIT B. Double-tap LSK 1R (ZFW/ZFWCG) to auto-read weight. Enter Block Fuel.',
      notes: 'INIT B locks into FUEL PRED once engines start.',
    },
    {
      step: 8,
      title: 'EFB: Calculate Takeoff V-Speeds & Send to FMS',
      action: 'On EFB Performance page: Tap "Sync Weather", tap "Sync Weight", tap "Calculate", tap "SEND TO FMS".',
      notes: 'Opens PERF page on MCDU with V1, VR, V2, FLAPS/THS, and FLEX TEMP pre-filled!',
    },
  ],
};

export const PRE_CREATED_ROUTE_BOEING: PreCreatedRouteWorkflow = {
  system: 'Boeing',
  aircraftName: 'Boeing 737 MAX 8 & 747-8 Intercontinental (Asobo)',
  uplinkMethod: 'MSFS Flight Plan / CO ROUTE / RTE REQUEST',
  autoImportedFields: [
    'Origin & Destination Airports',
    'Flight Number',
    'Cruise Altitude',
    'Enroute Airways (VIA) & Fixes (TO)',
    'Cost Index (if exported via modern EFB)',
  ],
  mandatoryManualSteps: [
    'POS INIT: Copy GPS coordinates to SET IRS POS (line 5R)',
    'Select Departure Runway & SID on DEP/ARR page',
    'Select Arrival STAR & Approach on DEP/ARR page',
    'Clear Discontinuities on LEGS page, ACTIVATE, and press EXEC',
    'PERF INIT: Double-click ZFW, enter Reserves & Cost Index, press EXEC',
    'TAKEOFF REF: Confirm Flaps, CG/Trim, and tap V-speed bugs',
  ],
  stepByStepFlow: [
    {
      step: 1,
      title: 'Load Flight Plan into Simulator / EFB',
      action: 'Load SimBrief route into MSFS world map or use the cockpit EFB flight plan loader.',
      notes: 'Pre-stages the flight plan in the aircraft’s avionics memory.',
    },
    {
      step: 2,
      title: 'FMC: Position Initialization (POS INIT)',
      action: 'Press INIT REF key. Tap POS INIT (LSK 6R). Enter Ref Airport (KLAX), copy GPS coordinates (LSK 4R) into SET IRS POS (LSK 5R).',
      notes: 'Required for IRS ring laser gyro alignment.',
    },
    {
      step: 3,
      title: 'FMC: Route Request / Company Route Load',
      action: 'Press RTE key. Tap "RTE REQUEST" (or type route name into CO ROUTE LSK 2L). Tap "LOAD", tap "ACTIVATE", press the lighted EXEC key.',
      notes: 'Populates origin, destination, enroute airways (VIA), and waypoints (TO).',
    },
    {
      step: 4,
      title: 'FMC: Assign Departure Runway & SID',
      action: 'Press DEP ARR key. Tap LSK 1L (KLAX DEP). Select runway (25R), SID (CASTA2), and transition (AVE). Press EXEC.',
      notes: 'Connects departure runway to the first enroute fix.',
    },
    {
      step: 5,
      title: 'FMC: Assign Arrival & Approach',
      action: 'Press DEP ARR key. Tap LSK 2R (KSFO ARR). Select approach (ILS 28R), STAR (BSR3), and transition. Press EXEC.',
      notes: 'Ties enroute termination into the final approach localizer.',
    },
    {
      step: 6,
      title: 'FMC: Bridge Discontinuities & PLAN Mode Verification',
      action: 'Press LEGS key. If empty boxes "□□□□□" appear, press LSK below gap, paste over boxes, press EXEC. Turn EFIS to PLAN and tap STEP.',
      notes: 'Ensures LNAV will fly a solid magenta flight track without disconnects.',
    },
    {
      step: 7,
      title: 'FMC: Performance Initialization (PERF INIT)',
      action: 'Press INIT REF. Double-click LSK 1L (ZFW). Enter Reserves (5.0), Cost Index (35), Cruise Alt (FL280). Press lighted EXEC key.',
      notes: 'Enables VNAV speed and altitude calculations.',
    },
    {
      step: 8,
      title: 'EFB: Compute Takeoff V-Speeds & Send to FMC',
      action: 'On EFB Performance page: Sync weather & weights, tap Calculate, tap "SEND TO FMC". In FMC TAKEOFF REF page, tap V1, VR, V2 bugs to confirm.',
      notes: 'Illuminates V-speed bugs on the Primary Flight Display speed tape.',
    },
  ],
};
