import { System } from '../engine/types';
import { RecursionWorld } from '../recursionWorld';
import BaseScene from '../scenes/BaseScene';
import EnemyBehaviorFactory, { IEnemyBehavior } from './EnemyBehaviors/EnemyBehaviorFactory';

export class EnemySystem implements System {
	private behaviors: Record<string, IEnemyBehavior> = {};

	constructor(
		private scene: BaseScene,
		private world: RecursionWorld
	) {
	}

	step({ delta }) {
		this.world.entityProvider.entities.forEach((entity) => {
			const { enemy } = entity;
			if (enemy) {
				if (entity.enemy.behaviorType) {
					this.behaviors[enemy.behaviorType] ??= EnemyBehaviorFactory.create(enemy.behaviorType);

					this.behaviors[enemy.behaviorType].process(this.world, entity, delta);
				}
				enemy.iframes = Math.max(0, (enemy.iframes ?? 0) - delta);
			}
		});
	}
}
