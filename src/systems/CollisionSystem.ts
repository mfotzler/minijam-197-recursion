import { EventType, System } from '../engine/types';
import BaseScene from '../scenes/BaseScene';
import MessageBus from '../messageBus/MessageBus';
import * as Phaser from 'phaser';
import type { World } from '../engine/world';
import { RecursionComponents } from '../engine/entities/types';

export class CollisionSystem implements System {
	constructor(
		scene: BaseScene,
		private world: World<RecursionComponents>
	) {
		MessageBus.subscribe(
			EventType.ENTITY_SPRITE_ADDED,
			({ id }: { id: string; }) => {
				const entity = world.entityProvider.getEntity(id);
				if (!entity.collision) return;

				// if (entity.collision.withEnvironment) {
				// 	scene.physics.add.existing(entitySprite.body);
				// 	scene.physics.add.collider(entitySprite, world.wallLayer);
				// }
			}
		);
	}

	step() {
		this.world.entityProvider.entities.forEach((entity) => {

		});
	}
}