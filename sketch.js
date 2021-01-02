var mario,mario_running,bigMario,bigMario_running,powerMario,powerMario_img;
var backgr1,backgr1_img,backfinish,backfinish_img;
var brick1,brick1_img,brick2,brick2_img,bricksGroup,brick3,brick3_img;
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obstaclesGroup;
var score=0;
var gameOver,gameover_img,restart,restart_img;
var powerup,powerup_img,flower,flower_img;
var coin,coin_img,fire,fire_img;
var qm,qm_img;
var ground,ground_img;
var gameState=PLAY;
var PLAY=1;
var END=0;

function preload(){
 
    backgr1_img=loadImage("back4.jpg");
    backfinish_img=loadImage("marioback.png");
    mario_running=loadAnimation("mario1.png", "mario2.png");
    //bigMario_running=loadAnimation("bigmario1.png","bigmario2.png");
    obs1=loadImage("insect.png");
    obs2=loadImage("turtle.gif");
    obs3=loadImage("turtle2.jpg");
    //obs4=loadImage("pipe3.png");
    obs5=loadImage("pipe1.png");
    obs6=loadImage("pipe2.jpg");
    obs7=loadImage("pipe4.png");
    brick1_img=loadImage("brick.png");
    brick2_img=loadImage("brick2.png");
    gameover_img=loadImage("gameover.jpg");
    restart_img=loadImage("restart.png");
    coin_img=loadImage("coin.jpg");
    fire_img=loadImage("fire.png");
    powerup_img=loadImage("powerup.png");
    flower_img=loadImage("flower.png");
    brick3_img=loadImage("block.png");
    powerMario_img=loadImage("mariop.gif");  
    ground_img=loadImage("ground2.png");
    }
      
    function setup() {
      createCanvas(800, 600);

      mario = createSprite(50,490,10,10);
     mario.addAnimation("mario",mario_running);
     mario.scale =0.3;

ground=createSprite(400,535,800,20);
ground.visible=false;

    }
      function draw() {
     background(backgr1_img);
      
      
        
        
        
        
    mario.collide(ground) ;   
        drawSprites();
      
      }