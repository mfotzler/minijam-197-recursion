import CutsceneBaseScene from './CutsceneBaseScene';
import introCutscene from '../cutscenes/introCutscene';

export default class CutsceneTest extends CutsceneBaseScene {
    constructor() {
        super('CutsceneTest', introCutscene);
    }
}
