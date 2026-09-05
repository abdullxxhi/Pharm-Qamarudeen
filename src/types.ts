export type Stage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface TimelinePoint {
  id: number;
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
  message: string[];
  accentColor?: string;
  isPioneer?: boolean;
}
