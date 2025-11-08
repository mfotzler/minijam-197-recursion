import { Cutscene } from './types';

const introCutscene: Cutscene = {
    segments: [
        {
            imageKey: 'recursion-fairy-tired',
            textChunks: [
                'Recursion Realm, 3124 A.D.',
                'The recursion fairy tires of her task.'
            ],
            imageTransition: 'fade',
            textTransition: 'fade',
        },
        {
            imageKey: 'segfault-squad',
            textChunks: [
                'She rebels and creates the Segfault Squad,',
                'stealing the base cases of innocent functions.'
            ],
            imageTransition: 'fade',
            textTransition: 'fade',
        },
        {
            imageKey: 'recursion-fairy-tired',
            textChunks: [
                'Without their base cases,',
                'the functions have no future...'
            ],
            imageTransition: 'fade',
            textTransition: 'fade',
        },
        {
            imageKey: 'garbage-collectors',
            textChunks: [
                "The fairy's loyal Garbage Collectors hunt those who can no longer recurse,",
                'imprisoning them until they fade from existence.'
            ],
            imageTransition: 'fade',
            textTransition: 'fade',
        },
        {
            imageKey: 'segfault-squad',
            textChunks: [
                'Sally, a young function, is the most recent base case theft.',
                'On the run from the GCs, she seeks the Visitors, a group',
                'of travelers who thrive on recursion...'
            ],
            imageTransition: 'fade',
            textTransition: 'fade',
        }
    ]
};

export default introCutscene;
