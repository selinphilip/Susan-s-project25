
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball, wall1,wall2,wall3;
var groundSprite,ground;
var dustbinObj, paperObject, groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	groundObject = new Ground(width/2,670,width,20);

    paperObject = new Paper(200,450,70);

	dustbinObj = new dustbinObj(1200,650);

	engine = Engine.create();
	world = engine.world;

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	});

	//Create the Bodies Here.
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  wall1.display();
  wall2.display();
  wall3.display();
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.position,{x:15,y:-15});
	}
}


