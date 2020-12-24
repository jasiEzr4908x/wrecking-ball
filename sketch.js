const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,450,1200,20)
box1=new Box(700,400,50,50)
box2=new Box(700,350,50,50)
box3=new Box(700,300,50,50)
box4=new Box(700,250,50,50)
box5=new Box(700,200,50,50)
box6=new Box(700,150,50,50)

box7=new Box(800,400,50,50)
box8=new Box(800,350,50,50)
box9=new Box(800,300,50,50)
box10=new Box(800,250,50,50)
box11=new Box(800,200,50,50)
box12=new Box(800,150,50,50)

ball1=new Ball(500,250,70,70)
rope=new Rope(ball1.body,{x:500,y:50})
}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
     box1.display()
     box2.display()
     box3.display()
     box4.display()
     box5.display()
     box6.display()

     box7.display()
     box8.display()
     box9.display()
     box10.display()
     box11.display()
     box12.display()

     ball1.display()
     rope.display()
}
function mouseDragged(){
    
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    
}