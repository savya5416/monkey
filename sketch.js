var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
 movingrect = createSprite(500,300,40,60);
 movingrect.shapeColor="blue";
 fixedrect = createSprite(200,300,40,60);
 fixedrect.shapeColor="blue";
  
}

function draw() {
  background(0); 
 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2
&& fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2
&& movingrect.y- fixedrect.y < movingrect.height/2 + fixedrect.height/2 
&& fixedrect.y- movingrect.y <movingrect.height/2 + fixedrect.height/2){

    
    fixedrect.shapeColor=   "green";
    movingrect.shapeColor=  "green";
 }

  else {
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }

  drawSprites();
}