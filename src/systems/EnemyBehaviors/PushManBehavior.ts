import { EntityDefinition, RecursionComponents } from "../../engine/entities/types";
import { RecursionWorld } from "../../recursionWorld";
import { IEnemyBehavior } from "./EnemyBehaviorFactory";

export class PushManBehavior implements IEnemyBehavior {
    static readonly key = 'pushman';

    process(world: RecursionWorld, entity: EntityDefinition<RecursionComponents>): void {
        const { enemy, render } = entity;
        if (!enemy || !render?.sprite) return;

        const { body } = render.sprite;

        enemy.stateTime = (enemy.stateTime ?? 0) + 1;

        if (enemy.stateTime == 1) {
            body.setVelocity(-50, 0);
        } else if (enemy.stateTime <= 20) {
            body.velocity.add({ x: -15, y: 0 });
        }

        if (enemy.stateTime > 30 && enemy.stateTime < 38) {
            body.velocity.add({ x: 0, y: -50 });
        } else if (enemy.stateTime == 60) {
            body.setVelocity(0, 0);
        } else if (enemy.stateTime >= 60 && enemy.stateTime < 90) {
            body.velocity.add({ x: 0, y: 20 });
        }

        if (enemy.stateTime == 90) {
            body.setVelocity(0, 0);
        } else if (enemy.stateTime >= 120) {
            enemy.stateTime = 0;
        }
    }

}