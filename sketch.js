var moving, fixed, s1, s2, s3, s4
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400,200,50,70);
  fixed.shapeColor = "blue";
  moving = createSprite(200,200,70,50);
  moving.shapeColor = "red";
  s1 = createSprite(200,100,20,20);
  s1.shapeColor = "orange";
  s1.velocityX = 3;
  s2 = createSprite(600,100,20,20);
  s2.shapeColor = "pink";
  s2.velocityX = -3;
  s3 = createSprite(200,300,20,20);
  s3.shapeColor = "green";
  s3.velocityX = 3;
  s4 = createSprite(600,300,20,20);
  s4.shapeColor = "grey";
  s4.velocityX = -3;
}

function draw() {
  background(0);  
  moving.x = World.mouseX ;
  moving.y = World.mouseY ;
 if(isTouching(moving, fixed)){
   fixed.shapeColor = "lime";
   moving.shapeColor = "yellow"
 }
 else{
   fixed.shapeColor = "blue";
   moving.shapeColor = "red";
 }
 bounceOff(s1,s2)
 collide(s3,s4)
  drawSprites();
}