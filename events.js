const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('random', () => {
    console.log("Random event occured");
})
emitter.emit('random');
