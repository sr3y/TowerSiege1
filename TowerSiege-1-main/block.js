class Block{
    constructor(x, y, width, height){

        var options = {
            isStatic: false,
            restitution: 0.2,
            friction: 1.0,
            density: 1.0

        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
        
    }
    display(){

        var bPos = this.body.position;
        push();
        translate(bPos.x, bPos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height)
        pop();

    }

}