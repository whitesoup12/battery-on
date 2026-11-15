import { useState } from 'react';
import { Aircraft } from '../../types/aircraft';
import { FMS_GUIDE_MAP } from '../../data/fmsData';
import { UNIFIED_WORKFLOW_MAP } from '../../data/unifiedWorkflowData';
import { TroubleshootingTarget } from '../../types/fms';
import { UnifiedWorkflowWalkthrough } from './UnifiedWorkflowWalkthrough';
import { RouteBuilderWalkthrough } from './RouteBuilderWalkthrough';
import { TroubleshootingHub } from './TroubleshootingHub';
import { EfbGuide } from './EfbGuide';
import {
  Cpu,
  Route,
  ArrowLeft,
  Tablet,
  Wrench,
  Zap,
} from 'lucide-react';

interface FmcMcduGuideProps {
  aircraft: Aircraft;
  allAircraft: Aircraft[];
  onSelectAircraft?: (aircraft: Aircraft) => void;
  onBackToChecklists?: () => void;
}

type GuideTab = 'PREFLIGHT' | 'SCRATCH' | 'EFB_FEATURES' | 'TROUBLESHOOTING';

export function FmcMcduGuide({
  aircraft,
  allAircraft,
  onSelectAircraft,
  onBackToChecklists,
}: FmcMcduGuideProps) {
  // EFB / SimBrief Unified Workflow is the default primary view
  const [activeTab, setActiveTab] = useState<GuideTab>('PREFLIGHT');
  const [selectedAircraftId, setSelectedAircraftId] = useState<string>(aircraft.id);
  const [troubleshootingSubTab, setTroubleshootingSubTab] = useState<TroubleshootingTarget>('DISCONTINUITY');

  const unifiedWorkflow =
    UNIFIED_WORKFLOW_MAP[selectedAircraftId] || UNIFIED_WORKFLOW_MAP['a320neo-v2'];
  const manualRouteData =
    FMS_GUIDE_MAP[selectedAircraftId] || FMS_GUIDE_MAP['a320neo-v2'];

  const handleAircraftSwitch = (newId: string) => {
    setSelectedAircraftId(newId);
    const targetAircraft = allAircraft.find((a) => a.id === newId);
    if (targetAircraft && onSelectAircraft) {
      onSelectAircraft(targetAircraft);
    }
  };

  const handleNavigateToTroubleshooting = (target: TroubleshootingTarget) => {
    setTroubleshootingSubTab(target);
    setActiveTab('TROUBLESHOOTING');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 space-y-6">
      {/* Top Banner & Quick Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0f1626] border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/50 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Avionics & EFB Cockpit Guide</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              MSFS 2024 Systems Companion
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <span>FMC / MCDU & EFB Preflight Workflow</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Seamless chronological walkthrough combining cockpit EFB tablet actions and FMS route setup in the exact order real pilots fly.
          </p>
        </div>

        {/* Back to Checklists action */}
        {onBackToChecklists && (
          <button
            onClick={onBackToChecklists}
            className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs font-mono font-medium border border-slate-700 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Checklists</span>
          </button>
        )}
      </div>

      {/* Aircraft Switcher Row */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2 sm:p-3 flex items-center gap-2 overflow-x-auto scrollbar-none no-scrollbar">
        <span className="text-xs font-mono text-slate-400 px-2 hidden sm:inline whitespace-nowrap">
          SELECT AIRLINER:
        </span>
        {allAircraft.map((a) => {
          const isSelected = a.id === selectedAircraftId;
          const isAirbus = a.manufacturer === 'Airbus';

          return (
            <button
              key={a.id}
              onClick={() => handleAircraftSwitch(a.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                isSelected
                  ? isAirbus
                    ? 'bg-cyan-950 text-cyan-200 border-cyan-500 font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'bg-amber-950 text-amber-200 border-amber-500 font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-400 border-slate-700/60 hover:text-slate-200'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isAirbus ? 'bg-cyan-400' : 'bg-amber-400'
                }`}
              />
              <span className="font-semibold">{a.name}</span>
              <span className="text-[10px] opacity-75 font-mono">({a.fmsName})</span>
            </button>
          );
        })}
      </div>

      {/* Guide Main Category Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        {/* Primary Default Tab: Unified EFB + FMS Flow */}
        <button
          onClick={() => setActiveTab('PREFLIGHT')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeTab === 'PREFLIGHT'
              ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Preflight Workflow (EFB + FMS)</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20 font-mono">Default</span>
        </button>

        {/* Manual Route from Scratch */}
        <button
          onClick={() => setActiveTab('SCRATCH')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeTab === 'SCRATCH'
              ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Route className="w-4 h-4" />
          <span>Manual Route from Scratch</span>
        </button>

        {/* EFB Feature Catalogue */}
        <button
          onClick={() => setActiveTab('EFB_FEATURES')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeTab === 'EFB_FEATURES'
              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Tablet className="w-4 h-4" />
          <span>EFB Features & Apps</span>
        </button>

        {/* Troubleshooting & Reference Hub */}
        <button
          onClick={() => setActiveTab('TROUBLESHOOTING')}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border ${
            activeTab === 'TROUBLESHOOTING'
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>Troubleshooting & Reference</span>
        </button>
      </div>

      {/* Main Tab Panels */}
      <div>
        {/* 1. Unified EFB + FMS Preflight Workflow (Primary Default) */}
        {activeTab === 'PREFLIGHT' && (
          <UnifiedWorkflowWalkthrough
            workflowData={unifiedWorkflow}
            onNavigateToTroubleshooting={handleNavigateToTroubleshooting}
          />
        )}

        {/* 2. Manual Route from Scratch (Full Manual Typing) */}
        {activeTab === 'SCRATCH' && (
          <RouteBuilderWalkthrough guideData={manualRouteData} />
        )}

        {/* 3. Full EFB Feature Catalogue */}
        {activeTab === 'EFB_FEATURES' && <EfbGuide />}

        {/* 4. Troubleshooting & Avionics Reference Hub */}
        {activeTab === 'TROUBLESHOOTING' && (
          <TroubleshootingHub
            initialSubTab={troubleshootingSubTab}
            onBackToWalkthrough={() => setActiveTab('PREFLIGHT')}
          />
        )}
      </div>
    </div>
  );
}
