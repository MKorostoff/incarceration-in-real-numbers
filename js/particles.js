// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// create an engine
var engine = Engine.create();
engine.world.gravity.y = 0;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

var options = {
  restitution: 1,
  render: {
    fillStyle: 'blue',
  }
};

// create two boxes and a ground
var objects = [];

for (var i = 0; i < 100; i++) {
  objects.push(Bodies.circle(randomBetween(0, 600), randomBetween(0, 600), 5, options))
}
function getPosition(ball){
    return {
        x: ball.position.x,
        y: ball.position.y
    }

};
function getForce() {
    var diceRoll = Math.random();
    if (diceRoll < 0.25) {
        return {x: -0.0003, y: 0};
    }
    else if (diceRoll < 0.5) {
        return {x: 0.0003, y: 0};
    }
    else if (diceRoll < 0.75) {
        return {x: 0, y: 0.0003};
    }
    else {
        return {x: 0, y: -0.0003};
    }
}

setTimeout(function(){
    for (var ii = 0; ii < 100; ii++) {
        Body.applyForce(
            objects[ii],
            getPosition(objects[ii]),
            getForce()
        )
    }
}, 0);

Events.on(engine, 'afterUpdate', function(event) {
    for (var ii = 0; ii < 100; ii++) {
        Body.setAngularVelocity(objects[ii], 0.5);
    }
});

var isStatic = {isStatic: true};
objects.push(Bodies.rectangle(400, 610, 810, 60, isStatic)); //Floor
objects.push(Bodies.rectangle(400, 0, 810, 60, isStatic)); //Ceiling
objects.push(Bodies.rectangle(0, 400, 60, 800, isStatic)); //Left wall
objects.push(Bodies.rectangle(800, 400, 60, 800, isStatic)); //right wall

objects.forEach(function(obj, i){
    objects[i].friction = 0;
    objects[i].frictionAir = 0;
    objects[i].frictionStatic = 0.0001;
})
// add all of the bodies to the world
World.add(engine.world, objects);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
