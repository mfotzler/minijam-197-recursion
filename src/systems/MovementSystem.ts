import { Direction, StepData, System } from '../engine/types';
import { EntityProvider } from '../engine/world/types';
import { PHYSICS_CONSTANTS } from '../constants';
import { RecursionComponents } from '../engine/entities/types';

export class MovementSystem implements System {
	private gravity: number = PHYSICS_CONSTANTS.GRAVITY;
	constructor(
		private world: EntityProvider<RecursionComponents>
	) {}

	private calculateDownwardVelocity(initialVelocity: number, delta: number) {
		const newVelocity = initialVelocity + this.gravity * (delta / 1000);
		return Math.min(newVelocity, PHYSICS_CONSTANTS.MAX_DOWNWARD_VELOCITY);
	}

	step({ delta }: StepData) {
		this.world.entities.forEach(({ movement, collision, render, facing }) => {
			if (render) {
				const sprite = render.sprite;
				if (sprite?.body) {
					if (movement?.hasGravity) {
						sprite.body.velocity.y = this.calculateDownwardVelocity(sprite.body.velocity.y, delta);
					}

					if (collision && sprite) {
						collision.blocked = { ...sprite.body.blocked };
					}

					if (facing) {
						if (sprite.body.velocity.x > 0) {
							facing.direction = Direction.RIGHT;
						} else if (sprite.body.velocity.x < 0) {
							facing.direction = Direction.LEFT;
						}
					}
				}
			}
		});
	}
}