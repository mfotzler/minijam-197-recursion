
import BaseScene from './BaseScene';
import UIHelpers from '../UIHelpers';

export default class MainMenu extends BaseScene {
	constructor() {
		super('MainMenu');
	}

	preload() {
		super.preload();
		this.load.atlas('PushMan', 'assets/push_man.png', 'assets/push_man.json');
	}

	create() {
		this.anims.createFromAseprite('PushMan');
		
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

		// Side buttons for cutscene testing
		const leftX = 120;
		const baseY = this.cameras.main.centerY - 210;
		const spacing = 60;
		UIHelpers.addButton(this, leftX, baseY + spacing * 0, 'Intro', () => {
			this.fadeToScene('IntroCutscene');
		});
		UIHelpers.addButton(this, leftX, baseY + spacing * 1, 'Sally Meets Visitors', () => {
			this.fadeToScene('SallyMeetsTheVisitors');
		});
		UIHelpers.addButton(this, leftX, baseY + spacing * 2, 'Visitors Under Attack', () => {
			this.fadeToScene('VisitorsUnderAttack');
		});
		UIHelpers.addButton(this, leftX, baseY + spacing * 3, 'Meeting Dowhile', () => {
			this.fadeToScene('MeetingDowhile');
		});
		UIHelpers.addButton(this, leftX, baseY + spacing * 4, 'Final Confrontation', () => {
			this.fadeToScene('FinalConfrontation');
		});
		UIHelpers.addButton(this, leftX, baseY + spacing * 5, 'Epilogue', () => {
			this.fadeToScene('Epilogue');
		});
		UIHelpers.addButton(this, leftX, baseY + spacing * 6, 'Sample Cutscene', () => {
			this.fadeToScene('SampleCutscene');
		});
	}
}
