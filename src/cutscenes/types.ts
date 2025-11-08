export type CutsceneTransitionType =
  | 'fade'
  | 'slide-left'
  | 'slide-right'
  | 'slide-fade-left'
  | 'slide-fade-right'
  | 'instant';

export interface CutsceneSegment {
  imageKey: string;
  textChunks: string[];
  imageTransition: CutsceneTransitionType;
  textTransition: CutsceneTransitionType;
}

export interface Cutscene {
  segments: CutsceneSegment[];
}
