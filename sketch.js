function preload() {
  boy1=loadAnimation('selfimages/boy1.png','selfimages/boy2.png','selfimages/boy3.png','selfimages/boy4.png', 'selfimages/boy5.png', 'selfimages/boy6.png')
  bgmain = loadImage ('selfimages/bg1.png') 
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200,800,400)
  bg.addImage(bgmain)
  bg.scale = 0.8
  bg.velocityX = -9
  bg1 = createSprite(1200,200,800,400)
  bg1.addImage(bgmain)
  bg1.scale = 0.8
  bg1.velocityX = -9
boy = createSprite(400, 200, 50, 50);
boy.addAnimation("playerImage",boy1)
ig = createSprite(400,250,800,10)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(bg.x<-400){
    bg.x=1150
  }
  if(bg1.x<-400){
    bg1.x=1150
  }
  boy.velocityY = boy.velocityY+0.5
  if(keyDown(UP_ARROW)&& boy.y>100){
    boy.velocityY = -6
  }
boy.collide(ig)
}