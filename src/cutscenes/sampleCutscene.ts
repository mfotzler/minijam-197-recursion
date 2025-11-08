import { Cutscene } from './types';

const sampleCutscene: Cutscene = {
  segments: [
    {
      imageKey: 'segfault-squad',
      textChunks: [
        'In the beginning, there was recursion.',
        'It called itself, again and again.'
      ],
      transition: 'fade'
    },
    {
      imageKey: 'segfault-squad',
      textChunks: [
        'But beware the infinite loop...',
        "Some say it's where legends are born."
      ],
      transition: 'fade'
    }
  ]
};

export default sampleCutscene;
