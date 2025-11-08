import { Cutscene } from './types';

const meetingDowhile: Cutscene = {
  segments: [
    {
      imageKey: 'dowhile',
      textChunks: [
        "Ah, young Spike... what can I do for you?"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "Master Dowhile...  we've suffered greatly at the hands of that blasted recursion fairy.",
        "We can't beat her at recursion. What should we do?"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'dowhile',
      textChunks: [
        "Sometimes new problems require old solutions.",
        "Take me with you. Let's hit her with the old while(true).",
        "*stands up with his cane and joins them*"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "With you on our side, we can't lose! Let's head to their base, Sally."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "Let's unroll!!!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    }
  ]
};

export default meetingDowhile;
