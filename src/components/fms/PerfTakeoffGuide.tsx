import { Gauge, Scale, Flame, PlaneTakeoff, Info, CheckCircle2 } from 'lucide-react';

export function PerfTakeoffGuide() {
  return (
    <div className="space-y-6">
      {/* Intro Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Performance & Speeds Masterclass
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Weights, Cost Index, Thrust Derate & V-Speeds
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Even with a flawless flight route, the aircraft cannot calculate climb gradients, descent paths, or safe
          takeoff speeds without accurate performance initialization. Here is how real pilots configure weights,
          thrust, and takeoff bugs.
        </p>
      </div>

      {/* Grid: 4 Core Pillars of Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1: Weights & Balance */}
        <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-3">
              <Scale className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">1. Weights: ZFW & ZFWCG</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              <strong>Zero Fuel Weight (ZFW):</strong> The empty airframe plus passengers and cargo, with{' '}
              <em>zero</em> usable fuel in the tanks.
            </p>

            <div className="space-y-2 text-xs font-mono mb-4">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-bold block">Gross Weight (GW) Equation:</span>
                <span className="text-slate-200">Takeoff GW = ZFW + Usable Fuel - Taxi Burn</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold block">ZFWCG (% MAC):</span>
                <span className="text-slate-200">
                  Center of Gravity percentage (e.g. 29.8%). Directly dictates the mechanical stabilizer pitch trim setting.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3 text-xs text-cyan-300 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
            <span>
              In MSFS, double-clicking the ZFW line key auto-fills current aircraft loadout in both iniBuilds Airbus and Boeing FMCs.
            </span>
          </div>
        </div>

        {/* Pillar 2: Cost Index (CI) */}
        <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 mb-3">
              <Gauge className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">2. Cost Index (CI) Explained</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Cost Index is the economic ratio between <strong>flight time cost</strong> and <strong>fuel cost</strong>{' '}
              (CI = Time Cost / Fuel Cost). It instructs the autopilot how fast or slow to fly.
            </p>

            <div className="space-y-2 text-xs font-mono mb-4">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-emerald-400 font-bold block">CI 0 - 15</span>
                  <span className="text-slate-400 text-[11px]">Maximum Range Cruise (Economy)</span>
                </div>
                <span className="text-slate-300 text-right">Slowest speed (~M0.74), minimum fuel burn.</span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-bold block">CI 25 - 45 (Standard)</span>
                  <span className="text-slate-400 text-[11px]">Real Airline Airline Average</span>
                </div>
                <span className="text-slate-300 text-right">Standard schedule (~M0.78), optimal balance.</span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-rose-400 font-bold block">CI 80 - 100</span>
                  <span className="text-slate-400 text-[11px]">Maximum Speed / Catch-Up</span>
                </div>
                <span className="text-slate-300 text-right">Maximum speed (~M0.82), burns high fuel.</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-3 text-xs text-amber-300 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <span>If in doubt in the simulator, enter Cost Index 30. It works great for virtually every flight!</span>
          </div>
        </div>

        {/* Pillar 3: Reduced Thrust (Flex Temp / Assumed Temp) */}
        <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 mb-3">
              <Flame className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">
                3. Thrust Reduction: Flex Temp / Assumed Temp
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Modern airliners rarely use 100% full TOGA takeoff thrust unless the runway is short or contaminated.
              Full takeoff power drastically spikes Turbine Exhaust Gas Temperature (EGT) and wears out engine components.
            </p>

            <div className="space-y-2 text-xs font-mono mb-4">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-bold block">Airbus: FLEX TO TEMP</span>
                <span className="text-slate-300">
                  Entered in PERF page (e.g. <code className="text-white">58°C</code>). When moving thrust levers to the FLX/MCT detent, FADEC commands reduced thrust.
                </span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold block">Boeing: ASSUMED TEMP (SEL TEMP)</span>
                <span className="text-slate-300">
                  Entered in N1 LIMIT page (e.g. <code className="text-white">48°C</code>) along with fixed derates (D-TO 1 / CLB-1). Autothrottle limits N1 accordingly.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-rose-950/20 border border-rose-800/40 rounded-xl p-3 text-xs text-rose-300 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
            <span>
              If you ever experience an engine failure on takeoff, you can always slam thrust levers forward into the mechanical TOGA stop for emergency maximum power.
            </span>
          </div>
        </div>

        {/* Pillar 4: Takeoff V-Speeds (V1, VR, V2) */}
        <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-3">
              <PlaneTakeoff className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">4. Takeoff Speeds: V1, VR & V2</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              The 3 sacred numbers of every commercial airline departure:
            </p>

            <div className="space-y-2 text-xs font-mono mb-4">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-rose-400 font-bold block">V1 (Decision Speed - ~142 kt):</span>
                <span className="text-slate-300">
                  Before V1, you can safely reject takeoff (RTO) and stop on the runway. After V1, you <strong>MUST</strong> fly, even if an engine explodes!
                </span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-bold block">VR (Rotation Speed - ~144 kt):</span>
                <span className="text-slate-300">
                  Pull back smoothly on the sidestick / control column at ~3°/second until pitching to 15° nose-up.
                </span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400 font-bold block">V2 (Takeoff Safety Climb - ~148 kt):</span>
                <span className="text-slate-300">
                  Target speed to maintain through initial climb. Guarantees single-engine obstacle clearance.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-3 text-xs text-emerald-300 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <span>
              Once confirmed, V1, VR, and V2 appear as colored bugs on your Primary Flight Display (PFD) speed tape.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
