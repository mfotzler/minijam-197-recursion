import { Player } from "../engine/entities/player";
import { RecursionComponents } from "../engine/entities/types";
import { GameEngine } from "../engine/gameEngine";
import { EventType } from "../engine/types";
import { World } from "../engine/world";
import MessageBus from "../messageBus/MessageBus";
import { CollisionSystem } from "../systems/CollisionSystem";
import InputSystem from "../systems/InputSystem";
import { MovementSystem } from "../systems/MovementSystem";
import { PlaybackSystem } from "../systems/PlaybackSystem";
import { DebugRenderer } from "../systems/renderer/DebugRenderer";
import RenderSystem from "../systems/RenderSystem";
import BaseScene from "./BaseScene";

export default class PlayScene extends BaseScene {
    private world: World<RecursionComponents>;
    private playbackSystem: PlaybackSystem;

    constructor() {
        super('Play');
    }

    init() {
        super.init();
        
        this.playbackSystem = new PlaybackSystem();

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
        this.engine = new GameEngine();
        this.world = new World(this);
        this.engine.addSystem(this.playbackSystem);
        this.engine.addSystem(new RenderSystem(this, this.world.entityProvider, new DebugRenderer(this)));
        this.engine.addSystem(new MovementSystem(this.world.entityProvider));
		this.engine.addSystem(new CollisionSystem(this, this.world));
        this.engine.addSystem(new InputSystem(this, this.world.entityProvider));

        this.world.createEntity(Player, { position: { x: 0, y: 0} });
    }
}