//NAMESPACE: NICKNAMES TO MODULES
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//VARIABLES
var engine, world;
var ground1, ball;
var box1;
var pig1, pig2;
var bird1;
var log1, log2;
function setup(){
    canvas = createCanvas(800,800);

    //1. CREATE UR ENGINE- MECHANICS
    engine = Engine.create();
    //2. World from ur engine
    world = engine.world;

    //3. bodies from the class
    ground1 = new ground(400,780,800,20);
    bird1 = new Bird(100,100);
    box1 = new box(70,50,50,50);
    box2 = new box(50,150,50,50);
    pig1 = new Pig(500,500);
    pig2= new Pig(530,300);
  //  log1 = new Log(500, 200,300,PI);
    
}
function draw(){
    background(0);
    //UPDATES YOUR VALUES
    Engine.update(engine);

    //DISPLAY
    box1.display();
    box2.display(); 
    pig1.display();
    pig2.display();
    ground1.display();
    bird1.display();
    //log1.display();
}