
class Block{
    constructor(x,y,width,height){
            var options={
                isStatic:false,
                restitution:0.1,
                density:0.04,
                friction:2
            }
            this.visiblity=225;
            this.width=width;
            this.height=height;
            this.body=Bodies.rectangle(x,y,width,height,options);
            World.add(world,this.body);
        } 

        score(){
               if (this.visiblity<0 && this.visiblity>-105) {
                   score++;
               }
       } 

        display(){
          
            if (this.body.speed<8) {

                var pos= this.body.position;
                var angle= this.body.angle;
    
                push();
                strokeWeight(3);
                translate(pos.x,pos.y);
                rotate(angle);
                rectMode(CENTER);
                rect(0, 0,this.width,this.height);
                pop();
                
            } else {
                World.remove(world,this.body);
                push()
                this.visiblity= this.visiblity-5;
                pop()
                
            }
           
        }
    }