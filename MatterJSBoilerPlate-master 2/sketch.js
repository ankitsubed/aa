const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ball,man;
var man1,edge;

function setup() {
	createCanvas(400, 340);
 ball = createSprite(200,170,10,10);
 man = createSprite(200,300,70,10);
 man1 = createSprite(200,30,70,10);
 edge = createSprite(400,340,800,10);


//edge = new Edge(400,340,800,10);
edge2 = new Edge(400,340,10,800);
edge3 = new Edge(0.5,340,10,800);
edge4 = new Edge(400,0.5,800,10);

  
}


function draw() {
background(0);

if (keyDown("space")){
	ball.velocityX = -3;
	ball.velocityY = 4;
}

bounceOff(ball,edge);
 
  
//edge.display();
edge2.display();
edge3.display();
edge4.display();
  drawSprites();
}

function bounceOff(object1,object2){
	if (object1.x - object2.x < object2.width/2 + object1.width/2
	  && object2.x - object1.x < object2.width/2 + object1.width/2) {
	  object1.velocityX = object1.velocityX * (-1);
	  object2.velocityX = object2.velocityX * (-1);
	}
	if (object1.y - object2.y < object2.height/2 + object1.height/2
	  && object2.y - object2.y < object2.height/2 + object1.height/2) {
		object1.velocityY = object1.velocityY * (-1);
		object2.velocityY = object2.velocityY * (-1);
	} 
  }



