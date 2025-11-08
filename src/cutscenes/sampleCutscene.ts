import { Cutscene } from './types';

const sampleCutscene: Cutscene = {
  segments: [
    {
      imageKey: 'intro1',
      textChunks: [
        'In the beginning, there was recursion.',
        'It called itself, again and again.'
      ],
      transition: 'fade'
    },
    {
      imageKey: 'intro2',
      textChunks: [
        'But beware the infinite loop...',
        "Some say it's where legends are born."
      ],
      transition: 'instant'
    }
  ]
};

export default sampleCutscene;
