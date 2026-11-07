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
    summary: 'The iconic fly-by-wire airliner featuring Airbus "Dark Cockpit" philosophy and CFM LEAP-1A engines.',
    phases: [
      {
        id: 'a320-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'From dead cockpit to energized AC/DC buses',
        items: [
          {
            id: 'a320-bat-check',
            item: 'BAT 1 & 2 Voltage',
            action: 'CHECK ≥ 25.5 V',
            location: 'OVHD - ELEC',
            note: 'Verify battery voltage before connecting to avoid deep discharge. If below 25.5V, ground charging required.'
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
            note: 'Once ground power cart is connected via EFB or ATC ground services, AVAIL illuminates green. Press to connect.'
          },
          {
            id: 'a320-dome-lt',
            item: 'DOME LIGHT / INTEG LT',
            action: 'BRT / AS RQRD',
            location: 'OVHD - LIGHTS',
            note: 'Set cockpit dome light and integral pedestal backlighting as desired for flight deck visibility.'
          }
        ]
      },
      {
        id: 'a320-p2',
        title: '2. Cockpit Preparation & Overhead Scan',
        shortTitle: 'Cockpit Prep',
        subtitle: 'System alignment, lights, fuel, and air conditioning',
        items: [
          {
            id: 'a320-adirs',
            item: 'ADIRS 1, 2, 3',
            action: 'OFF ➔ NAV',
            location: 'OVHD - ADIRS',
            note: 'Switch rotary selectors one by one from OFF to NAV. IRS alignment takes ~7 minutes (or instantaneous based on sim settings).'
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
            note: 'Push in Left 1+2, Center 1+2, and Right 1+2 pumps. All white OFF annunciators extinguish (Airbus Dark Cockpit).'
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
            note: 'Input ICAO pair (e.g., KLAX/KSFO), callsign, Cost Index (e.g. 25-45), and planned Cruise Flight Level (e.g. FL360).'
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
            note: 'Select departure runway & SID. Enter enroute airways/waypoints and destination STAR/approach. Clear any DISCONTINUITY.'
          },
          {
            id: 'a320-mcdu-init-b',
            item: 'MCDU: INIT B (or FUEL PRED)',
            action: 'ZFW / ZFWCG & BLOCK FUEL',
            location: 'FMS / MCDU',
            note: 'Tap right key next to ZFW/ZFWCG twice to auto-fill or enter payload from EFB. Enter Block fuel in tons.'
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
            note: 'APU generator takes over electrical load seamlessly. Ground power cart can now be safely removed.'
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
        items: [
          {
            id: 'a320-parking-brake',
            item: 'PARKING BRAKE',
            action: 'RELEASE / AS RQRD',
            location: 'PEDESTAL',
            note: 'Release when pushback tug is connected and cleared to move.'
          },
          {
            id: 'a320-packs-off',
            item: 'PACK 1 & PACK 2 (Optional)',
            action: 'AUTO / VERIFY',
            location: 'OVHD - AIR / PACKS',
            note: 'A320 FADEC automatically closes pack valves during start, but can be manually monitored.'
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
            note: 'Start Engine 2 first (powers yellow hydraulic system for parking brake accumulator). Monitor N2 > 16%, Fuel Flow, EGT, N1.'
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
        title: '6. After Start & Taxi Clearance',
        shortTitle: 'After Start / Taxi',
        subtitle: 'Reconfiguring packs, trims, flaps, and flight control check',
        items: [
          {
            id: 'a320-mode-norm',
            item: 'ENG MODE Selector',
            action: 'NORM',
            location: 'PEDESTAL',
            note: 'Turn rotary switch back from IGN/START to NORM.'
          },
          {
            id: 'a320-apu-bleed-off',
            item: 'APU BLEED Switch',
            action: 'OFF',
            location: 'OVHD - AIR / PACKS',
            note: 'Engines now provide main air conditioning bleed.'
          },
          {
            id: 'a320-apu-master-off',
            item: 'APU MASTER SW',
            action: 'OFF (Cooldown cycle)',
            location: 'OVHD - APU',
            note: 'APU initiates automated 60-second cooldown run.'
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
            action: 'CHECK FULL TRAVEL',
            location: 'MAIN PANEL',
            note: 'Check Sidestick full up/down, full left/right, and rudder pedals on lower F/CTL ECAM page.'
          },
          {
            id: 'a320-nose-light',
            item: 'NOSE / TAXI Light',
            action: 'TAXI',
            location: 'OVHD - LIGHTS',
            note: 'Illuminate front taxi lights. Ready to roll.'
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
    summary: 'The modern generation Boeing 737 featuring advanced Rockwell Collins large display avionics and CFM LEAP-1B engines.',
    phases: [
      {
        id: 'b737-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Energizing battery bus and ground power',
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
            note: 'Turn on Left FWD/AFT and Right FWD/AFT pumps. Leave Center pumps OFF unless center tank has > 1000 lbs fuel.'
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
            note: 'Dial planned cruise altitude (e.g. 35,000) and destination field elevation into digital displays.'
          }
        ]
      },
      {
        id: 'b737-p3',
        title: '3. Boeing FMC Initialization',
        shortTitle: 'FMC Setup',
        subtitle: 'CDU flight plan entry, weights, and takeoff reference',
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
            note: 'Double tap ZFW key to auto-fill dry weight. Input fuel reserves, Cost Index (e.g. 30), and planned cruise altitude. Press EXEC.'
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
        title: '6. After Start & Taxi Clearance',
        shortTitle: 'After Start / Taxi',
        subtitle: 'Generator bus transfers, packs, flaps, and trim',
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
            id: 'b737-start-sw-cont',
            item: 'ENGINE START Switches',
            action: 'BOTH TO CONT',
            location: 'OVHD - ENGINES',
            note: 'Ensures continuous ignition for takeoff.'
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
            note: 'Illuminate nose gear taxi beam. Ready for taxi.'
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
    summary: 'The long-haul widebody workhorse featuring high fuel efficiency, fly-by-wire flight envelope protection, and spacious dual-aisle cockpit.',
    phases: [
      {
        id: 'a330-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Battery activation and dual ground power feeds',
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
        items: [
          {
            id: 'a330-mcdu-init-a',
            item: 'MCDU: INIT A Page',
            action: 'FROM/TO, FLT NBR, COST INDEX',
            location: 'FMS / MCDU',
            note: 'Enter departure, destination, callsign, and company Cost Index (e.g. 40).'
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
        title: '6. After Start & Taxi Clearance',
        shortTitle: 'After Start / Taxi',
        subtitle: 'Reconfiguring packs, trims, flaps, and flight control check',
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
            action: 'TAXI ON',
            location: 'OVHD - LIGHTS',
            note: 'Turn on nose lights. Ready for taxi.'
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
    summary: 'The Queen of the Skies featuring 4 General Electric GEnx engines, iconic upper deck, and synchronized four-engine start procedures.',
    phases: [
      {
        id: 'b747-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Dual battery and dual external power feeds',
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
        title: '6. After Start & Taxi Clearance',
        shortTitle: 'After Start / Taxi',
        subtitle: 'All 4 engine generators on, packs restored, flaps & trim set',
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
            id: 'b747-taxi-lights',
            item: 'TAXI LIGHTS',
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Engage nose gear taxi lights. Ready to taxi Queen of the Skies.'
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
      {
        id: 'a310-p1',
        title: '1. Electrical Power-Up',
        shortTitle: 'Electrical',
        subtitle: 'Battery master, emergency inverter, and ground power',
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
        title: '6. After Start & Taxi Clearance',
        shortTitle: 'After Start / Taxi',
        subtitle: 'Packs re-engaged, slats/flaps set, and pitch trim configured',
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
            action: 'ON',
            location: 'OVHD - LIGHTS',
            note: 'Illuminate nose taxi light. Ready to roll.'
          }
        ]
      }
    ]
  }
];
