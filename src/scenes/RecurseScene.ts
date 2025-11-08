import Phaser from "phaser";
import BaseScene from "./BaseScene";
import UIHelpers from "../UIHelpers";
import { ActionType } from "../engine/types";

export default class RecurseScene extends BaseScene {
    constructor() {
        super({ key: "Recurse" });
    }

    create() {
        const cam = this.cameras.main;
        const cx = cam.centerX;
        const cy = cam.centerY;

        const menuW = 320;
        const menuH = 400;
        const menuX = cx - menuW / 2;
        const menuY = cy - menuH / 2;
        const borderColor = 0x222222;
        const bgColor = 0xffffff;
        const bgAlpha = 0.9;

        // background & border
        const g = this.add.graphics();
        g.fillStyle(bgColor, bgAlpha);
        g.fillRoundedRect(menuX, menuY, menuW, menuH, 8);
        g.lineStyle(4, borderColor, 1);
        g.strokeRoundedRect(menuX, menuY, menuW, menuH, 8);

        // title (optional)
        this.add.text(cx, menuY + 18, "Menu", {
            fontFamily: "Arial",
            fontSize: "20px",
            color: "#000000",
        }).setOrigin(0.5);

        // two buttons
        const btnY1 = menuY + 96;
        const btnY2 = menuY + 180;

        UIHelpers.addCenteredButton(
            this,
            btnY1,
            'Run',
            () => {
                this.fadeToScene('Play', { action: ActionType.Run });
            }
        );
        UIHelpers.addCenteredButton(
            this,
            btnY2,
            'Jump',
            () => {
                this.fadeToScene('Play', { action: ActionType.Jump });
            }
        );
    }
}