class Log{

    //BACKEND- COMPUTER MEMORY
    constructor(x, y, height, angle){
    
        var options={
            restitution:0.8,
            friction:0.5,
            dentsity:1
        }
    
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20;
        this.height= height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    
    }
    
    display(){
    var pos = this.body.position;
    var angle= this.body.angle;
    push();
    fill("white");
    strokeWeight(5);
    stroke("blue");
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0, this.width,this.height);
    pop();
    
    }
    
    
    
    
    
    }