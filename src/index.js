const event = require('events');
const readline = require('readline');

const emitter = new event();

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


emitter.on('message', () => console.log('message is work'));

emitter.on('email', () => console.log('email is work'));


interface.question('enter 1="message" or 0="email"', (data) => {
    data === 1 ? emitter.emit('message') : emitter.emit('email');
    });






