import { Player } from "../engine/entities/player";
import { RecursionComponents } from "../engine/entities/types";
import { GameEngine } from "../engine/gameEngine";
import { World } from "../engine/world";
import { CollisionSystem } from "../systems/CollisionSystem";
import { MovementSystem } from "../systems/MovementSystem";
import { DebugRenderer } from "../systems/renderer/DebugRenderer";
import RenderSystem from "../systems/RenderSystem";
import BaseScene from "./BaseScene";

export default class PlayScene extends BaseScene {
    private world: World<RecursionComponents>;

    constructor() {
        super('Play');
    }

    init() {
        super.init();
        this.engine = new GameEngine();
        this.world = new World(this);

        this.engine.addSystem(new RenderSystem(this, this.world.entityProvider, new DebugRenderer(this)));
        this.engine.addSystem(new MovementSystem(this.world.entityProvider));
		this.engine.addSystem(new CollisionSystem(this, this.world));
    }

    create(): void {
		this.world.createEntity(Player, { position: { x: 0, y: 0} });
	}

    update(time: number, delta: number): void {
		this.engine.step(delta);
	}
}