class bob {
    constructor(x, y ,r){
        var options={
            restitution:20,
            friction:2.5,
            density:1.2
                } 

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options )
        World.add(world,this.body); 
        
    }
    display(){
        var papos = this.body.position;

        push()
        translate(papos.x ,papos.y);
        rectMode(CENTER);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();


    }
}
