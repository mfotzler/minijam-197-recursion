import { EntityDefinition, RecursionComponents } from '../../engine/entities/types';
import { RecursionWorld } from '../../recursionWorld';
import { IEnemyBehavior } from './EnemyBehaviorFactory';

export default class NoOpEnemyBehavior implements IEnemyBehavior {
	process(world: RecursionWorld, entity: EntityDefinition<RecursionComponents>): void {}
}
