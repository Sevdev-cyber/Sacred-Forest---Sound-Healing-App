export interface Instrument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: 'Wind' | 'Percussion' | 'String' | 'Nature' | 'Synth';
  price?: string;
  isPremium?: boolean;
  frequency?: string;
  chakra?: string;
  element?: string;
}

export enum Tab {
  GALLERY = 'Gallery',
  TOOLS = 'Tools',
  MANDALA = 'Mandala',
  SETTINGS = 'Settings'
}