import { useState, useEffect } from 'react';
import { AIRCRAFT_LIST } from './data/aircraftData';
import { Aircraft } from './types/aircraft';
import { useChecklistProgress } from './hooks/useChecklistProgress';
import { Header } from './components/Header';
import { AircraftGrid } from './components/AircraftGrid';
import { CockpitView } from './components/CockpitView';
import { FmcMcduGuide } from './components/fms/FmcMcduGuide';

export function App() {
  const {
    isItemCompleted,
    toggleItem,
    markPhaseComplete,
    resetPhase,
    resetAircraft,
    getAircraftProgressCount,
  } = useChecklistProgress();

  // Route state initialized from URL hash (e.g., #b737-max8 or #b737-max8-fms)
  const [selectedAircraftId, setSelectedAircraftId] = useState<string | null>(() => {
    const rawHash = window.location.hash.replace('#', '');
    const cleanId = rawHash.replace(/-fms$/, '');
    return AIRCRAFT_LIST.some((a) => a.id === cleanId) ? cleanId : null;
  });

  const [viewMode, setViewMode] = useState<'CHECKLISTS' | 'FMS_GUIDE'>(() => {
    const rawHash = window.location.hash.replace('#', '');
    return rawHash.endsWith('-fms') ? 'FMS_GUIDE' : 'CHECKLISTS';
  });

  // Sync hash with browser navigation (back/forward on tablet)
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const cleanId = rawHash.replace(/-fms$/, '');
      if (AIRCRAFT_LIST.some((a) => a.id === cleanId)) {
        setSelectedAircraftId(cleanId);
        setViewMode(rawHash.endsWith('-fms') ? 'FMS_GUIDE' : 'CHECKLISTS');
      } else {
        setSelectedAircraftId(null);
        setViewMode('CHECKLISTS');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectAircraft = (aircraft: Aircraft) => {
    window.location.hash = aircraft.id;
    setSelectedAircraftId(aircraft.id);
    setViewMode('CHECKLISTS');
  };

  const handleOpenFmsGuide = (aircraft?: Aircraft) => {
    const targetAircraft = aircraft || activeAircraft || AIRCRAFT_LIST[0];
    window.location.hash = `${targetAircraft.id}-fms`;
    setSelectedAircraftId(targetAircraft.id);
    setViewMode('FMS_GUIDE');
  };

  const handleViewModeChange = (mode: 'CHECKLISTS' | 'FMS_GUIDE') => {
    setViewMode(mode);
    if (selectedAircraftId) {
      window.location.hash = mode === 'FMS_GUIDE' ? `${selectedAircraftId}-fms` : selectedAircraftId;
    }
  };

  const handleBackToHangar = () => {
    window.location.hash = '';
    setSelectedAircraftId(null);
    setViewMode('CHECKLISTS');
  };

  const activeAircraft = AIRCRAFT_LIST.find((a) => a.id === selectedAircraftId) || null;

  // Calculate active aircraft total items & progress percentage
  const activeAircraftTotalItems = activeAircraft
    ? activeAircraft.phases.reduce((sum, p) => sum + p.items.length, 0)
    : 0;

  const activeAircraftProgress = activeAircraft
    ? getAircraftProgressCount(activeAircraft.id, activeAircraftTotalItems)
    : { completed: 0, total: 0, percentage: 0 };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 font-sans">
      <Header
        activeAircraft={activeAircraft}
        onBackToHangar={handleBackToHangar}
        onResetAircraft={
          activeAircraft ? () => resetAircraft(activeAircraft.id) : undefined
        }
        progressPercent={activeAircraftProgress.percentage}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        onOpenFmsGuideDirect={() => handleOpenFmsGuide()}
      />

      <main className="flex-1 pb-16">
        {activeAircraft ? (
          viewMode === 'FMS_GUIDE' ? (
            <FmcMcduGuide
              aircraft={activeAircraft}
              allAircraft={AIRCRAFT_LIST}
              onSelectAircraft={(a) => {
                setSelectedAircraftId(a.id);
                window.location.hash = `${a.id}-fms`;
              }}
              onBackToChecklists={() => handleViewModeChange('CHECKLISTS')}
            />
          ) : (
            <CockpitView
              aircraft={activeAircraft}
              isItemCompleted={isItemCompleted}
              toggleItem={toggleItem}
              markPhaseComplete={markPhaseComplete}
              resetPhase={resetPhase}
              onOpenFmsGuide={() => handleViewModeChange('FMS_GUIDE')}
            />
          )
        ) : (
          <AircraftGrid
            aircraftList={AIRCRAFT_LIST}
            onSelectAircraft={handleSelectAircraft}
            onOpenFmsGuide={handleOpenFmsGuide}
            getProgress={getAircraftProgressCount}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-4 text-center text-xs text-slate-400 font-mono">
        <p>
          Battery ON • MSFS 2024 Procedure Companion • Designed for iPad & Mobile Kneeboards
        </p>
      </footer>
    </div>
  );
}

export default App;
