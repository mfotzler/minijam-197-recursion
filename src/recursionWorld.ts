import { RecursionComponents } from "./engine/entities/types";
import { World } from "./engine/world";

export class RecursionWorld extends World<RecursionComponents> {
    public reset() {
        this.entityProvider.destroy();
    }
};