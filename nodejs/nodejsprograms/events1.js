/**
 * Node JS - Example - 2
 */
import events from "events";

function Iteration(num) {
    const emitter = new events.EventEmitter();
    setTimeout(() => {
        for(let intCnt = 1; intCnt <= num; intCnt++){
            emitter.emit("Beforeprocess", intCnt);
            console.log("Process Number : " + intCnt);
            emitter.emit("Afterprocess", intCnt);
        }
    }, 3000);
    return emitter;
}

//Call the method
const iteration = Iteration(3);
iteration.on('Beforeprocess', (data) => {
    console.log("About to start the process " + data);
});

iteration.on('Afterprocess', (data) => {
    console.log("After completed process " + data);
});