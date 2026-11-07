import { useState, useMemo } from 'react';
import { Aircraft, FlightSegment } from '../types/aircraft';
import { LocationBadge } from './LocationBadge';
import {
  Check,
  RotateCcw,
  CheckCheck,
  ChevronRight,
  ChevronLeft,
  Info,
  Sliders,
  PlaneTakeoff,
  Compass,
  PlaneLanding,
} from 'lucide-react';

interface CockpitViewProps {
  aircraft: Aircraft;
  isItemCompleted: (aircraftId: string, itemId: string) => boolean;
  toggleItem: (aircraftId: string, itemId: string) => void;
  markPhaseComplete: (aircraftId: string, phaseItemIds: string[]) => void;
  resetPhase: (aircraftId: string, phaseItemIds: string[]) => void;
}

type FilterSegment = 'ALL' | FlightSegment;

export function CockpitView({
  aircraft,
  isItemCompleted,
  toggleItem,
  markPhaseComplete,
  resetPhase,
}: CockpitViewProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState<FilterSegment>('ALL');
  const [showNotes, setShowNotes] = useState(true);

  const activePhase = aircraft.phases[activePhaseIndex] || aircraft.phases[0];

  // Calculate items and completion for current phase
  const phaseItemIds = useMemo(
    () => activePhase.items.map((i) => i.id),
    [activePhase]
  );

  const phaseCompletedCount = useMemo(() => {
    return phaseItemIds.filter((id) => isItemCompleted(aircraft.id, id)).length;
  }, [aircraft.id, phaseItemIds, isItemCompleted]);

  const isCurrentPhaseComplete =
    phaseItemIds.length > 0 && phaseCompletedCount === phaseItemIds.length;

  // Segment statistics
  const segmentStats = useMemo(() => {
    const stats = {
      DEPARTURE: { done: 0, total: 0 },
      ENROUTE: { done: 0, total: 0 },
      ARRIVAL: { done: 0, total: 0 },
    };

    aircraft.phases.forEach((phase) => {
      const totalInPhase = phase.items.length;
      const doneInPhase = phase.items.filter((i) =>
        isItemCompleted(aircraft.id, i.id)
      ).length;

      stats[phase.segment].total += totalInPhase;
      stats[phase.segment].done += doneInPhase;
    });

    return stats;
  }, [aircraft, isItemCompleted]);

  // Filtered phases based on segment tab
  const displayedPhases = useMemo(() => {
    if (selectedSegment === 'ALL') {
      return aircraft.phases.map((phase, originalIdx) => ({
        phase,
        originalIdx,
      }));
    }
    return aircraft.phases
      .map((phase, originalIdx) => ({ phase, originalIdx }))
      .filter(({ phase }) => phase.segment === selectedSegment);
  }, [aircraft.phases, selectedSegment]);

  const handleNextPhase = () => {
    if (activePhaseIndex < aircraft.phases.length - 1) {
      const nextIdx = activePhaseIndex + 1;
      setActivePhaseIndex(nextIdx);
      // Auto-update segment filter tab if it was set to something else
      const nextPhase = aircraft.phases[nextIdx];
      if (selectedSegment !== 'ALL' && nextPhase.segment !== selectedSegment) {
        setSelectedSegment(nextPhase.segment);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPhase = () => {
    if (activePhaseIndex > 0) {
      const prevIdx = activePhaseIndex - 1;
      setActivePhaseIndex(prevIdx);
      const prevPhase = aircraft.phases[prevIdx];
      if (selectedSegment !== 'ALL' && prevPhase.segment !== selectedSegment) {
        setSelectedSegment(prevPhase.segment);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectPhase = (originalIdx: number) => {
    setActivePhaseIndex(originalIdx);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6">
      {/* 1. Macro Flight Segment Switcher Tabs */}
      <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        <button
          onClick={() => setSelectedSegment('ALL')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
            selectedSegment === 'ALL'
              ? 'bg-slate-200 text-slate-900 border-white shadow-sm'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <span>ALL PHASES</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20">
            {aircraft.phases.length}
          </span>
        </button>

        <button
          onClick={() => {
            setSelectedSegment('DEPARTURE');
            // If active phase isn't in departure, jump to first departure phase
            if (activePhase.segment !== 'DEPARTURE') {
              const firstDep = aircraft.phases.findIndex((p) => p.segment === 'DEPARTURE');
              if (firstDep !== -1) setActivePhaseIndex(firstDep);
            }
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
            selectedSegment === 'DEPARTURE'
              ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <PlaneTakeoff className="w-3.5 h-3.5" />
          <span>DEPARTURE</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20">
            {segmentStats.DEPARTURE.done}/{segmentStats.DEPARTURE.total}
          </span>
        </button>

        <button
          onClick={() => {
            setSelectedSegment('ENROUTE');
            if (activePhase.segment !== 'ENROUTE') {
              const firstEnr = aircraft.phases.findIndex((p) => p.segment === 'ENROUTE');
              if (firstEnr !== -1) setActivePhaseIndex(firstEnr);
            }
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
            selectedSegment === 'ENROUTE'
              ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-sm'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>EN ROUTE</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20">
            {segmentStats.ENROUTE.done}/{segmentStats.ENROUTE.total}
          </span>
        </button>

        <button
          onClick={() => {
            setSelectedSegment('ARRIVAL');
            if (activePhase.segment !== 'ARRIVAL') {
              const firstArr = aircraft.phases.findIndex((p) => p.segment === 'ARRIVAL');
              if (firstArr !== -1) setActivePhaseIndex(firstArr);
            }
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
            selectedSegment === 'ARRIVAL'
              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <PlaneLanding className="w-3.5 h-3.5" />
          <span>ARRIVAL & SHUTDOWN</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20">
            {segmentStats.ARRIVAL.done}/{segmentStats.ARRIVAL.total}
          </span>
        </button>
      </div>

      {/* 2. Sub-Phase Stepper Carousel */}
      <div className="mb-6 bg-[#0f1626] border border-slate-800 rounded-2xl p-2 sm:p-3 shadow-lg">
        <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-800/80 text-xs font-mono text-slate-400">
          <span className="uppercase tracking-wider">
            Flow Checklist Steps ({displayedPhases.length} available)
          </span>
          <span>
            Phase {activePhaseIndex + 1} of {aircraft.phases.length}
          </span>
        </div>

        {/* Phase Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {displayedPhases.map(({ phase, originalIdx }) => {
            const isSelected = originalIdx === activePhaseIndex;
            const itemsInPhase = phase.items.map((i) => i.id);
            const doneCount = itemsInPhase.filter((id) =>
              isItemCompleted(aircraft.id, id)
            ).length;
            const isPhaseDone = doneCount === itemsInPhase.length && itemsInPhase.length > 0;

            return (
              <button
                key={phase.id}
                onClick={() => selectPhase(originalIdx)}
                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                  isSelected
                    ? 'bg-cyan-950/70 text-cyan-200 border-cyan-500/80 shadow-[0_0_12px_rgba(6,182,212,0.25)] font-semibold'
                    : isPhaseDone
                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60 hover:bg-emerald-900/40'
                    : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800/80 hover:text-slate-200'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-mono font-bold ${
                    isPhaseDone
                      ? 'bg-emerald-500 text-slate-950'
                      : isSelected
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {isPhaseDone ? '✓' : originalIdx + 1}
                </span>

                <span className="whitespace-nowrap">{phase.shortTitle}</span>

                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isPhaseDone
                      ? 'bg-emerald-900/60 text-emerald-300'
                      : isSelected
                      ? 'bg-cyan-900/60 text-cyan-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {doneCount}/{itemsInPhase.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Active Phase Header & Batch Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              {activePhase.segment} • Phase {activePhaseIndex + 1}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              {phaseCompletedCount} of {phaseItemIds.length} items checked
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {activePhase.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {activePhase.subtitle}
          </p>
        </div>

        {/* Action Controls for Active Phase */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowNotes((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors ${
              showNotes
                ? 'bg-slate-800 text-slate-200 border-slate-700'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title="Toggle POH notes"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Notes: {showNotes ? 'ON' : 'OFF'}</span>
          </button>

          {/* Mark all in this phase done */}
          {!isCurrentPhaseComplete ? (
            <button
              onClick={() => markPhaseComplete(aircraft.id, phaseItemIds)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Clear Phase</span>
            </button>
          ) : (
            <button
              onClick={() => resetPhase(aircraft.id, phaseItemIds)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/50 hover:text-rose-300 text-slate-300 text-xs font-mono transition-colors border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Unclear Phase</span>
            </button>
          )}
        </div>
      </div>

      {/* 4. Checklist Items List */}
      <div className="space-y-3 mb-8">
        {activePhase.items.map((item, index) => {
          const completed = isItemCompleted(aircraft.id, item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(aircraft.id, item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleItem(aircraft.id, item.id);
                }
              }}
              className={`group relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none text-left ${
                completed
                  ? 'bg-emerald-950/20 border-emerald-900/50 text-slate-400'
                  : 'bg-[#111726] border-slate-800 hover:border-slate-700 hover:bg-[#141c2f] text-slate-100 shadow-sm'
              }`}
            >
              {/* Checkbox Box with Touch-Friendly Hit Target */}
              <div className="pt-0.5">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                    completed
                      ? 'bg-emerald-500 text-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                      : 'border-2 border-slate-600 group-hover:border-cyan-400 bg-slate-800/80'
                  }`}
                >
                  {completed && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </div>

              {/* Item Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  {/* Switch / Control challenge */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-400">
                      #{index + 1}
                    </span>
                    <span
                      className={`font-semibold text-base sm:text-lg tracking-wide ${
                        completed
                          ? 'line-through text-slate-400 decoration-slate-600'
                          : 'text-white'
                      }`}
                    >
                      {item.item}
                    </span>
                  </div>

                  {/* Target Action / Status & Location */}
                  <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                    <LocationBadge location={item.location} />
                    <span
                      className={`font-mono text-sm sm:text-base font-bold px-2 py-0.5 rounded ${
                        completed
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-800/90 text-cyan-300 border border-cyan-800/40 shadow-inner'
                      }`}
                    >
                      {item.action}
                    </span>
                  </div>
                </div>

                {/* Collapsible POH Tip / Note */}
                {showNotes && item.note && (
                  <div className="mt-2 text-xs sm:text-sm text-slate-400 bg-slate-900/60 border border-slate-800/60 rounded-lg p-2.5 flex items-start gap-2">
                    <Info className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.note}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Bottom Navigation & Flight Completion */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-xl">
        <button
          onClick={handlePrevPhase}
          disabled={activePhaseIndex === 0}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
            activePhaseIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Phase</span>
        </button>

        <div className="text-center hidden sm:block">
          <span className="text-xs font-mono text-slate-400">
            {phaseCompletedCount === phaseItemIds.length ? (
              <span className="text-emerald-400 font-bold">✓ Phase Complete</span>
            ) : (
              <span>
                {phaseItemIds.length - phaseCompletedCount} items remaining
              </span>
            )}
          </span>
        </div>

        {activePhaseIndex < aircraft.phases.length - 1 ? (
          <button
            onClick={handleNextPhase}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-lg shadow-cyan-950/40"
          >
            <span>Next Phase</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              alert('Full flight completed! Aircraft successfully shut down to Cold & Dark. Great job, Captain!');
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-lg shadow-emerald-950/40"
          >
            <span>Flight Complete</span>
            <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
