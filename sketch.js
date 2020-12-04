const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
  createCanvas(1960, 500);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 300, 10);

  ground = new Ground(400, 380, 800, 20);
  
  leftSide = new Dustbin(525,330, 20, 80);
  bottom = new Dustbin(610, 360, 150, 20);
  rightSide = new Dustbin(695, 330, 20, 80);
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}