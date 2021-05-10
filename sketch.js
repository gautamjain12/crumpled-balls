
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rectangle1, rectanle2, rectangle3, ground, ball;
function preload() {

}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400, 790, 800, 20);
  rectangle1 = new Golum(700, 780, 10, 20)

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rectangle1.display();


}



