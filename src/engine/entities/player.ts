import { Direction } from "../types";
import { RecursionComponents } from "./types";

export const Player: RecursionComponents = {
    isPlayer: true,
    position: { x: 0, y: 0 },
    movement: { hasGravity: true },
    collision: { },
    facing: { direction: Direction.RIGHT },
    render: {
        spriteKey: 'Player',
        width: 20,
        height: 40,
        fillColor: 0x2060d0
    }
};
