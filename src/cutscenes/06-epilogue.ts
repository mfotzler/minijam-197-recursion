import { Cutscene } from './types';

const epilogue: Cutscene = {
  segments: [
    {
      imageKey: 'sally',
      textChunks: [
        "My base case! Finally. Thanks, you two."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "It's a weight off my shoulders to be done with the Segfault Squad."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'dowhile',
      textChunks: [
        "I may be retired, but I still care about the realm. My pleasure."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "Well, time to go rebuild the Visitors.",
        "See ya!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'dowhile',
      textChunks: [
        "I think I'll go nap for a couple thousand cycles.",
        "So long."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "Time to return all these base cases!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'none',
      textChunks: [
        "Peace was restored to the land. The base cases were returned and the functions were free to recurse again.",
        "Thank you for playing!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    }
  ]
};

export default epilogue;
