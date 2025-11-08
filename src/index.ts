import * as Phaser from 'phaser';
import MessageBus from './messageBus/MessageBus';

import MainMenu from './scenes/MainMenu';
import PlayScene from './scenes/PlayScene';
import InMemoryStorageProvider from './messageBus/inMemoryStorageProvider';
import CutsceneTest from './scenes/CutsceneTest';


import IntroCutsceneScene from './scenes/IntroCutsceneScene';
import ExtraCutsceneScenes from './scenes/ExtraCutsceneScenes';

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
  scene: [
    MainMenu,
    CutsceneTest,
    IntroCutsceneScene,
  ExtraCutsceneScenes.VisitorsUnderAttackScene,
  ExtraCutsceneScenes.MeetingDowhileScene,
  ExtraCutsceneScenes.FinalConfrontationScene,
  ExtraCutsceneScenes.EpilogueScene,
    PlayScene
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  disableContextMenu: true
});
