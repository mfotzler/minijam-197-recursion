import * as Phaser from 'phaser';

export class CutsceneHelpers {
  static fadeInText(scene: Phaser.Scene, textObj: Phaser.GameObjects.Text, duration: number = 500) {
    textObj.setAlpha(0);
    scene.tweens.add({
      targets: textObj,
      alpha: 1,
      duration,
      ease: 'Linear',
      onComplete: () => {
        console.log('text chunk faded in');
      }
    });
  }
}
