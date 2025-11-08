import { ActionType, EventType, InputType, StepData, System } from "../engine/types";
import MessageBus from "../messageBus/MessageBus";

export class PlaybackSystem implements System {
    private static eventRecord: { input: InputType, time: number, hasRun: boolean }[] = [];

    constructor() {
        MessageBus.subscribe(EventType.RECORD_INPUT, (event) => {
            PlaybackSystem.eventRecord.push({ ...event, hasRun: true });
        });
        MessageBus.subscribe(EventType.CHANGE_ACTION, (action) => {
            PlaybackSystem.eventRecord = PlaybackSystem.eventRecord.filter(e => {
                if (action == ActionType.Run) {
                    return e.input != InputType.RunStart && e.input != InputType.RunStop;
                } else if (action == ActionType.Jump) {
                    return e.input != InputType.Jump;
                }
            });
        })
    }

    restart() {
        PlaybackSystem.eventRecord.forEach((event) => {
            event.hasRun = false;
        });
    }

    step({ totalTime }: StepData) {
        const toRun = PlaybackSystem.eventRecord.filter(e => e.time <= totalTime && !e.hasRun);
        toRun.forEach((e) => {
            MessageBus.sendMessage(EventType.ACT_INPUT, { input: e.input });
            e.hasRun = true;
        });
    }
}