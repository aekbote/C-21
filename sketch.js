var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	ground = new Ground(width/2,790,width,20);
	leftSide = new Ground(600,720,20,120);
	rightSide = new Ground(850,720,20,120);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);

  leftSide.show();
  rightSide.show();
  ground.show();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60});
	}
}



