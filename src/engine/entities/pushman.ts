import { PushManBehavior } from "../../systems/EnemyBehaviors/PushManBehavior";
import { RecursionComponents } from "./types";

export const PushMan: RecursionComponents = {
    position: { x: 0, y: 0 },
    movement: { hasGravity: false },
    collision: { withEnvironment: true },
    render: {
        spriteSheet: 'PushMan',
        width: 128,
        height: 128,
        fillColor: 0x604010,
        currentAnimation: 'Push'
    },
    enemy: {
        behaviorType: PushManBehavior.key
    }
}