import { useState, useEffect } from 'react';
import { TroubleshootingTarget } from '../../types/fms';
import { DiscontinuityGuide } from './DiscontinuityGuide';
import { TroubleshootingFms } from './TroubleshootingFms';
import { AirwayLogicExplainer } from './AirwayLogicExplainer';
import { PerfTakeoffGuide } from './PerfTakeoffGuide';
import { FmsComparisonTable } from './FmsComparisonTable';
import {
  Wrench,
  AlertTriangle,
  Terminal,
  Compass,
  Scale,
  Layers,
  ArrowLeft,
} from 'lucide-react';

interface TroubleshootingHubProps {
  initialSubTab?: TroubleshootingTarget;
  onBackToWalkthrough?: () => void;
}

export function TroubleshootingHub({
  initialSubTab = 'DISCONTINUITY',
  onBackToWalkthrough,
}: TroubleshootingHubProps) {
  const [activeSubTab, setActiveSubTab] = useState<TroubleshootingTarget>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  return (
    <div className="space-y-6">
      {/* Troubleshooting Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0f1626] border border-amber-800/60 rounded-2xl p-5 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/50 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>Diagnostic & Reference Hub</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              Avionics Reference Manual
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Troubleshooting, Edge Cases & Avionics Reference
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            When something isn’t working, consult these in-depth guides for solving route disconnects, cryptic scratchpad errors, and airway mismatches.
          </p>
        </div>

        {onBackToWalkthrough && (
          <button
            onClick={onBackToWalkthrough}
            className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs font-mono font-medium border border-slate-700 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Walkthrough</span>
          </button>
        )}
      </div>

      {/* Sub-Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        <button
          onClick={() => setActiveSubTab('DISCONTINUITY')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeSubTab === 'DISCONTINUITY'
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Discontinuities Masterclass</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ERRORS')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeSubTab === 'ERRORS'
              ? 'bg-rose-500 text-white border-rose-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Error Dictionary</span>
        </button>

        <button
          onClick={() => setActiveSubTab('AIRWAYS')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeSubTab === 'AIRWAYS'
              ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>VIA / TO Airway Logic</span>
        </button>

        <button
          onClick={() => setActiveSubTab('WEIGHTS')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeSubTab === 'WEIGHTS'
              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Weights, CI & Speeds</span>
        </button>

        <button
          onClick={() => setActiveSubTab('COMPARISON')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeSubTab === 'COMPARISON'
              ? 'bg-indigo-500 text-white border-indigo-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Airbus vs Boeing Philosophy</span>
        </button>
      </div>

      {/* Active Sub-Panel */}
      <div>
        {activeSubTab === 'DISCONTINUITY' && <DiscontinuityGuide />}
        {activeSubTab === 'ERRORS' && <TroubleshootingFms />}
        {activeSubTab === 'AIRWAYS' && <AirwayLogicExplainer />}
        {activeSubTab === 'WEIGHTS' && <PerfTakeoffGuide />}
        {activeSubTab === 'COMPARISON' && <FmsComparisonTable />}
      </div>
    </div>
  );
}
