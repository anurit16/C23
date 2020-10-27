//Name Spacing 
const Engine =Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var box1,box2,ground;



function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld = myEngine.world;

  //JSON format - JSON data structure

  ground = new Ground(400,380,800,20);

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,80);

  //Engine.run(myEngine); run in setup, update in draw
}

function draw() {
  background(0);
  Engine.update(myEngine);
 ground.display(); 

  box1.display();
 box2.display();
}