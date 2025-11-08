import CutsceneBaseScene from './CutsceneBaseScene';
import introCutscene from '../cutscenes/01-introCutscene';

export default class CutsceneTest extends CutsceneBaseScene {
    constructor() {
        super('CutsceneTest', introCutscene);
    }
}
