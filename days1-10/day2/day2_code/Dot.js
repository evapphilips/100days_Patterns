class Dot{
    constructor(x, y, numTiles){
        this.x = x
        this.y = y
        this.r = random(width/(numTiles * 2), width/(numTiles * .75));
        //this.r = width/(numTiles*2);
        this.dirX = Math.round(Math.random())*2-1;
        this.dirY = Math.round(Math.random())*2-1;
    }

    display(){
        fill(235);
        noStroke();

        let xInd = this.dirX*map(mouseX, 0, width, 0, width/(2*numTiles))
        let yInd = this.dirY*map(mouseY, 0, height, 0, height/(2*numTiles))
        
        ellipse(this.x + xInd, this.y + yInd, this.r);
    }
}