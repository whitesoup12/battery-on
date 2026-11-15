import { DISCONTINUITY_REASONS } from '../../data/fmsData';
import {
  AlertCircle,
  Check,
  ShieldAlert,
} from 'lucide-react';

export function DiscontinuityGuide() {
  return (
    <div className="space-y-6">
      {/* Intro Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            Avionics Masterclass
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Mastering Flight Plan Discontinuities
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          A discontinuity (<code className="text-amber-400 font-mono">--- F-PLAN DISCONTINUITY ---</code> or{' '}
          <code className="text-amber-400 font-mono">□□□□□ --- ROUTE DISCONTINUITY ---</code>) is a deliberate
          break inserted into your route by the flight computer whenever it cannot logically connect two sequential
          flight legs.
        </p>
      </div>

      {/* Step-by-Step Resolution: Airbus vs Boeing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Airbus Resolution Card */}
        <div className="bg-gradient-to-b from-[#111c2e] to-[#0d1422] border border-cyan-800/60 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-900/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Airbus A320neo / A330
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                CLR KEY METHOD
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3">
              How to Clear on Airbus MCDU
            </h3>

            <div className="space-y-3 text-xs sm:text-sm font-mono">
              <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-white font-bold block">Press CLR Key</span>
                  <span className="text-slate-400 text-xs">
                    Press the physical <code className="text-cyan-300">CLR</code> button in the lower-right of the MCDU keypad. "CLR" appears in the scratchpad.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-white font-bold block">Tap Discontinuity LSK</span>
                  <span className="text-slate-400 text-xs">
                    Press the Line Select Key directly next to the amber <code className="text-amber-300">--- F-PLAN DISCONTINUITY ---</code> line.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-white font-bold block">Gap Closed Seamlessly</span>
                  <span className="text-slate-400 text-xs">
                    The discontinuity vanishes and the downstream waypoint connects directly to the upstream leg.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400/90 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-cyan-400" />
            <span>Airbus does not require an EXEC button press.</span>
          </div>
        </div>

        {/* Boeing Resolution Card */}
        <div className="bg-gradient-to-b from-[#1c1811] to-[#14120d] border border-amber-800/60 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-900/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Boeing 737 MAX 8 / 747-8
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                DOWNSTREAM COPY METHOD
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3">
              How to Clear on Boeing FMC
            </h3>

            <div className="space-y-3 text-xs sm:text-sm font-mono">
              <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-white font-bold block">Copy Next Fix to Scratchpad</span>
                  <span className="text-slate-400 text-xs">
                    Press the LSK directly <strong className="text-amber-300">below</strong> the discontinuity to copy the downstream waypoint into the scratchpad.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-white font-bold block">Paste Over Empty Boxes</span>
                  <span className="text-slate-400 text-xs">
                    Press the LSK of the empty boxes <code className="text-amber-300">□□□□□</code> to overwrite the discontinuity.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-white font-bold block">Press Lighted EXEC Key</span>
                  <span className="text-slate-400 text-xs">
                    The white <code className="text-amber-300 font-bold">EXEC</code> light on the CDU illuminates. Press EXEC to commit the change!
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-amber-400" />
            <span>Alternative: Press DEL key, then press the discontinuity LSK, then press EXEC.</span>
          </div>
        </div>
      </div>

      {/* When NOT to clear a discontinuity! */}
      <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-rose-950/40 border border-rose-800/60 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="w-6 h-6 text-rose-400" />
          <div>
            <h3 className="text-lg font-bold text-white">
              CRITICAL: When You Should NEVER Clear a Discontinuity
            </h3>
            <span className="text-xs font-mono text-rose-300">
              Manual Legs & Radar Vectors (VECT / MANUAL)
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Many Standard Terminal Arrival Routes (STARs) end in <strong className="text-rose-300">Radar Vectors</strong>.
          On your chart, you will see instructions like: <em>"Expect radar vectors to final approach course."</em>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-slate-900/90 border border-rose-900/40 p-4 rounded-xl">
            <span className="text-rose-400 font-bold block mb-1">
              ⚠️ What happens if you delete it:
            </span>
            <p className="text-slate-300 leading-relaxed">
              If you delete the discontinuity between the vector leg and the final approach fix, the autopilot will immediately try to turn the aircraft directly toward the runway threshold at high speed, cutting across the traffic pattern and flying an illegal, dangerous approach!
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-900/40 p-4 rounded-xl">
            <span className="text-emerald-400 font-bold block mb-1">
              ✓ What you should do instead:
            </span>
            <p className="text-slate-300 leading-relaxed">
              Leave the discontinuity alone. When the aircraft reaches the end of the STAR, the autopilot will automatically maintain runway heading or present track. Use <strong className="text-white">HDG SEL</strong> on the autopilot to fly ATC heading vectors, and arm <strong className="text-emerald-300">APP mode</strong> once turned toward the ILS localizer.
            </p>
          </div>
        </div>
      </div>

      {/* Common Discontinuity Causes Table */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <span>Common Discontinuity Causes & Verdicts</span>
        </h3>

        <div className="space-y-3">
          {DISCONTINUITY_REASONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono"
            >
              <div className="max-w-xl">
                <span className="text-white font-bold text-sm block mb-1">
                  {item.cause}
                </span>
                <span className="text-slate-400 leading-relaxed">
                  {item.whyItHappens}
                </span>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                    item.shouldYouClear.startsWith('YES')
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/70'
                      : item.shouldYouClear.startsWith('NO')
                      ? 'bg-rose-950/80 text-rose-300 border-rose-800/70'
                      : 'bg-amber-950/80 text-amber-300 border-amber-800/70'
                  }`}
                >
                  {item.shouldYouClear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
