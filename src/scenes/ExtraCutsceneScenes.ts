
import introCutscene from '../cutscenes/01-introCutscene';
import sallyMeetsTheVisitors from '../cutscenes/02-sallyMeetsTheVisitors';
import visitorsUnderAttack from '../cutscenes/03-visitorsUnderAttack';
import meetingDowhile from '../cutscenes/04-meetingDowhile';
import finalConfrontation from '../cutscenes/05-finalConfrontation';
import epilogue from '../cutscenes/06-epilogue';
import sampleCutscene from '../cutscenes/sampleCutscene';
import CutsceneBaseScene from './CutsceneBaseScene';
export class IntroCutsceneScene extends CutsceneBaseScene {
  constructor() {
    super('IntroCutscene', introCutscene);
  }
}

export class SallyMeetsTheVisitorsScene extends CutsceneBaseScene {
  constructor() {
    super('SallyMeetsTheVisitors', sallyMeetsTheVisitors);
  }
}

export class SampleCutsceneScene extends CutsceneBaseScene {
  constructor() {
    super('SampleCutscene', sampleCutscene);
  }
}


export class VisitorsUnderAttackScene extends CutsceneBaseScene {
  constructor() {
    super('VisitorsUnderAttack', visitorsUnderAttack);
  }
}

export class MeetingDowhileScene extends CutsceneBaseScene {
  constructor() {
    super('MeetingDowhile', meetingDowhile);
  }
}

export class FinalConfrontationScene extends CutsceneBaseScene {
  constructor() {
    super('FinalConfrontation', finalConfrontation);
  }
}

export class EpilogueScene extends CutsceneBaseScene {
  constructor() {
    super('Epilogue', epilogue);
  }
}

export default {
  VisitorsUnderAttackScene,
  MeetingDowhileScene,
  FinalConfrontationScene,
  EpilogueScene
};
