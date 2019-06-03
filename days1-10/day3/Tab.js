class Tab{
    constructor(){
        this.x = random(0, width)
        this.y = random(0, height)
        this.w = random(1, 75);
        this.h = random (1, 50);
        this.dirX = Math.round(Math.random()) * 2 - 1
        this.dirY = Math.round(Math.random()) * 2 - 1  
        this.col = random(30, 255); 
    }

    display(){
        // setup rectangle settings
        rectMode(CENTER);
        fill(this.col);
        noStroke();
    
        // map to mouse position
        let widthInd = this.dirX*map(mouseX, 0, width, 10, 20);
        let heightInd = this.dirY*map(mouseY, 0, height, 20, 80);

        // draw rectangle
        rect(this.x, this.y, this.w + widthInd, this.h + heightInd, abs((this.w + widthInd /2)));

    }
}