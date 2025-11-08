import { RecursionComponents } from "./engine/entities/types";
import { World } from "./engine/world";

export class RecursionWorld extends World<RecursionComponents> {
    public collisionLayer: Phaser.Tilemaps.TilemapLayer;

    public reset() {
        this.entityProvider.destroy();
    }

    initializeMap(key: string): void {
		this.map = this.scene.make.tilemap({ key });
		const tileset = this.map.addTilesetImage('Scifi', 'tiles');
		this.wallLayer = this.map.createLayer(0, tileset, 0, 0);
        this.collisionLayer = this.map.createLayer('Collision', tileset, 0, 0);
        this.collisionLayer.setCollisionByExclusion([-1]);

        this.wallLayer.setDepth(-2);
        this.collisionLayer.setDepth(-1);
	}
};