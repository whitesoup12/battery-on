import { useState } from 'react';
import { AircraftFmsGuideData } from '../../types/fms';
import { CduScreenDisplay } from './CduScreenDisplay';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  PlaneTakeoff,
  PlaneLanding,
  ArrowRight,
  Info,
  CheckCircle2,
} from 'lucide-react';

interface RouteBuilderWalkthroughProps {
  guideData: AircraftFmsGuideData;
}

export function RouteBuilderWalkthrough({ guideData }: RouteBuilderWalkthroughProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = guideData.steps;
  const currentStep = steps[currentStepIndex] || steps[0];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  // If user clicks the highlighted key on the CDU mockup, advance step
  const handleLskClick = (lsk: string) => {
    if (currentStep.highlightLsk === lsk) {
      handleNext();
    }
  };

  const handleExecClick = () => {
    if (currentStep.highlightLsk === 'EXEC' || currentStep.cduScreen.execActive) {
      handleNext();
    }
  };

  const summary = guideData.workedRouteSummary;

  return (
    <div className="space-y-6">
      {/* 1. Worked Route Flight Plan Card */}
      <div className="bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#111827] border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/50">
                Worked Example • Flight Plan from Scratch
              </span>
              <span className="text-xs font-mono text-slate-500">•</span>
              <span className="text-xs font-mono text-slate-400">
                {guideData.aircraftName}
              </span>
            </div>
            <div className="flex items-center gap-3 text-lg sm:text-xl font-bold text-white">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <PlaneTakeoff className="w-5 h-5 text-cyan-400" />
                {summary.origin}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
              <span className="flex items-center gap-1.5 text-emerald-300">
                <PlaneLanding className="w-5 h-5 text-emerald-400" />
                {summary.destination}
              </span>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
            <div className="bg-slate-900/90 border border-slate-800 px-2.5 py-1.5 rounded-xl">
              <span className="text-slate-500 block text-[10px]">CRUISE</span>
              <span className="text-white font-bold">{summary.cruiseAlt}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 px-2.5 py-1.5 rounded-xl">
              <span className="text-slate-500 block text-[10px]">COST INDEX</span>
              <span className="text-cyan-300 font-bold">{summary.costIndex}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 px-2.5 py-1.5 rounded-xl">
              <span className="text-slate-500 block text-[10px]">ZFW / BLOCK</span>
              <span className="text-emerald-300 font-bold">
                {summary.zfw} / {summary.blockFuel}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Routing Segments */}
        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-mono">
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800/60">
            <span className="text-slate-500 block text-[10px]">DEP RWY & SID</span>
            <span className="text-slate-200 font-semibold">
              RW{summary.runway} • {summary.sid}
            </span>
          </div>
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800/60">
            <span className="text-slate-500 block text-[10px]">ENROUTE AIRWAYS</span>
            <span className="text-cyan-300 font-semibold">{summary.enroute}</span>
          </div>
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800/60">
            <span className="text-slate-500 block text-[10px]">ARRIVAL & STAR</span>
            <span className="text-slate-200 font-semibold">{summary.star}</span>
          </div>
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800/60">
            <span className="text-slate-500 block text-[10px]">APPROACH (ILS)</span>
            <span className="text-emerald-300 font-semibold">{summary.approach}</span>
          </div>
        </div>
      </div>

      {/* 2. Step Progress Bar & Step Pills */}
      <div className="bg-[#0f1626] border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-lg">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              CDU Route Configuration Flow
            </span>
            <span className="text-xs font-mono text-cyan-400 font-bold">
              Step {currentStepIndex + 1} of {steps.length}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restart Flow</span>
          </button>
        </div>

        {/* Scrollable Step Dots / Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {steps.map((step, idx) => {
            const isSelected = idx === currentStepIndex;
            const isPast = idx < currentStepIndex;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setCurrentStepIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                  isSelected
                    ? 'bg-cyan-950 text-cyan-200 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-bold'
                    : isPast
                    ? 'bg-slate-900 text-emerald-400 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-900/60 text-slate-500 border-slate-800 hover:text-slate-300'
                }`}
              >
                <span>{isPast ? '✓' : step.stepNumber}.</span>
                <span className="truncate max-w-[110px] sm:max-w-[140px]">
                  {step.pageName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Step Content: Instructions on Left, Live Interactive CDU on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Step Explanations (7 cols) */}
        <div className="lg:col-span-7 bg-[#0f1626] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
          {/* Header */}
          <div className="border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center justify-center">
                {currentStep.stepNumber}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                {currentStep.pageName}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400">
                Target: {currentStep.keyTarget}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentStep.stageTitle}
            </h3>
          </div>

          {/* Action Box with Scratchpad Keystroke */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider font-semibold">
                Required Cockpit Action
              </span>
              {currentStep.scratchpadInput && (
                <div className="flex items-center gap-1.5 bg-black/60 border border-cyan-800/60 px-2.5 py-0.5 rounded text-cyan-300">
                  <span className="text-[10px] text-slate-500">TYPE:</span>
                  <span className="font-bold">{currentStep.scratchpadInput}</span>
                </div>
              )}
            </div>
            <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
              {currentStep.actionInstruction}
            </p>
          </div>

          {/* Deep Dive Explanation */}
          <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Avionics Logic & What This Does</span>
            </h4>
            <p>{currentStep.explanation}</p>
          </div>

          {/* Captain's Tip Callout */}
          {currentStep.pilotTip && (
            <div className="bg-cyan-950/20 border border-cyan-800/50 rounded-xl p-3.5 flex items-start gap-3 text-xs sm:text-sm text-cyan-200">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-cyan-300 block mb-0.5">
                  Captain's Tip:
                </span>
                <span className="text-slate-300">{currentStep.pilotTip}</span>
              </div>
            </div>
          )}

          {/* Bottom Stepper Navigation */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={isFirstStep}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                isFirstStep
                  ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>

            {isLastStep ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Route Fully Configured!</span>
              </div>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-lg shadow-cyan-950/50"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Interactive CDU Screen Display (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full mb-2 flex items-center justify-between px-2 text-xs font-mono text-slate-400">
            <span>LIVE AVIONICS DISPLAY</span>
            <span className="text-cyan-400">Interactive Simulation</span>
          </div>

          <CduScreenDisplay
            screen={currentStep.cduScreen}
            fmsFamily={guideData.family}
            highlightLsk={currentStep.highlightLsk}
            onLskClick={handleLskClick}
            onExecClick={handleExecClick}
          />

          <p className="mt-3 text-[11px] font-mono text-slate-500 text-center max-w-sm">
            💡 Tip: Click the highlighted button on the CDU bezel or click "Next Step" to advance the simulation.
          </p>
        </div>
      </div>
    </div>
  );
}
