
import introCutscene from '../cutscenes/01-introCutscene';
import CutsceneBaseScene from './CutsceneBaseScene';

class IntroCutsceneScene extends CutsceneBaseScene {
    constructor() {
        super('IntroCutscene', introCutscene);
    }
}

export default IntroCutsceneScene;
