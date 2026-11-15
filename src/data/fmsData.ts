import { AircraftFmsGuideData } from '../types/fms';

export const AIRBUS_MCDU_DATA: AircraftFmsGuideData = {
  aircraftId: 'a320neo-v2',
  aircraftName: 'Airbus A320neo (v2) & A330-300',
  systemName: 'Thales Flight Management & Guidance System (FMGS) / MCDU',
  family: 'Airbus',
  workedRouteSummary: {
    origin: 'KLAX (Los Angeles Intl)',
    destination: 'KSFO (San Francisco Intl)',
    alternate: 'KOAK (Oakland Intl)',
    runway: '25R',
    sid: 'CASTA2 (AVE Transition)',
    enroute: 'AVE V107 BSR',
    star: 'BSR3 (Big Sur Three)',
    approach: 'ILS 28R (MENLO Transition)',
    cruiseAlt: 'FL280 (28,000 ft)',
    costIndex: '30',
    zfw: '61.5 tonnes / 29.8% CG',
    blockFuel: '7.8 tonnes',
  },
  steps: [
    {
      stepNumber: 1,
      stageTitle: 'Database & System Integrity Check',
      pageName: 'A/C STATUS',
      keyTarget: 'DATA Key ➔ LSK 1L',
      actionInstruction: 'Press the DATA function key, then select A/C STATUS (LSK 1L).',
      explanation:
        'Always confirm your aircraft type, engine model (LEAP-1A26 or Trent 700), and that the active Navigation Database (AIRAC cycle) date range covers the current real-world date. If an expired database is active, select the second database if valid.',
      pilotTip:
        'In MSFS 2024, if you notice missing waypoints or wrong runway designations after a recent nav cycle update, this page confirms which database cycle the sim loaded.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'A/C STATUS',
        l1: { label: 'ENG', value: 'LEAP-1A26', color: 'green' },
        r1: { label: 'ACTIVE NAV DATA BASE', value: '', color: 'white' },
        l2: { label: '', value: 'AIRAC 2411', color: 'cyan' },
        r2: { label: '', value: '03NOV-30NOV', color: 'cyan' },
        l3: { label: 'SECOND NAV DATA BASE', value: '', color: 'slate' },
        l4: { label: '', value: 'AIRAC 2410', color: 'slate' },
        r4: { label: '', value: '06OCT-02NOV', color: 'slate' },
        l6: { label: '', value: '<CHG CODE', color: 'cyan' },
        r6: { label: '', value: 'IDLE/PERF> +0.0/+0.0', color: 'green' },
      },
    },
    {
      stepNumber: 2,
      stageTitle: 'Origin, Destination & Flight Header',
      pageName: 'INIT A (Page 1/2)',
      keyTarget: 'INIT Key ➔ Scratchpad ➔ LSK 1R',
      scratchpadInput: 'KLAX/KSFO',
      actionInstruction:
        'Press INIT key. Type "KLAX/KSFO" into the scratchpad and press LSK 1R (FROM/TO).',
      explanation:
        'This establishes the departure and arrival airports. Entering FROM/TO resets any old residual active flight plans and initializes navigation predictions. Next, input your Alternate airport "KOAK" at LSK 2R.',
      pilotTip:
        'Always use the standard slash format "ORIGIN/DEST" with four-letter ICAO codes. Entering just "KLAX" will return FORMAT ERROR.',
      highlightLsk: '1R',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '1/2',
        l1: { label: 'CO RTE', value: '-------', color: 'amber' },
        r1: { label: 'FROM/TO', value: 'KLAX/KSFO', color: 'cyan' },
        l2: { label: 'ALTN/CO RTE', value: 'KOAK/----', color: 'cyan' },
        r2: { label: 'INIT REQUEST*', value: '', color: 'amber' },
        l3: { label: 'FLT NBR', value: '[     ]', color: 'amber' },
        r3: { label: '', value: '', color: 'white' },
        l4: { label: 'LAT', value: '3356.5N', color: 'green' },
        r4: { label: 'LONG', value: '11824.5W', color: 'green' },
        l5: { label: 'COST INDEX', value: '[  ]', color: 'amber' },
        r5: { label: 'CRZ FL/TEMP', value: '[   ]/---°', color: 'amber' },
        l6: { label: '', value: '<ALIGN IRS', color: 'cyan' },
        r6: { label: '', value: 'TROPO> 36090', color: 'green' },
        scratchpad: 'KLAX/KSFO',
      },
    },
    {
      stepNumber: 3,
      stageTitle: 'Inertial Reference Alignment',
      pageName: 'INIT A (Page 1/2)',
      keyTarget: 'LSK 6L (ALIGN IRS)',
      actionInstruction:
        'Verify GPS coordinates match your gate location, then press LSK 6L (ALIGN IRS).',
      explanation:
        'This coordinates the ADIRS (Air Data Inertial Reference System) with the aircraft’s current physical gate position. Once pressed, the prompt changes to "ALIGNING..." and will synchronize within 7 minutes.',
      pilotTip:
        'Ensure the overhead ADIRS 1, 2, 3 rotary selectors were switched to NAV during the overhead scan, otherwise the MCDU cannot send reference coordinates to the inertial laser gyros.',
      highlightLsk: '6L',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '1/2',
        l1: { label: 'CO RTE', value: 'NONE', color: 'green' },
        r1: { label: 'FROM/TO', value: 'KLAX/KSFO', color: 'green' },
        l2: { label: 'ALTN/CO RTE', value: 'KOAK', color: 'green' },
        l3: { label: 'FLT NBR', value: 'AAL124', color: 'cyan' },
        l4: { label: 'LAT', value: '3356.5N', color: 'green' },
        r4: { label: 'LONG', value: '11824.5W', color: 'green' },
        l5: { label: 'COST INDEX', value: '30', color: 'cyan' },
        r5: { label: 'CRZ FL/TEMP', value: 'FL280/-35°', color: 'cyan' },
        l6: { label: '', value: '<ALIGN IRS', color: 'cyan' },
        r6: { label: '', value: 'TROPO> 36090', color: 'green' },
      },
    },
    {
      stepNumber: 4,
      stageTitle: 'Flight Number, Cost Index & Cruise Level',
      pageName: 'INIT A (Page 1/2)',
      keyTarget: 'LSK 3L, 5L, 5R',
      scratchpadInput: '30 ➔ LSK 5L, 280 ➔ LSK 5R',
      actionInstruction:
        'Enter Flight Number "AAL124" at LSK 3L, Cost Index "30" at LSK 5L, and Cruise Alt "280" at LSK 5R.',
      explanation:
        'Cost Index (CI) dictates the economic trade-off between fuel burn and flight time (0 = maximum fuel conservation, 99 = minimum flight time / maximum speed). Entering "280" will automatically calculate standard cruise temperature (-35°C).',
      pilotTip:
        'In the Airbus, typing "280" or "FL280" works identically. If you are flying below transition altitude, type e.g. "9000".',
      highlightLsk: '5R',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '1/2',
        l1: { label: 'CO RTE', value: 'NONE', color: 'green' },
        r1: { label: 'FROM/TO', value: 'KLAX/KSFO', color: 'green' },
        l2: { label: 'ALTN/CO RTE', value: 'KOAK', color: 'green' },
        l3: { label: 'FLT NBR', value: 'AAL124', color: 'green' },
        l5: { label: 'COST INDEX', value: '30', color: 'green' },
        r5: { label: 'CRZ FL/TEMP', value: 'FL280/-35°', color: 'green' },
        l6: { label: '', value: 'IRS ALIGNED', color: 'green' },
        r6: { label: '', value: 'TROPO> 36090', color: 'green' },
      },
    },
    {
      stepNumber: 5,
      stageTitle: 'Departure Runway & SID Selection',
      pageName: 'F-PLAN (Departure Lateral Revision)',
      keyTarget: 'F-PLAN Key ➔ LSK 1L (KLAX) ➔ LSK 1L (DEPARTURE)',
      actionInstruction:
        'Press F-PLAN key. Tap LSK 1L (green KLAX), tap LSK 1L (DEPARTURE), select Runway 25R, SID CASTA2, Transition AVE, then press LSK 6R (INSERT*).',
      explanation:
        'In the Airbus MCDU, pressing any Line Select Key on the left of a waypoint opens Lateral Revision. Selecting the departure assigns the initial climb profile, runway heading, and speed/altitude restrictions along the Standard Instrument Departure.',
      pilotTip:
        'Always tap the amber "INSERT*" prompt (LSK 6R) to commit the departure to your active flight plan. If you make a mistake, tap "ERASE*" (LSK 6L).',
      highlightLsk: '6R',
      cduScreen: {
        title: 'DEPARTURES FROM KLAX',
        l1: { label: 'RWY', value: '<25R', color: 'green' },
        r1: { label: 'SID', value: 'CASTA2>', color: 'green' },
        l2: { label: '', value: '', color: 'white' },
        r2: { label: 'TRANS', value: 'AVE>', color: 'green' },
        l6: { label: '', value: '<ERASE', color: 'amber' },
        r6: { label: '', value: 'INSERT*>', color: 'amber' },
      },
    },
    {
      stepNumber: 6,
      stageTitle: 'Enroute Airway & Fix Entry (VIA / TO)',
      pageName: 'AIRWAYS Page',
      keyTarget: 'LSK on "AVE" ➔ LSK 4R (AIRWAYS) ➔ LSK 1L & 1R',
      scratchpadInput: 'V107 ➔ LSK 1L, BSR ➔ LSK 1R',
      actionInstruction:
        'On F-PLAN, tap the LSK next to your SID exit fix "AVE". Select AIRWAYS (LSK 4R). Type "V107" at LSK 1L (VIA), then type "BSR" at LSK 1R (TO). Tap INSERT* (LSK 6R).',
      explanation:
        'Airways are high-altitude highways in the sky connecting fixes. In the MCDU, the left column (VIA) specifies the route identifier (e.g. V107, J65, Q110), and the right column (TO) specifies the exit waypoint (BSR). The FMS automatically populates all intermediate waypoints along that airway!',
      pilotTip:
        'Do NOT try to enter airways directly into the F-PLAN page scratchpad! Airways can only be entered on the dedicated AIRWAYS revision subpage.',
      highlightLsk: '1R',
      cduScreen: {
        title: 'AIRWAYS FROM AVE',
        l1: { label: 'VIA', value: 'V107', color: 'cyan' },
        r1: { label: 'TO', value: 'BSR', color: 'cyan' },
        l2: { label: 'VIA', value: '[    ]', color: 'amber' },
        r2: { label: 'TO', value: '[     ]', color: 'amber' },
        l6: { label: '', value: '<ERASE', color: 'amber' },
        r6: { label: '', value: 'INSERT*>', color: 'amber' },
      },
    },
    {
      stepNumber: 7,
      stageTitle: 'Arrival (STAR) & Approach Setup',
      pageName: 'ARRIVAL Page',
      keyTarget: 'LSK on "KSFO" ➔ LSK 1R (ARRIVAL)',
      actionInstruction:
        'On F-PLAN, scroll down and tap LSK next to destination "KSFO". Tap LSK 1R (ARRIVAL), select ILS 28R, select STAR BSR3, select Transition MENLO, tap INSERT* (LSK 6R).',
      explanation:
        'This links your enroute exit fix (BSR) to the airport approach via the Big Sur Three arrival. The MCDU automatically chains deceleration points (DECEL), altitude step-downs, and final approach fixes into your flight trajectory.',
      pilotTip:
        'Even if the wind might shift later in flight, programming your expected arrival at the gate allows the FMS to calculate accurate fuel predictions and top-of-descent (T/D).',
      highlightLsk: '6R',
      cduScreen: {
        title: 'ARRIVAL TO KSFO',
        l1: { label: 'APPROACH', value: '<ILS28R', color: 'green' },
        r1: { label: 'STAR', value: 'BSR3>', color: 'green' },
        r2: { label: 'VIA', value: 'MENLO>', color: 'green' },
        l6: { label: '', value: '<ERASE', color: 'amber' },
        r6: { label: '', value: 'INSERT*>', color: 'amber' },
      },
    },
    {
      stepNumber: 8,
      stageTitle: 'Resolving Flight Plan Discontinuities',
      pageName: 'F-PLAN Page',
      keyTarget: 'CLR Key ➔ LSK next to "F-PLAN DISCONTINUITY"',
      scratchpadInput: 'CLR',
      actionInstruction:
        'Inspect your F-PLAN. If you see "--- F-PLAN DISCONTINUITY ---", press the CLR key on the MCDU keypad (putting "CLR" in scratchpad), then press the LSK directly adjacent to the discontinuity line.',
      explanation:
        'Discontinuities occur when the navigation database detects a gap between procedural segments (such as where a SID ends and an enroute airway begins, or before vectors to final). Pressing CLR + LSK stitches the two segments together seamlessly so the autopilot follows continuous lateral NAV (LNAV).',
      pilotTip:
        'Only remove discontinuities when ATC clearance or standard procedures join the points! If the arrival ends in radar vectors to final, leaving a discontinuity or MANUAL leg allows the autopilot to fly heading mode when reaching vectors.',
      highlightLsk: '3L',
      cduScreen: {
        title: 'KLAX25R / KSFO28R',
        l1: { label: 'TIME  SPD/ALT', value: 'AVE', color: 'green' },
        r1: { label: 'DIST', value: 'FL180', color: 'cyan' },
        l2: { label: '', value: '--- F-PLAN DISCONTINUITY ---', color: 'amber' },
        l3: { label: '', value: 'BSR', color: 'green' },
        r3: { label: '', value: 'FL240', color: 'cyan' },
        l4: { label: '', value: 'MENLO', color: 'green' },
        r4: { label: '', value: '5000', color: 'cyan' },
        scratchpad: 'CLR',
      },
    },
    {
      stepNumber: 9,
      stageTitle: 'Navigation Display Cross-Check (PLAN Mode)',
      pageName: 'EFIS Control Panel + MCDU F-PLAN',
      keyTarget: 'EFIS Mode Selector ➔ PLAN, MCDU Up/Down Arrows',
      actionInstruction:
        'Rotate the EFIS display mode knob on the glare-shield to "PLAN". Set range to 40 NM. In the MCDU, press the UP/DOWN arrow keys to step through each waypoint and visually verify the turns on the Navigation Display (ND).',
      explanation:
        'In PLAN mode, the ND centers on whatever waypoint is currently displayed at the top of the MCDU F-PLAN screen. This visual verification catches duplicate waypoints, sharp 180° hairpin turns, and erroneous route entries before you push back.',
      pilotTip:
        'Always verify the green line on your ND forms a smooth trajectory from takeoff runway 25R out over the coast, north along California through Avenal and Big Sur, directly into San Francisco Bay.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'KLAX25R / KSFO28R',
        l1: { label: 'TIME  SPD/ALT', value: 'BSR  [CTR]', color: 'green' },
        r1: { label: 'DIST', value: 'FL240', color: 'cyan' },
        l2: { label: '', value: 'MENLO', color: 'green' },
        r2: { label: '', value: '5000', color: 'cyan' },
        l3: { label: '', value: 'AXMUL (F-APP)', color: 'green' },
        r3: { label: '', value: '3000', color: 'cyan' },
        l4: { label: '', value: 'RW28R', color: 'green' },
        r4: { label: '', value: '13', color: 'cyan' },
      },
    },
    {
      stepNumber: 10,
      stageTitle: 'Rad Nav Frequency Verification',
      pageName: 'RAD NAV Page',
      keyTarget: 'RAD NAV Key',
      actionInstruction:
        'Press the RAD NAV function key. Confirm the ILS frequency for KSFO 28R (110.75 / CRS 284°) is pre-populated in the ILS/FREQ field.',
      explanation:
        'The Airbus FMGS autotunes VORs, DMEs, and the destination ILS receiver based on your active flight plan. You can manually enter an identifier or frequency into LSK 1L (VOR1) or LSK 3L (ILS/FREQ) if required for raw-data departure tracking.',
      pilotTip:
        'Autotuned stations are shown in magenta or green. If an ILS frequency is manually hard-entered by the pilot, it displays with a small "M" or manual flag.',
      highlightLsk: '3L',
      cduScreen: {
        title: 'RADIO NAV',
        l1: { label: 'VOR1 / FREQ', value: 'LAX / 113.60', color: 'green' },
        r1: { label: 'CRS', value: '251°', color: 'cyan' },
        l2: { label: 'VOR2 / FREQ', value: 'SFO / 115.80', color: 'green' },
        r2: { label: 'CRS', value: '284°', color: 'cyan' },
        l3: { label: 'ILS / FREQ', value: 'ISFO / 110.75', color: 'green' },
        r3: { label: 'CRS', value: '284°', color: 'cyan' },
        l4: { label: 'ADF1 / FREQ', value: '[   ] / [     ]', color: 'slate' },
      },
    },
    {
      stepNumber: 11,
      stageTitle: 'Aircraft Weights & Fuel Planning (INIT B)',
      pageName: 'INIT B (or FUEL PRED)',
      keyTarget: 'INIT Key ➔ NEXT PAGE Arrow (➔)',
      scratchpadInput: 'Double-tap LSK 1R, 7.8 ➔ LSK 2R',
      actionInstruction:
        'Press INIT key, then press the horizontal slew arrow key (➔) to open INIT B. Tap LSK 1R (ZFW/ZFWCG) twice to auto-read aircraft weights (61.5/29.8). Enter Block Fuel "7.8" at LSK 2R.',
      explanation:
        'Zero Fuel Weight (ZFW) is the aircraft’s total weight with passengers and cargo, excluding usable fuel. ZFWCG is the center-of-gravity percentage. Entering these values calculates Total Gross Weight (TOW), Extra Fuel, and flight time predictions.',
      pilotTip:
        'INIT B is only available when the engines are shut down! Once Engine 1 or 2 is started, the INIT page automatically locks into INIT A and weight info is transferred to the FUEL PRED page.',
      highlightLsk: '1R',
      cduScreen: {
        title: 'INIT',
        pageIndicator: '2/2',
        l1: { label: 'TAXI', value: '0.2', color: 'green' },
        r1: { label: 'ZFW / ZFWCG', value: '61.5 / 29.8', color: 'cyan' },
        l2: { label: 'TRIP / TIME', value: '3.2 / 01.12', color: 'green' },
        r2: { label: 'BLOCK', value: '7.8', color: 'cyan' },
        l3: { label: 'RTE RSV / %', value: '0.4 / 5.0', color: 'green' },
        r3: { label: 'TOW', value: '69.1', color: 'green' },
        l4: { label: 'ALTN / TIME', value: '1.2 / 00.28', color: 'green' },
        r4: { label: 'LW', value: '65.9', color: 'green' },
        l5: { label: 'FINAL / TIME', value: '1.4 / 00.30', color: 'green' },
        l6: { label: 'EXTRA / TIME', value: '1.4 / 00.34', color: 'green' },
      },
    },
    {
      stepNumber: 12,
      stageTitle: 'Takeoff Speeds, Flaps & Flex Temp (PERF)',
      pageName: 'PERF (TAKE OFF Page)',
      keyTarget: 'PERF Key ➔ LSK 1L, 2L, 3L, 3R, 4R',
      scratchpadInput: '142 ➔ LSK 1L, 144 ➔ LSK 2L, 148 ➔ LSK 3L, 1/UP0.5 ➔ LSK 3R, 58 ➔ LSK 4R',
      actionInstruction:
        'Press PERF key. Enter V1 (142), VR (144), V2 (148) at LSK 1L, 2L, 3L. Enter Flap/THS setting "1/UP0.5" at LSK 3R, Flex Temp "58" at LSK 4R, and Transition Alt "18000" at LSK 4L.',
      explanation:
        'V1 is decision speed, VR is rotation speed, V2 is single-engine safety climb speed. Entering "1/UP0.5" instructs the flight guidance to configure for Flaps 1 and sets stabilizer trim to 0.5 degrees UP. Flex Temp (58°C) tricks the FADEC into reducing takeoff thrust to preserve engine life and save fuel.',
      pilotTip:
        'In MSFS 2024 iniBuilds A320neo v2, clicking each of the empty LSK 1L, 2L, and 3L buttons will auto-compute and fill the optimal V-speeds based on your entered weight and weather!',
      highlightLsk: '3R',
      cduScreen: {
        title: 'TAKE OFF',
        l1: { label: 'V1', value: '142', color: 'cyan' },
        r1: { label: 'FLAPS/THS', value: '1/UP0.5', color: 'cyan' },
        l2: { label: 'VR', value: '144', color: 'cyan' },
        r2: { label: 'FLEX TO TEMP', value: '58°', color: 'cyan' },
        l3: { label: 'V2', value: '148', color: 'cyan' },
        r3: { label: 'ENG OUT ACC', value: '1620', color: 'green' },
        l4: { label: 'TRANS ALT', value: '18000', color: 'cyan' },
        r4: { label: 'THR RED/ACC', value: '1620/1620', color: 'green' },
        l5: { label: '', value: '', color: 'white' },
        r6: { label: '', value: 'NEXT PHASE>', color: 'green' },
      },
    },
  ],
};

export const BOEING_FMC_DATA: AircraftFmsGuideData = {
  aircraftId: 'b737-max8',
  aircraftName: 'Boeing 737 MAX 8 & 747-8 Intercontinental',
  systemName: 'Collins / Honeywell Pegasus Flight Management Computer (FMC/CDU)',
  family: 'Boeing',
  workedRouteSummary: {
    origin: 'KLAX (Los Angeles Intl)',
    destination: 'KSFO (San Francisco Intl)',
    alternate: 'KOAK (Oakland Intl)',
    runway: '25R',
    sid: 'CASTA2 (AVE Transition)',
    enroute: 'AVE V107 BSR',
    star: 'BSR3 (Big Sur Three)',
    approach: 'ILS 28R (MENLO Transition)',
    cruiseAlt: 'FL280 (28,000 ft)',
    costIndex: '35',
    zfw: '138.4 klbs (or tonnes for 747)',
    blockFuel: '17.2 klbs',
  },
  steps: [
    {
      stepNumber: 1,
      stageTitle: 'Aircraft Identification & Nav Data Cycle',
      pageName: 'IDENT Page',
      keyTarget: 'INIT REF Key ➔ LSK 1L (IDENT)',
      actionInstruction:
        'Press the INIT REF function key, or press MENU and select FMC. Verify the aircraft model (737-8 or 747-8) and check active NAV DATA cycle dates.',
      explanation:
        'The IDENT page confirms the engine thrust rating (CFM LEAP-1B28 or GEnx-2B) and valid navigation database cycle dates. If the database is out of date, verify whether OP PROGRAM or secondary nav data is available.',
      pilotTip:
        'Boeing FMCs will flash "NAV DATA OUT OF DATE" in the scratchpad if you attempt to fly outside the active AIRAC cycle.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'IDENT',
        l1: { label: 'MODEL', value: '737-8', color: 'green' },
        r1: { label: 'ENGINES', value: 'LEAP-1B28', color: 'green' },
        l2: { label: 'NAV DATA', value: 'AIRAC-2411', color: 'cyan' },
        r2: { label: 'ACTIVE', value: 'NOV03NOV30/24', color: 'green' },
        l3: { label: 'OP PROGRAM', value: 'IDS-737-MAX', color: 'slate' },
        r6: { label: '', value: 'POS INIT>', color: 'cyan' },
      },
    },
    {
      stepNumber: 2,
      stageTitle: 'Inertial Position Initialization (POS INIT)',
      pageName: 'POS INIT Page',
      keyTarget: 'LSK 6R (POS INIT) ➔ Type KLAX ➔ LSK 2L ➔ Copy LSK 4R ➔ Paste LSK 5R',
      scratchpadInput: 'KLAX ➔ LSK 2L, copy LSK 4R ➔ LSK 5R',
      actionInstruction:
        'Press LSK 6R (POS INIT). Type "KLAX" into scratchpad and press LSK 2L (REF AIRPORT). Press LSK 4R to copy current GPS position into the scratchpad, then press LSK 5R (SET IRS POS).',
      explanation:
        'The IRS units need an exact starting latitude/longitude to begin inertial navigational tracking. Copying the high-precision GPS position (LSK 4R) into the SET IRS POS line (LSK 5R) initializes the ring laser gyros.',
      pilotTip:
        'If you are parked at a modeled airport gate with a known gate number, typing e.g. "GATE 54" into LSK 3L will automatically populate exact gate coordinates.',
      highlightLsk: '5R',
      cduScreen: {
        title: 'POS INIT',
        pageIndicator: '1/3',
        l1: { label: 'LAST POS', value: 'N33°56.5 W118°24.5', color: 'slate' },
        l2: { label: 'REF AIRPORT', value: 'KLAX', color: 'cyan' },
        r2: { label: '', value: 'N33°56.6 W118°24.5', color: 'green' },
        l3: { label: 'GATE', value: '[   ]', color: 'amber' },
        r4: { label: 'GPS POS', value: 'N33°56.55 W118°24.52', color: 'green' },
        l5: { label: 'SET IRS POS', value: '', color: 'white' },
        r5: { label: '', value: 'N33°56.55 W118°24.52', color: 'cyan' },
        r6: { label: '', value: 'ROUTE>', color: 'cyan' },
      },
    },
    {
      stepNumber: 3,
      stageTitle: 'Route Header (Origin, Destination & Runway)',
      pageName: 'RTE Page (Page 1/2)',
      keyTarget: 'RTE Key ➔ LSK 1L, 1R, 2R, 3L',
      scratchpadInput: 'KLAX ➔ LSK 1L, KSFO ➔ LSK 1R, SWA342 ➔ LSK 2R, 25R ➔ LSK 3L',
      actionInstruction:
        'Press the RTE function key. Type "KLAX" into LSK 1L (ORIGIN), "KSFO" into LSK 1R (DEST), "SWA342" into LSK 2R (FLT NO), and departure runway "25R" into LSK 3L (RUNWAY).',
      explanation:
        'Page 1 of RTE establishes the basic flight endpoints. Notice that the ACTIVATE prompt appears at LSK 6R, but do not activate yet until enroute airways and procedures are loaded.',
      pilotTip:
        'Entering the departure runway here immediately filters the available Standard Instrument Departures (SIDs) on the DEP/ARR page to only those valid for Runway 25R.',
      highlightLsk: '1R',
      cduScreen: {
        title: 'RTE',
        pageIndicator: '1/2',
        l1: { label: 'ORIGIN', value: 'KLAX', color: 'cyan' },
        r1: { label: 'DEST', value: 'KSFO', color: 'cyan' },
        l2: { label: 'CO ROUTE', value: '-------', color: 'slate' },
        r2: { label: 'FLT NO', value: 'SWA342', color: 'cyan' },
        l3: { label: 'RUNWAY', value: '25R', color: 'cyan' },
        r6: { label: '', value: 'ACTIVATE>', color: 'cyan' },
      },
    },
    {
      stepNumber: 4,
      stageTitle: 'Departure Runway & SID Selection',
      pageName: 'DEP/ARR INDEX ➔ KLAX DEPARTURES',
      keyTarget: 'DEP ARR Key ➔ LSK 1L (DEP) ➔ Select 25R, CASTA2, AVE',
      actionInstruction:
        'Press DEP ARR key. Press LSK 1L (KLAX DEP). Select runway "25R" on the right, select SID "CASTA2" on the left, and select transition "AVE" on the right.',
      explanation:
        'The DEP/ARR page cleanly separates departure runways, standard instrument departures, and enroute transitions. When selected, the choices turn into active cyan/green text.',
      pilotTip:
        'If you select a SID first without selecting a runway, verify whether your SID has specific runway branches. Selecting Runway 25R first prevents invalid SID assignments.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'KLAX DEPARTURES',
        pageIndicator: '1/1',
        l1: { label: 'SIDS', value: '<CASTA2', color: 'cyan' },
        r1: { label: 'RUNWAYS', value: '25R>', color: 'cyan' },
        l2: { label: '', value: '<ORCA4', color: 'white' },
        r2: { label: '', value: '25L>', color: 'white' },
        l3: { label: 'TRANS', value: '', color: 'slate' },
        r3: { label: '', value: 'AVE>', color: 'cyan' },
        r6: { label: '', value: 'ROUTE>', color: 'cyan' },
      },
    },
    {
      stepNumber: 5,
      stageTitle: 'Enroute Airway Entry: The VIA / TO Matrix',
      pageName: 'RTE Page (Page 2/2)',
      keyTarget: 'RTE Key ➔ NEXT PAGE ➔ LSK 2L & 2R',
      scratchpadInput: 'V107 ➔ LSK 2L, BSR ➔ LSK 2R',
      actionInstruction:
        'Press RTE key, then press NEXT PAGE. Line 1 already contains the SID exit fix "AVE". Under VIA (LSK 2L), type "V107". Under TO (LSK 2R), type "BSR".',
      explanation:
        'This is the heart of Boeing route configuration! The left column (VIA) is ALWAYS for airways (e.g., V107, J65, Q110, or "DIRECT"). The right column (TO) is ALWAYS for navigational fixes, VORs, or intersections (e.g. BSR, AVE).',
      pilotTip:
        'If you want to fly direct to a waypoint without an airway, simply type the waypoint name into the right column (TO). The FMC will automatically fill the left column with "DIRECT"!',
      highlightLsk: '2R',
      cduScreen: {
        title: 'RTE',
        pageIndicator: '2/2',
        l1: { label: 'VIA', value: 'CASTA2', color: 'green' },
        r1: { label: 'TO', value: 'AVE', color: 'green' },
        l2: { label: 'VIA', value: 'V107', color: 'cyan' },
        r2: { label: 'TO', value: 'BSR', color: 'cyan' },
        l3: { label: 'VIA', value: '-----', color: 'amber' },
        r3: { label: 'TO', value: '-----', color: 'amber' },
        r6: { label: '', value: 'ACTIVATE>', color: 'cyan' },
      },
    },
    {
      stepNumber: 6,
      stageTitle: 'Arrival (STAR) & Approach Procedure',
      pageName: 'DEP/ARR INDEX ➔ KSFO ARRIVALS',
      keyTarget: 'DEP ARR Key ➔ LSK 2R (ARR) ➔ Select ILS 28R, BSR3, MENLO',
      actionInstruction:
        'Press DEP ARR key. Press LSK 2R (KSFO ARR). Select approach "ILS 28R" on the right, select STAR "BSR3" on the left, and select transition "MENLO".',
      explanation:
        'This ties your enroute termination fix (BSR) into the San Francisco terminal area via the Big Sur Three arrival and tunes the localizer and glidepath for Runway 28R.',
      pilotTip:
        'In Boeing FMCs, always select the approach procedure (e.g. ILS 28R or RNAV 28R) first, which filters out incompatible STAR transitions.',
      highlightLsk: '2R',
      cduScreen: {
        title: 'KSFO ARRIVALS',
        pageIndicator: '1/2',
        l1: { label: 'STARS', value: '<BSR3', color: 'cyan' },
        r1: { label: 'APPROACHES', value: 'ILS 28R>', color: 'cyan' },
        l2: { label: 'TRANS', value: '', color: 'slate' },
        r2: { label: '', value: 'MENLO>', color: 'cyan' },
        l3: { label: '', value: '<SERFR4', color: 'white' },
        r3: { label: '', value: 'RNAV 28R>', color: 'white' },
        r6: { label: '', value: 'ROUTE>', color: 'cyan' },
      },
    },
    {
      stepNumber: 7,
      stageTitle: 'Inspecting LEGS & Resolving Discontinuities',
      pageName: 'LEGS Page',
      keyTarget: 'LEGS Key ➔ Copy next waypoint ➔ Paste over DISCONTINUITY',
      actionInstruction:
        'Press the LEGS function key. If you see "--- ROUTE DISCONTINUITY ---", press the LSK directly below the discontinuity to copy the next waypoint into the scratchpad, then press the LSK of the empty boxes to overwrite the discontinuity.',
      explanation:
        'Discontinuities appear as empty square boxes "□□□□□" with dashed lines. Unlike Airbus which uses the CLR key, Boeing FMCs bridge discontinuities by moving the downstream fix UP into the gap, pulling the rest of the route behind it.',
      pilotTip:
        'Alternatively, pressing the DEL key on the CDU keypad to place "DELETE" in the scratchpad, and pressing the discontinuity LSK, will also eliminate the break.',
      highlightLsk: '2L',
      cduScreen: {
        title: 'ACT RTE LEGS',
        pageIndicator: '1/3',
        l1: { label: '', value: 'AVE', color: 'magenta' },
        r1: { label: '250KT', value: 'FL180', color: 'cyan' },
        l2: { label: '', value: '□□□□□', color: 'amber' },
        r2: { label: '--- ROUTE', value: 'DISCONTINUITY ---', color: 'amber' },
        l3: { label: '', value: 'BSR', color: 'white' },
        r3: { label: '280KT', value: 'FL240', color: 'cyan' },
        l4: { label: '', value: 'MENLO', color: 'white' },
        r4: { label: '240KT', value: '5000', color: 'cyan' },
        r6: { label: '', value: 'LEGS RTE DATA>', color: 'cyan' },
      },
    },
    {
      stepNumber: 8,
      stageTitle: 'Activating & Executing the Flight Plan',
      pageName: 'RTE / LEGS Page',
      keyTarget: 'LSK 6R (ACTIVATE) ➔ Press physical EXEC Key',
      actionInstruction:
        'Press LSK 6R (ACTIVATE). Notice the yellow/white EXEC light illuminates on the physical CDU keyboard. Press the lighted EXEC key.',
      explanation:
        'Modifications in a Boeing FMC remain tentative (dashed cyan route on the Navigation Display) until you press EXEC. Pressing EXEC turns the route solid magenta and makes it active in the flight director and autopilot guidance.',
      pilotTip:
        'If the EXEC light is ON, your FMC is holding pending modifications! If you do not want the changes, press the ERASE prompt (LSK 6L) instead.',
      highlightLsk: 'EXEC',
      cduScreen: {
        title: 'MOD RTE LEGS',
        pageIndicator: '1/3',
        l1: { label: '', value: 'AVE', color: 'cyan' },
        r1: { label: '250KT', value: 'FL180', color: 'cyan' },
        l2: { label: '', value: 'BSR', color: 'cyan' },
        r2: { label: '280KT', value: 'FL240', color: 'cyan' },
        l3: { label: '', value: 'MENLO', color: 'cyan' },
        r3: { label: '240KT', value: '5000', color: 'cyan' },
        l4: { label: '', value: 'AXMUL', color: 'cyan' },
        r4: { label: '180KT', value: '3000', color: 'cyan' },
        l6: { label: '', value: '<ERASE', color: 'white' },
        r6: { label: '', value: 'ACTIVATE>', color: 'white' },
        execActive: true,
      },
    },
    {
      stepNumber: 9,
      stageTitle: 'EFIS PLAN Mode Step-Through Verification',
      pageName: 'EFIS Panel + CDU LEGS Page',
      keyTarget: 'EFIS Knob to PLAN ➔ Tap LSK 6R (STEP)',
      actionInstruction:
        'Rotate the EFIS display mode knob on the glare-shield to "PLAN". On the CDU LEGS page, notice that LSK 6R now displays "<STEP>". Press STEP repeatedly to march through the route on the Navigation Display.',
      explanation:
        'The center of the Navigation Display jumps from waypoint to waypoint with each press of STEP. Look for unintended doglegs, sharp retrograde turns, or duplicate fixes with identical names.',
      pilotTip:
        'Return the EFIS mode selector knob to "MAP" before takeoff so you have your compass rose and radar display ready for departure.',
      highlightLsk: '6R',
      cduScreen: {
        title: 'ACT RTE LEGS',
        pageIndicator: '2/3',
        l1: { label: '', value: 'BSR     [CTR]', color: 'magenta' },
        r1: { label: '280KT', value: 'FL240', color: 'cyan' },
        l2: { label: '', value: 'MENLO', color: 'white' },
        r2: { label: '240KT', value: '5000', color: 'cyan' },
        l3: { label: '', value: 'AXMUL', color: 'white' },
        r3: { label: '180KT', value: '3000', color: 'cyan' },
        l4: { label: '', value: 'RW28R', color: 'white' },
        r4: { label: '145KT', value: '13', color: 'cyan' },
        r6: { label: '', value: '<STEP>', color: 'cyan' },
      },
    },
    {
      stepNumber: 10,
      stageTitle: 'Performance Initialization (PERF INIT)',
      pageName: 'PERF INIT Page',
      keyTarget: 'INIT REF Key ➔ LSK 1L, 2L, 5L, 1R ➔ EXEC',
      scratchpadInput: 'Double-tap LSK 1L, 5.0 ➔ LSK 2L, 35 ➔ LSK 5L, 280 ➔ LSK 1R',
      actionInstruction:
        'Press INIT REF key. Double-click LSK 1L to auto-populate Zero Fuel Weight (ZFW 138.4). Enter Fuel Reserves "5.0" at LSK 2L, Cost Index "35" at LSK 5L, and Cruise Altitude "280" at LSK 1R. Press the lighted EXEC key.',
      explanation:
        'The FMC needs weights to compute climb and descent profiles. Double-clicking LSK 1L queries the aircraft weight sensor or fuel manager. Reserves define the minimum fuel reserve for diversion, and Cost Index (CI) determines the target Mach cruise speed.',
      pilotTip:
        'If you receive the scratchpad alert "VERIFY GW", check that your fuel quantity in the tanks plus your ZFW equals the calculated Gross Weight.',
      highlightLsk: '1R',
      cduScreen: {
        title: 'PERF INIT',
        l1: { label: 'ZFW', value: '138.4', color: 'cyan' },
        r1: { label: 'CRZ ALT', value: 'FL280', color: 'cyan' },
        l2: { label: 'RESERVES', value: '5.0', color: 'cyan' },
        r2: { label: 'CRZ WND', value: '---°/---KT', color: 'slate' },
        l3: { label: 'COST INDEX', value: '35', color: 'cyan' },
        r3: { label: 'T/C OAT', value: '-35°C', color: 'green' },
        l4: { label: 'MIN FUEL TEMP', value: '-37°C', color: 'green' },
        r4: { label: 'TRANS ALT', value: '18000', color: 'green' },
        r6: { label: '', value: 'N1 LIMIT>', color: 'cyan' },
        execActive: true,
      },
    },
    {
      stepNumber: 11,
      stageTitle: 'Thrust Limit & Assumed Temperature Derate',
      pageName: 'N1 LIMIT Page',
      keyTarget: 'LSK 6R (N1 LIMIT) ➔ LSK 1L (SEL TEMP)',
      scratchpadInput: '48 ➔ LSK 1L',
      actionInstruction:
        'Press LSK 6R (N1 LIMIT). Type "48" into scratchpad and press LSK 1L (SEL TEMP). Select climb thrust "CLB-1" at LSK 3R.',
      explanation:
        'The Assumed Temperature Method tricks the engine computer into thinking the ambient outside air is 48°C (hotter air is less dense, so the engine intentionally produces lower thrust). This reduces exhaust gas temperature (EGT), extends turbine blade life, and saves fuel.',
      pilotTip:
        'Never use an assumed temperature higher than the maximum takeoff derate allowed for your aircraft gross weight and runway length (maximum derate is typically 25% thrust reduction).',
      highlightLsk: '1L',
      cduScreen: {
        title: 'N1 LIMIT',
        l1: { label: 'SEL TEMP', value: '48°C', color: 'cyan' },
        r1: { label: 'OAT', value: '18°C', color: 'green' },
        l2: { label: 'TO', value: '92.4% N1', color: 'white' },
        r2: { label: 'D-TO 1', value: '<90.1% N1>', color: 'green' },
        l3: { label: 'CLB', value: '93.2% N1', color: 'white' },
        r3: { label: 'CLB-1', value: '<90.8% N1>', color: 'cyan' },
        r6: { label: '', value: 'TAKEOFF>', color: 'cyan' },
      },
    },
    {
      stepNumber: 12,
      stageTitle: 'Takeoff Reference: Flaps, CG Trim & V-Speeds',
      pageName: 'TAKEOFF REF (Page 1/2)',
      keyTarget: 'LSK 6R (TAKEOFF) ➔ LSK 1L (5) ➔ Tap LSK 3L ➔ Tap LSK 1R, 2R, 3R',
      scratchpadInput: '5 ➔ LSK 1L, tap LSK 3L',
      actionInstruction:
        'Press LSK 6R (TAKEOFF). Type "5" into LSK 1L (FLAPS). Tap LSK 3L (CG) to compute trim units (e.g. 5.15). Then tap LSK 1R (V1: 143), LSK 2R (VR: 146), and LSK 3R (V2: 150) to confirm.',
      explanation:
        'Entering takeoff flaps calculates takeoff speeds based on current runway conditions and gross weight. Tapping the CG prompt calculates the exact mechanical stabilizer trim units needed on the center pedestal. Tapping each V-speed confirms them and sends speed bugs to your Primary Flight Display (PFD).',
      pilotTip:
        'Once confirmed, the V-speeds turn from small font to large bold font on the CDU screen and magenta bugs appear on your PFD speed tape.',
      highlightLsk: '3L',
      cduScreen: {
        title: 'TAKEOFF REF',
        pageIndicator: '1/2',
        l1: { label: 'FLAPS', value: '5', color: 'cyan' },
        r1: { label: 'V1', value: '143', color: 'green' },
        l2: { label: 'E/O ACCEL HT', value: '800', color: 'green' },
        r2: { label: 'VR', value: '146', color: 'green' },
        l3: { label: 'CG', value: '24.2%', color: 'cyan' },
        r3: { label: 'V2', value: '150', color: 'green' },
        l4: { label: 'TRIM', value: '5.15 UNITS', color: 'green' },
        r4: { label: 'TRANS ALT', value: '18000', color: 'green' },
        r6: { label: '', value: 'TAKEOFF REF 2>', color: 'cyan' },
      },
    },
  ],
};

export const CLASSIC_A310_DATA: AircraftFmsGuideData = {
  aircraftId: 'a310-300',
  aircraftName: 'Airbus A310-300',
  systemName: 'Classic Smiths Industries / Honeywell FMS',
  family: 'Classic',
  workedRouteSummary: {
    origin: 'KLAX (Los Angeles Intl)',
    destination: 'KSFO (San Francisco Intl)',
    alternate: 'KOAK (Oakland Intl)',
    runway: '25R',
    sid: 'CASTA2',
    enroute: 'AVE V107 BSR',
    star: 'BSR3',
    approach: 'ILS 28R',
    cruiseAlt: 'FL280',
    costIndex: '30',
    zfw: '110.0 tonnes',
    blockFuel: '14.5 tonnes',
  },
  steps: [
    {
      stepNumber: 1,
      stageTitle: 'Classic FMS Initialization',
      pageName: 'NAV STATUS / IDENT',
      keyTarget: 'INIT Key ➔ LSK 1L',
      actionInstruction:
        'Press INIT key on the classic monochrome CRT CDU. Verify engine type (GE CF6-80 or PW4152) and AIRAC validity.',
      explanation:
        'The A310 features an early 1980s hybrid analog/digital cockpit with a dual Smiths FMS. The green phosphor CRT display operates using line select keys and classic block formatting.',
      pilotTip:
        'Unlike modern A320s, the A310 requires separate alignment confirmation on the overhead IRU panel in addition to the CDU.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'FMS IDENT',
        l1: { label: 'A/C MODEL', value: 'A310-300', color: 'green' },
        r1: { label: 'ENG', value: 'CF6-80C2', color: 'green' },
        l2: { label: 'ACTIVE NAV DATA', value: 'AIRAC 2411', color: 'green' },
        r2: { label: '', value: '03NOV-30NOV', color: 'green' },
        r6: { label: '', value: 'INIT INDEX>', color: 'green' },
      },
    },
    {
      stepNumber: 2,
      stageTitle: 'Route & Enroute Waypoint Programming',
      pageName: 'F-PLAN / ROUTE',
      keyTarget: 'F-PLAN Key ➔ Enter FROM/TO ➔ Insert Waypoints',
      scratchpadInput: 'KLAX/KSFO ➔ LSK 1R',
      actionInstruction:
        'Press F-PLAN key. Enter Origin "KLAX" and Destination "KSFO". Enter departure runway 25R and SID CASTA2. Step through enroute waypoints AVE, BSR, and approach ILS 28R.',
      explanation:
        'The classic FMS organizes routes as a sequential chain of navigational legs. Intermediate airway waypoints can be loaded via the LAT REV or WAYPOINT page.',
      pilotTip:
        'Discontinuities in the A310 are cleared using the CLR key directly against the dashed line prompt.',
      highlightLsk: '1R',
      cduScreen: {
        title: 'FLT PLAN DISP',
        l1: { label: 'FROM', value: 'KLAX', color: 'green' },
        r1: { label: 'TO', value: 'KSFO', color: 'green' },
        l2: { label: 'RWY', value: '25R', color: 'green' },
        r2: { label: 'SID', value: 'CASTA2', color: 'green' },
        l3: { label: 'ENROUTE', value: 'AVE - BSR', color: 'green' },
        r6: { label: '', value: 'PERF INIT>', color: 'green' },
      },
    },
    {
      stepNumber: 3,
      stageTitle: 'Performance & Takeoff Calculation',
      pageName: 'PERF DATA',
      keyTarget: 'PERF Key ➔ Enter ZFW, Flaps, Speeds',
      scratchpadInput: '110.0 ➔ LSK 1L, 15/0 ➔ LSK 2L',
      actionInstruction:
        'Press PERF key. Input ZFW (110.0), Slats/Flaps setting (15/0), and calculate V1 (138), VR (142), V2 (146).',
      explanation:
        'The A310 performance computer calculates optimum speeds and pitch trim settings for the classic analog airspeed indicator bugs.',
      pilotTip:
        'Check the mechanical pitch trim wheel on the center pedestal to match the trim reading displayed on the FMS PERF page.',
      highlightLsk: '1L',
      cduScreen: {
        title: 'PERF DATA',
        l1: { label: 'ZFW', value: '110.0 T', color: 'green' },
        r1: { label: 'CRZ ALT', value: 'FL280', color: 'green' },
        l2: { label: 'FLAPS/SLATS', value: '15/0', color: 'green' },
        r2: { label: 'V1 / VR / V2', value: '138/142/146', color: 'green' },
        l3: { label: 'FLEX TEMP', value: '54°C', color: 'green' },
        r3: { label: 'TRIM', value: '1.2 UP', color: 'green' },
      },
    },
  ],
};

export const FMS_GUIDE_MAP: Record<string, AircraftFmsGuideData> = {
  'a320neo-v2': AIRBUS_MCDU_DATA,
  'a330-300': {
    ...AIRBUS_MCDU_DATA,
    aircraftId: 'a330-300',
    aircraftName: 'Airbus A330-300',
    systemName: 'Thales / Honeywell Widebody FMS / MCDU',
    workedRouteSummary: {
      ...AIRBUS_MCDU_DATA.workedRouteSummary,
      zfw: '168.0 tonnes / 28.5% CG',
      blockFuel: '24.5 tonnes',
    },
  },
  'b737-max8': BOEING_FMC_DATA,
  'b747-8i': {
    ...BOEING_FMC_DATA,
    aircraftId: 'b747-8i',
    aircraftName: 'Boeing 747-8 Intercontinental',
    systemName: 'Honeywell / Rockwell Collins Pegasus FMC (4-Engine Widebody)',
    workedRouteSummary: {
      ...BOEING_FMC_DATA.workedRouteSummary,
      zfw: '540.0 klbs / 245.0 tonnes',
      blockFuel: '65.0 tonnes',
    },
  },
  'a310-300': CLASSIC_A310_DATA,
};

export interface AirwayExplainerRule {
  title: string;
  badge: string;
  description: string;
  airbusAction: string;
  boeingAction: string;
  gotcha: string;
}

export const AIRWAY_RULES: AirwayExplainerRule[] = [
  {
    title: 'The "VIA" vs "TO" Principle',
    badge: 'Core Concept',
    description:
      'In modern aviation, an airway is a published airway corridor (like an interstate highway) connecting multiple fixes. "VIA" represents HOW you get there (the airway name), and "TO" represents WHERE you exit (the waypoint).',
    airbusAction:
      'Airbus does NOT allow airway typing on the main F-PLAN page. You must tap the LSK of the entry fix, open the "AIRWAYS" subpage, and enter VIA on Left (e.g. V107) and TO on Right (e.g. BSR).',
    boeingAction:
      'On RTE Page 2, the left column is exclusively VIA and the right column is exclusively TO. Enter the airway on the left (e.g. V107) and the exit fix on the right (e.g. BSR).',
    gotcha:
      'Trying to type an airway name (like J65 or V107) into a waypoint field causes "NOT IN DATABASE" or "INVALID ENTRY" because the FMS treats it as a single coordinate fix.',
  },
  {
    title: 'Flying "DIRECT" to a Fix',
    badge: 'Direct Routing',
    description:
      'When your route goes directly from one fix to another without following an airway (e.g., KLAX direct to AVE, or AVE direct to BSR).',
    airbusAction:
      'Simply type the waypoint identifier into the scratchpad on the F-PLAN page and press the LSK where you want it inserted in sequence.',
    boeingAction:
      'Type the waypoint identifier into the right-hand "TO" column on the RTE page. The Boeing FMC will automatically fill the corresponding left-hand VIA column with "DIRECT".',
    gotcha:
      'Never type "DIRECT" into the scratchpad on Boeing! Leave the VIA column blank and just enter the waypoint in TO.',
  },
  {
    title: 'Airway Continuity & Connected Intersections',
    badge: 'Database Matching',
    description:
      'An airway can only be joined at a waypoint that actually lies on that airway in the navigation database. You cannot join V107 at a waypoint located in Florida.',
    airbusAction:
      'If the entered fix does not lie on the airway, the MCDU rejects the entry with "NOT ON AIRWAY" or reverts to amber boxes.',
    boeingAction:
      'The Boeing FMC returns "INVALID ENTRY" or "AIRWAY FIX MISMATCH" if the fix does not exist on that airway segment.',
    gotcha:
      'Always check your flight plan chart or SimBrief OFP to ensure your transition waypoint connects directly to the first airway.',
  },
];

export interface DiscontinuityReason {
  cause: string;
  whyItHappens: string;
  shouldYouClear: 'YES - Normal Flight Plan' | 'NO - Radar Vectors' | 'DEPENDS';
  airbusFix: string;
  boeingFix: string;
}

export const DISCONTINUITY_REASONS: DiscontinuityReason[] = [
  {
    cause: 'Gap between SID and first Enroute Waypoint',
    whyItHappens:
      'The departure procedure terminates at a transition fix (or vector heading) that does not directly link into the first entered enroute fix.',
    shouldYouClear: 'YES - Normal Flight Plan',
    airbusFix: 'Press CLR key (puts CLR in scratchpad), then press LSK next to "--- F-PLAN DISCONTINUITY ---".',
    boeingFix: 'Press the LSK below the discontinuity to copy the downstream waypoint, then paste it over the empty boxes "□□□□□", or press DEL then LSK.',
  },
  {
    cause: 'Manual Radar Vectors on Arrival / Approach (MANUAL / VECT)',
    whyItHappens:
      'Many real-world STARs terminate in open radar vectors where ATC is supposed to vector the aircraft onto the final approach course rather than a continuous curve.',
    shouldYouClear: 'NO - Radar Vectors',
    airbusFix:
      'Leave the discontinuity or MANUAL leg in place! When reaching this leg, the autopilot automatically switches from NAV to TRK/FPA or HDG/V/S for pilot heading intervention.',
    boeingFix:
      'Leave the discontinuity intact. When flying vectors, select HDG SEL on the MCP to steer ATC headings, and when cleared for approach, arm APP mode to intercept the localizer.',
  },
  {
    cause: 'Selecting a new Runway or Changing Approach',
    whyItHappens:
      'When you change runways or approaches in mid-air or at the gate, the FMS preserves your previous route and creates a temporary break to prevent unintended autopilot turns.',
    shouldYouClear: 'YES - Normal Flight Plan',
    airbusFix:
      'Review the updated F-PLAN, press CLR on any unexpected discontinuity, and tap INSERT* (LSK 6R).',
    boeingFix:
      'Check the LEGS page, copy the first approach fix over the discontinuity boxes, and press the lighted EXEC key.',
  },
];

export interface FmsTroubleshootingItem {
  id: string;
  errorText: string;
  system: 'Both' | 'Airbus' | 'Boeing';
  rootCause: string;
  solution: string;
}

export const FMS_TROUBLESHOOTING: FmsTroubleshootingItem[] = [
  {
    id: 'err-not-in-db',
    errorText: 'NOT IN DATABASE',
    system: 'Both',
    rootCause:
      'The waypoint or airport code was misspelled, or the airway/procedure is not present in the current simulator AIRAC navigation database cycle.',
    solution:
      'Double check spelling (e.g. KLAX vs LAX). If entering an airway, verify you are entering it on the AIRWAYS subpage (Airbus) or the VIA column (Boeing), not in a waypoint slot. If using custom scenery, verify Navigraph or MSFS nav data is synced.',
  },
  {
    id: 'err-invalid-entry',
    errorText: 'INVALID ENTRY / FORMAT ERROR',
    system: 'Both',
    rootCause:
      'The data entered in the scratchpad violates the syntax required by that specific field (e.g. entering a number with letters, forgetting a slash, or entering weights exceeding limits).',
    solution:
      'Review format rules: Origin/Destination must be "ICAO/ICAO" (e.g. KLAX/KSFO). Flight levels must be numbers or FLxxx. Weights must be in correct units (Metric tonnes vs Imperial 1,000s lbs). Cost index must be between 0 and 999 (typically 0-100).',
  },
  {
    id: 'err-vspeeds-missing',
    errorText: 'V-Speeds not computing / TAKEOFF SPEEDS DELETED',
    system: 'Both',
    rootCause:
      'Occurs when aircraft weight (ZFW/ZFWCG), fuel, flap configuration, or runway changes after speeds were initially set.',
    solution:
      'Open the Takeoff page (PERF on Airbus, TAKEOFF REF on Boeing). Ensure Flap selection is typed (e.g. 1 on Airbus, 5 on Boeing). Click the empty V1, VR, V2 line-select keys to auto-calculate or re-confirm speeds.',
  },
  {
    id: 'err-perf-disagree',
    errorText: 'PERF DISAGREE / CHECK ALT',
    system: 'Boeing',
    rootCause:
      'A programmed waypoint altitude restriction is physically impossible to achieve with the aircraft’s climb/descent performance or gross weight.',
    solution:
      'Open LEGS page and check altitude restrictions. If a waypoint requires FL240 within 3 miles of takeoff, edit or delete the impossible restriction.',
  },
  {
    id: 'err-discontinuity-stuck',
    errorText: 'Discontinuity refuses to delete',
    system: 'Airbus',
    rootCause:
      'Attempting to press CLR on a discontinuity that follows a (VECT) or MANUAL leg where the autopilot requires manual heading navigation.',
    solution:
      'Delete the (VECT) or (MANUAL) leg first using the CLR key, which will automatically collapse the trailing discontinuity.',
  },
  {
    id: 'err-exec-unlit',
    errorText: 'Route entered but autopilot won’t follow (LNAV disconnects)',
    system: 'Boeing',
    rootCause:
      'The route was programmed on RTE or LEGS, but the pilot forgot to press ACTIVATE (LSK 6R) and the illuminated white EXEC button on the CDU.',
    solution:
      'Look at the CDU keyboard. If the EXEC light is lit, press it! LNAV cannot engage if the flight plan is still in "MOD" (modified/unexecuted) status.',
  },
];
