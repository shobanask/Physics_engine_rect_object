
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

function setup() {
  var canvas = createCanvas(400,400);
  console.log("step1");
  engine=Engine.create();
  world = engine.world;

  var object_options = 
  {isStatic : true}

  console.log("step2");
  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
  //console.log("step3");
  console.log(object);
  //console.log("step4");
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
}

function draw() {
  background("pink");
  //console.log("step5"); 
  Engine.update(engine);
  rectMode(CENTER); 
  //rect(200,200,50,50);
  rect(object.position.x,object.position.y,50,50);
}