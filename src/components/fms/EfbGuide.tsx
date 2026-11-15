import { useState } from 'react';
import {
  EFB_TAKEOFF_PERF_STEPS,
  EFB_FEATURE_LIST,
} from '../../data/efbData';
import {
  Tablet,
  Gauge,
  Scale,
  Truck,
  CloudDownload,
  Sliders,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Send,
  CheckCircle2,
  Info,
  Wind,
} from 'lucide-react';

export function EfbGuide() {
  const [activeCategory, setActiveCategory] = useState<'PERF' | 'ALL_FEATURES'>('PERF');
  const [currentPerfStep, setCurrentPerfStep] = useState(0);
  const [isDataSentToFms, setIsDataSentToFms] = useState(false);

  const steps = EFB_TAKEOFF_PERF_STEPS;
  const currentStep = steps[currentPerfStep];

  const handleNextStep = () => {
    if (currentPerfStep < steps.length - 1) {
      setCurrentPerfStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentPerfStep > 0) {
      setCurrentPerfStep((prev) => prev - 1);
    }
  };

  const handleSendToFms = () => {
    setIsDataSentToFms(true);
    setTimeout(() => {
      setIsDataSentToFms(false);
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Tablet className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Electronic Flight Bag (EFB) Masterclass
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Cockpit Tablet Functions & Takeoff V-Speed Calculation
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          In Microsoft Flight Simulator 2024, the Electronic Flight Bag (EFB) is not just a digital map—it is the
          nerve center of the cockpit. It calculates certified Takeoff Speeds ($V_1, V_R, V_2$), manages aircraft
          mass & balance, summons ground services, and sends performance data directly into your FMS with a single click.
        </p>

        {/* View Mode Toggle */}
        <div className="mt-5 flex items-center gap-2 border-t border-slate-800/80 pt-4">
          <button
            onClick={() => setActiveCategory('PERF')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all border ${
              activeCategory === 'PERF'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span>V-Speed & Performance Calculator</span>
          </button>

          <button
            onClick={() => setActiveCategory('ALL_FEATURES')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all border ${
              activeCategory === 'ALL_FEATURES'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span>Full EFB Functions (Fuel, GSE, SimBrief)</span>
          </button>
        </div>
      </div>

      {activeCategory === 'PERF' ? (
        /* V-Speed Performance Walkthrough & Tablet Simulator */
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-4 shadow-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Performance Flow:
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400">
                Step {currentPerfStep + 1} of {steps.length}
              </span>
            </div>

            <button
              onClick={() => setCurrentPerfStep(0)}
              className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            {steps.map((s, idx) => {
              const isSelected = idx === currentPerfStep;
              const isPast = idx < currentPerfStep;
              return (
                <button
                  key={s.stepNumber}
                  onClick={() => setCurrentPerfStep(idx)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                    isSelected
                      ? 'bg-cyan-950 text-cyan-200 border-cyan-500 font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : isPast
                      ? 'bg-slate-900 text-emerald-400 border-slate-800'
                      : 'bg-slate-900/60 text-slate-500 border-slate-800 hover:text-slate-300'
                  }`}
                >
                  <span>{isPast ? '✓' : s.stepNumber}.</span>
                  <span className="truncate max-w-[120px] sm:max-w-[180px]">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Two-Column: Step Guide Left, Live EFB Tablet Mockup Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Step Explanations (7 cols) */}
            <div className="lg:col-span-7 bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center justify-center">
                    {currentStep.stepNumber}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    {currentStep.targetField}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{currentStep.title}</h3>
              </div>

              {/* What to do */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                  Action on EFB Tablet
                </span>
                <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                  {currentStep.description}
                </p>
                <div className="mt-2 bg-black/60 border border-slate-800 px-3 py-1.5 rounded text-xs font-mono text-cyan-300 flex items-center justify-between">
                  <span className="text-slate-500">DISPLAYED VALUE:</span>
                  <span className="font-bold">{currentStep.uiValue}</span>
                </div>
              </div>

              {/* Why it matters */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Aerodynamic Importance:
                </span>
                <p>{currentStep.whyItMatters}</p>
              </div>

              {/* Pilot Tip */}
              {currentStep.pilotTip && (
                <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3 flex items-start gap-2.5 text-xs text-cyan-200">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-cyan-300 block mb-0.5">Captain's Tip:</span>
                    <span>{currentStep.pilotTip}</span>
                  </div>
                </div>
              )}

              {/* Stepper Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={handlePrevStep}
                  disabled={currentPerfStep === 0}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors border ${
                    currentPerfStep === 0
                      ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentPerfStep < steps.length - 1 ? (
                  <button
                    onClick={handleNextStep}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-lg shadow-cyan-950/50"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Calculation & Sync Complete!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Interactive EFB Tablet Display Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full mb-2 flex items-center justify-between px-2 text-xs font-mono text-slate-400">
                <span>COCKPIT TABLET (EFB)</span>
                <span className="text-cyan-400">Live Interactive UI</span>
              </div>

              {/* Tablet Frame */}
              <div className="w-full max-w-sm bg-slate-950 border-4 border-slate-700 rounded-3xl p-3 sm:p-4 shadow-2xl relative overflow-hidden select-none">
                {/* Tablet Screen Header */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Tablet className="w-3.5 h-3.5" />
                    <span>FLYING SMART • EFB</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[10px]">
                    <span>BAT 98%</span>
                    <span>13:45Z</span>
                  </div>
                </div>

                {/* Performance Calculator App Interface */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Airport & Runway tile */}
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span>DEPARTURE RUNWAY</span>
                      <span className="text-emerald-400 font-bold">AVAIL: 12,091 FT</span>
                    </div>
                    <div className="flex items-center justify-between font-bold text-white text-sm">
                      <span>KLAX (LOS ANGELES)</span>
                      <span className="text-cyan-400 bg-slate-800 px-2 py-0.5 rounded">RW 25R</span>
                    </div>
                  </div>

                  {/* Weather Snapshot */}
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span className="flex items-center gap-1">
                        <Wind className="w-3 h-3 text-cyan-400" />
                        <span>METAR COND</span>
                      </span>
                      <span className="text-slate-400">QNH: 29.92</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-bold text-slate-200">
                      <div className="bg-slate-800/80 p-1 rounded">250°/12KT</div>
                      <div className="bg-slate-800/80 p-1 rounded">OAT 18°C</div>
                      <div className="bg-slate-800/80 p-1 rounded text-emerald-400">DRY</div>
                    </div>
                  </div>

                  {/* Weight & Flaps Config */}
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-500 text-[10px] block">TAKEOFF GW</span>
                      <span className="text-white font-bold">68.8 T / 152 KLB</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">FLAPS / PACKS</span>
                      <span className="text-cyan-300 font-bold">FLAPS 1+F (5) / ON</span>
                    </div>
                  </div>

                  {/* Output Speeds & Derate Box */}
                  <div className="bg-gradient-to-b from-[#091526] to-[#0b101c] border-2 border-cyan-600/70 p-3 rounded-2xl shadow-inner">
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-2 text-center">
                      ★ CALCULATED TAKEOFF DATA ★
                    </span>

                    <div className="grid grid-cols-3 gap-2 text-center mb-2">
                      <div className="bg-slate-900/90 border border-cyan-800/60 p-2 rounded-xl">
                        <span className="text-slate-400 text-[10px] block font-bold">V1</span>
                        <span className="text-emerald-400 text-lg font-black">142</span>
                      </div>
                      <div className="bg-slate-900/90 border border-cyan-800/60 p-2 rounded-xl">
                        <span className="text-slate-400 text-[10px] block font-bold">VR</span>
                        <span className="text-emerald-400 text-lg font-black">144</span>
                      </div>
                      <div className="bg-slate-900/90 border border-cyan-800/60 p-2 rounded-xl">
                        <span className="text-slate-400 text-[10px] block font-bold">V2</span>
                        <span className="text-emerald-400 text-lg font-black">148</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] px-1 text-slate-300">
                      <div>
                        <span className="text-slate-500 text-[9px] block">FLEX / ASSUMED</span>
                        <span className="text-amber-400 font-bold">58°C / 48°C</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 text-[9px] block">PITCH TRIM</span>
                        <span className="text-cyan-300 font-bold">1/UP0.5 (5.15)</span>
                      </div>
                    </div>
                  </div>

                  {/* Send to FMS Button */}
                  <button
                    onClick={handleSendToFms}
                    className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                      isDataSentToFms
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-950/60'
                    }`}
                  >
                    {isDataSentToFms ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                        <span>DATA SENT TO FMS!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND TO FMS / MCDU</span>
                      </>
                    )}
                  </button>

                  {isDataSentToFms && (
                    <p className="text-[10px] text-emerald-400 text-center animate-fade-in">
                      ✓ Takeoff speeds and trim successfully uplinked to cockpit CDU!
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-3 text-[11px] font-mono text-slate-500 text-center max-w-xs">
                💡 Clicking "SEND TO FMS" synchronizes V1, VR, V2, Flex Temp, and Trim without manual typing.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Full EFB Feature Catalogue */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EFB_FEATURE_LIST.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    {feature.category === 'PERF' && <Gauge className="w-5 h-5 text-emerald-400" />}
                    {feature.category === 'SIMBRIEF' && <CloudDownload className="w-5 h-5 text-cyan-400" />}
                    {feature.category === 'DISPATCH' && <Scale className="w-5 h-5 text-amber-400" />}
                    {feature.category === 'SERVICES' && <Truck className="w-5 h-5 text-rose-400" />}
                    {feature.category === 'SETTINGS' && <Sliders className="w-5 h-5 text-sky-400" />}
                    <h3 className="font-bold text-white text-base">{feature.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {feature.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {feature.summary}
                </p>

                <div className="space-y-1.5 text-xs font-mono mb-3">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">
                    Core Capabilities:
                  </span>
                  {feature.keyFunctions.map((fn, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-slate-300">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-xs font-mono text-slate-200">
                  <span className="text-cyan-400 font-bold block mb-0.5">How to use in MSFS:</span>
                  <span className="text-slate-300">{feature.howToUse}</span>
                </div>
              </div>

              <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-2.5 text-xs text-cyan-200 flex items-start gap-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-cyan-300 block mb-0.5">Captain's Tip:</span>
                  <span>{feature.pilotTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
