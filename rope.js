class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length :200
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }

    display(){
      if(this.rope.bodyA){
          line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
 
      }  
    }
}