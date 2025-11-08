export type CutsceneTransition = 'fade' | 'instant';

export interface CutsceneSegment {
  imageKey: string;
  textChunks: string[];
  transition: CutsceneTransition;
}

export interface Cutscene {
  segments: CutsceneSegment[];
}
