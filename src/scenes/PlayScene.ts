import { Player } from "../engine/entities/player";
import { PushMan } from "../engine/entities/pushman";
import { RecursionComponents } from "../engine/entities/types";
import { GameEngine } from "../engine/gameEngine";
import { EventType } from "../engine/types";
import MessageBus from "../messageBus/MessageBus";
import { RecursionWorld } from "../recursionWorld";
import { ActionSystem } from "../systems/ActionSystem";
import { CollisionSystem } from "../systems/CollisionSystem";
import { EnemySystem } from "../systems/EnemySystem";
import InputSystem from "../systems/InputSystem";
import { MovementSystem } from "../systems/MovementSystem";
import { PlaybackSystem } from "../systems/PlaybackSystem";
import { DebugRenderer } from "../systems/renderer/DebugRenderer";
import RenderSystem from "../systems/RenderSystem";
import BaseScene from "./BaseScene";

export default class PlayScene extends BaseScene {
    private world: RecursionWorld;
    private playbackSystem: PlaybackSystem;
    private renderSystem: RenderSystem<RecursionComponents>;

    constructor() {
        super('Play');
    }

    init() {
        super.init();
        
        this.engine = new GameEngine();
        this.world = new RecursionWorld(this);

        this.playbackSystem = new PlaybackSystem();
        this.renderSystem = new RenderSystem(this, this.world.entityProvider, new DebugRenderer(this));

        this.engine.addSystem(this.playbackSystem);
        this.engine.addSystem(this.renderSystem);
        this.engine.addSystem(new ActionSystem(this.world.entityProvider));
        this.engine.addSystem(new MovementSystem(this.world.entityProvider));
		this.engine.addSystem(new CollisionSystem(this, this.world));
        this.engine.addSystem(new InputSystem(this));
        this.engine.addSystem(new EnemySystem(this, this.world));

        MessageBus.subscribe(EventType.RECURSE_GAME, this.recurse.bind(this));

        this.recurse();
    }

    create(): void {
		
	}

    update(time: number, delta: number): void {
		this.engine.step(delta);
	}

    private recurse() {
        // gotta reset everything but keep the playback
        this.renderSystem.destroyAll();
        this.engine.reset();
        this.world.reset();
        this.playbackSystem.restart();

        this.world.createEntity(Player, { position: { x: 100, y: 100} });
        this.world.createEntity(PushMan, { position: { x: 1000, y: 500 } });
    }
}