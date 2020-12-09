var fixed,moving;

function setup() {
  createCanvas(1200,800);
  fixed= createSprite(200, 200, 50, 80);
moving=createSprite(400,200,80,30);
fixed.shapeColor="green";
moving.shapeColor="green";
object1 = createSprite(100,100,50,50);
object2 = createSprite(200,100,50,50);
object3 = createSprite(300,100,50,50);
object4 = createSprite(400,100,50,50);
object1.shapeColor = "green"
object2.shapeColor = "green"
object3.shapeColor = "green"
object4.shapeColor = "green"
}


function draw() {
  background(0);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(isTouching(moving,object2)){
    object2.shapeColor = "blue"
    moving.shapeColor = "blue"
  }
  else{
    object2.shapeColor = "green"
    moving.shapeColor = "green"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
  }
  else{
    return false;

  }

}