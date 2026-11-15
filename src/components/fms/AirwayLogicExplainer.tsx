import { AIRWAY_RULES } from '../../data/fmsData';
import { AlertTriangle, ArrowRight, Route, HelpCircle } from 'lucide-react';

export function AirwayLogicExplainer() {
  return (
    <div className="space-y-6">
      {/* Intro Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Route className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Avionics Masterclass
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Demystifying the "VIA" / "TO" Airway Logic
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          One of the single most common sources of confusion for flight simmers is entering routes with airways.
          Unlike a GPS in a car, an airliner FMS differentiates strictly between{' '}
          <strong className="text-cyan-300">Airways</strong> (published high/low altitude corridors) and{' '}
          <strong className="text-emerald-300">Fixes/Waypoints</strong> (distinct geographical coordinates).
        </p>

        {/* Visual Diagram: Highway analogy */}
        <div className="mt-5 bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
            The Highway Analogy: Entry Ramp ➔ Highway ➔ Exit Ramp
          </span>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
            {/* Entry Fix */}
            <div className="w-full md:w-1/3 bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
              <span className="text-slate-500 block text-[10px] uppercase">Entry Fix (On-Ramp)</span>
              <span className="text-white font-bold text-sm">AVE (Avenal VOR)</span>
              <span className="text-slate-400 text-[10px] block mt-1">Must exist on the airway</span>
            </div>

            <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0 rotate-90 md:rotate-0" />

            {/* Airway Corridor */}
            <div className="w-full md:w-1/3 bg-cyan-950/40 border border-cyan-700/60 rounded-xl p-3 text-center shadow-inner">
              <span className="text-cyan-400 block text-[10px] uppercase font-bold">VIA (The Airway)</span>
              <span className="text-cyan-300 font-extrabold text-base">V107 / J65</span>
              <span className="text-cyan-400/80 text-[10px] block mt-1">Auto-populates intermediate fixes</span>
            </div>

            <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0 rotate-90 md:rotate-0" />

            {/* Exit Fix */}
            <div className="w-full md:w-1/3 bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
              <span className="text-slate-500 block text-[10px] uppercase">TO (Off-Ramp)</span>
              <span className="text-emerald-400 font-bold text-sm">BSR (Big Sur VOR)</span>
              <span className="text-slate-400 text-[10px] block mt-1">Where you leave the airway</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {AIRWAY_RULES.map((rule, idx) => (
          <div
            key={idx}
            className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  {rule.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">#{idx + 1}</span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{rule.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {rule.description}
              </p>

              {/* Airbus vs Boeing Execution */}
              <div className="space-y-2 mb-4 text-xs font-mono">
                <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-lg">
                  <span className="text-cyan-400 font-bold block mb-0.5">Airbus MCDU:</span>
                  <span className="text-slate-300">{rule.airbusAction}</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-lg">
                  <span className="text-amber-400 font-bold block mb-0.5">Boeing FMC:</span>
                  <span className="text-slate-300">{rule.boeingAction}</span>
                </div>
              </div>
            </div>

            {/* Common Trap */}
            <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-3 flex items-start gap-2 text-xs text-rose-300">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-200">Common Trap:</span>
                <span>{rule.gotcha}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How to Read a Flight Plan Route String */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">
            How to Read SimBrief / Real-World Route Strings
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          When copying a flight plan from SimBrief or VATSIM, the route string alternates between airways and waypoints:
        </p>

        <div className="bg-black/60 border border-slate-800 rounded-xl p-3.5 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto">
          <code>KLAX/25R <span className="text-cyan-400">CASTA2.AVE</span> <span className="text-amber-400 font-bold">V107</span> <span className="text-emerald-400 font-bold">BSR</span> <span className="text-cyan-400">BSR3</span> KSFO/28R</code>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <span className="text-cyan-400 font-bold block mb-1">CASTA2.AVE</span>
            <span className="text-slate-400">SID departure name with transition fix "AVE".</span>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold block mb-1">V107 (VIA)</span>
            <span className="text-slate-400">Airway to join at AVE. Enters into the VIA column.</span>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">BSR (TO)</span>
            <span className="text-slate-400">Exit fix of airway V107. Enters into the TO column.</span>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <span className="text-cyan-400 font-bold block mb-1">BSR3</span>
            <span className="text-slate-400">Arrival (STAR) starting at BSR into San Francisco.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
