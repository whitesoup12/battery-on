import { CduScreenState, CduLineData } from '../../types/fms';

interface CduScreenDisplayProps {
  screen: CduScreenState;
  fmsFamily: 'Airbus' | 'Boeing' | 'Classic';
  highlightLsk?: string;
  onLskClick?: (lsk: string) => void;
  onExecClick?: () => void;
}

export function CduScreenDisplay({
  screen,
  fmsFamily,
  highlightLsk,
  onLskClick,
  onExecClick,
}: CduScreenDisplayProps) {
  const isAirbus = fmsFamily === 'Airbus';
  const isBoeing = fmsFamily === 'Boeing';

  const renderColorClass = (color?: string) => {
    switch (color) {
      case 'green':
        return 'text-emerald-400';
      case 'cyan':
        return 'text-cyan-400';
      case 'amber':
        return 'text-amber-400';
      case 'white':
        return 'text-white';
      case 'magenta':
        return 'text-fuchsia-400';
      case 'slate':
      default:
        return 'text-slate-500';
    }
  };

  const renderLine = (
    left?: CduLineData,
    right?: CduLineData,
    lskNum?: number
  ) => {
    const lskLeft = `${lskNum}L`;
    const lskRight = `${lskNum}R`;
    const isLeftHighlighted = highlightLsk === lskLeft;
    const isRightHighlighted = highlightLsk === lskRight;

    return (
      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-mono leading-tight py-0.5 min-h-[36px]">
        {/* Left cell */}
        <div className="flex flex-col justify-center overflow-hidden">
          {left?.label && (
            <span className="text-[10px] text-slate-400 uppercase tracking-wider truncate">
              {left.label}
            </span>
          )}
          {left?.value && (
            <div className="flex items-center gap-1">
              {isLeftHighlighted && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              )}
              <span
                className={`font-bold tracking-tight truncate ${renderColorClass(
                  left.color
                )}`}
              >
                {left.value}
              </span>
            </div>
          )}
        </div>

        {/* Right cell */}
        <div className="flex flex-col justify-center text-right overflow-hidden">
          {right?.label && (
            <span className="text-[10px] text-slate-400 uppercase tracking-wider truncate">
              {right.label}
            </span>
          )}
          {right?.value && (
            <div className="flex items-center justify-end gap-1">
              <span
                className={`font-bold tracking-tight truncate ${renderColorClass(
                  right.color
                )}`}
              >
                {right.value}
              </span>
              {isRightHighlighted && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#1a202c] border-4 border-slate-700/80 rounded-3xl p-3 sm:p-4 shadow-2xl shadow-black/80 select-none">
      {/* Top Bezel Branding & Annunciators */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/60 px-1">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400">
            {isAirbus ? 'MCDU 1' : isBoeing ? 'CDU L' : 'FMS 1'}
          </span>
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
            {isAirbus ? 'THALES' : isBoeing ? 'PEGASUS' : 'SMITHS'}
          </span>
        </div>

        {/* Annunciator lights */}
        <div className="flex items-center gap-2">
          {isBoeing && (
            <div
              onClick={onExecClick}
              role={screen.execActive ? 'button' : undefined}
              title={screen.execActive ? 'Click to EXECUTE' : undefined}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-extrabold transition-all border ${
                screen.execActive || highlightLsk === 'EXEC'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)] animate-pulse cursor-pointer'
                  : 'bg-slate-900 text-slate-600 border-slate-800'
              }`}
            >
              <span>EXEC</span>
              {(screen.execActive || highlightLsk === 'EXEC') && (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
              )}
            </div>
          )}

          {isAirbus && (
            <div className="flex items-center gap-1.5 text-[9px] font-mono">
              <span className="px-1.5 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 font-bold">
                FM 1
              </span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-600 border border-slate-800">
                IND
              </span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-600 border border-slate-800">
                RDY
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main Screen Container with Bezel Buttons */}
      <div className="flex items-stretch gap-1 sm:gap-2">
        {/* Left Line Select Keys (1L - 6L) */}
        <div className="flex flex-col justify-around py-3 sm:py-4 gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => {
            const lsk = `${num}L`;
            const isHighlighted = highlightLsk === lsk;
            return (
              <button
                key={lsk}
                onClick={() => onLskClick && onLskClick(lsk)}
                className={`w-7 sm:w-8 h-7 sm:h-8 rounded-lg flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold transition-all shadow-md active:scale-95 ${
                  isHighlighted
                    ? 'bg-cyan-500 text-slate-950 border-2 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-600/60'
                }`}
                title={`Line Select Key ${lsk}`}
              >
                —
              </button>
            );
          })}
        </div>

        {/* CRT Screen Glass Area */}
        <div className="flex-1 rounded-2xl bg-[#060a0f] border-2 border-slate-800 p-2.5 sm:p-3 relative shadow-inner overflow-hidden min-h-[310px] flex flex-col justify-between">
          {/* Subtle CRT Scanline overlay effect */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40" />

          {/* Screen Content */}
          <div className="relative z-10">
            {/* Header / Title Line */}
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-800 text-xs sm:text-sm font-mono font-bold">
              <span className="text-white tracking-wider">{screen.title}</span>
              {screen.pageIndicator && (
                <span className="text-slate-400">{screen.pageIndicator}</span>
              )}
            </div>

            {/* 6 Line Pairs */}
            <div className="space-y-0.5">
              {renderLine(screen.l1, screen.r1, 1)}
              {renderLine(screen.l2, screen.r2, 2)}
              {renderLine(screen.l3, screen.r3, 3)}
              {renderLine(screen.l4, screen.r4, 4)}
              {renderLine(screen.l5, screen.r5, 5)}
              {renderLine(screen.l6, screen.r6, 6)}
            </div>
          </div>

          {/* Scratchpad display at bottom of CRT */}
          <div className="relative z-10 pt-1.5 mt-1 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs sm:text-sm min-h-[26px]">
            <div className="flex items-center gap-1 text-cyan-300 font-bold tracking-wider">
              <span>{screen.scratchpad || ''}</span>
              <span className="inline-block w-2 h-3.5 bg-cyan-400/80 animate-pulse" />
            </div>
            <span className="text-[10px] text-slate-600 font-mono">SCRATCHPAD</span>
          </div>
        </div>

        {/* Right Line Select Keys (1R - 6R) */}
        <div className="flex flex-col justify-around py-3 sm:py-4 gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => {
            const lsk = `${num}R`;
            const isHighlighted = highlightLsk === lsk;
            return (
              <button
                key={lsk}
                onClick={() => onLskClick && onLskClick(lsk)}
                className={`w-7 sm:w-8 h-7 sm:h-8 rounded-lg flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold transition-all shadow-md active:scale-95 ${
                  isHighlighted
                    ? 'bg-cyan-500 text-slate-950 border-2 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-600/60'
                }`}
                title={`Line Select Key ${lsk}`}
              >
                —
              </button>
            );
          })}
        </div>
      </div>

      {/* Physical CDU Keypad preview row */}
      <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between gap-1 text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5 flex-wrap">
          {isAirbus ? (
            <>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">DIR</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">INIT</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">F-PLAN</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">RAD NAV</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">PERF</span>
            </>
          ) : (
            <>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">INIT REF</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">RTE</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">DEP ARR</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-bold text-cyan-400">LEGS</span>
              <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">PROG</span>
            </>
          )}
        </div>

        {highlightLsk && (
          <div className="flex items-center gap-1 text-[11px] font-bold text-cyan-400">
            <span>PRESS:</span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
              {highlightLsk}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
