import { EntityDefinition, RecursionComponents } from '../../engine/entities/types';
import { RecursionWorld } from '../../recursionWorld';
import NoOpEnemyBehavior from './NoOpEnemyBehavior';
import { PushManBehavior } from './PushManBehavior';

export interface IEnemyBehavior {
	process(world: RecursionWorld, entity: EntityDefinition<RecursionComponents>): void;
}

export default class EnemyBehaviorFactory {
	static create(type?: string): IEnemyBehavior {
		switch (type) {
			case PushManBehavior.key:
				return new PushManBehavior();
			default:
				return new NoOpEnemyBehavior();
		}
	}
}
