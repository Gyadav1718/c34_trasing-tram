const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1,chain2,chain3,chain,chain1;
var trainSound;
var crashSound;
var flag = 0;
var rock;
function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(600,380,1200,20);
 boggie1 = new Bogi(50,170,50,50)
 boggie2 = new Bogi(150,170,50,50)
 boggie3 = new Bogi(250,170,50,50)
 boggie4 = new Bogi(350,170,50,50)
 boggie5 = new Bogi(450,170,50,50)
 boggie6 = new Bogi(550,170,50,50)
 chain1 =  new Chain(boggie1.body,boggie2.body);
 chain2 =  new Chain(boggie2.body,boggie3.body);
 chain3 =  new Chain(boggie3.body,boggie4.body);
 chain4 =  new Chain(boggie4.body,boggie5.body);
 chain5 =  new Chain(boggie5.body,boggie6.body);

 rock = new Rock(1100,200,100,100)
}

function draw() {
  background(bg);  
  Engine.update(engine);

  chain1.show();
 chain2.show();
 chain3.show();
 chain4.show();
 chain5.show();

boggie1.show();
boggie2.show();
boggie3.show();
boggie4.show();
boggie5.show();
boggie6.show();
 
rock.show();
  }
  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
   Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},{x:0.5,y:0})
   trainSound.play();
    }

    
  
  }
  
  
