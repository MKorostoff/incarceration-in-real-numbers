// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    velocity = 0.5,
    friction = 0,
    frictionAir = 0,
    frictionStatic = 0.0001,
    restitution = 1,
    circleSize = 6,
    total = 0,
    numberOfCops = 2,
    threshold = 28;


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// create an engine
var engine = Engine.create();
engine.world.gravity.y = 0;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        background: '#57c8ff',
        wireframes: false
    }
});

var options = {
  restitution: restitution,
  render: {
    fillStyle: '#888',
  }
};

// create two boxes and a ground
var objects = [];

for (var i = 0; i < 100; i++) {
  var circ = Bodies.circle(randomBetween(0, 600), randomBetween(0, 600), circleSize, options);
  if (i < numberOfCops) {
    circ.isCop = true;
    circ.render.fillStyle = 'blue';
  }
  objects.push(circ)
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

function stop() {
    velocity = 0;
    friction = 0.1;
    frictionAir = 0.01;
    frictionStatic = 0.5;
    restitution = 0.2;
    engine.world.gravity.y = 1;
};

Events.on(engine, 'afterUpdate', function(event) {
    if (total === threshold) {
        stop();
    }
    for (var ii = 0; ii < 100; ii++) {
        Body.setAngularVelocity(objects[ii], velocity);
        objects[ii].friction = friction;
        objects[ii].frictionAir = frictionAir;
        objects[ii].frictionStatic = frictionStatic;
        objects[ii].restitution = restitution;
    }

});

Events.on(engine, 'collisionStart', function(event) {
    event.source.pairs.collisionStart.forEach(function(collision){
        if (total < threshold && collision.bodyA.label === 'Circle Body' && collision.bodyB.label === 'Circle Body') {
            if (collision.bodyA.isCop && !collision.bodyB.isCop) {
                if (collision.bodyB.render.fillStyle !== 'red') {
                    collision.bodyB.render.fillStyle = 'red';
                    total++;
                    console.log(total);
                }
            }
            if (collision.bodyB.isCop && !collision.bodyA.isCop) {
                if (collision.bodyA.render.fillStyle !== 'red') {
                    collision.bodyA.render.fillStyle = 'red';
                    total++;
                    console.log(total);
                }
            }
        }
    })
});

var isStatic = {isStatic: true};
objects.push(Bodies.rectangle(400, 610, 810, 60, isStatic)); //Floor
objects.push(Bodies.rectangle(400, 0, 810, 60, isStatic)); //Ceiling
objects.push(Bodies.rectangle(0, 400, 60, 800, isStatic)); //Left wall
objects.push(Bodies.rectangle(800, 400, 60, 800, isStatic)); //right wall

objects.forEach(function(obj, i){
    objects[i].friction = friction;
    objects[i].frictionAir = frictionAir;
    objects[i].frictionStatic = frictionStatic;
})
// add all of the bodies to the world
World.add(engine.world, objects);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
