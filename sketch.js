var box;
function setup() {
  
  createCanvas(600,600);
  box = createSprite(200,200,20,20);
  box.shapeColor =  "black"
}

function draw() 
{
  
  background("blue");
  if(keyDown("A")){
    box.x = box.x-3;
  }
  if(keyDown("D")){
    box.x = box.x+3;
  }
  if(keyDown("W")){
    box.y = box.y-3;
  }
  if(keyDown("S")){
    box.y = box.y+3;
  }
drawSprites();
}




