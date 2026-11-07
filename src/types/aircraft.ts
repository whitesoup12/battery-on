export type PanelLocation =
  | 'OVHD - ELEC'
  | 'OVHD - FUEL'
  | 'OVHD - HYD'
  | 'OVHD - AIR / PACKS'
  | 'OVHD - LIGHTS'
  | 'OVHD - ADIRS'
  | 'OVHD - APU'
  | 'OVHD - ENGINES'
  | 'OVHD - MISC'
  | 'PEDESTAL'
  | 'GLARESHIELD'
  | 'MAIN PANEL'
  | 'FMS / MCDU';

export interface ChecklistItem {
  id: string;
  item: string;
  action: string;
  location: PanelLocation;
  note?: string;
}

export interface FlightPhase {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  items: ChecklistItem[];
}

export interface Aircraft {
  id: string;
  name: string;
  subtitle: string;
  shortCode: string;
  manufacturer: 'Airbus' | 'Boeing';
  developer: string;
  bodyType: 'Narrowbody' | 'Widebody' | 'Classic Widebody' | 'Jumbo';
  engineCount: 2 | 4;
  fmsName: 'MCDU' | 'FMC';
  accentColor: 'cyan' | 'amber';
  summary: string;
  phases: FlightPhase[];
}
