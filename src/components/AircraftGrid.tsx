import { Aircraft } from '../types/aircraft';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

interface AircraftGridProps {
  aircraftList: Aircraft[];
  onSelectAircraft: (aircraft: Aircraft) => void;
  getProgress: (aircraftId: string, totalItems: number) => {
    completed: number;
    total: number;
    percentage: number;
  };
}

export function AircraftGrid({
  aircraftList,
  onSelectAircraft,
  getProgress,
}: AircraftGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
      {/* Title & Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span>Flight Deck Hangar</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-2xl">
          Select an aircraft to begin your cold-and-dark cockpit setup flow for Microsoft Flight Simulator 2024.
        </p>
      </div>

      {/* Grid of Aircraft Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aircraftList.map((aircraft) => {
          const totalItems = aircraft.phases.reduce((acc, p) => acc + p.items.length, 0);
          const { completed, percentage } = getProgress(aircraft.id, totalItems);
          const isStarted = completed > 0;
          const isFinished = completed === totalItems && totalItems > 0;
          const isAirbus = aircraft.manufacturer === 'Airbus';

          return (
            <div
              key={aircraft.id}
              onClick={() => onSelectAircraft(aircraft)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectAircraft(aircraft);
                }
              }}
              className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#131b2e] to-[#0d1322] border border-slate-800 hover:border-slate-600 transition-all duration-300 p-5 shadow-lg hover:shadow-cyan-950/20 cursor-pointer overflow-hidden text-left"
            >
              {/* Subtle accent glow line at top */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  isAirbus
                    ? 'bg-gradient-to-r from-cyan-500 via-sky-400 to-transparent'
                    : 'bg-gradient-to-r from-amber-500 via-orange-400 to-transparent'
                }`}
              />

              {/* Top metadata tags */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-wider ${
                    isAirbus
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/70'
                      : 'bg-amber-950/80 text-amber-300 border border-amber-800/70'
                  }`}
                >
                  {aircraft.manufacturer.toUpperCase()}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                    {aircraft.shortCode}
                  </span>
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-slate-400" />
                    {aircraft.fmsName}
                  </span>
                </div>
              </div>

              {/* Aircraft Visual / Silhouette representation */}
              <div className="relative h-36 w-full rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-center p-4 mb-4 overflow-hidden group-hover:border-slate-700 transition-colors">
                {/* Background grid markings */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Vector silhouette drawing */}
                <svg
                  viewBox="0 0 320 120"
                  className="w-full h-full text-slate-300 group-hover:scale-105 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                >
                  {aircraft.engineCount === 4 ? (
                    // 747 4-engine silhouette with upper deck hump
                    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                      <path d="M 30 75 Q 85 75 120 60 Q 150 48 200 48 L 270 48 Q 285 48 290 75 L 290 85 L 25 85 Z" fill="#1e293b" />
                      {/* 4 Engines */}
                      <rect x="75" y="86" width="22" height="10" rx="3" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      <rect x="110" y="88" width="22" height="10" rx="3" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      <rect x="185" y="88" width="22" height="10" rx="3" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      <rect x="220" y="86" width="22" height="10" rx="3" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      {/* Wings */}
                      <path d="M 50 82 L 5 88 L 20 83 Z" fill="#334155" />
                      <path d="M 265 82 L 315 88 L 295 83 Z" fill="#334155" />
                      {/* Cockpit Windows */}
                      <path d="M 175 52 L 200 52" stroke="#38bdf8" strokeWidth="3" />
                    </g>
                  ) : aircraft.bodyType.includes('Widebody') ? (
                    // Widebody Twinjet (A330 / A310)
                    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                      <path d="M 45 72 Q 100 68 150 56 L 230 56 Q 260 56 275 72 L 275 84 L 40 84 Z" fill="#1e293b" />
                      {/* 2 Big Underwing Turbofans */}
                      <rect x="80" y="85" width="28" height="12" rx="4" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      <rect x="205" y="85" width="28" height="12" rx="4" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      {/* Wing sweep & winglets */}
                      <path d="M 45 78 L 10 82 L 12 70" stroke="#94a3b8" />
                      <path d="M 270 78 L 305 82 L 303 70" stroke="#94a3b8" />
                      {/* Cockpit windows */}
                      <path d="M 215 60 L 235 60" stroke="#38bdf8" strokeWidth="3" />
                    </g>
                  ) : (
                    // Narrowbody Twinjet (A320neo / 737 MAX)
                    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                      <path d="M 60 70 Q 120 66 170 58 L 230 58 Q 255 58 265 70 L 265 80 L 55 80 Z" fill="#1e293b" />
                      {/* 2 Engines */}
                      <rect x="95" y="80" width="24" height="10" rx="3" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      <rect x="195" y="80" width="24" height="10" rx="3" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
                      {/* Sharklets / Winglets */}
                      <path d="M 60 76 L 25 79 L 28 68" stroke="#94a3b8" />
                      <path d="M 260 76 L 295 79 L 292 68" stroke="#94a3b8" />
                      {/* Cockpit glass */}
                      <path d="M 210 62 L 230 62" stroke="#38bdf8" strokeWidth="2.5" />
                    </g>
                  )}
                </svg>

                {/* Badge Overlay */}
                <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-slate-700/60">
                  {aircraft.developer}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {aircraft.name}
                </h2>
                <p className="text-xs text-slate-400 mt-1">{aircraft.subtitle}</p>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {aircraft.summary}
                </p>
              </div>

              {/* Progress & Action Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  {isFinished ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> Ready for Takeoff
                    </span>
                  ) : isStarted ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-300 font-semibold">
                          {completed} / {totalItems} completed
                        </span>
                        <span className="text-xs font-mono text-emerald-400">({percentage}%)</span>
                      </div>
                      <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">Cold & Dark • {aircraft.phases.length} Phases</span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-600 group-hover:text-white text-slate-300 text-xs font-medium transition-colors">
                  <span>{isStarted ? 'Resume' : 'Start Flow'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
