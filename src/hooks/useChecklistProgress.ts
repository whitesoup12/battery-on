import { useState, useEffect } from 'react';

interface StoredProgress {
  [aircraftId: string]: {
    completedItemIds: string[];
    lastPhaseId?: string;
  };
}

const STORAGE_KEY = 'battery_on_sim_progress_v1';

export function useChecklistProgress() {
  const [progress, setProgress] = useState<StoredProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Unable to persist checklist progress to localStorage', e);
    }
  }, [progress]);

  const isItemCompleted = (aircraftId: string, itemId: string): boolean => {
    return Boolean(progress[aircraftId]?.completedItemIds?.includes(itemId));
  };

  const toggleItem = (aircraftId: string, itemId: string) => {
    setProgress((prev) => {
      const currentList = prev[aircraftId]?.completedItemIds || [];
      const exists = currentList.includes(itemId);
      const updatedList = exists
        ? currentList.filter((id) => id !== itemId)
        : [...currentList, itemId];

      return {
        ...prev,
        [aircraftId]: {
          ...prev[aircraftId],
          completedItemIds: updatedList,
        },
      };
    });
  };

  const markPhaseComplete = (aircraftId: string, phaseItemIds: string[]) => {
    setProgress((prev) => {
      const currentList = prev[aircraftId]?.completedItemIds || [];
      const set = new Set([...currentList, ...phaseItemIds]);
      return {
        ...prev,
        [aircraftId]: {
          ...prev[aircraftId],
          completedItemIds: Array.from(set),
        },
      };
    });
  };

  const resetPhase = (aircraftId: string, phaseItemIds: string[]) => {
    setProgress((prev) => {
      const currentList = prev[aircraftId]?.completedItemIds || [];
      const removeSet = new Set(phaseItemIds);
      const updatedList = currentList.filter((id) => !removeSet.has(id));

      return {
        ...prev,
        [aircraftId]: {
          ...prev[aircraftId],
          completedItemIds: updatedList,
        },
      };
    });
  };

  const resetAircraft = (aircraftId: string) => {
    setProgress((prev) => {
      const updated = { ...prev };
      delete updated[aircraftId];
      return updated;
    });
  };

  const getAircraftProgressCount = (aircraftId: string, totalItems: number) => {
    const completed = progress[aircraftId]?.completedItemIds?.length || 0;
    const percentage = totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;
    return { completed, total: totalItems, percentage };
  };

  return {
    isItemCompleted,
    toggleItem,
    markPhaseComplete,
    resetPhase,
    resetAircraft,
    getAircraftProgressCount,
  };
}
