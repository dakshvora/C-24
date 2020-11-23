class Bird{

    //BACKEND- COMPUTER MEMORY
    constructor(x, y){
    
        var options={
            restitution:0.8,
            friction:0.5,
            dentsity:1
        }
    
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height= 50;
        World.add(world,this.body);
    
    }
    
    display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle= this.body.angle;
    push();
    fill("red");
    strokeWeight(5);
    stroke("blue");
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    rect(0,0, this.width,this.height);
    pop();
    
    }
    
    
    
    
    
    }