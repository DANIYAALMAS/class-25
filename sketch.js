const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower
var ground,cannon;
var balls=[]

function preload(){
  bg=loadImage("./assets/background.gif")  
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(0,height-3,width*2,5)
tower=new Tower(150,350,160,310) 
var angle=-PI/4 
cannon=new Cannon(180,110,110,50,angle) 
    
}

function draw(){
    background(0);
 image(bg,0,0,width,height)   
    Engine.update(engine);
 tower.display()   
 ground.display() 
 cannon.display() 
 for(var i=0;i<balls.length;i++){
  showCannonBalls(balls[i],i)   
 }
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
   balls[balls.length-1].shoot() 
  }
  
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
  var  cannonBall =new CannonBall(cannon.x,cannon.y)
  balls.push(cannonBall)
   }  
}
function showCannonBalls(ball,index){
  ball.display()
if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
   Matter.World.remove(world, ball.body);
    balls.splice(index, 1); }

}