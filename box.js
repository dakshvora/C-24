class box{

    //COMPUTERS MEMMORY
constructor(x,y,width,height){

this.width = width;
this.height = height;

var options = {
restitution:0.8,
friction:1,
density:1
}
this.body = Bodies.rectangle(x,y,width,height, options);
World.add(world,this.body);
}

//OUTPUT SCREEN
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("yellow");
strokeWeight(5);
stroke("brown");
rect(0,0,this.width,this.height);
pop();
}

}
