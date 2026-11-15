import { useState, useMemo } from 'react';
import { FMS_TROUBLESHOOTING } from '../../data/fmsData';
import { AlertTriangle, Search, CheckCircle2, Terminal } from 'lucide-react';

export function TroubleshootingFms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [systemFilter, setSystemFilter] = useState<'ALL' | 'Airbus' | 'Boeing'>('ALL');

  const filteredItems = useMemo(() => {
    return FMS_TROUBLESHOOTING.filter((item) => {
      const matchesSearch =
        item.errorText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rootCause.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.solution.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSystem =
        systemFilter === 'ALL' || item.system === 'Both' || item.system === systemFilter;

      return matchesSearch && matchesSystem;
    });
  }, [searchTerm, systemFilter]);

  return (
    <div className="space-y-6">
      {/* Intro Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-rose-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
            FMS Diagnostics & Troubleshooting
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Simulator Error Dictionary & Instant Fixes
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          FMC and MCDU error prompts in MSFS 2024 can be notoriously cryptic. When a yellow or amber warning flashes
          in your scratchpad, look it up here for the immediate cockpit solution.
        </p>

        {/* Filter & Search Bar */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search error message (e.g. NOT IN DATABASE, INVALID ENTRY, PERF DISAGREE)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl font-mono text-xs">
            <button
              onClick={() => setSystemFilter('ALL')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                systemFilter === 'ALL'
                  ? 'bg-slate-700 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setSystemFilter('Airbus')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                systemFilter === 'Airbus'
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              Airbus
            </button>
            <button
              onClick={() => setSystemFilter('Boeing')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                systemFilter === 'Boeing'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              Boeing
            </button>
          </div>
        </div>
      </div>

      {/* Error Cards */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-8 text-center font-mono text-xs text-slate-400">
            No error messages matched your search term "{searchTerm}".
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0f1626] border border-slate-800 hover:border-slate-700 transition-colors rounded-2xl p-5 shadow-lg space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-mono font-bold text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-800/60">
                    "{item.errorText}"
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span
                    className={`px-2 py-0.5 rounded ${
                      item.system === 'Airbus'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                        : item.system === 'Boeing'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800/60'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {item.system}
                  </span>
                </div>
              </div>

              {/* Root Cause */}
              <div className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-mono text-xs uppercase tracking-wider text-rose-400 mb-0.5">
                    Why This Happens:
                  </strong>
                  <span className="leading-relaxed">{item.rootCause}</span>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-slate-900/80 border border-emerald-900/50 rounded-xl p-3.5 flex items-start gap-2 text-xs sm:text-sm text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-400 block font-mono text-xs uppercase tracking-wider mb-0.5">
                    Cockpit Solution:
                  </strong>
                  <span className="text-slate-200 leading-relaxed font-sans">{item.solution}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
