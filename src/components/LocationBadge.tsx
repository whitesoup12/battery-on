import { PanelLocation } from '../types/aircraft';

interface Props {
  location: PanelLocation;
}

export function LocationBadge({ location }: Props) {
  let colorStyles = 'bg-slate-800 text-slate-300 border-slate-700';

  if (location.startsWith('OVHD - ELEC')) {
    colorStyles = 'bg-amber-950/60 text-amber-300 border-amber-800/60';
  } else if (location.startsWith('OVHD - FUEL') || location.startsWith('OVHD - HYD')) {
    colorStyles = 'bg-orange-950/60 text-orange-300 border-orange-800/60';
  } else if (location.startsWith('OVHD - AIR')) {
    colorStyles = 'bg-sky-950/60 text-sky-300 border-sky-800/60';
  } else if (location.startsWith('OVHD - LIGHTS')) {
    colorStyles = 'bg-yellow-950/60 text-yellow-300 border-yellow-800/60';
  } else if (location.startsWith('OVHD')) {
    colorStyles = 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60';
  } else if (location === 'PEDESTAL') {
    colorStyles = 'bg-purple-950/60 text-purple-300 border-purple-800/60';
  } else if (location === 'GLARESHIELD') {
    colorStyles = 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60';
  } else if (location === 'FMS / MCDU') {
    colorStyles = 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60';
  } else if (location === 'MAIN PANEL') {
    colorStyles = 'bg-teal-950/60 text-teal-300 border-teal-800/60';
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wide border uppercase ${colorStyles}`}
    >
      {location}
    </span>
  );
}
