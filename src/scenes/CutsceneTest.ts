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
  imageObject?: Phaser.GameObjects.Image;
  textObjects: Phaser.GameObjects.Text[] = [];

  playSegment(segment: CutsceneSegment) {
    this.clearSegmentObjects();
    this.imageObject = this.createImage(segment);
    this.textObjects = this.createTextChunks(segment);
  }

  clearSegmentObjects() {
    if (this.imageObject) 
      this.imageObject.destroy();
    this.textObjects.forEach(object => object.destroy());
    this.textObjects = [];
  }

  createImage(segment: CutsceneSegment): Phaser.GameObjects.Image {
    const imageObject = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100,
      segment.imageKey
    ).setOrigin(0.5);
    CutsceneHelpers.applyTransition(this, segment.imageTransition, imageObject);
    return imageObject;
  }

  createTextChunks(segment: CutsceneSegment): Phaser.GameObjects.Text[] {
    return segment.textChunks.map((text, i) => {
      const textObject = this.add.text(
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
      CutsceneHelpers.applyTransition(this, segment.textTransition, textObject);
      return textObject;
    });
  }

  showSegment(segment: CutsceneSegment) {
    this.showImage(segment);
    this.showText(segment);
  }

  showImage(segment: CutsceneSegment) {
    this.imageObject = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100,
      segment.imageKey
    ).setOrigin(0.5);
  }

  showText(segment: CutsceneSegment) {
    segment.textChunks.forEach((text, i) => {
      const textObject = this.add.text(
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
      this.textObjects.push(textObject);
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
