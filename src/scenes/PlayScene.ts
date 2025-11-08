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
import { SpriteRenderer } from "../systems/renderer/SpriteRenderer";
import RenderSystem from "../systems/RenderSystem";
import BaseScene from "./BaseScene";

export default class PlayScene extends BaseScene {
    private world: RecursionWorld;
    private playbackSystem: PlaybackSystem;
    private renderSystem: RenderSystem<RecursionComponents>;

    constructor() {
        super('Play');
    }

    preload() {
        super.preload();

        this.load.tilemapTiledJSON('map1', 'assets/maps/1.json');
		this.load.image('tiles', 'assets/sci-fi-platformer-tiles-32x32-extension.png');
    }

    init() {
        super.init();
        
        this.engine = new GameEngine();
        this.world = new RecursionWorld(this);

        this.playbackSystem = new PlaybackSystem();
        this.renderSystem = new RenderSystem(this, this.world.entityProvider, new SpriteRenderer(this));

        this.engine.addSystem(this.playbackSystem);
        this.engine.addSystem(this.renderSystem);
        this.engine.addSystem(new ActionSystem(this.world.entityProvider));
        this.engine.addSystem(new MovementSystem(this.world.entityProvider));
		this.engine.addSystem(new CollisionSystem(this, this.world));
        this.engine.addSystem(new InputSystem(this));
        this.engine.addSystem(new EnemySystem(this, this.world));

        MessageBus.subscribe(EventType.RECURSE_GAME, this.recurse.bind(this));
    }

    create(): void {
        this.anims.createFromAseprite('PushMan');
		this.initializeMapAndCameras();

        this.recurse();
	}

    update(time: number, delta: number): void {
		this.engine.step(delta);
	}

    private initializeMapAndCameras(): void {
		this.world.initializeMap('map1');
        this.world.collisionLayer.renderDebug(this.add.graphics());

		this.cameras.main.setBounds(0, 0, this.world.map.widthInPixels, this.world.map.heightInPixels);
	}

    private recurse() {
        // gotta reset everything but keep the playback
        this.renderSystem.destroyAll();
        this.engine.reset();
        this.world.reset();
        this.playbackSystem.restart();

        this.world.createEntity(Player, { position: { x: 100, y: 100} });
        this.world.createEntity(PushMan, { position: { x: 1000, y: 150 } });
    }
}