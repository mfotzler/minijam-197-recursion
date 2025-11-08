import * as Phaser from 'phaser';

export class CutsceneHelpers {
  static applyTransition(scene: Phaser.Scene, transition: string, object: Phaser.GameObjects.Image | Phaser.GameObjects.Text) {
    switch (transition) {
      case 'fade':
        CutsceneHelpers.fadeInObject(scene, object, 500);
        break;
      case 'slide-left':
        CutsceneHelpers.slideInObject(scene, object, 'left', 500);
        break;
      case 'slide-right':
        CutsceneHelpers.slideInObject(scene, object, 'right', 500);
        break;
      case 'slide-fade-left':
        CutsceneHelpers.slideFadeInObject(scene, object, 'left', 500);
        break;
      case 'slide-fade-right':
        CutsceneHelpers.slideFadeInObject(scene, object, 'right', 500);
        break;
      case 'instant':
      default:
        // No animation
        break;
    }
  }
  static fadeInObject(scene: Phaser.Scene, gameObject: Phaser.GameObjects.Text | Phaser.GameObjects.Image, duration: number = 500) {
    gameObject.setAlpha(0);
    scene.tweens.add({
      targets: gameObject,
      alpha: 1,
      duration,
      ease: 'Linear'
    });
  }

  static slideInObject(scene: Phaser.Scene, gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Text, direction: 'left' | 'right', duration: number = 500) {
    const startX = direction === 'left' ? -gameObject.width : scene.scale.width + gameObject.width;
    gameObject.x = startX;
    scene.tweens.add({
      targets: gameObject,
      x: scene.cameras.main.centerX,
      duration,
      ease: 'Cubic.easeOut'
    });
  }

  static slideFadeInObject(scene: Phaser.Scene, gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Text, direction: 'left' | 'right', duration: number = 500) {
    const startX = direction === 'left' ? -gameObject.width : scene.scale.width + gameObject.width;
    gameObject.x = startX;
    gameObject.setAlpha(0);
    scene.tweens.add({
      targets: gameObject,
      x: scene.cameras.main.centerX,
      alpha: 1,
      duration,
      ease: 'Cubic.easeOut'
    });
  }
}
