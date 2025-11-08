import * as Phaser from 'phaser';
import MessageBus from '../messageBus/MessageBus';
import { GameEngine } from '../engine/gameEngine';

interface StartCallbackConfig {
	fadeInDuration?: number;
}

export default class BaseScene extends Phaser.Scene {
	private isFading = false;
	protected engine: GameEngine;

	preload() {
		this.load.atlas('textures', 'assets/texture.png', 'assets/texture.json');
		this.load.image('segfault-squad', 'assets/segfault_squad.png');
		this.load.image('recursion-fairy-tired', 'assets/recursion_fairy_tired.png');
		this.load.image('recursion-fairy-at-desk', 'assets/recursion-fairy-at-desk.png');
		this.load.image('garbage-collectors', 'assets/garbage_collectors.png');

		this.load.bitmapFont(
			'rubik',
			'assets/fonts/rubik-font_0.png',
			'assets/fonts/rubik-font.fnt'
		);
		this.load.bitmapFont(
			'main-font',
			'assets/fonts/minogram_6x10.png',
			'assets/fonts/minogram_6x10.xml'
		);
		this.load.bitmapFont(
			'main-font-black',
			'assets/fonts/minogram_6x10_black.png',
			'assets/fonts/minogram_6x10.xml'
		);
		this.load.bitmapFont(
			'main-font-contrast',
			'assets/fonts/minogram_6x10_contrast.png',
			'assets/fonts/minogram_6x10.xml'
		);
	}

	init(_data?: unknown) {
		MessageBus.clearAllSubscribers();

		this.events.on('create', () => this.start(this, this.scene.settings.data), this);
		this.events.on('ready', this.start, this);
		this.events.on('wake', this.start, this);
		this.events.on('resume', this.start, this);
		this.events.on('start', this.start, this);
	}

	fadeToScene(key: string, args?: Record<string, unknown>) {
		if (this.isFading) return;
		this.cameras.main.fadeOut(300);
		this.isFading = true;
		this.input.keyboard.enabled = false;
		this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
			this.scene.sleep();
			this.scene.start(key, { fadeInDuration: 300, ...args });
			this.isFading = false;
		});
	}

	start(_scene: Phaser.Scene, { fadeInDuration }: StartCallbackConfig = {}) {
		if (fadeInDuration) {
			this.cameras.main.fadeIn(fadeInDuration);
			this.isFading = true;
			this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => {
				this.input.keyboard.enabled = true;
				this.isFading = false;
			});
		} else {
			this.cameras.main.resetFX();
			this.input.keyboard.enabled = true;
		}
	}
}
