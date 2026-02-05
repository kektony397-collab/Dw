export type Language = 'gu' | 'en' | 'hi';
export type Theme = 'android' | 'microsoft';

export interface Translation {
  title: string;
  subtitle: string;
  welcome: string;
  vision: string;
  tabs: {
    roadmap: string;
    management: string;
    action: string;
    advisor: string;
  };
  stages: Stage[];
  management: {
    title: string;
    rules: Rule[];
  };
  actions: {
    title: string;
    items: string[];
  };
  ai: {
    title: string;
    placeholder: string;
    button: string;
    disclaimer: string;
  }
}

export interface Stage {
  id: number;
  year: string;
  title: string;
  entity: string;
  description: string;
  steps: string[];
  icon: string;
}

export interface Rule {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
