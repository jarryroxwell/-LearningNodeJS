var events = require('events');
var util = require('util');

var myEmit = new events.EventEmitter();


/* 
    myEmit.on('click', (a)=>{
        ...
    });
*/
myEmit.on('some_event', (a)=>{
    console.log(a);
});

myEmit.emit('some_event', "hello world. this is my event.");



var Cars = function(model){
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('x6');
var audi = new Cars('a7');
var lada = new Cars('kalina');

var cars = [bmw, audi, lada];
cars.forEach((car)=>{
    car.on('some_event', (a)=>{
        console.log(car.model, a);
    });
});

bmw.emit('some_event',"no bmw hahah");
lada.emit('some_event',"ohoho");