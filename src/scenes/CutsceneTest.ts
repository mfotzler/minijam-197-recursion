import BaseScene from './BaseScene';
import sampleCutscene from '../cutscenes/sampleCutscene';
import { CutsceneSegment } from '../cutscenes/types';
import * as Phaser from 'phaser';
import { CutsceneHelpers } from '../cutscenes/CutsceneHelpers';

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

    // IMAGE TRANSITION
    this.imageObj = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100,
      segment.imageKey
    ).setOrigin(0.5);
    switch (segment.imageTransition) {
      case 'fade':
        CutsceneHelpers.fadeInObject(this, this.imageObj, 500);
        break;
      case 'slide-left':
        CutsceneHelpers.slideInObject(this, this.imageObj, 'left', 500);
        break;
      case 'slide-right':
        CutsceneHelpers.slideInObject(this, this.imageObj, 'right', 500);
        break;
      case 'slide-fade-left':
        CutsceneHelpers.slideFadeInObject(this, this.imageObj, 'left', 500);
        break;
      case 'slide-fade-right':
        CutsceneHelpers.slideFadeInObject(this, this.imageObj, 'right', 500);
        break;
      case 'instant':
      default:
        // No animation
        break;
    }

    // TEXT TRANSITION
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
      switch (segment.textTransition) {
        case 'fade':
          CutsceneHelpers.fadeInObject(this, textObj, 500);
          break;
        case 'slide-left':
          CutsceneHelpers.slideInObject(this, textObj, 'left', 500);
          break;
        case 'slide-right':
          CutsceneHelpers.slideInObject(this, textObj, 'right', 500);
          break;
        case 'slide-fade-left':
          CutsceneHelpers.slideFadeInObject(this, textObj, 'left', 500);
          break;
        case 'slide-fade-right':
          CutsceneHelpers.slideFadeInObject(this, textObj, 'right', 500);
          break;
        case 'instant':
        default:
          // No animation
          break;
      }
    });
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
