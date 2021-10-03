
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roofObject, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	// ground = new Ground(700, 690, width, 5);
	roofObject = new roof(400, 250, 230, 20)
	bobObject1 = new bob(320, 575, 40);
	bobObject2 = new bob(360, 575, 40);
	bobObject3 = new bob(400, 575, 40);
	bobObject4 = new bob(440, 575, 40);
	bobObject5 = new bob(480, 575, 40);
	rope1 = new rope(bobObject1.body, roofObject.body, -80, 0);
	World.add(world, rope1);
	rope2 = new rope(bobObject2.body, roofObject.body, -40, 0);
	World.add(world, rope2)
	rope3 = new rope(bobObject3.body, roofObject.body, 0, 0);
	World.add(world, rope3);
	rope4 = new rope(bobObject4.body, roofObject.body, 40, 0);
	World.add(world, rope4);
	rope5 = new rope(bobObject5.body, roofObject.body, 80, 0);
	World.add(world, rope5);

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	background(255);
	text(mouseX + ", " + mouseY, mouseX, mouseY)
	if (keyDown("space")) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -20, y: -2 });
	}


	roofObject.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();


}



