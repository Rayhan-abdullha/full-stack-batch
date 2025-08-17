const EventEmitter = require('events')
const myFirstEmitter = new EventEmitter()

myFirstEmitter.on('greeting', (name) => {
    console.log('hello', name)
})
myFirstEmitter.emit('greeting', 'Hi, Rayhan')