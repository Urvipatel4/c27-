class String{
    constructor(bodyA,bodyB){
        var options = {
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 0.04,
           length: 10,
        }
        this.string= Constraint.create(options)
        World.add(world,this.string)
    }
    display(){
        var pos1= this.string.bodyA.position
        var pos2= this.string.bodyB.position
        strokeWeight(4)
        stroke("red")
        line(pos1.x,pos1.y,pos2.x,pos2.y)
    }
}