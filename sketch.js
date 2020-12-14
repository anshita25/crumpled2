


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Cball(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Paper(1200,650);

	

	

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(250);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-145});

    
  	}
}





