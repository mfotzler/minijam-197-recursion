import { EventType, InputType, StepData, System } from "../engine/types";
import MessageBus from "../messageBus/MessageBus";

export class PlaybackSystem implements System {
    private eventRecord: { input: InputType, time: number, hasRun: boolean }[] = [];

    constructor() {
        MessageBus.subscribe(EventType.RECORD_INPUT, (event) => {
            this.eventRecord.push({ ...event, hasRun: true });
        })
    }

    restart() {
        this.eventRecord.forEach((event) => {
            event.hasRun = false;
        });
    }

    step({ totalTime }: StepData) {
        const toRun = this.eventRecord.filter(e => e.time <= totalTime && !e.hasRun);
        toRun.forEach((e) => {
            MessageBus.sendMessage(EventType.ACT_INPUT, { input: e.input });
            e.hasRun = true;
        });
    }
}