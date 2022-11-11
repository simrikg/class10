
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50)
 trex.addAnimation("runnuing",trex_running)
 trex.scale=0.5;
 ground = createSprite(200,180,400,20)
 ground.velocityX = -2;
 ground.addImage(groundimage)
}

function draw(){
  background("white")
  //to make trex jump
  if(keyDown("space")){
    trex.velocityY=-6;
  }
  // to make infinite ground
  if(ground.x<0){
ground.x=ground.width/2
  }

  trex.velocityY=trex.velocityY + 0.5;
  trex.collide(ground);
  drawSprites();

}
