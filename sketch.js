
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ball_options;
var ground;
var wall1;
var wall2;
var button;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options={
		restitution: 0.3,
		frictionAir: 0.01
		
	}
	ground = new Ground(200,390,400,20);
	wall1 = new Ground(270,355,15,50);
	wall2 = new Ground(380,345,15,70);
	ball = Bodies.circle(140,250,20,ball_options);
	World.add(world,ball);
	button = createImg("up-arrow.jpg");
	button.position(40,30);
	button.size(50,50);
	button.mouseClicked(ballForce);
	Engine.run(engine);
    rectMode(CENTER);
 	ellipseMode(RADIUS);



	 
}


function draw() {
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
	

}
function ballForce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:-0.035});

}

