import { useState, useEffect } from 'react';
import { AIRCRAFT_LIST } from './data/aircraftData';
import { Aircraft } from './types/aircraft';
import { useChecklistProgress } from './hooks/useChecklistProgress';
import { Header } from './components/Header';
import { AircraftGrid } from './components/AircraftGrid';
import { CockpitView } from './components/CockpitView';

export function App() {
  const {
    isItemCompleted,
    toggleItem,
    markPhaseComplete,
    resetPhase,
    resetAircraft,
    getAircraftProgressCount,
  } = useChecklistProgress();

  // Route state initialized from URL hash (e.g., #b737-max8)
  const [selectedAircraftId, setSelectedAircraftId] = useState<string | null>(() => {
    const hash = window.location.hash.replace('#', '');
    return AIRCRAFT_LIST.some((a) => a.id === hash) ? hash : null;
  });

  // Sync hash with browser navigation (back/forward on tablet)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setSelectedAircraftId(AIRCRAFT_LIST.some((a) => a.id === hash) ? hash : null);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectAircraft = (aircraft: Aircraft) => {
    window.location.hash = aircraft.id;
    setSelectedAircraftId(aircraft.id);
  };

  const handleBackToHangar = () => {
    window.location.hash = '';
    setSelectedAircraftId(null);
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
      />

      <main className="flex-1 pb-16">
        {activeAircraft ? (
          <CockpitView
            aircraft={activeAircraft}
            isItemCompleted={isItemCompleted}
            toggleItem={toggleItem}
            markPhaseComplete={markPhaseComplete}
            resetPhase={resetPhase}
          />
        ) : (
          <AircraftGrid
            aircraftList={AIRCRAFT_LIST}
            onSelectAircraft={handleSelectAircraft}
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
