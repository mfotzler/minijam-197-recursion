import * as Phaser from 'phaser';
import { EventType, InputType, StepData, System } from '../engine/types';
import { EntityProvider } from '../engine/world/types';
import MessageBus from '../messageBus/MessageBus';
import { RecursionComponents } from '../engine/entities/types';

export default class InputSystem implements System {
    private totalTime = 0;

	constructor(
		scene: Phaser.Scene,
		private entityProvider: EntityProvider<RecursionComponents>
	) {
        scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            if (pointer.leftButtonDown()) {
                this.onLeftMouseDown();
            } else if (pointer.rightButtonDown()) {
                this.onRightMouseDown();
            }
        });

        scene.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
            if (pointer.leftButtonReleased()) {
                this.onLeftMouseUp();
            } else if (pointer.rightButtonReleased()) {
                this.onRightMouseUp();
            }
        })
	}

	step({totalTime}: StepData): Promise<void> | void {
        this.totalTime = totalTime;
	}

    private onLeftMouseDown() {
        const player = this.getPlayer();
        if (player) {
            const { transform, body } = player.render.sprite;
            body.velocity.x = 30;
            MessageBus.sendMessage(EventType.RECORD_INPUT, { input: InputType.RunStart, time: this.totalTime });
        }
    }

    private onLeftMouseUp() {
        const player = this.getPlayer();
        if (player) {
            const { transform, body } = player.render.sprite;
            body.velocity.x = 0;
            MessageBus.sendMessage(EventType.RECORD_INPUT, { input: InputType.RunStop, time: this.totalTime });
        }
    }

    private onRightMouseDown() {
        MessageBus.sendMessage(EventType.RECURSE_GAME);
    }

    private onRightMouseUp() {

    }

    private getPlayer() {
        return this.entityProvider.entities.find(e => e.isPlayer);
    }
}