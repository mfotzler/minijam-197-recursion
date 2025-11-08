import { EventType, System } from './types';
import MessageBus from '../messageBus/MessageBus';

export class GameEngine {
	private totalTime: number = 0;
	public systems: { system: System; runWhenPaused: boolean }[] = [];
	public isPaused: boolean = false;

	addSystem(system: System, runWhenPaused: boolean = false): void {
		this.systems.push({ system, runWhenPaused });
	}

	getSystem<T extends System>(name: string): T | undefined {
		return this.systems.find(({ system }) => system.constructor.name === name)?.system as
			| T
			| undefined;
	}

	step(delta: number): void {
		this.totalTime += delta;
		MessageBus.sendMessage(EventType.STEP_BEGIN);
		this.systems.forEach(async ({ system, runWhenPaused }) => {
			if (this.isPaused && !runWhenPaused) return;
			await system.step({ delta, totalTime: this.totalTime });
		});
		MessageBus.sendMessage(EventType.STEP_END);
	}
}
