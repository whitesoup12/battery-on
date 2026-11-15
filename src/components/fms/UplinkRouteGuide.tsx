import { useState } from 'react';
import {
  PRE_CREATED_ROUTE_AIRBUS,
  PRE_CREATED_ROUTE_BOEING,
} from '../../data/efbData';
import {
  CloudDownload,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
} from 'lucide-react';

export function UplinkRouteGuide() {
  const [selectedSystem, setSelectedSystem] = useState<'Airbus' | 'Boeing'>('Airbus');

  const workflow =
    selectedSystem === 'Airbus' ? PRE_CREATED_ROUTE_AIRBUS : PRE_CREATED_ROUTE_BOEING;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <CloudDownload className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Pre-Created Flight Plan Setup
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Fast-Track Setup: Loading SimBrief & EFB Routes
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          When you have already prepared a flight plan in <strong>SimBrief</strong> or the{' '}
          <strong>MSFS 2024 World Planner</strong>, you do not need to type every airway from scratch.
          However, flight simmers often get stuck because the data uplink{' '}
          <strong className="text-amber-300">intentionally omits critical takeoff and landing steps</strong> that
          must still be completed manually at the gate.
        </p>

        {/* System Selector */}
        <div className="mt-5 flex items-center gap-2 border-t border-slate-800/80 pt-4">
          <button
            onClick={() => setSelectedSystem('Airbus')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all border ${
              selectedSystem === 'Airbus'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Airbus (A320neo / A330 ATSU Uplink)</span>
          </button>

          <button
            onClick={() => setSelectedSystem('Boeing')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all border ${
              selectedSystem === 'Boeing'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Boeing (737 MAX / 747-8 CO ROUTE)</span>
          </button>
        </div>
      </div>

      {/* Auto-Imported vs Mandatory Manual Action Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Auto Imported (Green) */}
        <div className="bg-[#0f1626] border border-emerald-900/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 pb-2 mb-3 border-b border-slate-800">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">
                What the Uplink Loads Automatically
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              These fields are written into the FMS instantly via the AOC data-link:
            </p>

            <div className="space-y-2 text-xs font-mono">
              {workflow.autoImportedFields.map((field, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-slate-200"
                >
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Saves 80% of scratchpad typing time!</span>
          </div>
        </div>

        {/* Mandatory Manual Pilot Steps (Amber) */}
        <div className="bg-[#0f1626] border border-amber-900/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 pb-2 mb-3 border-b border-slate-800">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">
                What You MUST Still Complete Manually
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              The uplink does <strong className="text-white">not</strong> set these because real-world winds dictate active runways at departure:
            </p>

            <div className="space-y-2 text-xs font-mono">
              {workflow.mandatoryManualSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-amber-950/20 p-2 rounded-lg border border-amber-900/40 text-amber-200"
                >
                  <span className="text-amber-400 font-bold">!</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Never skip these 5 manual actions before pushback.</span>
          </div>
        </div>
      </div>

      {/* Complete Step-by-Step Flow */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              {workflow.system} Setup Flow
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              8-Step Quick Turnaround Procedure ({workflow.uplinkMethod})
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            {workflow.aircraftName}
          </span>
        </div>

        <div className="space-y-3">
          {workflow.stepByStepFlow.map((s) => (
            <div
              key={s.step}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors rounded-xl p-4 flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs font-mono"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-cyan-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  {s.step}
                </span>
                <div className="space-y-1">
                  <span className="text-white font-bold text-sm block">{s.title}</span>
                  <p className="text-cyan-300 font-medium leading-relaxed font-sans">{s.action}</p>
                </div>
              </div>

              <div className="shrink-0 bg-black/40 border border-slate-800/80 px-3 py-1.5 rounded-lg text-slate-400 text-[11px] max-w-xs self-start md:self-auto">
                <span className="text-slate-500 block text-[9px] uppercase font-bold">Why / Note</span>
                <span>{s.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
