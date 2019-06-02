class Tile{
    constructor(x, y, w, h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    display(){
        rectMode(CENTER);
        noStroke();
        fill(0);
        rect(this.x, this.y, this.w-5, this.h-5)
        
    }
}