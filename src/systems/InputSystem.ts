import * as Phaser from 'phaser';
import { ActionType, EventType, InputType, StepData, System } from '../engine/types';
import MessageBus from '../messageBus/MessageBus';

export default class InputSystem implements System {
    private totalTime = 0;
    private actionType: ActionType;

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

        MessageBus.subscribe(EventType.CHANGE_ACTION, (e) => {
            this.actionType = e;
        })
	}

	step({totalTime}: StepData): Promise<void> | void {
        this.totalTime = totalTime;
	}

    private onLeftMouseDown() {
        const input = this.actionType == ActionType.Run ? InputType.RunStart : InputType.Jump;
        MessageBus.sendMessage(EventType.ACT_INPUT, { input });
        MessageBus.sendMessage(EventType.RECORD_INPUT, { input, time: this.totalTime });
    }

    private onLeftMouseUp() {
        if (this.actionType == ActionType.Jump) return;
        const input = InputType.RunStop;
        MessageBus.sendMessage(EventType.ACT_INPUT, { input });
        MessageBus.sendMessage(EventType.RECORD_INPUT, { input, time: this.totalTime });
    }

    private onRightMouseDown() {
        MessageBus.sendMessage(EventType.RECURSE_GAME);
    }

    private onRightMouseUp() {

    }
}