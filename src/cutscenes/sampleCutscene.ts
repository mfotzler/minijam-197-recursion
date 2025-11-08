import { Cutscene } from './types';

const sampleCutscene: Cutscene = {
  segments: [
    {
      imageKey: 'segfault-squad',
      textChunks: [
        'In the beginning, there was recursion.',
        'It called itself, again and again.'
      ],
      imageTransition: 'slide-left',
      textTransition: 'fade'
    },
    {
      imageKey: 'segfault-squad',
      textChunks: [
        'But beware the infinite loop...',
        "Some say it's where legends are born."
      ],
      imageTransition: 'fade',
      textTransition: 'slide-fade-right'
    }
  ]
};

export default sampleCutscene;
