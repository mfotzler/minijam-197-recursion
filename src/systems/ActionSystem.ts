import { RecursionComponents } from "../engine/entities/types";
import { EventType, InputType, StepData, System } from "../engine/types";
import { EntityProvider } from "../engine/world";
import MessageBus from "../messageBus/MessageBus";

export class ActionSystem implements System {
    constructor(private entityProvider: EntityProvider<RecursionComponents>) {
        MessageBus.subscribe(EventType.ACT_INPUT, this.executeAction.bind(this));
    }

    step(data: StepData) {}

    private executeAction({ input }) {
        const player = this.getPlayer();

        switch (input) {
            case InputType.RunStart:
                if (player) {
                    const { transform, body } = player.render.sprite;
                    body.velocity.x = 100;
                }
                break;

            case InputType.RunStop:
                if (player) {
                    const { transform, body } = player.render.sprite;
                    body.velocity.x = 0;
                }
        }
    }

    private getPlayer() {
        return this.entityProvider.entities.find(e => e.isPlayer);
    }
}