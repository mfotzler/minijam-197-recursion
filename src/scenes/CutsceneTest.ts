import BaseScene from './BaseScene';

export default class CutsceneTest extends BaseScene {
  constructor() {
    super('CutsceneTest');
  }

  create() {
    this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Cutscene Test Scene',
      {
        fontFamily: 'Rubik',
        fontSize: '64px',
        color: '#000000',
        fontStyle: 'bold',
        align: 'center',
      }
    ).setOrigin(0.5);
  }
}
