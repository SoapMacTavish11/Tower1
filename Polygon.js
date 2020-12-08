class Polygon{
    constructor(x,y,width,height){ 
      var options ={
          density:0.50,
          isStatic:false,
          restitution:0,
          friction:1, 
      }
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      this.image=loadImage("polygon.png");
      World.add(world,this.body);
  }
  
  display(){
    var pos = this.body.position;
    image (this.image,pos.x,pos.y,this.width,this.height);
    imageMode(CENTER);
  
  }
  }
  
  
  
  
  
  