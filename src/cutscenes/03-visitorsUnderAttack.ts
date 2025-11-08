import { Cutscene } from './types';

const visitorsUnderAttack: Cutscene = {
  segments: [
    {
      imageKey: 'spike',
      textChunks: [
        "Thanks, Sally. We got so many gems.",
        "You were a big help, so we're prepared to help you now."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'visitor',
      textChunks: [
        "Sir! Sir! Emergency! We're under attack!!",
        "Half of our forces have been wiped out already!",
        "We're barely holding off the Segfaults!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "No!! We've been so careful in our preparations.",
        "Well, now it's personal. Let's debug these Segfaults!"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "Yeah! So... how do we do it?"
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'spike',
      textChunks: [
        "I think we'll need to visit my old master.",
        "Master Dowhile will surely be able to help us."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    },
    {
      imageKey: 'sally',
      textChunks: [
        "Another goose chase?? Ugh.. well, okay, let's hurry!",
        "I can feel myself fading..."
      ],
      imageTransition: 'fade',
      textTransition: 'fade'
    }
  ]
};

export default visitorsUnderAttack;
