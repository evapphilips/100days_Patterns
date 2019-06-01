class Tile{
    constructor(x, y, numTiles, dir){
        this.x = x
        this.y = y
        this.numTiles = numTiles
        this.dir = dir;

    }

    display(col, rot, siz){
        // rectangle settings
        rectMode(CENTER);
        noFill();

        // map rectanlge variables to the mouse
        push();
        translate(this.x, this.y); // center position

        stroke(map(mouseY, 0, width, 0, 220)); // color
        //stroke(col)
        
        rotate(this.dir * map(mouseY, 0, width, 0, 2*PI)) // angle
        //rotate(this.dir * map(rot, 0, 255, 0, 2*PI))

        let rectSize = map(mouseX, 0, width, 1, (width/2)/numTiles); // size
        //let rectSize = map(siz, 0, 255, 0, width/numTiles)
        
        // draw rectangle
        rect(0, 0, rectSize, rectSize);
        pop();
    }
}


