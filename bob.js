class Bob {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
        restitution:1,
        friction:1,
        density:1.2   
    }
      this.x = x;
      this.y = y;
      this.r = r
      
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
      World.add(world, this.body);
  
    }
    display(){

       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       strokeWeight(3)
       stroke("black");
       fill("#663a82");
       ellipse(0, 0, this.radius,this.radius);
       pop();

    }
 }
