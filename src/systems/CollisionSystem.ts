import { EventType, System } from '../engine/types';
import BaseScene from '../scenes/BaseScene';
import MessageBus from '../messageBus/MessageBus';
import { RecursionWorld } from '../recursionWorld';
import { RecursionComponents } from '../engine/entities/types';

export class CollisionSystem implements System {
	constructor(
		scene: BaseScene,
		private world: RecursionWorld
	) {
		MessageBus.subscribe(
			EventType.ENTITY_SPRITE_ADDED,
			({ entity }: { entity: RecursionComponents }) => {
				if (!entity.collision || !entity.render?.sprite) return;

				if (entity.collision.withEnvironment) {
					scene.physics.add.existing(entity.render.sprite.body.gameObject);
					scene.physics.add.collider(entity.render.sprite.body.gameObject, world.collisionLayer);
				}
			}
		);
	}

	step() {
		this.world.entityProvider.entities.forEach((entity) => {

		});
	}
}