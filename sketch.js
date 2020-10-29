const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, bodies, rect2

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var ball_options = {restitution: 1.0}
  rect1 = Bodies.circle(200,200,50,ball_options)
  var options = {isStatic: true}
  rect2=Bodies.rectangle(400,390,800,50,options)
  World.add(world,rect2)
  World.add(world,rect1)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
rectMode(CENTER)
ellipseMode(RADIUS)
ellipse(rect1.position.x,rect1.position.y,30,30)
rect(rect2.position.x,rect2.position.y,800,50)
}