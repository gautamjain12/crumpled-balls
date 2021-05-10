class plinko{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    this.x=x;
    this.y=y;
    ellipse(this.x,this.y,this.r,options);
}
}