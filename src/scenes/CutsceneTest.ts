import BaseScene from './BaseScene';
import sampleCutscene from '../cutscenes/sampleCutscene';
import { CutsceneSegment } from '../cutscenes/types';
import * as Phaser from 'phaser';

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

    // Show image (always appears instantly)
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

    // Fade transition for text only
    if (segment.transition === 'fade') {
      console.log("fading in text chunks");
      this.textObjs.forEach(obj => {
        obj.setAlpha(0);
        this.tweens.add({
          targets: obj,
          alpha: 1,
          duration: 500,
          ease: 'Linear',
          onComplete: () => {
            console.log("text chunk faded in");
          }
        });
      });
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
