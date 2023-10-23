export interface PanelSetData {
  title: string;
  desc?: string[];
}

export interface CSPanelSetData extends PanelSetData {
  contact?: string[];
  email?: string;
  limited?: boolean;
  misc?: string[];
  special?: string[];
}

export interface AreaPanelSetData extends PanelSetData {
  repEmails: string[];
  areaSocials: string[];
}
