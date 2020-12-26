const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,dustbin1,dustbin2,dustbin3,paper1;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,390,1200,20);
    dustbin1 = new Dustbin(1100,305,20,150);
    dustbin2 = new Dustbin(800,305,20,150);
    dustbin3 = new Dustbin(950,370,280,20);
    paper1 = new Paper(100,300,40);

    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    paper1.display();
    

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
    }
}
