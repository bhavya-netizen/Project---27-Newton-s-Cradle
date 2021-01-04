
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 50;
	var posX = width/2;
	var posY = height/4 + 200;

	roof = new Roof(width/2, height/4, 270, 15);

    bob1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter, posY, bobDiameter);
	bob3 = new Bob(posX, posY, bobDiameter);
	bob4 = new Bob(posX + bobDiameter, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter*2, posY, bobDiameter);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0); 
 	rope4 = new Rope(bob4.body, roof.body, bobDiameter*1, 0); 
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#E2A4BC");

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-65, y:-55});
	} 

if (keyCode === DOWN_ARROW) {
	 Matter.Body.applyForce(bob5.body,bob5.body.position,{x:65, y:55});  
    }
} 

	