import * as Phaser from 'phaser';
import { EventType, InputType, StepData, System } from '../engine/types';
import MessageBus from '../messageBus/MessageBus';

export default class InputSystem implements System {
    private totalTime = 0;

	constructor(
		scene: Phaser.Scene
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
        MessageBus.sendMessage(EventType.ACT_INPUT, { input: InputType.RunStart });
        MessageBus.sendMessage(EventType.RECORD_INPUT, { input: InputType.RunStart, time: this.totalTime });
    }

    private onLeftMouseUp() {
        MessageBus.sendMessage(EventType.ACT_INPUT, { input: InputType.RunStop });
        MessageBus.sendMessage(EventType.RECORD_INPUT, { input: InputType.RunStop, time: this.totalTime });
    }

    private onRightMouseDown() {
        MessageBus.sendMessage(EventType.RECURSE_GAME);
    }

    private onRightMouseUp() {

    }
}