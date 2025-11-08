import * as Phaser from 'phaser';
import MessageBus from './messageBus/MessageBus';
import MainMenu from './scenes/MainMenu';
import PlayScene from './scenes/PlayScene';
import InMemoryStorageProvider from './messageBus/inMemoryStorageProvider';

MessageBus.initialize(new InMemoryStorageProvider());

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#aaaaee',
  title: 'Minijam Template',
  scale: {
    width: 1280,
    height: 720,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [MainMenu, PlayScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  }
});
