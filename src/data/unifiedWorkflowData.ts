import { AircraftUnifiedWorkflowData } from '../types/fms';

export const AIRBUS_UNIFIED_WORKFLOW: AircraftUnifiedWorkflowData = {
  aircraftId: 'a320neo-v2',
  aircraftName: 'Airbus A320neo (v2) & A330-300',
  family: 'Airbus',
  systemName: 'Thales MCDU + FlyPad EFB Tablet',
  workedRouteSummary: {
    origin: '[ORIGIN AIRPORT]',
    destination: '[DESTINATION AIRPORT]',
    alternate: '[ALTERNATE AIRPORT]',
    runway: 'Assigned Departure Runway',
    sid: 'Assigned SID (Standard Departure)',
    enroute: 'Imported Airways & Waypoints (OFP)',
    star: 'Assigned STAR (Standard Arrival)',
    approach: 'Expected Approach (ILS / RNAV)',
    cruiseAlt: 'Planned Cruise FL (e.g. FL340)',
    costIndex: 'Planned Airline CI (e.g. 25-40)',
    zfw: 'Current Loadout ZFW',
    blockFuel: 'SimBrief Block Fuel',
  },
  steps: [
    {
      stepNumber: 1,
      device: 'EFB',
      deviceScreenName: 'EFB: Ground Services',
      title: 'Connect Ground Power (GPU) & Wheel Chocks',
      actionInstruction:
        'Turn on the cockpit EFB tablet. Open the Ground Services page. Tap "CONNECT GPU" and confirm wheel chocks are in place.',
      explanation:
        'Connecting the Ground Power Unit cart on the EFB provides external AC electricity to the aircraft buses before starting the APU. Look at the overhead electrical panel: the EXT PWR pushbutton will illuminate with a green "AVAIL" annunciator.',
      pilotTip:
        'Press the overhead EXT PWR pushbutton when AVAIL is lit to energize the cockpit displays without burning auxiliary fuel at the gate.',
      efbScreenData: {
        app: 'SERVICES',
        title: 'GROUND SERVICES & GSE',
        badge: 'RAMP CONTROL',
        fields: [
          { label: 'GROUND POWER (GPU)', value: 'CONNECTED (115V AC)', highlight: true },
          { label: 'WHEEL CHOCKS', value: 'INSERTED', highlight: true },
          { label: 'PASSENGER JETWAY / DOORS', value: 'ATTACHED TO CABIN' },
          { label: 'BAGGAGE LOADERS', value: 'STANDBY AT CARGO BAY' },
        ],
        primaryButtonText: 'GPU CONNECTED • AVAIL ON',
      },
    },
    {
      stepNumber: 2,
      device: 'EFB',
      deviceScreenName: 'EFB: SimBrief OFP Fetch',
      title: 'Import Active SimBrief Operational Flight Plan (OFP)',
      actionInstruction:
        'Navigate to the SimBrief / Dispatch page on the tablet. Tap "FETCH LATEST OFP" (or confirm your SimBrief Pilot ID).',
      explanation:
        'The EFB contacts SimBrief servers and downloads your active flight plan ([ORIGIN] ➔ [DESTINATION]), passenger manifest, zero fuel weight, planned cruise level, and required block fuel into the aircraft’s data-link.',
      pilotTip:
        'Generate your flight plan on SimBrief before spawning in MSFS 2024 so the latest OFP is immediately staged and ready to import.',
      efbScreenData: {
        app: 'SIMBRIEF',
        title: 'SIMBRIEF FLIGHT DISPATCH',
        badge: 'OFP READY',
        fields: [
          { label: 'ROUTE PAIR', value: '[ORIGIN] ➔ [DESTINATION]', highlight: true },
          { label: 'PLANNED ROUTE', value: 'Assigned SID • Enroute Airways • STAR' },
          { label: 'CRZ ALT / CI', value: 'Planned FL / Airline CI', highlight: true },
          { label: 'PASSENGERS / PAYLOAD', value: 'Booked Manifest & Cargo Loaded' },
          { label: 'PLANNED BLOCK FUEL', value: 'SimBrief Calculated Block Fuel', highlight: true },
        ],
        primaryButtonText: 'IMPORT OFP TO AIRCRAFT',
        resultText: 'OFP Successfully Staged for ATSU Uplink',
      },
    },
    {
      stepNumber: 3,
      device: 'EFB',
      deviceScreenName: 'EFB: Payload & Fuel Loading',
      title: 'Board Passengers & Load Planned Fuel',
      actionInstruction:
        'Switch to the Payload & Fuel tab. Tap "SYNC WEIGHTS WITH OFP", select "Fast" or "Instant" boarding, and tap "START BOARDING & REFUEL".',
      explanation:
        'This physically loads the passengers, baggage, and cargo into the aircraft simulation stations and pumps the planned fuel into the wing tanks, setting your takeoff Center of Gravity (% MAC).',
      pilotTip:
        'Select "Instant" boarding if you want to skip the 15-minute passenger boarding timer and get right into avionics configuration.',
      efbScreenData: {
        app: 'DISPATCH',
        title: 'MASS & BALANCE DISPATCH',
        badge: 'BOARDING COMPLETE',
        fields: [
          { label: 'ZERO FUEL WEIGHT (ZFW)', value: 'SYNCED FROM SIMBRIEF OFP', highlight: true },
          { label: 'ZFW CENTER OF GRAVITY', value: 'CALCULATED % MAC', highlight: true },
          { label: 'FUEL LOADED (WING TANKS)', value: 'MATCHED TO BLOCK FUEL', highlight: true },
          { label: 'TAKEOFF GROSS WT (TOW)', value: 'ZFW + FUEL - TAXI BURN', highlight: true },
        ],
        primaryButtonText: 'BOARDING & REFUEL COMPLETED',
      },
    },
    {
      stepNumber: 4,
      device: 'FMS',
      deviceScreenName: 'MCDU: INIT A (ATSU Uplink)',
      title: 'Uplink Flight Plan Header via INIT REQUEST',
      actionInstruction:
        'Look down at the center pedestal MCDU. Press the INIT key. Press LSK 2R (INIT REQUEST*). Scratchpad flashes "UPLINK INSERT".',
      explanation:
        'The Thales FMGS queries the EFB data-link and instantly populates FROM/TO ([ORIGIN]/[DEST]), ALTN, Flight Number, Cost Index, and Cruise Altitude with zero manual scratchpad typing!',
      pilotTip:
        'Notice the departure runway is intentionally left blank by the uplink: real-world airliners do not auto-fill runways because local ground winds dictate the active runway at pushback.',
      troubleshootingLink: {
        label: 'Uplink failed or scratchpad shows error?',
        targetTab: 'ERRORS',
      },
      highlightLsk: '2R',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '1/2',
        l1: { label: 'CO RTE', value: 'NONE', color: 'green' },
        r1: { label: 'FROM/TO', value: 'ORIG/DEST', color: 'cyan' },
        l2: { label: 'ALTN/CO RTE', value: 'ALTN', color: 'cyan' },
        r2: { label: 'INIT REQUEST*', value: 'UPLINK OK', color: 'green' },
        l3: { label: 'FLT NBR', value: '[FLT NBR]', color: 'cyan' },
        l5: { label: 'COST INDEX', value: '[ CI ]', color: 'cyan' },
        r5: { label: 'CRZ FL/TEMP', value: 'FLxxx/--°', color: 'cyan' },
        l6: { label: '', value: '<ALIGN IRS', color: 'cyan' },
      },
    },
    {
      stepNumber: 5,
      device: 'FMS',
      deviceScreenName: 'MCDU: INIT A',
      title: 'Synchronize Inertial Navigation (ALIGN IRS)',
      actionInstruction:
        'Verify the GPS coordinates on the INIT A page match your current gate location. Press LSK 6L (ALIGN IRS).',
      explanation:
        'Sends the departure airport gate coordinates to the ADIRS ring laser gyros. The prompt changes to "ALIGNING" and synchronizes within 7 minutes (or instantly if configured in EFB settings).',
      pilotTip:
        'Ensure the overhead ADIRS 1, 2, and 3 rotary selectors were switched from OFF to NAV during your overhead scan.',
      highlightLsk: '6L',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '1/2',
        l1: { label: 'CO RTE', value: 'NONE', color: 'green' },
        r1: { label: 'FROM/TO', value: 'ORIG/DEST', color: 'green' },
        l3: { label: 'FLT NBR', value: '[FLT NBR]', color: 'green' },
        l4: { label: 'LAT', value: 'GATE GPS LAT', color: 'green' },
        r4: { label: 'LONG', value: 'GATE GPS LONG', color: 'green' },
        l5: { label: 'COST INDEX', value: '[ CI ]', color: 'green' },
        r5: { label: 'CRZ FL/TEMP', value: 'FLxxx/--°', color: 'green' },
        l6: { label: '', value: 'IRS ALIGNED', color: 'green' },
      },
    },
    {
      stepNumber: 6,
      device: 'FMS',
      deviceScreenName: 'MCDU: F-PLAN (Departure Lateral Revision)',
      title: 'Assign Departure Runway & SID from ATC Clearance',
      actionInstruction:
        'Press the F-PLAN key. Tap LSK 1L (green origin airport). Tap DEPARTURE (LSK 1L). Select your assigned runway, SID (Standard Instrument Departure), and transition. Tap INSERT* (LSK 6R).',
      explanation:
        'Even with a SimBrief uplink, the pilot MUST manually assign the departure runway and SID because ATC assigns the active runway based on current ground winds at pushback.',
      pilotTip:
        'Always tap the amber "INSERT*" prompt (LSK 6R) to commit the departure to your active flight plan.',
      troubleshootingLink: {
        label: 'Airway fix mismatch or can’t find transition?',
        targetTab: 'AIRWAYS',
      },
      highlightLsk: '6R',
      cduScreen: {
        title: 'DEPARTURES',
        l1: { label: 'RWY', value: '<[DEP RWY]', color: 'green' },
        r1: { label: 'SID', value: '[YOUR SID]>', color: 'green' },
        r2: { label: 'TRANS', value: '[TRANS]>', color: 'green' },
        l6: { label: '', value: '<ERASE', color: 'amber' },
        r6: { label: '', value: 'INSERT*>', color: 'amber' },
      },
    },
    {
      stepNumber: 7,
      device: 'FMS',
      deviceScreenName: 'MCDU: F-PLAN (Arrival)',
      title: 'Assign Destination STAR & Approach Procedure',
      actionInstruction:
        'On the F-PLAN page, scroll down and tap the LSK next to your destination airport. Tap ARRIVAL, select your expected runway approach (e.g., ILS or RNAV), STAR, and transition. Tap INSERT* (LSK 6R).',
      explanation:
        'Programs the arrival transition from your enroute termination fix into the final approach localizer at your destination, allowing the FMS to calculate accurate fuel predictions and Top of Descent (T/D).',
      pilotTip:
        'Selecting the approach first (e.g. ILS) automatically filters the list of valid STARs and transitions.',
      highlightLsk: '6R',
      cduScreen: {
        title: 'ARRIVALS',
        l1: { label: 'APPROACH', value: '<[ILS / RNAV]', color: 'green' },
        r1: { label: 'STAR', value: '[YOUR STAR]>', color: 'green' },
        r2: { label: 'VIA', value: '[TRANS]>', color: 'green' },
        l6: { label: '', value: '<ERASE', color: 'amber' },
        r6: { label: '', value: 'INSERT*>', color: 'amber' },
      },
    },
    {
      stepNumber: 8,
      device: 'FMS',
      deviceScreenName: 'MCDU: F-PLAN + EFIS PLAN Mode',
      title: 'Clear Discontinuities & Cross-Check in PLAN Mode',
      actionInstruction:
        'Inspect F-PLAN for "--- F-PLAN DISCONTINUITY ---". Press the CLR key, then tap the LSK next to the break. Rotate the EFIS mode knob to PLAN and step through all waypoints.',
      explanation:
        'Gaps can form between the SID transition and enroute fixes. Pressing CLR + LSK joins them. Stepping through in PLAN mode centers each waypoint on the Navigation Display to verify smooth turns before pushback.',
      pilotTip:
        'If the arrival has a manual radar vectors leg (VECT / MANUAL), do NOT delete it! Leave it in place so the autopilot allows manual heading intervention.',
      troubleshootingLink: {
        label: 'Discontinuity refuses to delete? Read Discontinuity Guide',
        targetTab: 'DISCONTINUITY',
      },
      highlightLsk: '2L',
      cduScreen: {
        title: 'ACTIVE FLIGHT PLAN',
        l1: { label: 'TIME  SPD/ALT', value: '[SID EXIT]', color: 'green' },
        r1: { label: 'DIST', value: 'CLB FL', color: 'cyan' },
        l2: { label: '', value: '[ENROUTE WPT]', color: 'green' },
        r2: { label: '', value: 'CRZ FL', color: 'cyan' },
        l3: { label: '', value: '[STAR INITIAL]', color: 'green' },
        r3: { label: '', value: 'DES ALT', color: 'cyan' },
        l4: { label: '', value: '[DEST RWY]', color: 'green' },
      },
    },
    {
      stepNumber: 9,
      device: 'FMS',
      deviceScreenName: 'MCDU: INIT B (Weights & Fuel)',
      title: 'Confirm Weights & Balance (ZFW / ZFWCG)',
      actionInstruction:
        'Press the INIT key, then press the horizontal slew arrow (➔) to open INIT B. Tap LSK 1R (ZFW/ZFWCG) twice to auto-read aircraft weight. Enter Block Fuel at LSK 2R.',
      explanation:
        'Double-clicking LSK 1R queries the aircraft sensors to auto-fill dry weight and Center of Gravity percentage. This calculates Gross Takeoff Weight (TOW), Extra Fuel, and flight time predictions. Must be entered before starting engines.',
      pilotTip:
        'Once engines start, INIT B automatically locks into INIT A and weight info is transferred to the FUEL PRED page.',
      troubleshootingLink: {
        label: 'Weight calculation or Gross Weight disagree?',
        targetTab: 'WEIGHTS',
      },
      highlightLsk: '1R',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '2/2',
        l1: { label: 'TAXI', value: '0.2', color: 'green' },
        r1: { label: 'ZFW / ZFWCG', value: '[ZFW] / [CG]', color: 'cyan' },
        l2: { label: 'TRIP / TIME', value: 'COMPUTED', color: 'green' },
        r2: { label: 'BLOCK', value: '[BLOCK FUEL]', color: 'cyan' },
        r3: { label: 'TOW', value: 'CALCULATED', color: 'green' },
        l6: { label: 'EXTRA / TIME', value: 'PREDICTED', color: 'green' },
      },
    },
    {
      stepNumber: 10,
      device: 'EFB',
      deviceScreenName: 'EFB: Takeoff Performance App',
      title: 'Calculate Certified V-Speeds & Send to FMS',
      actionInstruction:
        'Switch to the EFB Performance app. Tap "SYNC METAR", tap "SYNC WEIGHT", pick planned takeoff flaps (e.g. Flaps 1+F), tap "CALCULATE", then tap "SEND TO FMS".',
      explanation:
        'The aerodynamic computer evaluates your departure runway length, live wind, temperature, and gross weight to compute safe V-speeds ($V_1, V_R, V_2$), Flex Temp, and Stabilizer Trim. Tapping SEND TO FMS transmits these numbers to the cockpit CDU with zero manual typing.',
      pilotTip:
        'If it is raining or the runway is wet, switch surface condition from DRY to WET on the EFB to calculate safer stopping speeds.',
      troubleshootingLink: {
        label: 'V-speeds missing or TAKEOFF SPEEDS DELETED?',
        targetTab: 'ERRORS',
      },
      efbScreenData: {
        app: 'PERFORMANCE',
        title: 'TAKEOFF PERFORMANCE COMPUTATION',
        badge: 'CALCULATED',
        fields: [
          { label: 'RUNWAY AVAIL', value: 'ASSIGNED DEPARTURE RUNWAY' },
          { label: 'V1 / VR / V2', value: 'CERTIFIED V1 / VR / V2 KT', highlight: true },
          { label: 'FLEX TO TEMP', value: 'CALCULATED FLEX DERATE (°C)', highlight: true },
          { label: 'PITCH TRIM / FLAPS', value: 'CALCULATED TRIM (e.g. 1/UP0.5)', highlight: true },
        ],
        primaryButtonText: 'SEND TO FMS / MCDU (DATA LINKED)',
        resultText: 'Speeds and Trim Successfully Sent to Takeoff Page',
      },
    },
    {
      stepNumber: 11,
      device: 'FMS',
      deviceScreenName: 'MCDU: PERF (Takeoff Verification)',
      title: 'Verify Speeds on PERF Page & Set Pitch Trim',
      actionInstruction:
        'Press the PERF key on the MCDU. Verify V1, VR, V2, FLAPS/THS, and FLEX are loaded. Reach to the center pedestal and rotate the mechanical pitch trim wheel to the indicated setting.',
      explanation:
        'Confirming the speeds displays magenta speed bugs on your Primary Flight Display (PFD). Setting pitch trim balances the elevators for smooth rotation during liftoff. Flight deck preflight is now 100% complete!',
      pilotTip:
        'If speeds ever vanish due to a runway change, simply tap the empty LSK buttons on the PERF page or re-send from the EFB.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'TAKE OFF',
        l1: { label: 'V1', value: 'V1 SPEED', color: 'cyan' },
        r1: { label: 'FLAPS/THS', value: 'FLAP/TRIM', color: 'cyan' },
        l2: { label: 'VR', value: 'VR SPEED', color: 'cyan' },
        r2: { label: 'FLEX TO TEMP', value: 'FLEX TEMP°', color: 'cyan' },
        l3: { label: 'V2', value: 'V2 SPEED', color: 'cyan' },
        r3: { label: 'ENG OUT ACC', value: 'THR RED/ACC', color: 'green' },
        l4: { label: 'TRANS ALT', value: 'LOCAL TA', color: 'cyan' },
        r6: { label: '', value: 'NEXT PHASE>', color: 'green' },
      },
    },
  ],
};

export const BOEING_UNIFIED_WORKFLOW: AircraftUnifiedWorkflowData = {
  aircraftId: 'b737-max8',
  aircraftName: 'Boeing 737 MAX 8 & 747-8 Intercontinental',
  family: 'Boeing',
  systemName: 'Collins / Pegasus FMC + Cockpit EFB Tablet',
  workedRouteSummary: {
    origin: '[ORIGIN AIRPORT]',
    destination: '[DESTINATION AIRPORT]',
    alternate: '[ALTERNATE AIRPORT]',
    runway: 'Assigned Departure Runway',
    sid: 'Assigned SID (Standard Departure)',
    enroute: 'Imported Airways & Waypoints (OFP)',
    star: 'Assigned STAR (Standard Arrival)',
    approach: 'Expected Approach (ILS / RNAV)',
    cruiseAlt: 'Planned Cruise FL (e.g. FL340)',
    costIndex: 'Planned Airline CI (e.g. 25-40)',
    zfw: 'Current Loadout ZFW',
    blockFuel: 'SimBrief Block Fuel',
  },
  steps: [
    {
      stepNumber: 1,
      device: 'EFB',
      deviceScreenName: 'EFB: Ground Services',
      title: 'Connect Ground Power (GPU) & Wheel Chocks',
      actionInstruction:
        'Turn on the cockpit EFB tablet. Open Ground Services and tap "CONNECT GPU" and "INSERT CHOCKS".',
      explanation:
        'Powers the Boeing AC and DC ground buses prior to APU startup. Look at the overhead electrical panel: the blue GRD PWR CONNECTED annunciator will illuminate.',
      pilotTip:
        'On the overhead electrical panel, flip the GRD PWR toggle switch down to ON to transfer ground electricity to the cockpit displays.',
      efbScreenData: {
        app: 'SERVICES',
        title: 'GROUND SERVICES & GSE',
        badge: 'RAMP CONTROL',
        fields: [
          { label: 'GROUND POWER (GPU)', value: 'CONNECTED (115V AC)', highlight: true },
          { label: 'WHEEL CHOCKS', value: 'INSERTED', highlight: true },
          { label: 'PASSENGER JETWAY / DOORS', value: 'ATTACHED TO DOOR 1L' },
        ],
        primaryButtonText: 'GPU CONNECTED • BLUE LIGHT ON',
      },
    },
    {
      stepNumber: 2,
      device: 'EFB',
      deviceScreenName: 'EFB: SimBrief OFP Fetch',
      title: 'Import Active SimBrief Operational Flight Plan (OFP)',
      actionInstruction:
        'Open SimBrief on the tablet. Tap "FETCH LATEST OFP". Verify flight number, route string, and planned cruise altitude.',
      explanation:
        'Pulls flight plan routing, fuel burn calculations, and payload distribution from SimBrief directly into simulator memory.',
      pilotTip:
        'Make sure your SimBrief aircraft profile matches the specific Boeing airframe in MSFS.',
      efbScreenData: {
        app: 'SIMBRIEF',
        title: 'SIMBRIEF FLIGHT DISPATCH',
        badge: 'OFP READY',
        fields: [
          { label: 'ROUTE PAIR', value: '[ORIGIN] ➔ [DESTINATION]', highlight: true },
          { label: 'PLANNED ROUTE', value: 'Assigned SID • Enroute Airways • STAR' },
          { label: 'CRZ ALT / CI', value: 'Planned FL / Airline CI', highlight: true },
          { label: 'PLANNED BLOCK FUEL', value: 'SimBrief Calculated Block Fuel', highlight: true },
        ],
        primaryButtonText: 'IMPORT OFP TO AIRCRAFT',
      },
    },
    {
      stepNumber: 3,
      device: 'EFB',
      deviceScreenName: 'EFB: Payload & Fuel Loading',
      title: 'Board Passengers & Load Planned Fuel',
      actionInstruction:
        'Navigate to the Payload & Fuel tab. Tap "SYNC WEIGHTS WITH OFP", then tap "LOAD AIRCRAFT".',
      explanation:
        'Loads the airframe to your planned Zero Fuel Weight and pumps the required fuel into the wing and center tanks.',
      pilotTip:
        'Use "Instant" loading if you want to immediately start the FMS initialization flow.',
      efbScreenData: {
        app: 'DISPATCH',
        title: 'MASS & BALANCE DISPATCH',
        badge: 'BOARDING COMPLETE',
        fields: [
          { label: 'ZERO FUEL WEIGHT (ZFW)', value: 'SYNCED FROM SIMBRIEF OFP', highlight: true },
          { label: 'FUEL LOADED', value: 'MATCHED TO BLOCK FUEL', highlight: true },
          { label: 'GROSS WEIGHT (TOW)', value: 'ZFW + FUEL - TAXI BURN', highlight: true },
        ],
        primaryButtonText: 'LOAD AIRCRAFT COMPLETED',
      },
    },
    {
      stepNumber: 4,
      device: 'FMS',
      deviceScreenName: 'FMC: POS INIT',
      title: 'Initialize Inertial Position (POS INIT)',
      actionInstruction:
        'Press the INIT REF key. Tap POS INIT (LSK 6R). Enter your departure airport ICAO into REF AIRPORT (LSK 2L). Copy GPS POS (LSK 4R) into scratchpad and paste into SET IRS POS (LSK 5R).',
      explanation:
        'Provides the laser gyros with precise starting latitude/longitude coordinates to begin positional navigation tracking.',
      pilotTip:
        'Make sure both overhead IRS rotary switches are set to NAV.',
      highlightLsk: '5R',
      cduScreen: {
        title: 'POS INIT',
        pageIndicator: '1/3',
        l1: { label: 'LAST POS', value: 'PREV POS LAT/LONG', color: 'slate' },
        l2: { label: 'REF AIRPORT', value: '[ORIGIN]', color: 'cyan' },
        r4: { label: 'GPS POS', value: 'GATE GPS LAT/LONG', color: 'green' },
        l5: { label: 'SET IRS POS', value: '', color: 'white' },
        r5: { label: '', value: 'COPIED GPS POS', color: 'cyan' },
        r6: { label: '', value: 'ROUTE>', color: 'cyan' },
      },
    },
    {
      stepNumber: 5,
      device: 'FMS',
      deviceScreenName: 'FMC: RTE (Route Request & Load)',
      title: 'Uplink Route via RTE REQUEST & Execute',
      actionInstruction:
        'Press the RTE function key. Tap "RTE REQUEST" (or enter route name into CO ROUTE LSK 2L). Tap "LOAD", tap "ACTIVATE" (LSK 6R), and press the physical lighted EXEC key on the CDU.',
      explanation:
        'Uplinks the Origin, Destination, Flight Number, and all enroute airways (VIA) and waypoints (TO) directly from the imported SimBrief plan into the FMC.',
      pilotTip:
        'Whenever you see the yellow/white EXEC light illuminated on a Boeing CDU, press it to make changes active in autopilot guidance.',
      highlightLsk: 'EXEC',
      cduScreen: {
        title: 'ACT RTE',
        pageIndicator: '1/2',
        l1: { label: 'ORIGIN', value: '[ORIGIN]', color: 'cyan' },
        r1: { label: 'DEST', value: '[DEST]', color: 'cyan' },
        r2: { label: 'FLT NO', value: '[FLT NBR]', color: 'cyan' },
        l3: { label: 'RUNWAY', value: '---', color: 'amber' },
        r6: { label: '', value: 'PERF INIT>', color: 'cyan' },
      },
    },
    {
      stepNumber: 6,
      device: 'FMS',
      deviceScreenName: 'FMC: DEP/ARR (Departure)',
      title: 'Assign Departure Runway & SID from Clearance',
      actionInstruction:
        'Press the DEP ARR key. Tap LSK 1L (Departure DEP). Select your assigned departure runway on the right, SID on the left, and transition on the right. Press the lighted EXEC key.',
      explanation:
        'Links your departure runway to the first enroute fix. The uplink does not set runways because live winds dictate active runways at departure.',
      pilotTip:
        'Select the runway first on the right, which filters the SID list on the left to valid procedures.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'DEPARTURES',
        pageIndicator: '1/1',
        l1: { label: 'SIDS', value: '<[YOUR SID]', color: 'cyan' },
        r1: { label: 'RUNWAYS', value: '[DEP RWY]>', color: 'cyan' },
        r3: { label: 'TRANS', value: '[TRANS]>', color: 'cyan' },
        execActive: true,
      },
    },
    {
      stepNumber: 7,
      device: 'FMS',
      deviceScreenName: 'FMC: DEP/ARR (Arrival)',
      title: 'Assign Destination Arrival (STAR) & Approach',
      actionInstruction:
        'Press DEP ARR key. Tap LSK 2R (Destination ARR). Select expected approach (e.g. ILS or RNAV) on the right, STAR on the left, and transition. Press the lighted EXEC key.',
      explanation:
        'Connects the enroute termination fix to the final approach localizer at your destination.',
      pilotTip:
        'Selecting the approach first filters compatible STAR transitions.',
      highlightLsk: '2R',
      cduScreen: {
        title: 'ARRIVALS',
        pageIndicator: '1/2',
        l1: { label: 'STARS', value: '<[YOUR STAR]', color: 'cyan' },
        r1: { label: 'APPROACHES', value: '[ILS / RNAV]>', color: 'cyan' },
        r2: { label: 'TRANS', value: '[TRANS]>', color: 'cyan' },
        execActive: true,
      },
    },
    {
      stepNumber: 8,
      device: 'FMS',
      deviceScreenName: 'FMC: LEGS + EFIS PLAN Mode',
      title: 'Clear Discontinuities & Verify in PLAN Mode',
      actionInstruction:
        'Press LEGS key. If "□□□□□ --- ROUTE DISCONTINUITY ---" appears, press the LSK below the gap, paste over the boxes, and press EXEC. Turn EFIS knob to PLAN and tap <STEP> (LSK 6R).',
      explanation:
        'Bridges any procedural gaps between SID and enroute fixes. Tapping STEP centers each waypoint on the Navigation Display to inspect the turn sequence.',
      pilotTip:
        'If you see a manual radar vectors leg (VECT), leave the discontinuity intact for ATC radar vectors.',
      troubleshootingLink: {
        label: 'Discontinuity issue? View Discontinuity Masterclass',
        targetTab: 'DISCONTINUITY',
      },
      highlightLsk: '2L',
      cduScreen: {
        title: 'ACT RTE LEGS',
        pageIndicator: '1/3',
        l1: { label: '', value: '[SID EXIT]', color: 'magenta' },
        r1: { label: 'CLB SPD', value: 'CLB FL', color: 'cyan' },
        l2: { label: '', value: '[ENROUTE WPT]', color: 'white' },
        r2: { label: 'CRZ SPD', value: 'CRZ FL', color: 'cyan' },
        l3: { label: '', value: '[STAR INITIAL]', color: 'white' },
        r3: { label: 'DES SPD', value: 'DES ALT', color: 'cyan' },
        r6: { label: '', value: '<STEP>', color: 'cyan' },
      },
    },
    {
      stepNumber: 9,
      device: 'FMS',
      deviceScreenName: 'FMC: PERF INIT',
      title: 'Initialize Performance Weights & Cost Index',
      actionInstruction:
        'Press the INIT REF key. Double-click LSK 1L to auto-fill Zero Fuel Weight. Enter Reserves (LSK 2L), Cost Index (LSK 5L), and Cruise Alt (LSK 1R). Press the lighted EXEC key.',
      explanation:
        'Enables VNAV vertical flight profiles and fuel burn calculations. Double-clicking LSK 1L queries the current loaded aircraft weight sensors.',
      pilotTip:
        'If you receive "VERIFY GW", ensure fuel quantity in the tanks plus ZFW equals gross weight.',
      troubleshootingLink: {
        label: 'PERF DISAGREE or weight warning? Open Troubleshooting',
        targetTab: 'ERRORS',
      },
      highlightLsk: '1R',
      cduScreen: {
        title: 'PERF INIT',
        l1: { label: 'ZFW', value: '[ZFW]', color: 'cyan' },
        r1: { label: 'CRZ ALT', value: 'FLxxx', color: 'cyan' },
        l2: { label: 'RESERVES', value: '[RESERVES]', color: 'cyan' },
        l3: { label: 'COST INDEX', value: '[ CI ]', color: 'cyan' },
        r6: { label: '', value: 'N1 LIMIT>', color: 'cyan' },
        execActive: true,
      },
    },
    {
      stepNumber: 10,
      device: 'EFB',
      deviceScreenName: 'EFB: Takeoff Performance App',
      title: 'Calculate Certified V-Speeds & Send to FMC',
      actionInstruction:
        'Open EFB Performance app. Tap "SYNC METAR", tap "SYNC WEIGHT", choose your flap setting (e.g. Flaps 5), tap "CALCULATE", then tap "SEND TO FMC".',
      explanation:
        'Computes certified takeoff speeds ($V_1, V_R, V_2$), Assumed Temperature, and Stabilizer Trim units for your gross weight and runway length.',
      pilotTip:
        'Sending to FMC automatically pre-populates the TAKEOFF REF page without manual typing.',
      efbScreenData: {
        app: 'PERFORMANCE',
        title: 'TAKEOFF PERFORMANCE COMPUTATION',
        badge: 'CALCULATED',
        fields: [
          { label: 'RUNWAY AVAIL', value: 'ASSIGNED DEPARTURE RUNWAY' },
          { label: 'V1 / VR / V2', value: 'CERTIFIED V1 / VR / V2 KT', highlight: true },
          { label: 'ASSUMED SEL TEMP', value: 'CALCULATED DERATE (°C)', highlight: true },
          { label: 'STABILIZER TRIM', value: 'CALCULATED TRIM UNITS', highlight: true },
        ],
        primaryButtonText: 'SEND TO FMC (DATA LINKED)',
        resultText: 'Speeds and Trim Successfully Sent to Takeoff Page',
      },
    },
    {
      stepNumber: 11,
      device: 'FMS',
      deviceScreenName: 'FMC: TAKEOFF REF',
      title: 'Confirm V-Speed Bugs & Set Stabilizer Trim Wheel',
      actionInstruction:
        'Press INIT REF key, tap TAKEOFF (LSK 6R). Confirm Flaps and Trim. Tap LSK 1R, 2R, 3R to confirm V1, VR, V2 bugs. Rotate the manual pitch trim wheel on the center console to the indicated units.',
      explanation:
        'Tapping each V-speed turns the font bold and illuminates speed bugs on your Primary Flight Display tape. Setting stabilizer trim ensures the aircraft rotates smoothly at VR.',
      pilotTip:
        'Flight deck preflight is now 100% complete! Ready for pushback and engine start.',
      highlightLsk: '3L',
      cduScreen: {
        title: 'TAKEOFF REF',
        pageIndicator: '1/2',
        l1: { label: 'FLAPS', value: 'FLAPS', color: 'cyan' },
        r1: { label: 'V1', value: 'V1 SPEED', color: 'green' },
        l3: { label: 'CG', value: '% MAC', color: 'cyan' },
        r2: { label: 'VR', value: 'VR SPEED', color: 'green' },
        l4: { label: 'TRIM', value: 'TRIM UNITS', color: 'green' },
        r3: { label: 'V2', value: 'V2 SPEED', color: 'green' },
      },
    },
  ],
};

export const UNIFIED_WORKFLOW_MAP: Record<string, AircraftUnifiedWorkflowData> = {
  'a320neo-v2': AIRBUS_UNIFIED_WORKFLOW,
  'a330-300': {
    ...AIRBUS_UNIFIED_WORKFLOW,
    aircraftId: 'a330-300',
    aircraftName: 'Airbus A330-300',
    systemName: 'Thales / Honeywell Widebody FMS + EFB Tablet',
  },
  'b737-max8': BOEING_UNIFIED_WORKFLOW,
  'b747-8i': {
    ...BOEING_UNIFIED_WORKFLOW,
    aircraftId: 'b747-8i',
    aircraftName: 'Boeing 747-8 Intercontinental',
    systemName: 'Honeywell / Pegasus FMC (4-Engine Widebody) + EFB Tablet',
  },
  'a310-300': {
    ...AIRBUS_UNIFIED_WORKFLOW,
    aircraftId: 'a310-300',
    aircraftName: 'Airbus A310-300',
    systemName: 'Smiths Classic FMS + EFB Tablet',
  },
};
