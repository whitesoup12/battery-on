import { Aircraft } from '../types/aircraft';

export const AIRCRAFT_LIST: Aircraft[] = [
  {
    id: 'a320neo-v2',
    name: 'Airbus A320neo (v2)',
    subtitle: 'Narrowbody Twinjet • iniBuilds',
    shortCode: 'A20N',
    manufacturer: 'Airbus',
    developer: 'iniBuilds / MSFS 2024',
    bodyType: 'Narrowbody',
    engineCount: 2,
    fmsName: 'MCDU',
    accentColor: 'cyan',
    summary: 'The iconic fly-by-wire airliner featuring Airbus "Dark Cockpit" philosophy, Thales MCDU, and CFM LEAP-1A engines.',
    phases: [
      // DEPARTURE
      {
        id: 'a320-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'From dead cockpit to energized AC/DC buses',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a320-bat-check',
            item: 'BAT 1 & 2 Voltage',
            action: 'CHECK ≥ 25.5 V',
            location: 'OVHD - ELEC',
            note: 'Verify battery voltage before connecting. If below 25.5V, ground charging required.'
          },
          {
            id: 'a320-bat-on',
            item: 'BAT 1 & BAT 2',
            action: 'AUTO / ON',
            location: 'OVHD - ELEC',
            note: 'Push both battery pushbutton switches. OFF lights extinguish.'
          },
          {
            id: 'a320-ext-pwr',
            item: 'EXT PWR',
            action: 'ON (AVAIL ➔ ON)',
            location: 'OVHD - ELEC',
            note: 'When ground power cart is connected via EFB or ATC, AVAIL illuminates green. Press to connect.'
          },
          {
            id: 'a320-dome-lt',
            item: 'DOME LIGHT / INTEG LT',
            action: 'BRT / AS RQRD',
            location: 'OVHD - LIGHTS',
            note: 'Set cockpit dome light and integral pedestal backlighting as desired.'
          }
        ]
      },
      {
        id: 'a320-p2',
        title: '2. Cockpit Preparation & Overhead Scan',
        shortTitle: 'Cockpit Prep',
        subtitle: 'System alignment, lights, fuel, and air conditioning',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a320-adirs',
            item: 'ADIRS 1, 2, 3',
            action: 'OFF ➔ NAV',
            location: 'OVHD - ADIRS',
            note: 'Switch rotary selectors one by one from OFF to NAV. IRS alignment takes ~7 minutes.'
          },
          {
            id: 'a320-strobe-lt',
            item: 'STROBE Light Switch',
            action: 'AUTO',
            location: 'OVHD - LIGHTS',
            note: 'Will automatically ignite strobes upon main gear weight-off-wheels.'
          },
          {
            id: 'a320-nav-logo',
            item: 'NAV & LOGO Lights',
            action: '1 or 2 (ON)',
            location: 'OVHD - LIGHTS',
            note: 'Powers wingtip navigation lights.'
          },
          {
            id: 'a320-seatbelts',
            item: 'SEAT BELTS & NO SMOKING',
            action: 'ON & AUTO',
            location: 'OVHD - LIGHTS',
            note: 'Provides passenger cabin chime and illuminated signs.'
          },
          {
            id: 'a320-emer-exit',
            item: 'EMER EXIT LT Switch',
            action: 'ARM (Guarded)',
            location: 'OVHD - LIGHTS',
            note: 'White OFF light must be extinguished.'
          },
          {
            id: 'a320-fuel-pumps',
            item: 'FUEL PUMPS (L, C, R)',
            action: 'ALL ON (6 Pushbuttons)',
            location: 'OVHD - FUEL',
            note: 'Push in Left 1+2, Center 1+2, and Right 1+2 pumps. All white OFF annunciators extinguish.'
          },
          {
            id: 'a320-air-packs',
            item: 'PACK 1 & PACK 2',
            action: 'ON (FAULT until air supplied)',
            location: 'OVHD - AIR / PACKS',
            note: 'Pushbuttons stay in AUTO/ON. FAULT lights extinguish once bleed air pressure is supplied.'
          }
        ]
      },
      {
        id: 'a320-p3',
        title: '3. MCDU Initialization (DIFSRIP)',
        shortTitle: 'MCDU Setup',
        subtitle: 'FMS route programming, performance, and takeoff speeds',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a320-mcdu-data',
            item: 'MCDU: DATA / A/C STATUS',
            action: 'VERIFY NAV DATABASE',
            location: 'FMS / MCDU',
            note: 'Check active AIRAC cycle validity.'
          },
          {
            id: 'a320-mcdu-init-a',
            item: 'MCDU: INIT A',
            action: 'FROM/TO, FLT NBR, CRZ FL',
            location: 'FMS / MCDU',
            note: 'Input ICAO pair (e.g., KLAX/KSFO), callsign, Cost Index (e.g. 25-45), and planned Cruise FL.'
          },
          {
            id: 'a320-mcdu-irs-align',
            item: 'MCDU: ALIGN IRS',
            action: 'PRESS PROMPT',
            location: 'FMS / MCDU',
            note: 'On INIT A page, select ALIGN IRS prompt to sync coordinates.'
          },
          {
            id: 'a320-mcdu-fplan',
            item: 'MCDU: F-PLAN Page',
            action: 'DEPARTURE & ROUTE ENTERED',
            location: 'FMS / MCDU',
            note: 'Select departure runway & SID. Enter enroute airways/waypoints and destination STAR. Clear DISCONTINUITY.'
          },
          {
            id: 'a320-mcdu-init-b',
            item: 'MCDU: INIT B (or FUEL PRED)',
            action: 'ZFW / ZFWCG & BLOCK FUEL',
            location: 'FMS / MCDU',
            note: 'Tap right key next to ZFW/ZFWCG twice to auto-fill or enter payload from EFB. Enter Block fuel.'
          },
          {
            id: 'a320-mcdu-perf',
            item: 'MCDU: PERF TAKEOFF',
            action: 'V1, VR, V2, FLAPS / THS',
            location: 'FMS / MCDU',
            note: 'Enter Flaps & THS (e.g. 1/UP0.2). Click V1, VR, V2 keys to compute takeoff decision and rotation speeds.'
          }
        ]
      },
      {
        id: 'a320-p4',
        title: '4. APU Startup & Pushback Prep',
        shortTitle: 'APU & Start Prep',
        subtitle: 'Starting onboard turbine, bleeds, and securing cabin',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a320-apu-master',
            item: 'APU MASTER SW',
            action: 'ON',
            location: 'OVHD - APU',
            note: 'Flap opens at air intake. Wait 3 seconds for flap fully open indication.'
          },
          {
            id: 'a320-apu-start',
            item: 'APU START Pb',
            action: 'ON (AVAIL Check)',
            location: 'OVHD - APU',
            note: 'Blue ON illuminates. Monitor APU page on lower ECAM until green "AVAIL" appears (~35-45s).'
          },
          {
            id: 'a320-apu-bleed',
            item: 'APU BLEED Pb',
            action: 'ON',
            location: 'OVHD - AIR / PACKS',
            note: 'Provides pneumatic air for engine start and cockpit climate control. Pack FAULT lights extinguish.'
          },
          {
            id: 'a320-ext-pwr-off',
            item: 'EXT PWR Switch',
            action: 'DISCONNECT / OFF',
            location: 'OVHD - ELEC',
            note: 'APU generator takes over electrical load seamlessly. Ground power cart can now be disconnected.'
          },
          {
            id: 'a320-baro-set',
            item: 'BARO Reference (Both Sides)',
            action: 'SET LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Check PFD altimeter matches field elevation.'
          },
          {
            id: 'a320-transponder',
            item: 'TCAS / TRANSPONDER',
            action: 'SQUAWK CODE & STBY/AUTO',
            location: 'PEDESTAL',
            note: 'Input assigned ATC squawk code. Mode selector in STBY or AUTO.'
          },
          {
            id: 'a320-beacon-on',
            item: 'BEACON Light Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'CRITICAL: Signals ground crew that aircraft is about to pushback and start engines.'
          }
        ]
      },
      {
        id: 'a320-p5',
        title: '5. Pushback & Engine Start',
        shortTitle: 'Engine Start',
        subtitle: 'Clearance, starter engagement, and spool verification',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a320-parking-brake',
            item: 'PARKING BRAKE',
            action: 'RELEASE / AS RQRD',
            location: 'PEDESTAL',
            note: 'Release when pushback tug is connected and cleared to move.'
          },
          {
            id: 'a320-mode-sel',
            item: 'ENG MODE Selector',
            action: 'IGN / START',
            location: 'PEDESTAL',
            note: 'Lower ECAM automatically displays Engine Start page.'
          },
          {
            id: 'a320-eng2-start',
            item: 'ENG 2 MASTER Switch',
            action: 'ON',
            location: 'PEDESTAL',
            note: 'Start Engine 2 first (powers yellow hydraulic system). Monitor N2 > 16%, Fuel Flow, EGT, N1.'
          },
          {
            id: 'a320-eng2-avail',
            item: 'ENG 2 Parameters',
            action: 'AVAIL (N1 ~19.5%, N2 ~58%)',
            location: 'MAIN PANEL',
            note: 'Confirm grey background on ECAM vanishes and AVAIL appears.'
          },
          {
            id: 'a320-eng1-start',
            item: 'ENG 1 MASTER Switch',
            action: 'ON',
            location: 'PEDESTAL',
            note: 'Start Engine 1. Monitor N2 spool, oil pressure, and light-off.'
          },
          {
            id: 'a320-eng1-avail',
            item: 'ENG 1 Parameters',
            action: 'AVAIL STABILIZED',
            location: 'MAIN PANEL',
            note: 'Both engines now stable and generating electrical and hydraulic power.'
          }
        ]
      },
      {
        id: 'a320-p6',
        title: '6. Taxi & Before Takeoff',
        shortTitle: 'Taxi & Line-Up',
        subtitle: 'Flaps, trims, flight control sweep, and runway line-up',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a320-mode-norm',
            item: 'ENG MODE Selector',
            action: 'NORM',
            location: 'PEDESTAL',
            note: 'Turn rotary switch back from IGN/START to NORM.'
          },
          {
            id: 'a320-apu-shutdown',
            item: 'APU BLEED & MASTER SW',
            action: 'BOTH OFF',
            location: 'OVHD - APU',
            note: 'Engines now supply electrical generators and bleed air.'
          },
          {
            id: 'a320-ground-spoilers',
            item: 'GROUND SPOILERS Lever',
            action: 'ARM (Pull Up)',
            location: 'PEDESTAL',
            note: 'Confirm white band visible below lever.'
          },
          {
            id: 'a320-flaps-set',
            item: 'FLAPS Lever',
            action: 'SET 1 (or Takeoff Flap)',
            location: 'PEDESTAL',
            note: 'Position 1 sets slats & flaps (1+F) for departure.'
          },
          {
            id: 'a320-pitch-trim',
            item: 'PITCH TRIM Wheel',
            action: 'SET TAKEOFF CG',
            location: 'PEDESTAL',
            note: 'Move manual trim wheel to match MCDU calculated THS (e.g., UP 0.2).'
          },
          {
            id: 'a320-autobrake',
            item: 'AUTO BRK Pushbutton',
            action: 'MAX',
            location: 'MAIN PANEL',
            note: 'ARM blue light illuminated for rejected takeoff protection.'
          },
          {
            id: 'a320-fctl-check',
            item: 'FLIGHT CONTROLS',
            action: 'FULL TRAVEL CHECK',
            location: 'MAIN PANEL',
            note: 'Check Sidestick full up/down, full left/right, and rudder pedals on lower F/CTL ECAM.'
          },
          {
            id: 'a320-taxi-nose',
            item: 'NOSE LIGHT',
            action: 'TAXI (Line-Up: T.O)',
            location: 'OVHD - LIGHTS',
            note: 'Set to TAXI while rolling. Switch to T.O when cleared for takeoff.'
          },
          {
            id: 'a320-lineup-tcas',
            item: 'TCAS Mode Selector',
            action: 'TA / RA',
            location: 'PEDESTAL',
            note: 'Switch TCAS from STBY to TA/RA when crossing hold-short line.'
          },
          {
            id: 'a320-lineup-strobes',
            item: 'STROBE Lights Switch',
            action: 'ON (Active Runway)',
            location: 'OVHD - LIGHTS',
            note: 'Turn on wing strobes for runway entry.'
          }
        ]
      },

      // EN ROUTE
      {
        id: 'a320-p7',
        title: '7. Climb (After Takeoff & 10,000 ft)',
        shortTitle: 'Climb & 10k ft',
        subtitle: 'Clean-up, climb thrust detent, and transition altitude',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a320-gear-up',
            item: 'LANDING GEAR Lever',
            action: 'UP (Positive Rate)',
            location: 'MAIN PANEL',
            note: 'Select UP once positive climb rate confirmed on altimeter and VSI.'
          },
          {
            id: 'a320-ap1-on',
            item: 'AUTOPILOT 1 (AP1)',
            action: 'ENGAGE (Passing 500 ft AGL)',
            location: 'GLARESHIELD',
            note: 'Press AP1 pushbutton. Confirm NAV and CLB green modes on PFD FMA.'
          },
          {
            id: 'a320-thrust-clb',
            item: 'THRUST LEVERS',
            action: 'RETARD TO CL DETENT',
            location: 'PEDESTAL',
            note: 'At thrust reduction altitude (~1,500 ft AGL), "LVR CLB" flashes on PFD. Pull levers back to CL click detent.'
          },
          {
            id: 'a320-flaps-retract',
            item: 'FLAPS Lever',
            action: 'RETRACT TO 0 (at S Speed)',
            location: 'PEDESTAL',
            note: 'Accelerating through green dot and S-speed, retract flaps to 0. Disarm ground spoilers.'
          },
          {
            id: 'a320-10k-lights',
            item: 'LANDING / NOSE LIGHTS',
            action: 'RETRACT / OFF (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Extinguish forward landing lights and RWY turnoff lights above 10,000 ft.'
          },
          {
            id: 'a320-seatbelts-auto',
            item: 'SEATBELTS Switch',
            action: 'AUTO / AS RQRD',
            location: 'OVHD - LIGHTS',
            note: 'Release cabin if smooth climb profile.'
          },
          {
            id: 'a320-baro-std',
            item: 'BARO Reference',
            action: 'PULL FOR STD (Transition Alt)',
            location: 'GLARESHIELD',
            note: 'Pull baro knob to select Standard Pressure (1013 hPa / 29.92 inHg). Check both PFDs show STD.'
          }
        ]
      },
      {
        id: 'a320-p8',
        title: '8. Cruise',
        shortTitle: 'Cruise',
        subtitle: 'Flight level level-off, engine cruise monitoring, and fuel balance',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a320-crz-fma',
            item: 'PFD FMA Flight Modes',
            action: 'VERIFY ALT CRZ / NAV',
            location: 'MAIN PANEL',
            note: 'Verify aircraft levels off cleanly at planned cruise flight level.'
          },
          {
            id: 'a320-crz-prog',
            item: 'MCDU: PROG Page',
            action: 'CHECK OPT / MAX FL & GPS ACCUR',
            location: 'FMS / MCDU',
            note: 'Check optimum and maximum flight levels and fuel remaining estimates.'
          },
          {
            id: 'a320-crz-fuel',
            item: 'FUEL PRED & ECAM FUEL',
            action: 'MONITOR BALANCE (L vs R)',
            location: 'OVHD - FUEL',
            note: 'Verify symmetric fuel burn across inner wing tanks.'
          }
        ]
      },
      {
        id: 'a320-p9',
        title: '9. Descent Preparation (Top of Descent)',
        shortTitle: 'Descent Prep',
        subtitle: 'ATIS weather, MCDU arrival setup, minimums, and autobrake',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a320-arr-weather',
            item: 'DESTINATION ATIS / METAR',
            action: 'OBTAIN WIND, QNH & RWY',
            location: 'FMS / MCDU',
            note: 'Retrieve destination weather via ATC, SimBrief, or ATIS frequency.'
          },
          {
            id: 'a320-mcdu-arr',
            item: 'MCDU: F-PLAN Destination',
            action: 'SELECT ARRIVAL STAR & APPR',
            location: 'FMS / MCDU',
            note: 'Select expected runway, ILS/RNAV approach, and STAR with transition.'
          },
          {
            id: 'a320-mcdu-appr-perf',
            item: 'MCDU: PERF APPR Page',
            action: 'INPUT QNH, TEMP, MAG WIND & MDA',
            location: 'FMS / MCDU',
            note: 'Input destination baro pressure, surface wind, and Decision Altitude (MDA/DH). Confirm VAPP speed.'
          },
          {
            id: 'a320-autobrake-appr',
            item: 'AUTO BRK Pushbutton',
            action: 'LOW or MED',
            location: 'MAIN PANEL',
            note: 'Arm LOW for long dry runway; arm MED for shorter runway or contaminated surface.'
          },
          {
            id: 'a320-init-descent',
            item: 'ALTITUDE Selector',
            action: 'DIAL LOWER & PUSH FOR DES',
            location: 'GLARESHIELD',
            note: 'At Top of Descent (white arrow on ND), dial cleared descent altitude and push knob to engage managed DES.'
          }
        ]
      },

      // ARRIVAL & SHUTDOWN
      {
        id: 'a320-p10',
        title: '10. Approach (Passing 10,000 ft & Localizer)',
        shortTitle: 'Approach Flow',
        subtitle: '10,000 ft lights, localizer intercept, and approach phase',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a320-10k-landing-lt',
            item: 'LANDING LIGHTS',
            action: 'ON (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Extend and illuminate left and right wing landing lights.'
          },
          {
            id: 'a320-seatbelts-on',
            item: 'SEATBELTS Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Chime cabin for final descent.'
          },
          {
            id: 'a320-baro-dest',
            item: 'BARO Reference',
            action: 'SET DEST LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Passing Transition Level, push baro knob and dial destination QNH. Crosscheck both PFDs.'
          },
          {
            id: 'a320-appr-phase',
            item: 'MCDU: ACTIVATE APPR PHASE',
            action: 'CONFIRM ON MCDU',
            location: 'FMS / MCDU',
            note: 'Aircraft automatically decelerates towards Green Dot speed.'
          },
          {
            id: 'a320-appr-arm',
            item: 'APPR Mode Pushbutton',
            action: 'ARM (LOC & G/S Cyan)',
            location: 'GLARESHIELD',
            note: 'Arm approach mode on FCU when cleared for approach by ATC.'
          },
          {
            id: 'a320-flaps-1',
            item: 'FLAPS Lever',
            action: 'SET 1 (Below VFE)',
            location: 'PEDESTAL',
            note: 'Extend slats. S-speed indicated on speed tape.'
          },
          {
            id: 'a320-arm-spoilers-appr',
            item: 'GROUND SPOILERS',
            action: 'ARM (Pull Up)',
            location: 'PEDESTAL',
            note: 'Confirm white band visible.'
          }
        ]
      },
      {
        id: 'a320-p11',
        title: '11. Final & Landing',
        shortTitle: 'Final & Landing',
        subtitle: 'Gear down, landing flap, glide slope capture, and touchdown',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a320-gear-down',
            item: 'LANDING GEAR Lever',
            action: 'DOWN (3 Green Lights)',
            location: 'MAIN PANEL',
            note: 'Lower landing gear around 2,000 ft AGL. Confirm 3 green triangles illuminated on landing gear panel.'
          },
          {
            id: 'a320-flaps-full',
            item: 'FLAPS Lever',
            action: 'SET FULL (or Flaps 3)',
            location: 'PEDESTAL',
            note: 'Extend trailing edge flaps to landing configuration. Confirm VAPP speed target on PFD.'
          },
          {
            id: 'a320-nose-to',
            item: 'NOSE LIGHT Switch',
            action: 'T.O (Landing Beam)',
            location: 'OVHD - LIGHTS',
            note: 'Provides maximum illumination down the runway.'
          },
          {
            id: 'a320-ecam-memo',
            item: 'ECAM LDG MEMO',
            action: 'VERIFY ALL GREEN (No Blue)',
            location: 'MAIN PANEL',
            note: 'Confirm: GEAR DOWN, SIGNS ON, FLAPS FULL, SPLRS ARMED.'
          },
          {
            id: 'a320-touchdown',
            item: 'TOUCHDOWN & REVERSE THRUST',
            action: 'REV MAX ➔ REV IDLE at 60 KTS',
            location: 'PEDESTAL',
            note: 'Pull reverse levers upon touchdown. Ground spoilers deploy automatically. Disengage reverse at 60 knots and brake manually.'
          }
        ]
      },
      {
        id: 'a320-p12',
        title: '12. After Landing & Taxi-In',
        shortTitle: 'After Landing',
        subtitle: 'Runway vacation, flap clean-up, and starting APU for gate',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a320-clear-runway',
            item: 'RUNWAY VACATED',
            action: 'CROSS HOLD SHORT LINE',
            location: 'MAIN PANEL',
            note: 'Bring aircraft to standard taxi speed on high-speed turnoff or taxiway.'
          },
          {
            id: 'a320-flaps-retract-after',
            item: 'FLAPS Lever',
            action: 'RETRACT TO 0',
            location: 'PEDESTAL',
            note: 'Stow flaps completely.'
          },
          {
            id: 'a320-spoilers-disarm',
            item: 'GROUND SPOILERS',
            action: 'DISARM (Push Down)',
            location: 'PEDESTAL',
            note: 'Push down to disarm ground spoilers.'
          },
          {
            id: 'a320-lights-taxi',
            item: 'LANDING & STROBE LIGHTS',
            action: 'OFF & AUTO',
            location: 'OVHD - LIGHTS',
            note: 'Turn off landing lights and switch strobes to AUTO. Nose light to TAXI.'
          },
          {
            id: 'a320-radar-off',
            item: 'WEATHER RADAR & PWS',
            action: 'OFF',
            location: 'PEDESTAL',
            note: 'Avoid radiating ground personnel.'
          },
          {
            id: 'a320-tcas-stby',
            item: 'TCAS / TRANSPONDER',
            action: 'STBY (or XPNDR as req)',
            location: 'PEDESTAL',
            note: 'Select STBY mode on transponder.'
          },
          {
            id: 'a320-apu-start-gate',
            item: 'APU MASTER & START',
            action: 'BOTH ON (Preparing for Gate)',
            location: 'OVHD - APU',
            note: 'Start APU during taxi-in so electrical power and air conditioning are available upon engine shutdown.'
          }
        ]
      },
      {
        id: 'a320-p13',
        title: '13. Parking, Shutdown & Cold Cockpit',
        shortTitle: 'Shutdown & Cold',
        subtitle: 'Gate arrival, engine cut-off, and returning to cold & dark',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a320-park-brake-gate',
            item: 'PARKING BRAKE',
            action: 'ON (Accumulator Press Check)',
            location: 'PEDESTAL',
            note: 'Set parking brake once stopped at gate stop mark.'
          },
          {
            id: 'a320-apu-bleed-gate',
            item: 'APU BLEED / EXT PWR',
            action: 'ON (AVAIL ➔ ON)',
            location: 'OVHD - ELEC',
            note: 'Verify APU AVAIL and engage APU Bleed, or connect External Power.'
          },
          {
            id: 'a320-eng-masters-off',
            item: 'ENG 1 & 2 MASTER Switches',
            action: 'BOTH OFF',
            location: 'PEDESTAL',
            note: 'Engines shut down. Fuel cutoff valves close.'
          },
          {
            id: 'a320-seatbelts-off',
            item: 'SEATBELTS Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Chime passengers that it is safe to unbuckle and deplane.'
          },
          {
            id: 'a320-fuel-pumps-off',
            item: 'FUEL PUMPS (All 6)',
            action: 'ALL OFF (Pushbuttons Out)',
            location: 'OVHD - FUEL',
            note: 'Shut down all wing and center tank fuel pumps. White OFF lights illuminate.'
          },
          {
            id: 'a320-beacon-off',
            item: 'BEACON Light Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Signifies engines have ceased spinning. Ground staff safe to connect jetway and baggage carts.'
          },
          {
            id: 'a320-cold-adirs',
            item: 'ADIRS 1, 2, 3',
            action: 'OFF',
            location: 'OVHD - ADIRS',
            note: 'Rotate triple ADIRU switches to OFF.'
          },
          {
            id: 'a320-cold-apu-off',
            item: 'APU MASTER SW',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shut down APU.'
          },
          {
            id: 'a320-cold-ext-pwr',
            item: 'EXT PWR Switch',
            action: 'DISCONNECT / OFF',
            location: 'OVHD - ELEC',
            note: 'Release ground power.'
          },
          {
            id: 'a320-cold-bat-off',
            item: 'BAT 1 & BAT 2',
            action: 'BOTH OFF',
            location: 'OVHD - ELEC',
            note: 'Push both battery switches to OFF. Cockpit displays extinguish. Returned to Cold & Dark.'
          }
        ]
      }
    ]
  },

  {
    id: 'b737-max8',
    name: 'Boeing 737 MAX 8',
    subtitle: 'Narrowbody Twinjet • CFM LEAP-1B',
    shortCode: 'B38M',
    manufacturer: 'Boeing',
    developer: 'Asobo / MSFS 2024',
    bodyType: 'Narrowbody',
    engineCount: 2,
    fmsName: 'FMC',
    accentColor: 'amber',
    summary: 'The modern generation Boeing 737 featuring advanced Rockwell Collins large display avionics, dual-strake winglets, and CFM LEAP-1B engines.',
    phases: [
      // DEPARTURE
      {
        id: 'b737-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Energizing battery bus and ground power',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b737-bat-sw',
            item: 'BATTERY Switch',
            action: 'ON & GUARD CLOSED',
            location: 'OVHD - ELEC',
            note: 'Lift red guard, flip toggle ON, close guard. Battery bus energized.'
          },
          {
            id: 'b737-stby-pwr',
            item: 'STANDBY POWER Switch',
            action: 'AUTO & GUARD CLOSED',
            location: 'OVHD - ELEC',
            note: 'Verify guard is down and wired in AUTO.'
          },
          {
            id: 'b737-grd-pwr',
            item: 'GRD PWR (Ground Power)',
            action: 'ON (Toggle DOWN)',
            location: 'OVHD - ELEC',
            note: 'When blue GRD PWR AVAILABLE light glows, pull switch down to connect to AC transfer buses.'
          },
          {
            id: 'b737-emer-lights',
            item: 'EMERGENCY EXIT LIGHTS',
            action: 'ARM & GUARD CLOSED',
            location: 'OVHD - LIGHTS',
            note: 'Guarded toggle switch in center overhead.'
          },
          {
            id: 'b737-pos-lights',
            item: 'POSITION / STROBE Lights',
            action: 'STEADY (Nav ON)',
            location: 'OVHD - LIGHTS',
            note: 'Set to STEADY for ground prep; STROBE & STEADY set at runway entry.'
          }
        ]
      },
      {
        id: 'b737-p2',
        title: '2. Cockpit Preparation & Overhead Flow',
        shortTitle: 'Cockpit Prep',
        subtitle: 'IRS alignment, fuel pumps, hydraulics, and packs',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b737-irs-align',
            item: 'IRS Mode Selectors (L & R)',
            action: 'OFF ➔ NAV',
            location: 'OVHD - ADIRS',
            note: 'Rotate left and right IRS switches to NAV. White ON DC illuminates briefly, then ALIGN glows.'
          },
          {
            id: 'b737-yaw-damper',
            item: 'YAW DAMPER Switch',
            action: 'ON',
            location: 'OVHD - MISC',
            note: 'Yaw damper amber light extinguishes.'
          },
          {
            id: 'b737-fuel-pumps',
            item: 'FUEL PUMP Switches (4 Main)',
            action: 'ON (FWD & AFT L/R)',
            location: 'OVHD - FUEL',
            note: 'Turn on Left FWD/AFT and Right FWD/AFT pumps. Leave Center pumps OFF unless center tank has fuel.'
          },
          {
            id: 'b737-hyd-pumps',
            item: 'ELEC HYDRAULIC PUMPS',
            action: 'ON (SYSTEM A & B)',
            location: 'OVHD - HYD',
            note: 'Check system pressure rises to 3,000 PSI.'
          },
          {
            id: 'b737-window-heat',
            item: 'WINDOW HEAT Switches',
            action: 'ALL 4 ON',
            location: 'OVHD - MISC',
            note: 'L SIDE, L FWD, R FWD, R SIDE on. Green ON lights illuminate.'
          },
          {
            id: 'b737-press-alt',
            item: 'PRESSURIZATION Panel',
            action: 'SET FLT ALT & LAND ALT',
            location: 'OVHD - AIR / PACKS',
            note: 'Dial planned cruise altitude and destination field elevation into digital displays.'
          }
        ]
      },
      {
        id: 'b737-p3',
        title: '3. Boeing FMC Initialization',
        shortTitle: 'FMC Setup',
        subtitle: 'CDU flight plan entry, weights, and takeoff reference',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b737-fmc-ident',
            item: 'FMC: IDENT Page',
            action: 'VERIFY MODEL & AIRAC',
            location: 'FMS / MCDU',
            note: 'Verify aircraft model is 737-8 and nav data cycle is current.'
          },
          {
            id: 'b737-fmc-pos-init',
            item: 'FMC: POS INIT Page',
            action: 'ENTER REF AIRPORT & GPS POS',
            location: 'FMS / MCDU',
            note: 'Type departure airport ICAO into REF AIRPORT, then copy GPS position into SET IRS POS prompt.'
          },
          {
            id: 'b737-fmc-route',
            item: 'FMC: RTE Page',
            action: 'ORIGIN, DEST, FLT NO, ACTIVATE',
            location: 'FMS / MCDU',
            note: 'Enter ORIGIN, DEST, and flight number. Press DEP/ARR to set runway and SID. Press ACTIVATE then EXEC.'
          },
          {
            id: 'b737-fmc-perf',
            item: 'FMC: PERF INIT Page',
            action: 'ZFW, RESERVES, COST INDEX, CRZ',
            location: 'FMS / MCDU',
            note: 'Double tap ZFW key to auto-fill dry weight. Input fuel reserves, Cost Index, and planned cruise altitude. Press EXEC.'
          },
          {
            id: 'b737-fmc-takeoff',
            item: 'FMC: TAKEOFF REF Page',
            action: 'FLAPS 5, CG & V1 / VR / V2',
            location: 'FMS / MCDU',
            note: 'Input Flaps (e.g. 5). Tap CG to compute stabilizer trim setting. Tap right line-select keys for V1, VR, and V2 speeds.'
          }
        ]
      },
      {
        id: 'b737-p4',
        title: '4. APU Startup & Pushback Prep',
        shortTitle: 'APU & Start Prep',
        subtitle: 'APU electrical & pneumatic cut-in, altimeter, and beacon',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b737-apu-start',
            item: 'APU Switch',
            action: 'START ➔ Release to ON',
            location: 'OVHD - APU',
            note: 'Spring-loaded switch: hold momentarily at START, then release to ON. Watch EGT gauge peak and settle.'
          },
          {
            id: 'b737-apu-gen-avail',
            item: 'APU GEN OFF BUS Light',
            action: 'VERIFY BLUE LIGHT ILLUMINATED',
            location: 'OVHD - ELEC',
            note: 'Indicates APU generator is up to frequency and ready to power electrical buses.'
          },
          {
            id: 'b737-apu-gen-on',
            item: 'APU GENERATOR Switches (1 & 2)',
            action: 'BOTH ON (Toggle DOWN)',
            location: 'OVHD - ELEC',
            note: 'Pulls APU power onto AC transfer bus 1 & 2. Ground power automatically disconnected.'
          },
          {
            id: 'b737-apu-bleed',
            item: 'APU BLEED Air Switch',
            action: 'ON',
            location: 'OVHD - AIR / PACKS',
            note: 'Routes high-pressure APU air into pneumatic duct for engine cranking.'
          },
          {
            id: 'b737-autobrake',
            item: 'AUTOBRAKE Selector',
            action: 'RTO (Rejected Takeoff)',
            location: 'MAIN PANEL',
            note: 'Ensures maximum anti-skid emergency braking in event of aborted takeoff.'
          },
          {
            id: 'b737-altimeter',
            item: 'BARO Altimeters',
            action: 'SET LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Set PFD and standby altimeter reference dials.'
          },
          {
            id: 'b737-beacon',
            item: 'ANTI-COLLISION (Beacon) Light',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Red flashing beacon alerts ground personnel before pushback and start.'
          }
        ]
      },
      {
        id: 'b737-p5',
        title: '5. Pushback & Engine Start',
        shortTitle: 'Engine Start',
        subtitle: 'Bleed air crank, N2 verification, and fuel introduction',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b737-packs-off',
            item: 'L & R PACK Switches',
            action: 'BOTH OFF',
            location: 'OVHD - AIR / PACKS',
            note: 'Ensures all pneumatic duct pressure (> 30 PSI) is directed to the air turbine starters.'
          },
          {
            id: 'b737-duct-press',
            item: 'DUCT PRESSURE Gauge',
            action: 'CHECK ≥ 30 PSI',
            location: 'OVHD - AIR / PACKS',
            note: 'Verify sufficient pneumatic duct pressure.'
          },
          {
            id: 'b737-eng2-start-sw',
            item: 'ENGINE 2 START Switch',
            action: 'ROTATE TO GND',
            location: 'OVHD - ENGINES',
            note: 'Switch magnetically latches to GND. Starter valve opens. Monitor N2 rotation.'
          },
          {
            id: 'b737-eng2-cutoff',
            item: 'ENGINE 2 START LEVER (Fuel)',
            action: 'IDLE / UP at N2 ≥ 25%',
            location: 'PEDESTAL',
            note: 'Raise fuel cutoff switch forward to IDLE. Fuel flows, igniters fire, EGT rises. Starter cuts out around 55% N2.'
          },
          {
            id: 'b737-eng1-start-sw',
            item: 'ENGINE 1 START Switch',
            action: 'ROTATE TO GND',
            location: 'OVHD - ENGINES',
            note: 'Repeat sequence for left engine.'
          },
          {
            id: 'b737-eng1-cutoff',
            item: 'ENGINE 1 START LEVER (Fuel)',
            action: 'IDLE / UP at N2 ≥ 25%',
            location: 'PEDESTAL',
            note: 'Lift fuel lever to IDLE. Confirm engine light-off and stable idle parameters.'
          }
        ]
      },
      {
        id: 'b737-p6',
        title: '6. Taxi & Before Takeoff',
        shortTitle: 'Taxi & Line-Up',
        subtitle: 'Generator bus transfers, packs, flaps, and runway entry',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b737-gen-switches',
            item: 'GEN 1 & GEN 2 Switches',
            action: 'BOTH ON (Toggle DOWN)',
            location: 'OVHD - ELEC',
            note: 'Transfers electrical load to engine-driven generators. SOURCE OFF lights extinguish.'
          },
          {
            id: 'b737-apu-bleed-off',
            item: 'APU BLEED Switch',
            action: 'OFF',
            location: 'OVHD - AIR / PACKS',
            note: 'Disconnects APU pneumatic supply.'
          },
          {
            id: 'b737-apu-off',
            item: 'APU Switch',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shuts down the auxiliary power unit.'
          },
          {
            id: 'b737-packs-auto',
            item: 'L & R PACK Switches',
            action: 'BOTH AUTO',
            location: 'OVHD - AIR / PACKS',
            note: 'Restores cabin air conditioning from engine bleeds.'
          },
          {
            id: 'b737-flaps-set',
            item: 'FLAPS Lever',
            action: 'SET TAKEOFF (Flaps 5)',
            location: 'PEDESTAL',
            note: 'Check flap position indicator matches FMC takeoff flap selection.'
          },
          {
            id: 'b737-stab-trim',
            item: 'STABILIZER TRIM',
            action: 'SET TAKEOFF GREEN BAND',
            location: 'PEDESTAL',
            note: 'Spin electric or manual trim wheel to match FMC computed CG trim units (e.g. 5.2 units).'
          },
          {
            id: 'b737-fctl-check',
            item: 'FLIGHT CONTROLS',
            action: 'FREE AND FULL MOVEMENT',
            location: 'MAIN PANEL',
            note: 'Move control yoke full forward/aft, full left/right, and cycle rudder pedals.'
          },
          {
            id: 'b737-taxi-light',
            item: 'TAXI LIGHT Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Illuminate nose gear taxi beam.'
          },
          {
            id: 'b737-start-sw-cont',
            item: 'ENGINE START Switches',
            action: 'BOTH TO CONT',
            location: 'OVHD - ENGINES',
            note: 'Ensures continuous ignition for takeoff.'
          },
          {
            id: 'b737-strobes-on',
            item: 'POSITION / STROBE Lights',
            action: 'STROBE & STEADY',
            location: 'OVHD - LIGHTS',
            note: 'Turn on high-intensity strobes when crossing runway threshold.'
          },
          {
            id: 'b737-tcas-tara',
            item: 'TRANSPONDER Mode',
            action: 'TA / RA',
            location: 'PEDESTAL',
            note: 'Arm traffic collision avoidance mode.'
          }
        ]
      },

      // EN ROUTE
      {
        id: 'b737-p7',
        title: '7. Climb (After Takeoff & 10,000 ft)',
        shortTitle: 'Climb & 10k ft',
        subtitle: 'Gear up, flap retraction schedule, and standard altimeters',
        segment: 'ENROUTE',
        items: [
          {
            id: 'b737-gear-up',
            item: 'LANDING GEAR Lever',
            action: 'UP ➔ OFF Detent',
            location: 'MAIN PANEL',
            note: 'Select UP on positive rate. Position to OFF once gear doors are stowed to depressurize hydraulic line.'
          },
          {
            id: 'b737-ap-cmd-a',
            item: 'AUTOPILOT (CMD A)',
            action: 'ENGAGE (Passing 400 ft AGL)',
            location: 'GLARESHIELD',
            note: 'Press CMD A on MCP. Confirm LNAV and VNAV engage.'
          },
          {
            id: 'b737-flaps-retract',
            item: 'FLAPS Lever',
            action: 'RETRACT ON SPEED SCHEDULE',
            location: 'PEDESTAL',
            note: 'Retract Flaps: 5 ➔ 1 ➔ UP as speed tape climbs through maneuvering speed bugs.'
          },
          {
            id: 'b737-autobrake-off',
            item: 'AUTOBRAKE Selector',
            action: 'OFF',
            location: 'MAIN PANEL',
            note: 'Move selector from RTO to OFF.'
          },
          {
            id: 'b737-10k-lights',
            item: 'LANDING & TURNOFF LIGHTS',
            action: 'RETRACT / OFF (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Retract fixed landing lights and extinguish runway turnoff lights.'
          },
          {
            id: 'b737-baro-std',
            item: 'ALTIMETERS',
            action: 'SET STD (Transition Altitude)',
            location: 'GLARESHIELD',
            note: 'Press STD button on EFIS control panel. Confirm 29.92 / 1013 hPa on PFD.'
          }
        ]
      },
      {
        id: 'b737-p8',
        title: '8. Cruise',
        shortTitle: 'Cruise',
        subtitle: 'VNAV cruise altitude lock, N1 monitoring, and fuel distribution',
        segment: 'ENROUTE',
        items: [
          {
            id: 'b737-crz-vnav',
            item: 'FMA / MCP Flight Modes',
            action: 'VERIFY FMC CRZ / VNAV PTH',
            location: 'MAIN PANEL',
            note: 'Confirm smooth cruise level-off and steady Mach number.'
          },
          {
            id: 'b737-crz-fuel',
            item: 'FUEL QUANTITY & BALANCE',
            action: 'MONITOR MAIN 1 & 2',
            location: 'OVHD - FUEL',
            note: 'Ensure fuel balances within 1,000 lbs across left and right wing tanks.'
          },
          {
            id: 'b737-crz-press',
            item: 'CABIN PRESSURIZATION',
            action: 'CHECK DIFF PRESSURE & CABIN ALT',
            location: 'OVHD - AIR / PACKS',
            note: 'Confirm differential pressure is around 7.8-8.2 PSI and cabin altitude stays below 8,000 ft.'
          }
        ]
      },
      {
        id: 'b737-p9',
        title: '9. Descent Preparation (Top of Descent)',
        shortTitle: 'Descent Prep',
        subtitle: 'Arrival runway, STAR, Vref speeds, and autobrake selection',
        segment: 'ENROUTE',
        items: [
          {
            id: 'b737-arr-weather',
            item: 'DESTINATION ATIS',
            action: 'OBTAIN ALTIMETER, WIND & RWY',
            location: 'FMS / MCDU',
            note: 'Check active arrival runway and local barometric pressure.'
          },
          {
            id: 'b737-fmc-arr',
            item: 'FMC: DEP/ARR Page',
            action: 'SELECT ARRIVAL STAR & APPROACH',
            location: 'FMS / MCDU',
            note: 'Select destination runway (e.g. ILS 28R), STAR, and transition. Press EXEC.'
          },
          {
            id: 'b737-fmc-init-ref',
            item: 'FMC: INIT REF (Approach)',
            action: 'SELECT VREF (Flaps 30 or 40)',
            location: 'FMS / MCDU',
            note: 'Click line-select key next to Flaps 30/VREF to set target approach speed into flight director.'
          },
          {
            id: 'b737-mcp-alt-des',
            item: 'MCP ALTITUDE Window',
            action: 'SET LOWER CLEARED ALTITUDE',
            location: 'GLARESHIELD',
            note: 'Dial altitude window down before Top of Descent (T/D) to allow VNAV to pitch down automatically.'
          },
          {
            id: 'b737-autobrake-appr',
            item: 'AUTOBRAKE Selector',
            action: 'SET 2 or 3',
            location: 'MAIN PANEL',
            note: 'Select deceleration setting for landing roll.'
          }
        ]
      },

      // ARRIVAL & SHUTDOWN
      {
        id: 'b737-p10',
        title: '10. Approach (Passing 10,000 ft & Localizer)',
        shortTitle: 'Approach Flow',
        subtitle: 'Landing lights, transition level QNH, and arming approach mode',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b737-10k-landing-lt',
            item: 'LANDING LIGHTS Switches',
            action: 'ALL ON (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Extend and illuminate all retractable and fixed landing beams.'
          },
          {
            id: 'b737-fasten-belts',
            item: 'FASTEN BELTS Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Signal passenger cabin for landing.'
          },
          {
            id: 'b737-baro-dest',
            item: 'ALTIMETERS',
            action: 'SET LOCAL DEST QNH',
            location: 'GLARESHIELD',
            note: 'Passing Transition Level, reset baro to local station pressure. Crosscheck captain and FO displays.'
          },
          {
            id: 'b737-app-mode',
            item: 'MCP: APP Pushbutton',
            action: 'PRESS TO ARM VOR/LOC & G/S',
            location: 'GLARESHIELD',
            note: 'Arm approach on MCP. White VOR/LOC and G/S appear armed on PFD.'
          },
          {
            id: 'b737-speedbrake-arm',
            item: 'SPEEDBRAKE Lever',
            action: 'ARM (Pull Up into Detent)',
            location: 'PEDESTAL',
            note: 'Green SPEEDBRAKE ARMED annunciator illuminates on main instrument panel.'
          },
          {
            id: 'b737-flaps-1-5',
            item: 'FLAPS Lever',
            action: 'EXTEND TO 1, THEN 5',
            location: 'PEDESTAL',
            note: 'Select Flaps 1, then Flaps 5 as speed slows to maneuvering bugs.'
          }
        ]
      },
      {
        id: 'b737-p11',
        title: '11. Final & Landing',
        shortTitle: 'Final & Landing',
        subtitle: 'Gear down, landing flap 30/40, and reverse thrust touchdown',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b737-gear-down',
            item: 'LANDING GEAR Lever',
            action: 'DOWN (Verify 3 Green)',
            location: 'MAIN PANEL',
            note: 'Lower gear at glideslope capture. Confirm 3 green lights illuminate.'
          },
          {
            id: 'b737-flaps-landing',
            item: 'FLAPS Lever',
            action: 'SET 30 (or 40)',
            location: 'PEDESTAL',
            note: 'Move flap handle to planned landing flap setting.'
          },
          {
            id: 'b737-landing-clearance',
            item: 'LANDING CLEARANCE',
            action: 'RECEIVED & VERIFIED',
            location: 'MAIN PANEL',
            note: 'Confirm runway clear.'
          },
          {
            id: 'b737-touchdown',
            item: 'TOUCHDOWN & REVERSE',
            action: 'PULL REVERSERS ➔ STOW at 60 KTS',
            location: 'PEDESTAL',
            note: 'Pull reverse thrust levers upon main wheel spin-up. Speedbrakes deploy up automatically. Close reversers by 60 knots.'
          }
        ]
      },
      {
        id: 'b737-p12',
        title: '12. After Landing & Taxi-In',
        shortTitle: 'After Landing',
        subtitle: 'Runway vacation, flap clean-up, and starting APU',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b737-clear-rwy',
            item: 'RUNWAY VACATED',
            action: 'CROSS HOLD SHORT LINE',
            location: 'MAIN PANEL',
            note: 'Slow to taxi speed and contact ground control.'
          },
          {
            id: 'b737-flaps-up',
            item: 'FLAPS Lever',
            action: 'UP (Flaps 0)',
            location: 'PEDESTAL',
            note: 'Retract all trailing edge flaps and leading edge slats.'
          },
          {
            id: 'b737-speedbrake-down',
            item: 'SPEEDBRAKE Lever',
            action: 'DOWN / DETENT',
            location: 'PEDESTAL',
            note: 'Stow speedbrake handle.'
          },
          {
            id: 'b737-lights-after',
            item: 'LANDING & STROBE LIGHTS',
            action: 'OFF & STEADY',
            location: 'OVHD - LIGHTS',
            note: 'Turn off landing lights and switch strobe back to STEADY.'
          },
          {
            id: 'b737-start-sw-off',
            item: 'ENGINE START Switches',
            action: 'BOTH OFF',
            location: 'OVHD - ENGINES',
            note: 'Switch from CONT back to OFF.'
          },
          {
            id: 'b737-autobrake-disarm',
            item: 'AUTOBRAKE Selector',
            action: 'OFF',
            location: 'MAIN PANEL',
            note: 'Disarm autobrake system.'
          },
          {
            id: 'b737-apu-start-taxi',
            item: 'APU Switch',
            action: 'START ➔ Release to ON',
            location: 'OVHD - APU',
            note: 'Start APU during taxi-in to have generator power ready at gate.'
          }
        ]
      },
      {
        id: 'b737-p13',
        title: '13. Parking, Shutdown & Cold Cockpit',
        shortTitle: 'Shutdown & Cold',
        subtitle: 'Engine cutoff, deboarding, and returning to cold & dark',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b737-park-brake-gate',
            item: 'PARKING BRAKE',
            action: 'SET',
            location: 'PEDESTAL',
            note: 'Pull parking brake handle up at gate stop mark.'
          },
          {
            id: 'b737-apu-gen-gate',
            item: 'APU GEN / GRD PWR',
            action: 'ON (Transfer Buses Powered)',
            location: 'OVHD - ELEC',
            note: 'Connect APU generators or plug in Ground Power.'
          },
          {
            id: 'b737-cutoff-engines',
            item: 'ENGINE START LEVERS (1 & 2)',
            action: 'BOTH DOWN / CUTOFF',
            location: 'PEDESTAL',
            note: 'Pull levers back into CUTOFF position. Engines shut down.'
          },
          {
            id: 'b737-fasten-belts-off',
            item: 'FASTEN BELTS Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Allow passengers to deplane.'
          },
          {
            id: 'b737-fuel-pumps-off',
            item: 'FUEL PUMP Switches',
            action: 'ALL OFF',
            location: 'OVHD - FUEL',
            note: 'Turn off all main and center tank fuel pumps.'
          },
          {
            id: 'b737-beacon-off',
            item: 'ANTI-COLLISION (Beacon) Light',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Engines have spooled down; ground crew safe to approach.'
          },
          {
            id: 'b737-cold-irs-off',
            item: 'IRS Selectors (L & R)',
            action: 'OFF',
            location: 'OVHD - ADIRS',
            note: 'Rotate IRS knobs to OFF.'
          },
          {
            id: 'b737-cold-apu-off',
            item: 'APU Switch',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shutdown APU.'
          },
          {
            id: 'b737-cold-bat-off',
            item: 'BATTERY Switch',
            action: 'OFF (Guard Open/Down)',
            location: 'OVHD - ELEC',
            note: 'Switch battery OFF and close red guard. Cockpit returned to Cold & Dark.'
          }
        ]
      }
    ]
  },

  {
    id: 'a330-300',
    name: 'Airbus A330-300',
    subtitle: 'Widebody Twinjet • Trent 700 / CF6',
    shortCode: 'A333',
    manufacturer: 'Airbus',
    developer: 'iniBuilds / MSFS 2024',
    bodyType: 'Widebody',
    engineCount: 2,
    fmsName: 'MCDU',
    accentColor: 'cyan',
    summary: 'The long-haul widebody workhorse featuring high fuel efficiency, fly-by-wire envelope protection, and spacious dual-aisle cockpit.',
    phases: [
      // DEPARTURE
      {
        id: 'a330-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Battery activation and dual ground power feeds',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a330-bat-chk',
            item: 'BAT 1, 2 & APU BAT Voltage',
            action: 'CHECK ≥ 25.5 V',
            location: 'OVHD - ELEC',
            note: 'A330 features three battery packs (including dedicated APU battery).'
          },
          {
            id: 'a330-bat-on',
            item: 'BAT 1, 2 & APU BAT Switches',
            action: 'ALL AUTO / ON',
            location: 'OVHD - ELEC',
            note: 'Engage all three battery pushbuttons.'
          },
          {
            id: 'a330-ext-pwr',
            item: 'EXT PWR A & B',
            action: 'ON AS AVAIL',
            location: 'OVHD - ELEC',
            note: 'Widebody aircraft frequently use dual external power connections (EXT A & B).'
          },
          {
            id: 'a330-cockpit-lights',
            item: 'DOME & FLOOD LIGHTS',
            action: 'AS RQRD',
            location: 'OVHD - LIGHTS',
            note: 'Adjust glareshield and overhead panel illumination.'
          }
        ]
      },
      {
        id: 'a330-p2',
        title: '2. Cockpit Preparation & Overhead Flow',
        shortTitle: 'Cockpit Prep',
        subtitle: 'ADIRU triple alignment, hydraulic pumps, and fuel crossfeed',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a330-adiru-align',
            item: 'ADIRS 1, 2, 3 Rotary Switches',
            action: 'OFF ➔ NAV',
            location: 'OVHD - ADIRS',
            note: 'Align triple inertial reference units. Check PFD attitude flags.'
          },
          {
            id: 'a330-fuel-pumps',
            item: 'WING & STBY FUEL PUMPS',
            action: 'ALL ON (White OFF Extinguished)',
            location: 'OVHD - FUEL',
            note: 'Engage inner and outer wing tank pumps.'
          },
          {
            id: 'a330-hyd-elec',
            item: 'BLUE & YELLOW ELEC HYD PUMPS',
            action: 'AUTO / AS RQRD',
            location: 'OVHD - HYD',
            note: 'Ensure green, blue, and yellow hydraulic loops are configured.'
          },
          {
            id: 'a330-signs',
            item: 'SEATBELTS & NO SMOKING',
            action: 'ON & AUTO',
            location: 'OVHD - LIGHTS',
            note: 'Set cabin signs.'
          },
          {
            id: 'a330-nav-lights',
            item: 'NAV & LOGO Lights',
            action: 'SYS 1 (ON)',
            location: 'OVHD - LIGHTS',
            note: 'Wing navigation lights activated.'
          }
        ]
      },
      {
        id: 'a330-p3',
        title: '3. MCDU Long-Haul Initialization',
        shortTitle: 'MCDU Setup',
        subtitle: 'Step climb planning, fuel bias, and takeoff flex',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a330-mcdu-init-a',
            item: 'MCDU: INIT A Page',
            action: 'FROM/TO, FLT NBR, COST INDEX',
            location: 'FMS / MCDU',
            note: 'Enter departure, destination, callsign, and company Cost Index.'
          },
          {
            id: 'a330-mcdu-fplan',
            item: 'MCDU: F-PLAN Page',
            action: 'SID, ENROUTE & STEP CLIMBS',
            location: 'FMS / MCDU',
            note: 'Insert oceanic or continental route. Verify waypoints and altitude constraints.'
          },
          {
            id: 'a330-mcdu-init-b',
            item: 'MCDU: INIT B Page',
            action: 'ZFW / ZFWCG & BLOCK FUEL',
            location: 'FMS / MCDU',
            note: 'Double-click right keys to populate zero fuel weight and center of gravity.'
          },
          {
            id: 'a330-mcdu-perf',
            item: 'MCDU: PERF TAKEOFF Page',
            action: 'V1, VR, V2, FLAPS / THS & FLEX',
            location: 'FMS / MCDU',
            note: 'Enter Flaps (usually 1+F or 2) and THS pitch setting. Enter Flex Takeoff temperature.'
          }
        ]
      },
      {
        id: 'a330-p4',
        title: '4. APU Startup & Pushback Prep',
        shortTitle: 'APU & Start Prep',
        subtitle: 'Auxiliary power cut-in, beacon on, and doors armed',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a330-apu-master',
            item: 'APU MASTER SW',
            action: 'ON',
            location: 'OVHD - APU',
            note: 'Intake flap opens.'
          },
          {
            id: 'a330-apu-start',
            item: 'APU START Pb',
            action: 'ON (Monitor ECAM for AVAIL)',
            location: 'OVHD - APU',
            note: 'Large APU turbine spools up. Confirm AVAIL light on overhead and ECAM.'
          },
          {
            id: 'a330-apu-bleed',
            item: 'APU BLEED Switch',
            action: 'ON',
            location: 'OVHD - AIR / PACKS',
            note: 'Air pressure routed to pneumatic manifold.'
          },
          {
            id: 'a330-ext-pwr-off',
            item: 'EXT PWR A & B Switches',
            action: 'OFF',
            location: 'OVHD - ELEC',
            note: 'Release ground cables before pushback.'
          },
          {
            id: 'a330-altimeter',
            item: 'BARO Reference',
            action: 'SET LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Confirm captain and first officer primary flight displays match.'
          },
          {
            id: 'a330-beacon',
            item: 'BEACON Light Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Signal ground tug to begin push sequence.'
          }
        ]
      },
      {
        id: 'a330-p5',
        title: '5. Pushback & Engine Start',
        shortTitle: 'Engine Start',
        subtitle: 'Starting high-thrust Rolls-Royce Trent or GE engines',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a330-parking-brake',
            item: 'PARKING BRAKE',
            action: 'RELEASE',
            location: 'PEDESTAL',
            note: 'Release for pushback tug.'
          },
          {
            id: 'a330-mode-start',
            item: 'ENG MODE Selector',
            action: 'IGN / START',
            location: 'PEDESTAL',
            note: 'Engine parameters page appears on ECAM.'
          },
          {
            id: 'a330-eng1-start',
            item: 'ENG 1 (or 2) MASTER Switch',
            action: 'ON',
            location: 'PEDESTAL',
            note: 'Start Engine 1 first on A330 (provides green hydraulics). Monitor N2 spool, oil pressure, and fuel light-off.'
          },
          {
            id: 'a330-eng1-avail',
            item: 'ENG 1 Parameters',
            action: 'AVAIL STABILIZED',
            location: 'MAIN PANEL',
            note: 'Engine 1 reaches stable idle.'
          },
          {
            id: 'a330-eng2-start',
            item: 'ENG 2 MASTER Switch',
            action: 'ON',
            location: 'PEDESTAL',
            note: 'Switch Master 2 ON. Monitor second engine spool.'
          },
          {
            id: 'a330-eng2-avail',
            item: 'ENG 2 Parameters',
            action: 'AVAIL STABILIZED',
            location: 'MAIN PANEL',
            note: 'Both engines running normally on main generators.'
          }
        ]
      },
      {
        id: 'a330-p6',
        title: '6. Taxi & Before Takeoff',
        shortTitle: 'Taxi & Line-Up',
        subtitle: 'Reconfiguring packs, trims, flaps, and flight control check',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a330-mode-norm',
            item: 'ENG MODE Selector',
            action: 'NORM',
            location: 'PEDESTAL',
            note: 'Ignition selector returned to normal position.'
          },
          {
            id: 'a330-apu-off',
            item: 'APU BLEED & MASTER SW',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shutdown auxiliary power unit.'
          },
          {
            id: 'a330-flaps',
            item: 'FLAPS Lever',
            action: 'SET TAKEOFF (Flaps 1 or 2)',
            location: 'PEDESTAL',
            note: 'Check slat/flap indicator on ECAM.'
          },
          {
            id: 'a330-spoilers',
            item: 'GROUND SPOILERS',
            action: 'ARM (Pull Up)',
            location: 'PEDESTAL',
            note: 'White ring visible.'
          },
          {
            id: 'a330-trim',
            item: 'PITCH TRIM Wheel',
            action: 'SET TAKEOFF CG',
            location: 'PEDESTAL',
            note: 'Rotate trim wheel to calculated takeoff position.'
          },
          {
            id: 'a330-fctl',
            item: 'FLIGHT CONTROLS',
            action: 'FULL TRAVEL CHECK',
            location: 'MAIN PANEL',
            note: 'Perform sidestick and rudder sweep with lower ECAM F/CTL page.'
          },
          {
            id: 'a330-taxi-lt',
            item: 'NOSE / TAXI Lights',
            action: 'TAXI ON (T.O at Runway)',
            location: 'OVHD - LIGHTS',
            note: 'Turn on nose lights. Switch to T.O when cleared for departure.'
          },
          {
            id: 'a330-tcas-lineup',
            item: 'TCAS Transponder',
            action: 'TA / RA',
            location: 'PEDESTAL',
            note: 'Set collision avoidance to TA/RA for takeoff.'
          }
        ]
      },

      // EN ROUTE
      {
        id: 'a330-p7',
        title: '7. Climb (After Takeoff & 10,000 ft)',
        shortTitle: 'Climb & 10k ft',
        subtitle: 'Thrust reduction to CL detent, clean-up, and standard pressure',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a330-gear-up',
            item: 'LANDING GEAR Lever',
            action: 'UP (Positive Climb Confirm)',
            location: 'MAIN PANEL',
            note: 'Select gear UP. Watch gear door lights extinguish.'
          },
          {
            id: 'a330-ap-on',
            item: 'AUTOPILOT 1',
            action: 'ENGAGE',
            location: 'GLARESHIELD',
            note: 'Connect AP1. Verify CLB and NAV on FMA.'
          },
          {
            id: 'a330-thrust-cl',
            item: 'THRUST LEVERS',
            action: 'RETARD TO CL DETENT',
            location: 'PEDESTAL',
            note: 'Pull thrust levers back from FLEX/TOGA to CL gate at acceleration height.'
          },
          {
            id: 'a330-flaps-clean',
            item: 'FLAPS Lever',
            action: 'RETRACT TO 0',
            location: 'PEDESTAL',
            note: 'Retract flaps cleanly through green dot speed.'
          },
          {
            id: 'a330-10k-lights',
            item: 'LANDING LIGHTS',
            action: 'RETRACT / OFF (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Retract wing landing lights.'
          },
          {
            id: 'a330-baro-std',
            item: 'BARO Reference',
            action: 'PULL FOR STD',
            location: 'GLARESHIELD',
            note: 'Select standard pressure (1013 hPa / 29.92 inHg).'
          }
        ]
      },
      {
        id: 'a330-p8',
        title: '8. Cruise & Long-Haul Step Climbs',
        shortTitle: 'Cruise',
        subtitle: 'Step climb analysis, fuel trim tank transfer, and Mach hold',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a330-crz-alt',
            item: 'PFD FMA Flight Modes',
            action: 'ALT CRZ / NAV',
            location: 'MAIN PANEL',
            note: 'Confirm level-off at initial cruise flight level.'
          },
          {
            id: 'a330-trim-tank',
            item: 'TRIM TANK FUEL SYSTEM',
            action: 'VERIFY AUTO CG MANAGEMENT',
            location: 'OVHD - FUEL',
            note: 'A330 automatically transfers fuel aft into the horizontal stabilizer trim tank for optimal cruise CG.'
          },
          {
            id: 'a330-step-climbs',
            item: 'MCDU: PROG / STEP Page',
            action: 'EVALUATE STEP CLIMB (e.g. FL370 ➔ FL390)',
            location: 'FMS / MCDU',
            note: 'As fuel burns off and gross weight decreases, initiate step climbs when OPT FL rises.'
          }
        ]
      },
      {
        id: 'a330-p9',
        title: '9. Descent Preparation (Top of Descent)',
        shortTitle: 'Descent Prep',
        subtitle: 'Arrival runway, STAR, landing performance, and descent rate',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a330-dest-atis',
            item: 'DESTINATION ATIS',
            action: 'CHECK WEATHER & ARRIVAL RUNWAY',
            location: 'FMS / MCDU',
            note: 'Obtain wind, altimeter, and cloud base.'
          },
          {
            id: 'a330-mcdu-arr',
            item: 'MCDU: F-PLAN Destination',
            action: 'INSERT STAR & APPROACH',
            location: 'FMS / MCDU',
            note: 'Select runway and approach transition. Clear flight plan discontinuities.'
          },
          {
            id: 'a330-mcdu-appr',
            item: 'MCDU: PERF APPR Page',
            action: 'ENTER QNH, TEMP, WIND & BARO MDA',
            location: 'FMS / MCDU',
            note: 'Set landing field parameters and decision altitude.'
          },
          {
            id: 'a330-autobrake',
            item: 'AUTO BRK Pushbutton',
            action: 'LOW or MED',
            location: 'MAIN PANEL',
            note: 'Arm autobrake for rollout deceleration.'
          },
          {
            id: 'a330-des-altitude',
            item: 'FCU ALTITUDE Selector',
            action: 'DIAL LOWER & PUSH FOR DES',
            location: 'GLARESHIELD',
            note: 'Initiate managed descent profile before Top of Descent.'
          }
        ]
      },

      // ARRIVAL & SHUTDOWN
      {
        id: 'a330-p10',
        title: '10. Approach (Passing 10,000 ft & Localizer)',
        shortTitle: 'Approach Flow',
        subtitle: 'Landing lights, localizer intercept, and approach phase',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a330-10k-landing-lt',
            item: 'LANDING LIGHTS',
            action: 'ON (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Extend and illuminate landing lights.'
          },
          {
            id: 'a330-baro-dest',
            item: 'BARO Reference',
            action: 'SET DEST LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Push baro knob passing transition level and dial local QNH.'
          },
          {
            id: 'a330-appr-phase',
            item: 'MCDU: ACTIVATE APPR PHASE',
            action: 'ACTIVATE & CONFIRM',
            location: 'FMS / MCDU',
            note: 'Decelerate towards green dot speed.'
          },
          {
            id: 'a330-appr-btn',
            item: 'FCU: APPR Pushbutton',
            action: 'ARM (LOC & G/S Armed)',
            location: 'GLARESHIELD',
            note: 'Arm approach capture.'
          },
          {
            id: 'a330-flaps-1',
            item: 'FLAPS Lever',
            action: 'SET 1 (Slats Extended)',
            location: 'PEDESTAL',
            note: 'Extend slats to position 1.'
          },
          {
            id: 'a330-spoilers-arm',
            item: 'GROUND SPOILERS',
            action: 'ARM (Pull Up)',
            location: 'PEDESTAL',
            note: 'Confirm white band.'
          }
        ]
      },
      {
        id: 'a330-p11',
        title: '11. Final & Landing',
        shortTitle: 'Final & Landing',
        subtitle: 'Gear down, landing flap, glide slope capture, and touchdown',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a330-gear-down',
            item: 'LANDING GEAR Lever',
            action: 'DOWN (Verify 3 Green)',
            location: 'MAIN PANEL',
            note: 'Lower widebody main bogies. Confirm 3 green lights.'
          },
          {
            id: 'a330-flaps-full',
            item: 'FLAPS Lever',
            action: 'SET FULL (or Flaps 3)',
            location: 'PEDESTAL',
            note: 'Select final landing flap configuration.'
          },
          {
            id: 'a330-ecam-memo',
            item: 'ECAM LDG MEMO',
            action: 'VERIFY ALL GREEN',
            location: 'MAIN PANEL',
            note: 'Check gear down, spoilers armed, flaps full, cabin signs on.'
          },
          {
            id: 'a330-touchdown',
            item: 'TOUCHDOWN & REVERSE THRUST',
            action: 'MAX REVERSE ➔ IDLE at 70 KTS',
            location: 'PEDESTAL',
            note: 'Engage reverse thrust on both engines upon touchdown. Stagger to idle before 70 knots.'
          }
        ]
      },
      {
        id: 'a330-p12',
        title: '12. After Landing & Taxi-In',
        shortTitle: 'After Landing',
        subtitle: 'Runway vacation, flap clean-up, and starting APU',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a330-clear-rwy',
            item: 'RUNWAY VACATED',
            action: 'CROSS HOLD SHORT LINE',
            location: 'MAIN PANEL',
            note: 'Vacate runway onto taxiway.'
          },
          {
            id: 'a330-flaps-up',
            item: 'FLAPS Lever',
            action: 'RETRACT TO 0',
            location: 'PEDESTAL',
            note: 'Retract slats and flaps.'
          },
          {
            id: 'a330-spoilers-disarm',
            item: 'GROUND SPOILERS',
            action: 'DISARM (Push Down)',
            location: 'PEDESTAL',
            note: 'Disarm ground spoilers.'
          },
          {
            id: 'a330-lights-after',
            item: 'LANDING & STROBE LIGHTS',
            action: 'OFF & AUTO',
            location: 'OVHD - LIGHTS',
            note: 'Turn off landing lights. Nose light to TAXI.'
          },
          {
            id: 'a330-apu-start-taxi',
            item: 'APU MASTER & START',
            action: 'BOTH ON',
            location: 'OVHD - APU',
            note: 'Start APU during taxi-in to power aircraft upon shutdown.'
          }
        ]
      },
      {
        id: 'a330-p13',
        title: '13. Parking, Shutdown & Cold Cockpit',
        shortTitle: 'Shutdown & Cold',
        subtitle: 'Engine cutoff, deboarding, and returning to cold & dark',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a330-park-brake-gate',
            item: 'PARKING BRAKE',
            action: 'ON',
            location: 'PEDESTAL',
            note: 'Set parking brake at gate.'
          },
          {
            id: 'a330-apu-bleed-gate',
            item: 'APU BLEED / EXT PWR',
            action: 'CONNECTED / ON',
            location: 'OVHD - ELEC',
            note: 'Verify APU AVAIL or connect dual ground power.'
          },
          {
            id: 'a330-eng-masters-off',
            item: 'ENG 1 & 2 MASTER Switches',
            action: 'BOTH OFF',
            location: 'PEDESTAL',
            note: 'Cut fuel to engines.'
          },
          {
            id: 'a330-seatbelts-off',
            item: 'SEATBELTS Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Chime passengers for deboarding.'
          },
          {
            id: 'a330-fuel-pumps-off',
            item: 'FUEL PUMPS',
            action: 'ALL OFF',
            location: 'OVHD - FUEL',
            note: 'Turn off all wing tank pumps.'
          },
          {
            id: 'a330-beacon-off',
            item: 'BEACON Light Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Signals engines have stopped.'
          },
          {
            id: 'a330-cold-adirs',
            item: 'ADIRS 1, 2, 3',
            action: 'OFF',
            location: 'OVHD - ADIRS',
            note: 'Turn off inertial reference units.'
          },
          {
            id: 'a330-cold-apu-off',
            item: 'APU MASTER SW',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shutdown APU.'
          },
          {
            id: 'a330-cold-bat-off',
            item: 'BAT 1, 2 & APU BAT Switches',
            action: 'ALL THREE OFF',
            location: 'OVHD - ELEC',
            note: 'Disconnect batteries. Cockpit returns to Cold & Dark.'
          }
        ]
      }
    ]
  },

  {
    id: 'b747-8i',
    name: 'Boeing 747-8 Intercontinental',
    subtitle: 'Widebody 4-Engine Jumbo • GEnx-2B',
    shortCode: 'B748',
    manufacturer: 'Boeing',
    developer: 'Asobo / MSFS 2024',
    bodyType: 'Jumbo',
    engineCount: 4,
    fmsName: 'FMC',
    accentColor: 'amber',
    summary: 'The Queen of the Skies featuring 4 General Electric GEnx engines, iconic upper deck, and synchronized four-engine flight operations.',
    phases: [
      // DEPARTURE
      {
        id: 'b747-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Dual battery and dual external power feeds',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b747-bat-sw',
            item: 'BATTERY Switch',
            action: 'ON & GUARD CLOSED',
            location: 'OVHD - ELEC',
            note: 'Main & APU battery energized.'
          },
          {
            id: 'b747-ext-pwr',
            item: 'EXT PWR 1 & EXT PWR 2',
            action: 'BOTH ON',
            location: 'OVHD - ELEC',
            note: 'Large 4-engine jumbo uses dual 90kVA external power feeds on ground.'
          },
          {
            id: 'b747-emer-lights',
            item: 'EMERGENCY EXIT LIGHTS',
            action: 'ARM (Guarded)',
            location: 'OVHD - LIGHTS',
            note: 'Close switch guard.'
          },
          {
            id: 'b747-nav-lights',
            item: 'NAV LIGHTS Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Illuminate wing and tail position navigation lights.'
          }
        ]
      },
      {
        id: 'b747-p2',
        title: '2. Cockpit Preparation & Overhead Flow',
        shortTitle: 'Cockpit Prep',
        subtitle: 'IRS alignment, 4-engine fuel crossfeeds, and hydraulic demand pumps',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b747-irs-align',
            item: 'IRS 1, 2, 3 Selectors',
            action: 'OFF ➔ NAV',
            location: 'OVHD - ADIRS',
            note: 'Align triple Boeing inertial reference systems.'
          },
          {
            id: 'b747-fuel-crossfeed',
            item: 'FUEL CROSSFEED Valves (4)',
            action: 'VERIFY CLOSED',
            location: 'OVHD - FUEL',
            note: 'Main tanks feed individual engines during start.'
          },
          {
            id: 'b747-fuel-pumps',
            item: 'MAIN TANK PUMPS (1, 2, 3, 4)',
            action: 'ALL ON (8 Switches)',
            location: 'OVHD - FUEL',
            note: 'Turn on FWD and AFT pumps for tanks 1, 2, 3, and 4.'
          },
          {
            id: 'b747-hyd-demand',
            item: 'HYDRAULIC DEMAND PUMPS (1 to 4)',
            action: 'AUTO',
            location: 'OVHD - HYD',
            note: 'Auxiliary electric and air demand pumps set to AUTO.'
          },
          {
            id: 'b747-window-heat',
            item: 'WINDOW HEAT (4 Switches)',
            action: 'ALL ON',
            location: 'OVHD - MISC',
            note: 'Forward and side windshield defogging.'
          }
        ]
      },
      {
        id: 'b747-p3',
        title: '3. Boeing Jumbo FMC Initialization',
        shortTitle: 'FMC Setup',
        subtitle: 'Four-engine performance calculation, gross weight, and trim',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b747-fmc-pos-init',
            item: 'FMC: POS INIT Page',
            action: 'SET REF AIRPORT & GPS POS',
            location: 'FMS / MCDU',
            note: 'Initialize aircraft reference position at gate.'
          },
          {
            id: 'b747-fmc-route',
            item: 'FMC: RTE Page',
            action: 'ORIGIN, DEST, SID & ACTIVATE',
            location: 'FMS / MCDU',
            note: 'Program departure runway, SID, and enroute flight plan. Press EXEC.'
          },
          {
            id: 'b747-fmc-perf',
            item: 'FMC: PERF INIT Page',
            action: 'ZFW, RESERVES, COST INDEX',
            location: 'FMS / MCDU',
            note: 'Fill high gross weight figures, reserve fuel, and cruise flight level.'
          },
          {
            id: 'b747-fmc-takeoff',
            item: 'FMC: TAKEOFF REF Page',
            action: 'FLAPS 10 or 20, CG & V-SPEEDS',
            location: 'FMS / MCDU',
            note: 'Enter departure flap setting (Flaps 10 or 20) and calculate stabilizer trim & V1, VR, V2.'
          }
        ]
      },
      {
        id: 'b747-p4',
        title: '4. APU Startup & Pushback Prep',
        shortTitle: 'APU & Start Prep',
        subtitle: 'Starting dual-generator APU and beacon activation',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b747-apu-start',
            item: 'APU Switch',
            action: 'START ➔ Release to ON',
            location: 'OVHD - APU',
            note: 'Hold momentarily at START. Monitor APU RUN light illumination.'
          },
          {
            id: 'b747-apu-gen-avail',
            item: 'APU GEN 1 & 2 Switches',
            action: 'BOTH ON',
            location: 'OVHD - ELEC',
            note: 'Connect APU power to electrical tie buses.'
          },
          {
            id: 'b747-apu-bleed',
            item: 'APU BLEED Air Switch',
            action: 'ON',
            location: 'OVHD - AIR / PACKS',
            note: 'Supplies duct pressure across all 4 engine starter isolation valves.'
          },
          {
            id: 'b747-ext-pwr-off',
            item: 'EXT PWR 1 & 2',
            action: 'DISCONNECT / OFF',
            location: 'OVHD - ELEC',
            note: 'Ground cables cleared.'
          },
          {
            id: 'b747-beacon',
            item: 'BEACON Lights Switch',
            action: 'BOTH (Upper & Lower ON)',
            location: 'OVHD - LIGHTS',
            note: 'Signals ready for 4-engine pushback.'
          }
        ]
      },
      {
        id: 'b747-p5',
        title: '5. Pushback & 4-Engine Start Sequence',
        shortTitle: 'Engine Start',
        subtitle: 'Paired engine startup: Engines 4 & 3, then Engines 2 & 1',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b747-packs-off',
            item: 'PACKS (1, 2, 3)',
            action: 'ALL THREE OFF',
            location: 'OVHD - AIR / PACKS',
            note: 'Packs must be OFF to deliver sufficient pneumatic mass flow for 4 large starters.'
          },
          {
            id: 'b747-start-4-3',
            item: 'ENG 4 & ENG 3 START Switches',
            action: 'PULL TO START',
            location: 'OVHD - ENGINES',
            note: 'Standard Boeing 747 procedure starts right-side engines (4 & 3) first. Pull start knobs.'
          },
          {
            id: 'b747-cutoff-4-3',
            item: 'FUEL CONTROL LEVERS 4 & 3',
            action: 'RUN at N2 ≥ 20%',
            location: 'PEDESTAL',
            note: 'Lift fuel control switches 4 and 3 to RUN. Monitor EGT and N1 rotation until stable.'
          },
          {
            id: 'b747-start-2-1',
            item: 'ENG 2 & ENG 1 START Switches',
            action: 'PULL TO START',
            location: 'OVHD - ENGINES',
            note: 'Pull start knobs for left-side engines (2 & 1).'
          },
          {
            id: 'b747-cutoff-2-1',
            item: 'FUEL CONTROL LEVERS 2 & 1',
            action: 'RUN at N2 ≥ 20%',
            location: 'PEDESTAL',
            note: 'Lift fuel switches 2 and 1 to RUN. Confirm all 4 engines stabilized at idle.'
          }
        ]
      },
      {
        id: 'b747-p6',
        title: '6. Taxi & Before Takeoff',
        shortTitle: 'Taxi & Line-Up',
        subtitle: 'All 4 engine generators on, packs restored, flaps & trim set',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'b747-gen-switches',
            item: 'ENG GEN 1, 2, 3, 4',
            action: 'VERIFY ALL ON (Closed)',
            location: 'OVHD - ELEC',
            note: 'All four engine-driven 120kVA generators power aircraft electrical systems.'
          },
          {
            id: 'b747-apu-bleed-off',
            item: 'APU BLEED Switch',
            action: 'OFF',
            location: 'OVHD - AIR / PACKS',
            note: 'Close APU bleed valve.'
          },
          {
            id: 'b747-apu-off',
            item: 'APU Switch',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Turn APU selector OFF.'
          },
          {
            id: 'b747-packs-norm',
            item: 'PACKS 1, 2, 3',
            action: 'NORM (All ON)',
            location: 'OVHD - AIR / PACKS',
            note: 'Restores air conditioning and pressurization from engine bleeds.'
          },
          {
            id: 'b747-flaps',
            item: 'FLAPS Lever',
            action: 'SET TAKEOFF (Flaps 10 or 20)',
            location: 'PEDESTAL',
            note: 'Extend triple-slotted trailing edge flaps.'
          },
          {
            id: 'b747-stab-trim',
            item: 'STABILIZER TRIM',
            action: 'SET TAKEOFF GREEN BAND',
            location: 'PEDESTAL',
            note: 'Adjust horizontal stabilizer trim to FMC calculated units.'
          },
          {
            id: 'b747-autobrake-rto',
            item: 'AUTOBRAKE Selector',
            action: 'RTO',
            location: 'MAIN PANEL',
            note: 'Arm rejected takeoff maximum braking.'
          },
          {
            id: 'b747-taxi-lights',
            item: 'TAXI LIGHTS',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Engage nose gear taxi lights.'
          },
          {
            id: 'b747-strobes-lineup',
            item: 'STROBE LIGHTS',
            action: 'ON (Crossing Threshold)',
            location: 'OVHD - LIGHTS',
            note: 'Turn on high-intensity strobes for takeoff.'
          }
        ]
      },

      // EN ROUTE
      {
        id: 'b747-p7',
        title: '7. Climb (After Takeoff & 10,000 ft)',
        shortTitle: 'Climb & 10k ft',
        subtitle: 'Gear retraction, flap schedule for heavy gross weight, and standard baro',
        segment: 'ENROUTE',
        items: [
          {
            id: 'b747-gear-up',
            item: 'LANDING GEAR Lever',
            action: 'UP (Body & Wing Gear Stowed)',
            location: 'MAIN PANEL',
            note: 'Select UP on positive climb. Check tilt bogies stow into fuselage wells.'
          },
          {
            id: 'b747-ap-cmd',
            item: 'AUTOPILOT (L or C CMD)',
            action: 'ENGAGE',
            location: 'GLARESHIELD',
            note: 'Connect primary autopilot on MCP.'
          },
          {
            id: 'b747-flaps-retract',
            item: 'FLAPS Lever',
            action: 'RETRACT TO 5 ➔ 1 ➔ UP',
            location: 'PEDESTAL',
            note: 'Retract flaps systematically as airspeed accelerates past flap maneuver speed bugs.'
          },
          {
            id: 'b747-10k-lights',
            item: 'LANDING & TURNOFF LIGHTS',
            action: 'OFF (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Extinguish forward landing beams.'
          },
          {
            id: 'b747-baro-std',
            item: 'ALTIMETERS',
            action: 'SET STD (Transition Altitude)',
            location: 'GLARESHIELD',
            note: 'Select Standard 29.92 inHg on all altimeters.'
          }
        ]
      },
      {
        id: 'b747-p8',
        title: '8. Cruise & Oceanic Step Climbs',
        shortTitle: 'Cruise',
        subtitle: '4-engine cruise thrust, fuel tank-to-engine configuration, and step climbs',
        segment: 'ENROUTE',
        items: [
          {
            id: 'b747-crz-vnav',
            item: 'FMA / MCP Flight Modes',
            action: 'VERIFY VNAV PTH / LNAV',
            location: 'MAIN PANEL',
            note: 'Confirm level flight and high-speed Mach cruise.'
          },
          {
            id: 'b747-fuel-scavenge',
            item: 'CENTER TANK FUEL PUMPS',
            action: 'OFF WHEN EMPTY (Scavenge Verified)',
            location: 'OVHD - FUEL',
            note: 'Turn off center tank override pumps when center tank approaches zero.'
          },
          {
            id: 'b747-step-climbs',
            item: 'FMC: VNAV CRZ Page',
            action: 'EVALUATE STEP CLIMB (e.g. FL320 ➔ FL360)',
            location: 'FMS / MCDU',
            note: 'The 747-8 climbs in steps as massive fuel load burns off.'
          }
        ]
      },
      {
        id: 'b747-p9',
        title: '9. Descent Preparation (Top of Descent)',
        shortTitle: 'Descent Prep',
        subtitle: 'Heavy jet landing speeds, runway selection, and VNAV descent profile',
        segment: 'ENROUTE',
        items: [
          {
            id: 'b747-dest-atis',
            item: 'DESTINATION ATIS',
            action: 'OBTAIN WEATHER & ALTIMETER',
            location: 'FMS / MCDU',
            note: 'Note landing runway and local barometric pressure.'
          },
          {
            id: 'b747-fmc-arr',
            item: 'FMC: DEP/ARR Page',
            action: 'SELECT ARRIVAL STAR & APPROACH',
            location: 'FMS / MCDU',
            note: 'Select ILS runway, STAR, and transitions. Press EXEC.'
          },
          {
            id: 'b747-fmc-vref',
            item: 'FMC: APPROACH REF Page',
            action: 'SELECT VREF (Flaps 25 or 30)',
            location: 'FMS / MCDU',
            note: 'Confirm target approach speed for heavy landing weight.'
          },
          {
            id: 'b747-autobrake-sel',
            item: 'AUTOBRAKE Selector',
            action: 'SET 2, 3 or 4',
            location: 'MAIN PANEL',
            note: 'Arm autobrake for landing rollout.'
          },
          {
            id: 'b747-mcp-des',
            item: 'MCP ALTITUDE Window',
            action: 'DIAL LOWER CLEARED ALTITUDE',
            location: 'GLARESHIELD',
            note: 'Lower MCP altitude before T/D to initiate automatic VNAV profile.'
          }
        ]
      },

      // ARRIVAL & SHUTDOWN
      {
        id: 'b747-p10',
        title: '10. Approach (Passing 10,000 ft & Localizer)',
        shortTitle: 'Approach Flow',
        subtitle: 'Landing lights, speedbrake arm, and localizer capture',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b747-10k-landing-lt',
            item: 'LANDING LIGHTS',
            action: 'ALL ON (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Turn on all landing illumination.'
          },
          {
            id: 'b747-baro-dest',
            item: 'ALTIMETERS',
            action: 'SET LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Reset to local baro pressure passing transition level.'
          },
          {
            id: 'b747-app-mode',
            item: 'MCP: APP Pushbutton',
            action: 'ARM (LOC & G/S Armed)',
            location: 'GLARESHIELD',
            note: 'Arm ILS localizer and glideslope capture.'
          },
          {
            id: 'b747-speedbrake-arm',
            item: 'SPEEDBRAKE Lever',
            action: 'ARM (Pull to Detent)',
            location: 'PEDESTAL',
            note: 'Green SPEEDBRAKE ARMED light illuminates.'
          },
          {
            id: 'b747-flaps-intermediate',
            item: 'FLAPS Lever',
            action: 'EXTEND TO 1, 5, THEN 10',
            location: 'PEDESTAL',
            note: 'Extend flaps on schedule as airspeed slows.'
          }
        ]
      },
      {
        id: 'b747-p11',
        title: '11. Final & Landing',
        shortTitle: 'Final & Landing',
        subtitle: 'Gear down, landing flap 25/30, and 4-engine reverse thrust',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b747-gear-down',
            item: 'LANDING GEAR Lever',
            action: 'DOWN (5 Green Lights)',
            location: 'MAIN PANEL',
            note: 'Lower massive 16-wheel main landing gear. Confirm all green indicators.'
          },
          {
            id: 'b747-flaps-landing',
            item: 'FLAPS Lever',
            action: 'SET 25 or 30',
            location: 'PEDESTAL',
            note: 'Extend final landing flap.'
          },
          {
            id: 'b747-touchdown',
            item: 'TOUCHDOWN & 4-ENG REVERSE',
            action: 'DEPLOY ALL 4 REVERSERS ➔ STOW at 60 KTS',
            location: 'PEDESTAL',
            note: 'Pull reverse levers on all 4 engines. Disengage reversers by 60 knots and apply toe brakes.'
          }
        ]
      },
      {
        id: 'b747-p12',
        title: '12. After Landing & Taxi-In',
        shortTitle: 'After Landing',
        subtitle: 'Runway vacation, flap retraction, and starting APU',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b747-clear-rwy',
            item: 'RUNWAY VACATED',
            action: 'CROSS HOLD SHORT LINE',
            location: 'MAIN PANEL',
            note: 'Taxing Queen of the Skies onto taxiway.'
          },
          {
            id: 'b747-flaps-up',
            item: 'FLAPS Lever',
            action: 'UP (Flaps 0)',
            location: 'PEDESTAL',
            note: 'Retract triple-slotted flaps.'
          },
          {
            id: 'b747-speedbrake-down',
            item: 'SPEEDBRAKE Lever',
            action: 'DOWN / DETENT',
            location: 'PEDESTAL',
            note: 'Stow speedbrake handle.'
          },
          {
            id: 'b747-lights-after',
            item: 'LANDING & STROBE LIGHTS',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Turn off landing lights. Taxi lights ON.'
          },
          {
            id: 'b747-apu-start-taxi',
            item: 'APU Switch',
            action: 'START ➔ Release to ON',
            location: 'OVHD - APU',
            note: 'Start APU during taxi-in to prepare for shutdown at gate.'
          }
        ]
      },
      {
        id: 'b747-p13',
        title: '13. Parking, Shutdown & Cold Cockpit',
        shortTitle: 'Shutdown & Cold',
        subtitle: '4-engine cutoff, ground services, and returning to cold & dark',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'b747-park-brake-gate',
            item: 'PARKING BRAKE',
            action: 'SET',
            location: 'PEDESTAL',
            note: 'Engage parking brake at gate.'
          },
          {
            id: 'b747-apu-gen-gate',
            item: 'APU GEN 1 & 2 / EXT PWR',
            action: 'BOTH ON',
            location: 'OVHD - ELEC',
            note: 'Transfer electrical buses to APU or external power carts.'
          },
          {
            id: 'b747-cutoff-4-engines',
            item: 'FUEL CONTROL LEVERS (1, 2, 3, 4)',
            action: 'ALL 4 CUTOFF',
            location: 'PEDESTAL',
            note: 'Cut fuel to all 4 engines.'
          },
          {
            id: 'b747-fasten-belts-off',
            item: 'SEATBELTS Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Chime passengers for deplaning.'
          },
          {
            id: 'b747-fuel-pumps-off',
            item: 'FUEL PUMPS',
            action: 'ALL OFF',
            location: 'OVHD - FUEL',
            note: 'Turn off all main and override fuel pumps.'
          },
          {
            id: 'b747-beacon-off',
            item: 'BEACON Lights Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Ground crew safe to approach.'
          },
          {
            id: 'b747-cold-irs-off',
            item: 'IRS Selectors (1, 2, 3)',
            action: 'OFF',
            location: 'OVHD - ADIRS',
            note: 'Turn off triple IRS units.'
          },
          {
            id: 'b747-cold-apu-off',
            item: 'APU Switch',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shutdown APU.'
          },
          {
            id: 'b747-cold-bat-off',
            item: 'BATTERY Switch',
            action: 'OFF (Guard Down)',
            location: 'OVHD - ELEC',
            note: 'Switch battery off. Aircraft returned to Cold & Dark.'
          }
        ]
      }
    ]
  },

  {
    id: 'a310-300',
    name: 'Airbus A310-300',
    subtitle: 'Classic Widebody Twinjet • CF6 / PW4000',
    shortCode: 'A310',
    manufacturer: 'Airbus',
    developer: 'iniBuilds / MSFS 2024',
    bodyType: 'Classic Widebody',
    engineCount: 2,
    fmsName: 'FMC',
    accentColor: 'cyan',
    summary: 'The classic Airbus widebody combining heritage analog dials with early digital FMS, slat lockout logic, and distinctive overhead design.',
    phases: [
      // DEPARTURE
      {
        id: 'a310-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Battery master, emergency inverter, and ground power',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a310-bat-voltage',
            item: 'BATTERIES 1, 2, 3 Voltage',
            action: 'CHECK ≥ 24 V',
            location: 'OVHD - ELEC',
            note: 'Check DC meter selector for each battery bus.'
          },
          {
            id: 'a310-bat-sw',
            item: 'BATTERIES 1, 2, 3 Switches',
            action: 'ALL ON',
            location: 'OVHD - ELEC',
            note: 'Push on all 3 battery switches.'
          },
          {
            id: 'a310-ext-pwr',
            item: 'EXT PWR Switch',
            action: 'ON (AVAIL ➔ ON)',
            location: 'OVHD - ELEC',
            note: 'Connect ground power cart. AC/DC buses energized.'
          },
          {
            id: 'a310-inst-lights',
            item: 'INSTRUMENT FLOOD & DOME',
            action: 'AS RQRD',
            location: 'OVHD - LIGHTS',
            note: 'Adjust classic amber/white cockpit illumination.'
          }
        ]
      },
      {
        id: 'a310-p2',
        title: '2. Cockpit Preparation & Overhead Flow',
        shortTitle: 'Cockpit Prep',
        subtitle: 'IRU alignment, fuel pumps, and pneumatic cross-bleeds',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a310-iru-align',
            item: 'IRU 1, 2, 3 Selectors',
            action: 'OFF ➔ NAV',
            location: 'OVHD - ADIRS',
            note: 'Classic Honeywell/Litton IRU mode selectors set to NAV.'
          },
          {
            id: 'a310-fuel-pumps',
            item: 'FUEL PUMPS (L, C, R, Trim)',
            action: 'ALL ON',
            location: 'OVHD - FUEL',
            note: 'Turn on inner and center tank fuel pumps. White OFF lights extinguish.'
          },
          {
            id: 'a310-hyd-elec',
            item: 'ELEC HYD PUMP Switches',
            action: 'AUTO / ON',
            location: 'OVHD - HYD',
            note: 'Verify Blue & Yellow auxiliary electric hydraulic pumps.'
          },
          {
            id: 'a310-signs',
            item: 'SEATBELTS & NO SMOKING',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Cabin passenger warning signs.'
          },
          {
            id: 'a310-emer-exit',
            item: 'EMERGENCY EXIT LIGHTS',
            action: 'ARM (Guarded)',
            location: 'OVHD - LIGHTS',
            note: 'Guard closed in armed position.'
          }
        ]
      },
      {
        id: 'a310-p3',
        title: '3. FMS Flight Management Setup',
        shortTitle: 'FMS Setup',
        subtitle: 'Legacy FMS flight plan, weights, and takeoff V-speeds',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a310-fms-ident',
            item: 'FMS: IDENT Page',
            action: 'CHECK NAV DATA CYCLE',
            location: 'FMS / MCDU',
            note: 'Verify active navigation database.'
          },
          {
            id: 'a310-fms-init',
            item: 'FMS: INIT Page',
            action: 'FROM/TO, FLT ID, ALIGN IRS',
            location: 'FMS / MCDU',
            note: 'Enter departure/arrival ICAO, flight number, and tap ALIGN IRS prompt.'
          },
          {
            id: 'a310-fms-fplan',
            item: 'FMS: F-PLAN Page',
            action: 'DEPARTURE RUNWAY & ROUTE',
            location: 'FMS / MCDU',
            note: 'Select departure runway, SID, and route waypoints. Verify flight plan continuity.'
          },
          {
            id: 'a310-fms-perf',
            item: 'FMS: PERF TAKEOFF Page',
            action: 'ZFW, BLOCK FUEL, V1, VR, V2',
            location: 'FMS / MCDU',
            note: 'Enter Zero Fuel Weight and calculate rotation and climb speeds.'
          }
        ]
      },
      {
        id: 'a310-p4',
        title: '4. APU Startup & Pushback Prep',
        shortTitle: 'APU & Start Prep',
        subtitle: 'Starting classic APU, air bleeds, and altimeters',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a310-apu-master',
            item: 'APU MASTER SW',
            action: 'ON',
            location: 'OVHD - APU',
            note: 'Check APU air intake flap open.'
          },
          {
            id: 'a310-apu-start',
            item: 'APU START Switch',
            action: 'ON (Monitor RUN Light)',
            location: 'OVHD - APU',
            note: 'Press start button. Green RUN light illuminates once APU stabilizes.'
          },
          {
            id: 'a310-apu-bleed',
            item: 'APU BLEED Valve',
            action: 'ON / OPEN',
            location: 'OVHD - AIR / PACKS',
            note: 'Open APU bleed valve to supply starter duct pressure.'
          },
          {
            id: 'a310-ext-pwr-off',
            item: 'EXT PWR Switch',
            action: 'OFF',
            location: 'OVHD - ELEC',
            note: 'APU generator takes over load. Ground power disconnected.'
          },
          {
            id: 'a310-altimeters',
            item: 'ALTIMETERS',
            action: 'SET LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Set captain, FO, and standby barometric subscales.'
          },
          {
            id: 'a310-beacon',
            item: 'BEACON Lights Switch',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Signals ground crew for pushback.'
          }
        ]
      },
      {
        id: 'a310-p5',
        title: '5. Pushback & Engine Start',
        shortTitle: 'Engine Start',
        subtitle: 'Pneumatic starter engagement and fuel cock activation',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a310-parking-brake',
            item: 'PARKING BRAKE',
            action: 'RELEASE',
            location: 'PEDESTAL',
            note: 'Release for pushback.'
          },
          {
            id: 'a310-packs-off',
            item: 'AIR PACK VALVES (1 & 2)',
            action: 'BOTH OFF',
            location: 'OVHD - AIR / PACKS',
            note: 'Close air pack valves to retain start duct pressure.'
          },
          {
            id: 'a310-eng2-start',
            item: 'ENG 2 START Switch',
            action: 'PULL / ON',
            location: 'OVHD - ENGINES',
            note: 'Engage starter. Monitor N2 needle rotation.'
          },
          {
            id: 'a310-eng2-fuel',
            item: 'ENG 2 FUEL LEVER',
            action: 'ON at N2 ≥ 18%',
            location: 'PEDESTAL',
            note: 'Move fuel lever forward to ON. Monitor EGT and N1 rise.'
          },
          {
            id: 'a310-eng1-start',
            item: 'ENG 1 START Switch',
            action: 'PULL / ON',
            location: 'OVHD - ENGINES',
            note: 'Repeat procedure for Engine 1.'
          },
          {
            id: 'a310-eng1-fuel',
            item: 'ENG 1 FUEL LEVER',
            action: 'ON at N2 ≥ 18%',
            location: 'PEDESTAL',
            note: 'Raise fuel lever 1. Both engines running and stable.'
          }
        ]
      },
      {
        id: 'a310-p6',
        title: '6. Taxi & Before Takeoff',
        shortTitle: 'Taxi & Line-Up',
        subtitle: 'Packs re-engaged, slats/flaps set, and pitch trim configured',
        segment: 'DEPARTURE',
        items: [
          {
            id: 'a310-gen-switches',
            item: 'GEN 1 & GEN 2 Switches',
            action: 'VERIFY ON (Connected)',
            location: 'OVHD - ELEC',
            note: 'Main engine alternators powering aircraft electrical grid.'
          },
          {
            id: 'a310-apu-off',
            item: 'APU BLEED & MASTER SW',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'APU shutdown.'
          },
          {
            id: 'a310-packs-on',
            item: 'AIR PACK VALVES 1 & 2',
            action: 'BOTH AUTO / ON',
            location: 'OVHD - AIR / PACKS',
            note: 'Re-engage environmental control packs.'
          },
          {
            id: 'a310-slat-flap',
            item: 'SLAT / FLAP Lever',
            action: 'SET TAKEOFF (15/0 or 15/15)',
            location: 'PEDESTAL',
            note: 'A310 features unique slat & flap selection. Check dial.'
          },
          {
            id: 'a310-spoilers',
            item: 'SPOILER LEVER',
            action: 'ARM (Pull Up)',
            location: 'PEDESTAL',
            note: 'Arm ground spoilers.'
          },
          {
            id: 'a310-pitch-trim',
            item: 'PITCH TRIM Wheel',
            action: 'SET TAKEOFF UNITS',
            location: 'PEDESTAL',
            note: 'Set pitch trim according to loaded CG.'
          },
          {
            id: 'a310-taxi-light',
            item: 'TAXI LIGHT Switch',
            action: 'ON (Takeoff: LAND ON)',
            location: 'OVHD - LIGHTS',
            note: 'Illuminate nose taxi light.'
          },
          {
            id: 'a310-strobes-on',
            item: 'STROBE LIGHTS',
            action: 'ON (Active Runway)',
            location: 'OVHD - LIGHTS',
            note: 'Turn on wing strobes for runway entry.'
          }
        ]
      },

      // EN ROUTE
      {
        id: 'a310-p7',
        title: '7. Climb (After Takeoff & 10,000 ft)',
        shortTitle: 'Climb & 10k ft',
        subtitle: 'Gear up, flap clean-up, profile climb, and standard altimeters',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a310-gear-up',
            item: 'LANDING GEAR Lever',
            action: 'UP (Positive Climb)',
            location: 'MAIN PANEL',
            note: 'Retract landing gear.'
          },
          {
            id: 'a310-ap-on',
            item: 'AUTOPILOT (AP1)',
            action: 'ENGAGE',
            location: 'GLARESHIELD',
            note: 'Engage autopilot on flight control unit.'
          },
          {
            id: 'a310-flaps-clean',
            item: 'SLAT / FLAP Lever',
            action: 'RETRACT TO 0/0',
            location: 'PEDESTAL',
            note: 'Retract flaps and slats systematically on speed schedule.'
          },
          {
            id: 'a310-10k-lights',
            item: 'LANDING LIGHTS',
            action: 'OFF (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Extinguish main landing lights.'
          },
          {
            id: 'a310-baro-std',
            item: 'ALTIMETERS',
            action: 'SET STD (Transition Altitude)',
            location: 'GLARESHIELD',
            note: 'Set 1013 / 29.92 standard barometric pressure.'
          }
        ]
      },
      {
        id: 'a310-p8',
        title: '8. Cruise',
        shortTitle: 'Cruise',
        subtitle: 'Profile Mach hold, trim tank center of gravity, and fuel balance',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a310-crz-profile',
            item: 'FMS PROFILE CRUISE',
            action: 'VERIFY LEVEL & CRZ THRUST',
            location: 'MAIN PANEL',
            note: 'Verify cruise thrust and level flight at planned altitude.'
          },
          {
            id: 'a310-trim-fuel',
            item: 'TRIM TANK TRANSFER',
            action: 'MONITOR CG TARGET',
            location: 'OVHD - FUEL',
            note: 'A310 automated trim tank keeps aircraft CG near 50% MAC.'
          }
        ]
      },
      {
        id: 'a310-p9',
        title: '9. Descent Preparation (Top of Descent)',
        shortTitle: 'Descent Prep',
        subtitle: 'Arrival runway, FMS arrival page, and approach briefing',
        segment: 'ENROUTE',
        items: [
          {
            id: 'a310-dest-weather',
            item: 'DESTINATION ATIS',
            action: 'OBTAIN WEATHER & QNH',
            location: 'FMS / MCDU',
            note: 'Check arrival runway and local altimeter.'
          },
          {
            id: 'a310-fms-arr',
            item: 'FMS: F-PLAN Destination',
            action: 'SET STAR & ILS APPROACH',
            location: 'FMS / MCDU',
            note: 'Insert arrival procedure and approach.'
          },
          {
            id: 'a310-fms-perf-appr',
            item: 'FMS: PERF LANDING Page',
            action: 'ENTER VREF & MINIMUMS',
            location: 'FMS / MCDU',
            note: 'Compute Vapp and set decision height.'
          },
          {
            id: 'a310-des-altitude',
            item: 'FCU ALTITUDE Window',
            action: 'DIAL LOWER & ENGAGE DESCENT',
            location: 'GLARESHIELD',
            note: 'Begin descent before Top of Descent profile marker.'
          }
        ]
      },

      // ARRIVAL & SHUTDOWN
      {
        id: 'a310-p10',
        title: '10. Approach (Passing 10,000 ft & Localizer)',
        shortTitle: 'Approach Flow',
        subtitle: 'Landing lights, localizer capture, and slat extension',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a310-10k-landing-lt',
            item: 'LANDING LIGHTS',
            action: 'ON (Passing 10,000 ft)',
            location: 'OVHD - LIGHTS',
            note: 'Illuminate landing lights.'
          },
          {
            id: 'a310-baro-dest',
            item: 'ALTIMETERS',
            action: 'SET DEST LOCAL QNH',
            location: 'GLARESHIELD',
            note: 'Set barometric subscale to destination pressure.'
          },
          {
            id: 'a310-land-mode',
            item: 'FCU: LAND / APPR Pushbutton',
            action: 'ARM (LOC & G/S)',
            location: 'GLARESHIELD',
            note: 'Arm approach capture.'
          },
          {
            id: 'a310-spoilers-arm',
            item: 'SPOILER LEVER',
            action: 'ARM (Pull Up)',
            location: 'PEDESTAL',
            note: 'Arm ground spoilers.'
          },
          {
            id: 'a310-slats-15',
            item: 'SLAT / FLAP Lever',
            action: 'SET 15/0',
            location: 'PEDESTAL',
            note: 'Extend slats to position 15/0.'
          }
        ]
      },
      {
        id: 'a310-p11',
        title: '11. Final & Landing',
        shortTitle: 'Final & Landing',
        subtitle: 'Gear down, landing flap 30/40, and reverse thrust touchdown',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a310-gear-down',
            item: 'LANDING GEAR Lever',
            action: 'DOWN (3 Green Lights)',
            location: 'MAIN PANEL',
            note: 'Confirm 3 green gear indicators.'
          },
          {
            id: 'a310-flaps-landing',
            item: 'SLAT / FLAP Lever',
            action: 'SET 15/20 or 20/30 (Landing Flap)',
            location: 'PEDESTAL',
            note: 'Set landing flap configuration.'
          },
          {
            id: 'a310-touchdown',
            item: 'TOUCHDOWN & REVERSE',
            action: 'REVERSE THRUST ➔ STOW at 60 KTS',
            location: 'PEDESTAL',
            note: 'Engage reverse thrust on main gear touchdown. Disengage by 60 knots.'
          }
        ]
      },
      {
        id: 'a310-p12',
        title: '12. After Landing & Taxi-In',
        shortTitle: 'After Landing',
        subtitle: 'Runway vacation, flap retraction, and starting APU',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a310-clear-rwy',
            item: 'RUNWAY VACATED',
            action: 'CROSS HOLD SHORT LINE',
            location: 'MAIN PANEL',
            note: 'Vacate active runway.'
          },
          {
            id: 'a310-flaps-up',
            item: 'SLAT / FLAP Lever',
            action: 'RETRACT TO 0/0',
            location: 'PEDESTAL',
            note: 'Stow slats and flaps.'
          },
          {
            id: 'a310-spoilers-disarm',
            item: 'SPOILER LEVER',
            action: 'DISARM (Push Down)',
            location: 'PEDESTAL',
            note: 'Disarm ground spoilers.'
          },
          {
            id: 'a310-lights-after',
            item: 'LANDING & STROBE LIGHTS',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Turn off landing lights. Taxi light ON.'
          },
          {
            id: 'a310-apu-start-taxi',
            item: 'APU MASTER & START',
            action: 'BOTH ON',
            location: 'OVHD - APU',
            note: 'Start APU during taxi.'
          }
        ]
      },
      {
        id: 'a310-p13',
        title: '13. Parking, Shutdown & Cold Cockpit',
        shortTitle: 'Shutdown & Cold',
        subtitle: 'Fuel levers off, ground power, and returning to cold & dark',
        segment: 'ARRIVAL',
        items: [
          {
            id: 'a310-park-brake-gate',
            item: 'PARKING BRAKE',
            action: 'SET',
            location: 'PEDESTAL',
            note: 'Set parking brake at gate.'
          },
          {
            id: 'a310-apu-power-gate',
            item: 'APU BLEED / EXT PWR',
            action: 'CONNECTED / ON',
            location: 'OVHD - ELEC',
            note: 'Ensure electrical bus powered before engine cutoff.'
          },
          {
            id: 'a310-cutoff-engines',
            item: 'ENG 1 & 2 FUEL LEVERS',
            action: 'BOTH OFF',
            location: 'PEDESTAL',
            note: 'Cut fuel to both engines.'
          },
          {
            id: 'a310-signs-off',
            item: 'SEATBELTS Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Passenger deboarding.'
          },
          {
            id: 'a310-fuel-pumps-off',
            item: 'FUEL PUMPS',
            action: 'ALL OFF',
            location: 'OVHD - FUEL',
            note: 'Turn off fuel pumps.'
          },
          {
            id: 'a310-beacon-off',
            item: 'BEACON Lights Switch',
            action: 'OFF',
            location: 'OVHD - LIGHTS',
            note: 'Signals engines have stopped.'
          },
          {
            id: 'a310-cold-iru-off',
            item: 'IRU 1, 2, 3 Selectors',
            action: 'OFF',
            location: 'OVHD - ADIRS',
            note: 'Turn off inertial reference units.'
          },
          {
            id: 'a310-cold-apu-off',
            item: 'APU MASTER SW',
            action: 'OFF',
            location: 'OVHD - APU',
            note: 'Shutdown APU.'
          },
          {
            id: 'a310-cold-bat-off',
            item: 'BATTERIES 1, 2, 3',
            action: 'ALL THREE OFF',
            location: 'OVHD - ELEC',
            note: 'Disconnect batteries. Cockpit returned to Cold & Dark.'
          }
        ]
      }
    ]
  }
];
