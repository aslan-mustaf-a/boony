var garden,rabbit,apple,wall1,wall2;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(random(50,350),30,10,10);
apple.addImage(appleImg);
apple.scale = 0.09
apple.velocityY = 4;

wall1 = createSprite(0,200,1,400);
wall2 = createSprite(400,200,1,400);

}


function draw() {
  background(0);

  drawSprites();

  if(rabbit.isTouching(wall1)){
    rabbit.x = rabbit.x + 2;
  }
  
  if(rabbit.isTouching(wall2)){
    rabbit.x = rabbit.x - 2;
  }
  
  if(apple.isTouching(rabbit)){
    apple.y = 40;
    apple.x = random(50,350);
  }
 
  if(apple.y > 400){
    apple.y = 30;
    apple.x = random(50,350);
  }
  
  if(keyDown("left")){
    rabbit.x = rabbit.x - 2;
  }

  if(keyDown("right")){
    rabbit.x = rabbit.x + 2;
  }

}