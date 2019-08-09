// Eva Philips
// August 8, 2019
// 100 Days of Generative Patterns, Day 69



// variables
let tiles = [];
let scl = 60;



function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	for(let i=0; i<scl; i++){
		
		tiles.push(new Tile(map(i, 0, scl, 0, 255), map(i, 0, scl, 0, width)));
	}

}



function draw() {
	background(0);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	
}

class Tile{
	constructor(col, off){
		this.col = col;
		this.incX = 0;
		this.incY = 0;
		this.off = off;

	}

	display(){
		//fill(this.col);
		noFill();
		stroke(this.col);
		strokeWeight(2);
		triangle(width/2, this.off, 0 + this.incX + this.off, height, width- this.incX - this.off, height);


	}

	update(){
		this.incX = mouseX;

	}
}
