const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block0,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var Ground1,Ground2;
var score=0;
var sling1,polygon1;


function setup (){

    createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    block0=new Block(570,400,30,40)
    block1=new Block(600,400,30,40);
    block2=new Block(630,400,30,40);
    block3=new Block(660,400,30,40);
    block4=new Block(690,400,30,40);
    block5=new Block(720,400,30,40);
    block6=new Block(750,400,30,40);
    block7=new Block(780,400,30,40);

    block8=new Block(750,350,30,40);
    block9=new Block(720,350,30,40);
    block10=new Block(690,350,30,40);
    block11=new Block(660,350,30,40);
    block12=new Block(630,350,30,40);
    block13=new Block(600,350,30,40);

    block14=new Block(630,300,30,40);
    block15=new Block(660,300,30,40);
    block16=new Block(690,300,30,40);
    block17=new Block(720,300,30,40);

    block18=new Block(660,250,30,40);
    block19=new Block(690,250,30,40);

    block20=new Block(675,200,30,40);

    polygon1=new Polygon(100,300,60,60);

    sling1=new SlingShot(polygon1.body,{x:200,y:300});

    Ground1=new Ground(670,500,275,40);
}
    




function draw (){
background("Brown");

text("Score: "+score,700,100);
   

   polygon1.display();
 
   block0.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();

   block8.display();
   block9.display();
   block10.display(); 
   block11.display();
   block12.display();
   block13.display();

   block14.display();
   block15.display();
   block16.display();
   block17.display();

   block18.display();
   block19.display();

   block20.display();

   sling1.display();

   block0.score();
   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();

   block8.score();
   block9.score();
   block10.score(); 
   block11.score();
   block12.score();
   block13.score();

   block14.score();
   block15.score();
   block16.scorey();
   block17.score();

   block18.score();
   block19.score();

   block20.score();

   Ground1.display();

   

}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX , y: mouseY});
}


function mouseReleased(){
 sling1.fly();
}

function keyPressed(){

    if(keyCode===32){
          sling1.attach(polygon1.body);
    }
}