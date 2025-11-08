import * as Phaser from 'phaser';
import MessageBus from './messageBus/MessageBus';

import MainMenu from './scenes/MainMenu';
import PlayScene from './scenes/PlayScene';
import InMemoryStorageProvider from './messageBus/inMemoryStorageProvider';
import CutsceneTest from './scenes/CutsceneTest';
import IntroCutsceneScene from './scenes/IntroCutsceneScene';

MessageBus.initialize(new InMemoryStorageProvider());

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#aaaaee',
  title: 'Minijam Template',
  scale: {
    width: 960,
    height: 540,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MainMenu, CutsceneTest, IntroCutsceneScene, PlayScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  disableContextMenu: true
});
