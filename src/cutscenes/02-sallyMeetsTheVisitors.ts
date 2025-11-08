import { Cutscene } from './types';

const sallyMeetsTheVisitors: Cutscene = {
  segments: [
    {
      imageKey: 'sally',
      textChunks: [
        "I've finally found you, Spike!",
        "I need the Visitors help. I've lost my base case."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "Well, who stole it? Did somebody steal it?"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "Yes, somebody stole it. I need it back before I fade from existence.",
        "It was definitely the Segfaults! I need you to help me fight them!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "Okay, okay. Fine. But I need you to help me first.",
        "We're going to collect as many gems as we can."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "Why do we need gems?"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "We need gems to get coins.",
        "We can use them to fight or keep them as treasure!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "I don't really understand how that helps, but okay. Deal."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "Let's go!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    }
  ]
};

export default sallyMeetsTheVisitors;
