import { EntityDefinition, RecursionComponents } from "../../engine/entities/types";
import { RecursionWorld } from "../../recursionWorld";
import { IEnemyBehavior } from "./EnemyBehaviorFactory";

export class PushManBehavior implements IEnemyBehavior {
    static readonly key = 'pushman';

    private currentTime: number;
    private delta: number;

    private passedTime(t: number) {
        return this.currentTime < t && this.currentTime + this.delta >= t;
    }

    process(world: RecursionWorld, entity: EntityDefinition<RecursionComponents>, delta: number): void {
        const { enemy, render } = entity;
        if (!enemy || !render?.sprite) return;

        const { body } = render.sprite;

        enemy.stateTime = (enemy.stateTime ?? 0);

        this.currentTime = enemy.stateTime;
        this.delta = delta;

        if (enemy.stateTime == 0) {
            body.setVelocity(-50, 0);
        }
        if (enemy.stateTime < 330) {
            body.velocity.add({ x: -1 * delta, y: 0 });
        }

        if (enemy.stateTime > 500 && enemy.stateTime < 600) {
            body.velocity.add({ x: 0, y: -2 * delta });
        }
        if (this.passedTime(1000)) {
            body.setVelocity(0, 0);
        }
        if (enemy.stateTime >= 1000 && enemy.stateTime < 1500) {
            body.velocity.add({ x: 0, y: 1.5 * delta });
        }

        if (this.passedTime(2000)) {
            enemy.stateTime = 0;
        } else {
            enemy.stateTime += delta;
        }
    }

}