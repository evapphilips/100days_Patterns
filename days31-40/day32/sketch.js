// Eva Philips
// July 2, 2019
// 100 Days of Generative Patterns, Day 32

// variables
let scl = 20;
let imageArray = [];
let plusArray = [];


function setup(){
    // setup background
    let cvs = createCanvas(600, 600);
	cvs.center('horizontal');

    // //setup "image" array (aka grid of greyscale tiles)
    // for(let i=width/(2*scl); i<width; i+=width/scl){
    //     for(let j=height/(2*scl); j<height; j+=height/scl){
    //         imageArray.push(new Tile(i, j, scl));
    //     }
    // }

    for(let i=0; i<scl + 1; i++){
        for(let j=0; j<scl + 1; j++){
            if(j%2 == 0){
                imageArray.push(new Tile((i* width/scl) + width/(2*scl), j * height/(scl), scl));
            }else if(j%2 == 1){
                imageArray.push(new Tile(i * width/scl, j * height/(scl), scl))
            }
        }
    }

    // create an array of pluses with weights mapped to the "image" array
    for(let l=0; l<imageArray.length; l++){
        let tile = imageArray[l];
        plusArray.push(new Plus(tile.x, tile.y, tile.col, width/scl))
    }
   


}

function draw(){
    // setup background
    background(0, 5);



    for(let k=0; k<imageArray.length; k++){
        let col = imageArray[k].update();
        plusArray[k].update(col);
    }

    // display pluses
    for(let i=0; i<plusArray.length; i++){
        plusArray[i].show();
    }
    



}

//////////////////////////////////////////////////////////////////////////////////////////

class Plus{
    constructor(x, y, col, tileSize){
        this.x = x;
        this.y = y;
        this.th = map(col, 0, 255, tileSize/2, tileSize);
		this.tileSize = tileSize;
		this.dir = Math.round(Math.random())*2-1;
		this.inc = random(0,1);
    }

    show(){
        rectMode(CENTER);
        noFill();
        stroke(255);
        rect(this.x + (this.dir * map(mouseY, 0, height, 1, 10) * this.inc), this.y + (this.dir * map(mouseX, 0, width, 1, 10) * this.inc), this.th, this.th);
        //rect(this.x, this.y, this.tileSize, this.th);
    }

    update(col){
        this.th = map(col, 0, 255, 0, this.tileSize);
    }
}

class Tile{
    constructor(x, y, scl){
        this.x = x;
        this.y = y;
        this.col = random(0, 255);
        this.tileSize = width/scl;
        
        this.xoff = random(0, .25);
        this.dir = Math.round(Math.random())*2-1;

    }

    show(){
        noStroke();
        fill(this.col);
        rect(this.x, this.y, this.tileSize, this.tileSize);
    }

    update(){
        let inc = this.dir * map(mouseX, 0, width, 0, 50);
        return this.col + inc
    }

}
