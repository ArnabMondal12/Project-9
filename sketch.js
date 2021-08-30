var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}
createEdgeSprite();
function draw() 
{
   background("yellow");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (box. x < 15) {
    box.x = 15 ;
  }

  if (box. x >385) {
    box.x = 385;
  }

  if (box. y < 15) {
    box.y = 15 ;
  }

  if (box. y >385) {
    box.y = 385;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




