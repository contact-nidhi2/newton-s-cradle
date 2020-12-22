
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj4,bobObj5;
var roof, rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(100,500,30);
	bobObj2 = new Bob(150,500,30);
	bobObj3 = new Bob(200,500,30);
	bobObj4 = new Bob(250,500,30);
	bobObj5 = new Bob(300,500,30);


	roof = new Roof(400,200,800,40);
	rope1 = new Rope(bobObj1.body,roof.body , -60 ,0);
	rope2 = new Rope(bobObj2.body,roof.body , - 60 ,0);
	rope3 = new Rope(bobObj3.body,roof.body , - 60 ,0);
	rope4 = new Rope(bobObj4.body,roof.body , - 60 ,0);
	rope5 = new Rope(bobObj5.body,roof.body , - 60 ,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}



