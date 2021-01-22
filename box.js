class Box extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/box.png");
        this.visibility=255;
        this.remove=false;
    }
    display(){
        if(this.body.speed<3.5){
            super.display();
        }
        else{
            World.remove(world,this.body);           
            push();
            this.visibility=this.visibility-40;
            tint(255,this.visibility);
            image(this.image,this.pos.x,this.pos.y, this.width+10, this.height+5);
            pop();
            if(this.remove===false){
                score=score+50;
                this.remove=true;
            }
            
           
        }
        
    }

}