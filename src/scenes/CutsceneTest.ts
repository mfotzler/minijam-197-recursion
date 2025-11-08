import BaseScene from './BaseScene';
import sampleCutscene from '../cutscenes/sampleCutscene';
import { CutsceneSegment } from '../cutscenes/types';

export default class CutsceneTest extends BaseScene {
  constructor() {
    super('CutsceneTest');
  }

  create() {
    this.currentSegment = 0;
    this.playSegment(sampleCutscene.segments[this.currentSegment]);
    this.input.keyboard.on('keydown-SPACE', () => {
      this.nextSegment();
    });
    this.input.on('pointerdown', () => {
      this.nextSegment();
    });
  }

  currentSegment: number;
  imageObj?: Phaser.GameObjects.Image;
  textObjs: Phaser.GameObjects.Text[] = [];

  playSegment(segment: CutsceneSegment) {
    // Remove previous objects
    if (this.imageObj) this.imageObj.destroy();
    this.textObjs.forEach(obj => obj.destroy());
    this.textObjs = [];

    // Transition effect
    if (segment.transition === 'fade') {
      console.log("fading out segment");
      this.cameras.main.once('camerafadeoutcomplete', () => {
        console.log("displaying faded segment");
        this.showSegment(segment);
        this.cameras.main.fadeIn(300, 0, 0, 0);
      });
      this.cameras.main.fadeOut(300, 0, 0, 0);
      console.log("fade out triggered");
    } else {
      this.showSegment(segment);
    }
  }

  showSegment(segment: CutsceneSegment) {
    // Show image (centered)
    this.imageObj = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100,
      segment.imageKey
    ).setOrigin(0.5);

    // Show text chunks (stacked vertically)
    segment.textChunks.forEach((text, i) => {
      const textObj = this.add.text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 100 + i * 50,
        text,
        {
          fontFamily: 'Rubik',
          fontSize: '32px',
          color: '#000000',
          align: 'center',
        }
      ).setOrigin(0.5);
      this.textObjs.push(textObj);
    });
  }

  nextSegment() {
    if (this.currentSegment < sampleCutscene.segments.length - 1) {
      this.currentSegment++;
      this.playSegment(sampleCutscene.segments[this.currentSegment]);
    } else {
      // End of cutscene, maybe go back to menu or show a message
      this.scene.start('MainMenu');
    }
  }
}
