class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1=loadImage("sprites/sling1.png");//first half of catapult 
        this.sling2=loadImage("sprites/sling2.png");//second alf of catapult 
        this.sling3=loadImage("sprites/sling3.png");//band image 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
            image (this.sling1,200,25)
            image (this.sling2,170,25)
            
        if(this.sling.bodyA){
            //is the point at center of the bird 
            var pointA = this.sling.bodyA.position;
            //fixed point on canvas 
            var pointB = this.pointB;
push ()
        if(pointA.x < 200) {

            strokeWeight(7);
            stroke (48,22,8)
           line(pointA.x-25, pointA.y, pointB.x-10, pointB.y); //elastic joint
           line (pointA.x-25, pointA.y, pointB.x+25, pointB.y) ;
           image (this.sling3,pointA.x-25,pointA.y-7,19,33);
            }
            //dragged from right side 
            else 
            {
                stroke (48,22,8)
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y); //elastic joint
                 line (pointA.x+25, pointA.y, pointB.x+25, pointB.y) ;
                image (this.sling3,pointA.x+25,pointA.y-7,19,33);

            }
            pop ()
        }

    }
    
}