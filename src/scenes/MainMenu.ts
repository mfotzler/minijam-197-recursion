
import BaseScene from './BaseScene';
import UIHelpers from '../UIHelpers';

export default class MainMenu extends BaseScene {
	constructor() {
		super('MainMenu');
	}

	preload() {
		super.preload();
		this.load.aseprite('PushMan', 'assets/push_man.png', 'assets/push_man.json');
	}

	create() {
		this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY - 60,
			'Recursion Game',
			{
				fontFamily: 'Rubik',
				fontSize: '96px',
				color: '#000000',
				fontStyle: 'bold',
				align: 'center',
			}
		).setOrigin(0.5);

		this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY + 20,
			'by slowback1, axlehulk, tesserex, and mafcho',
			{
				fontFamily: 'Rubik',
				fontSize: '36px',
				color: '#000000',
				align: 'center',
			}
		).setOrigin(0.5);

		UIHelpers.addCenteredButton(
			this,
			this.cameras.main.centerY + 120,
			'Test Cutscenes',
			() => {
				this.fadeToScene('CutsceneTest');
			}
		);

		UIHelpers.addCenteredButton(
			this,
			this.cameras.main.centerY + 170,
			'Intro',
			() => {
				this.fadeToScene('IntroCutscene');
			}
		);

		UIHelpers.addCenteredButton(
			this,
			this.cameras.main.centerY + 220,
			'Play',
			() => {
				this.fadeToScene('Play');
			}
		);
	}
}
