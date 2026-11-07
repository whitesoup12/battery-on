import { Zap, ChevronLeft, RotateCcw, Plane } from 'lucide-react';
import { Aircraft } from '../types/aircraft';

interface HeaderProps {
  activeAircraft: Aircraft | null;
  onBackToHangar: () => void;
  onResetAircraft?: () => void;
  progressPercent?: number;
}

export function Header({
  activeAircraft,
  onBackToHangar,
  onResetAircraft,
  progressPercent = 0,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: App Branding or Back Button */}
        <div className="flex items-center gap-3">
          {activeAircraft ? (
            <button
              onClick={onBackToHangar}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 transition-colors text-sm font-medium border border-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Hangar</span>
            </button>
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Zap className="w-4 h-4 fill-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold tracking-wider text-base font-mono text-white">
                    BATTERY ON
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                </div>
                <p className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                  MSFS 2024 Cockpit Procedures
                </p>
              </div>
            </div>
          )}

          {activeAircraft && (
            <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-slate-800">
              <div
                className={`w-2 h-2 rounded-full ${
                  activeAircraft.manufacturer === 'Airbus'
                    ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                    : 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                }`}
              />
              <span className="font-semibold text-sm text-slate-200">{activeAircraft.name}</span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                {activeAircraft.shortCode}
              </span>
            </div>
          )}
        </div>

        {/* Right: Reset & Controls */}
        <div className="flex items-center gap-3">
          {activeAircraft && (
            <>
              {/* Progress pill */}
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">Progress</span>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  {progressPercent}%
                </span>
                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden xs:block">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Reset aircraft progress button */}
              {onResetAircraft && (
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `Reset all checklist items for the ${activeAircraft.name}?`
                      )
                    ) {
                      onResetAircraft();
                    }
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-950/40 hover:text-rose-300 hover:border-rose-800/50 text-slate-400 text-xs font-mono transition-colors border border-slate-700/60"
                  title="Reset all items for this aircraft"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </>
          )}

          {!activeAircraft && (
            <div className="flex items-center gap-1 text-xs text-slate-400 font-mono bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Plane className="w-3.5 h-3.5 text-slate-400" />
              <span>5 Standard Aircraft</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
