import { Layers } from 'lucide-react';

export function FmsComparisonTable() {
  const rosettaStone = [
    {
      concept: 'Preflight Origin & Dest',
      airbus: 'INIT A (LSK 1R: FROM/TO)',
      boeing: 'RTE Page 1 (LSK 1L & 1R)',
      notes: 'Airbus uses slash "ORIG/DEST". Boeing separates Origin and Destination.',
    },
    {
      concept: 'Inertial Position Alignment',
      airbus: 'INIT A (LSK 6L: ALIGN IRS)',
      boeing: 'POS INIT (LSK 5R: SET IRS POS)',
      notes: 'Boeing requires copying GPS or Ref Airport lat/long into scratchpad first.',
    },
    {
      concept: 'Departure (Runway & SID)',
      airbus: 'F-PLAN (Tap Origin LSK ➔ DEPARTURE)',
      boeing: 'DEP ARR (Tap DEP LSK 1L)',
      notes: 'Airbus accesses departure via Lateral Revision on the first waypoint.',
    },
    {
      concept: 'Enroute Airways Entry',
      airbus: 'F-PLAN (Tap fix LSK ➔ AIRWAYS)',
      boeing: 'RTE Page 2 (VIA column on left)',
      notes: 'Airbus requires opening the AIRWAYS subpage; Boeing uses Page 2 of RTE.',
    },
    {
      concept: 'Commit / Activate Flight Plan',
      airbus: 'INSERT* (LSK 6R amber prompt)',
      boeing: 'ACTIVATE (LSK 6R) + Press physical EXEC key',
      notes: 'Boeing modifications remain pending until the lighted EXEC key is pressed.',
    },
    {
      concept: 'Clear Discontinuity',
      airbus: 'CLR key ➔ tap discontinuity LSK',
      boeing: 'Copy downstream waypoint ➔ paste over boxes',
      notes: 'Boeing moves downstream waypoint up to bridge gap; Airbus deletes gap line.',
    },
    {
      concept: 'Weights & Fuel Planning',
      airbus: 'INIT B (Page 2 of INIT) / FUEL PRED',
      boeing: 'PERF INIT (via INIT REF key)',
      notes: 'Airbus INIT B locks once engines start and converts to FUEL PRED page.',
    },
    {
      concept: 'Reduced Takeoff Thrust',
      airbus: 'FLEX TO TEMP (PERF page)',
      boeing: 'SEL TEMP (Assumed Temp on N1 LIMIT)',
      notes: 'Both reduce engine wear by tricking FADEC into simulating a hotter ambient day.',
    },
    {
      concept: 'Pitch Trim Units Entry',
      airbus: 'FLAPS/THS (e.g. 1/UP0.5 on PERF)',
      boeing: 'CG prompt (auto-computes trim units)',
      notes: 'Boeing computes stabilizer units (e.g. 5.15) on pedestal; Airbus uses degrees THS.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Avionics Philosophy & Workflows
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Airbus vs Boeing: Workflows & Rosetta Stone
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          While both flight computers achieve the exact same aerodynamic result, their operational philosophies
          differ. Memorizing these standard setup flows makes switching between Boeing and Airbus effortless.
        </p>
      </div>

      {/* The Two Flow Mantras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Airbus DIFSRIP */}
        <div className="bg-gradient-to-b from-[#111c2e] to-[#0d1422] border border-cyan-800/60 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-900/40">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Airbus Preflight Flow
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-extrabold tracking-widest">
              D - I - F - S - R - I - P
            </span>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                D
              </span>
              <span className="text-white font-bold">DATA:</span>
              <span className="text-slate-400">Verify active AIRAC navigation database.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                I
              </span>
              <span className="text-white font-bold">INIT A:</span>
              <span className="text-slate-400">FROM/TO, ALTN, FLT NBR, CI, CRZ FL & ALIGN IRS.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                F
              </span>
              <span className="text-white font-bold">F-PLAN:</span>
              <span className="text-slate-400">Dep runway & SID, enroute airways, STAR, clear disconnects.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                S
              </span>
              <span className="text-white font-bold">SEC F-PLAN:</span>
              <span className="text-slate-400">Copy active route into secondary for return / alternates.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                R
              </span>
              <span className="text-white font-bold">RAD NAV:</span>
              <span className="text-slate-400">Verify autotuned VORs and destination ILS frequency.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                I
              </span>
              <span className="text-white font-bold">INIT B:</span>
              <span className="text-slate-400">ZFW / ZFWCG and Block Fuel (prior to engine start).</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                P
              </span>
              <span className="text-white font-bold">PERF:</span>
              <span className="text-slate-400">Takeoff V1, VR, V2, FLAPS/THS trim, and Flex Temp.</span>
            </div>
          </div>
        </div>

        {/* Boeing CDU Workflow */}
        <div className="bg-gradient-to-b from-[#1c1811] to-[#14120d] border border-amber-800/60 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-900/40">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Boeing Preflight Flow
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-extrabold tracking-widest">
              FMC SETUP SEQUENCE
            </span>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <span className="text-white font-bold">IDENT:</span>
              <span className="text-slate-400">Verify aircraft model, engine rating, and AIRAC cycle dates.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <span className="text-white font-bold">POS INIT:</span>
              <span className="text-slate-400">Enter Ref Airport, copy GPS coordinates into SET IRS POS.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <span className="text-white font-bold">RTE P1:</span>
              <span className="text-slate-400">Origin, Destination, Flight Number, and Departure Runway.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                4
              </span>
              <span className="text-white font-bold">DEP/ARR:</span>
              <span className="text-slate-400">Select Departure Runway, SID, and SID Transition.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                5
              </span>
              <span className="text-white font-bold">RTE P2:</span>
              <span className="text-slate-400">Enter enroute airways (VIA) and fixes (TO).</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                6
              </span>
              <span className="text-white font-bold">LEGS:</span>
              <span className="text-slate-400">Resolve discontinuities, ACTIVATE, and press EXEC.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                7
              </span>
              <span className="text-white font-bold">PERF/TAKEOFF:</span>
              <span className="text-slate-400">ZFW, Reserves, CI, Crz Alt, Derate, Flaps, CG & V-speeds.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rosetta Stone Comparison Table */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
        <h3 className="text-base font-bold text-white mb-4">
          Avionics Rosetta Stone: Terms & Keybindings
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                <th className="py-2.5 px-3">Function / Goal</th>
                <th className="py-2.5 px-3 text-cyan-400">Airbus MCDU</th>
                <th className="py-2.5 px-3 text-amber-400">Boeing FMC</th>
                <th className="py-2.5 px-3">Flight Deck Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {rosettaStone.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-white">
                    {row.concept}
                  </td>
                  <td className="py-2.5 px-3 text-cyan-300 font-bold">
                    {row.airbus}
                  </td>
                  <td className="py-2.5 px-3 text-amber-300 font-bold">
                    {row.boeing}
                  </td>
                  <td className="py-2.5 px-3 text-slate-400 text-[11px]">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
