import type { Renderable } from '../../systems/renderer/types';
import { Direction } from '../types';

export interface RenderComponentBase {
	spriteKey?: string;
	spriteSheet?: string;
	sprite?: Renderable;
	scale?: number;
	currentAnimation?: string;
	tickDelay?: number;
	width?: number;
	height?: number;
	fillColor?: number;
}

export interface FacingComponentBase {
	direction: Direction;
}

export interface RenderableEntityComponents {
	render: RenderComponentBase;
	position?: PositionComponent;
	facing?: FacingComponentBase;
}

export type EntityDefinition<TComponents> = TComponents & {
	id: string;
};

export const isRenderableEntity = <TComponents>(
	entity: EntityDefinition<TComponents>
): entity is EntityDefinition<TComponents & RenderableEntityComponents> => {
	return 'render' in entity;
};

export interface PositionComponent {
	x: number;
	y: number;
}

export interface MovementComponent {
	hasGravity?: boolean;
}

export interface CollisionComponent {
	blocked?: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;
	withEnvironment?: boolean;
	withPlayer?: boolean;
}

export interface EnemyComponent {
	behaviorType: string;
	iframes?: number;
	stateTime?: number;
}

export interface RecursionComponents {
	position?: PositionComponent;
	movement?: MovementComponent;
	facing?: FacingComponentBase;
	collision?: CollisionComponent;
	render?: RenderComponentBase;
	isPlayer?: boolean;
	enemy?: EnemyComponent;
}
