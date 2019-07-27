// Eva Philips
// July 27, 2019
// 100 Days of Generative Patterns, Day 57



// variables
let scl = 10;
let tiles = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<scl + 1; i++){
		for(let j=0; j<2*scl + 1; j++){
		//for(let j=height/(2*scl); j<height; j+=height/scl){
			if(j%2){
				tiles.push(new Tile(i*width/scl + width/(scl*2), j*height/(2*scl)));
			}else{
				tiles.push(new Tile(i*width/scl, j*height/(2*scl)));
			}
			
		}
	}

}


function draw(){
	background(0, 20);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.inc = 0;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		noFill();
		stroke(255);
		strokeWeight(2);
		ellipse(this.x, this.y, width/(5*scl) + this.inc, width/(5*scl) + this.inc);
		ellipse(this.x, this.y, width/(2*scl) + this.inc, width/(2*scl) + this.inc);
		ellipse(this.x, this.y, width/scl + this.inc, width/scl + this.inc);
	}

	update(){
		this.inc = this.dir * map(mouseX, 0, width, 0, 20);
	}
}
