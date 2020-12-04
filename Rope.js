class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           pointB:{x:offsetX , y:this.offsetY}
         }
     
         this.chain = Constraint.create(options)
         World.add(world,this.chain)


    }
display(){
    var pointA = this.chain.bodyA.position
    var pointC = this.chain.bodyB.position
    push();
    strokeWeight(3);
    line(pointA.x,pointA.y,pointC.x,pointC.y)
    pop();

}

}