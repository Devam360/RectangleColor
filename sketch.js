var frect,mrect;

function setup() {
  createCanvas(800,400);
 frect= createSprite(400,200,30,60);
 frect.shapeColor="red";
 mrect=createSprite(400,200,60,30);
 mrect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  console.log(mrect.y-frect.y);
if(mrect.x-frect.x< mrect.width/2+frect.width/2 
  && frect.x-mrect.x< mrect.width/2+frect.width/2&& 
  frect.y-mrect.y<mrect.height/2+frect.height/2&& mrect.y-frect.y<mrect.width/2+frect.width/2)
{
  mrect.shapeColor="blue";
  frect.shapeColor="blue";
}
else{
  mrect.shapeColor="red";
  frect.shapeColor="red";

  

}  drawSprites();
}