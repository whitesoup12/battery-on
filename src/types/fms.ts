export type FmsFamily = 'Airbus' | 'Boeing' | 'Classic';

export interface CduLineData {
  label?: string;
  value?: string;
  subValue?: string;
  color?: 'green' | 'cyan' | 'white' | 'amber' | 'magenta' | 'slate';
  labelColor?: 'slate' | 'cyan' | 'white' | 'amber';
  align?: 'left' | 'right' | 'between';
}

export interface CduScreenState {
  title: string;
  pageIndicator?: string;
  l1?: CduLineData;
  r1?: CduLineData;
  l2?: CduLineData;
  r2?: CduLineData;
  l3?: CduLineData;
  r3?: CduLineData;
  l4?: CduLineData;
  r4?: CduLineData;
  l5?: CduLineData;
  r5?: CduLineData;
  l6?: CduLineData;
  r6?: CduLineData;
  scratchpad?: string;
  execActive?: boolean;
}

export interface RouteWalkthroughStep {
  stepNumber: number;
  stageTitle: string;
  pageName: string;
  keyTarget: string; // e.g. "LSK 1R" or "INIT key"
  scratchpadInput?: string;
  actionInstruction: string;
  explanation: string;
  pilotTip?: string;
  cduScreen: CduScreenState;
  highlightLsk?: '1L' | '2L' | '3L' | '4L' | '5L' | '6L' | '1R' | '2R' | '3R' | '4R' | '5R' | '6R' | 'EXEC';
}

export interface AircraftFmsGuideData {
  aircraftId: string;
  aircraftName: string;
  systemName: string; // e.g. "Thales FMS / MCDU" or "Rockwell Collins FMC"
  family: FmsFamily;
  workedRouteSummary: {
    origin: string;
    destination: string;
    alternate: string;
    runway: string;
    sid: string;
    enroute: string;
    star: string;
    approach: string;
    cruiseAlt: string;
    costIndex: string;
    zfw: string;
    blockFuel: string;
  };
  steps: RouteWalkthroughStep[];
}

export type CockpitDevice = 'EFB' | 'FMS' | 'PANEL';

export type TroubleshootingTarget = 'DISCONTINUITY' | 'ERRORS' | 'AIRWAYS' | 'WEIGHTS' | 'COMPARISON';

export interface UnifiedWorkflowStep {
  stepNumber: number;
  device: CockpitDevice;
  deviceScreenName: string; // e.g. "EFB: Ground Services" or "MCDU: INIT A"
  title: string;
  actionInstruction: string;
  explanation: string;
  pilotTip?: string;
  troubleshootingLink?: {
    label: string;
    targetTab: TroubleshootingTarget;
  };
  cduScreen?: CduScreenState;
  highlightLsk?: string;
  efbScreenData?: {
    app: 'SERVICES' | 'DISPATCH' | 'SIMBRIEF' | 'PERFORMANCE';
    title: string;
    badge: string;
    fields: { label: string; value: string; highlight?: boolean }[];
    primaryButtonText?: string;
    resultText?: string;
  };
}

export interface AircraftUnifiedWorkflowData {
  aircraftId: string;
  aircraftName: string;
  family: FmsFamily;
  systemName: string;
  workedRouteSummary: {
    origin: string;
    destination: string;
    alternate: string;
    runway: string;
    sid: string;
    enroute: string;
    star: string;
    approach: string;
    cruiseAlt: string;
    costIndex: string;
    zfw: string;
    blockFuel: string;
  };
  steps: UnifiedWorkflowStep[];
}
