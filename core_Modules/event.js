
const EventEmitter=require("events")
const eventEmitter=new EventEmitter();

eventEmitter.on('greet',(name)=>{
console.log(`hello:${name}`);

})

eventEmitter.emit('greet','afdel');