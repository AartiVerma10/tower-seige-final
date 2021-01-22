class Sling {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 40
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
        }
    fly(){
        this.sling.bodyA=null;
   
    }
    display(){
        if(this.sling.bodyA){
            this.pointA=this.sling.bodyA.position;
            this.pointB=this.sling.pointB;
            push();
            strokeWeight(4);
            stroke("black");
            line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
            pop();
        }
        else{
            push();
            textSize(30);
            fill("yellow");
            stroke("black");
            strokeWeight(10);
            text("Press Space Bar to attach polygon to the sling",600,50);
            pop(); 
        }

    }
}