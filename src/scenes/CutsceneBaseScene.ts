import BaseScene from './BaseScene';
import { Cutscene } from '../cutscenes/types';
import { CutsceneHelpers } from '../cutscenes/CutsceneHelpers';
import * as Phaser from 'phaser';

export default class CutsceneBaseScene extends BaseScene {
    protected cutscene: Cutscene;
    protected currentSegment: number = 0;
    protected imageObject?: Phaser.GameObjects.Image;
    protected textObjects: Phaser.GameObjects.Text[] = [];

    constructor(key: string, cutscene: Cutscene) {
        super(key);
        this.cutscene = cutscene;
    }

    create() {
        this.currentSegment = 0;
        this.playSegment(this.cutscene.segments[this.currentSegment]);
        this.input.keyboard.on('keydown-SPACE', () => {
            this.nextSegment();
        });
        this.input.on('pointerdown', () => {
            this.nextSegment();
        });
    }

    playSegment(segment: any) {
        this.clearSegmentObjects();
        this.imageObject = this.createImage(segment);
        this.textObjects = this.createTextChunks(segment);
    }

    clearSegmentObjects() {
        if (this.imageObject) this.imageObject.destroy();
        this.textObjects.forEach(object => object.destroy());
        this.textObjects = [];
    }

    createImage(segment: any): Phaser.GameObjects.Image {
        const imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 100,
            segment.imageKey
        ).setOrigin(0.5);
        CutsceneHelpers.applyTransition(this, segment.imageTransition, imageObject);
        return imageObject;
    }

    createTextChunks(segment: any): Phaser.GameObjects.Text[] {
        return segment.textChunks.map((text: string, i: number) => {
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

    nextSegment() {
        if (this.currentSegment < this.cutscene.segments.length - 1) {
            this.currentSegment++;
            this.playSegment(this.cutscene.segments[this.currentSegment]);
        } else {
            this.scene.start('MainMenu');
        }
    }
}
