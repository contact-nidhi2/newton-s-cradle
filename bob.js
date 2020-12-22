class Bob{
    constructor(x,y,radius){
       var options ={
            sStatic: false,
            restitution :0.4,
            friction :0.5,
            density :1.2
        }
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body)
	this.radius = radius;
   
    }
    display(){
		var pos =this.body.position;
		var angle =this.body.angle;
		push();
		translate(pos.x,pos.y);
		rotate(angle);
		fill("purple")
		ellipseMode(RADIUS);
		ellipse(0,0,this.radius,this.radius);
		pop();
    }
}
