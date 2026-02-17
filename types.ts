
export interface CaseMetric {
  name: string;
  value: number;
  unit: string;
  change: number;
}

export interface SupplyChainData {
  month: string;
  logisticsCost: number;
  efficiency: number;
  volume: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
