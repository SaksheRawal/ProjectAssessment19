var sword,swordImg;
var PLAY=1,END=0,gameState=PLAY;
var fruitImg;
var fruitGroup
var enemyGroup,enemyImg;
var score=0

function preload(){
swordImg=loadImage("sword.png");
fruitImg1=loadImage("fruit1.png")  ;
fruitImg2=loadImage("fruit2.png")  ;
fruitImg3=loadImage("fruit3.png")  ;
fruitImg4=loadImage("fruit4.png")  ;
enemyImg=loadImage("alien1.png")   ;
gameoverImg=loadImage("gameover.png");
gameoverSound=loadSound("gameover.mp3")  ;
knifeSound=loadSound("knifeSwooshSound.mp3")  
 
}
function setup(){
 createCanvas(500,500)
 fruitGroup=new Group();
 enemyGroup=new Group();
sword=createSprite(40,200,20,20);
sword.addImage(swordImg);  
sword.scale=0.7
  
}

function draw(){
 background("lightblue")
  if(gameState==PLAY){
       
  fruit();
  Enemy();
  sword.x=mouseX
  sword.y=mouseY
  
   
 if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach()
  score=score+1
   knifeSound.play();
  }
   if(enemyGroup.isTouching(sword)){
  enemyGroup.destroyEach()
  fruitGroup.destroyEach()
  enemyGroup.setVelocityXEach(0);
   fruitGroup.setVelocityXEach(0);  
   gameState=END
   sword.addImage(gameoverImg) ;
   gameoverSound.play()}
  }
     
 
 
            
drawSprites();
  text("score "+score ,10,50)
}
function fruit(){
if(frameCount%100===0) {
var fruit=createSprite(0,0,10,15)  ;
fruit.velocityX=9+score/4

fruit.y=Math.round(random(50,450))
 fruit.lifetime=200
  var R=Math.round(random(1,4))
  switch(R){
  case 1: fruit.addImage(fruitImg1);break;
  case 2: fruit.addImage(fruitImg2);break;
  case 3: fruit.addImage(fruitImg3);break;
  case 4: fruit.addImage(fruitImg4)
  }
  fruit.scale=0.2;
  fruitGroup.add(fruit) ;
   } 
  
}
function Enemy(){
if(frameCount%200===0) {
var enemy=createSprite(0,0,10,15)  ;
enemy.velocityX=9+score/10

enemy.y=Math.round(random(50,450))
 enemy.lifetime=200
enemy.addImage(enemyImg)
  enemy.scale=1.2;
  enemyGroup.add(enemy) ;
   } 
  
}


