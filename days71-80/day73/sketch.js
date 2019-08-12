// Eva Philips
// August 12, 2019
// 100 Days of Generative Patterns, Day 73

// variables
let tiles = [];
let scl = 10;

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	for(let i=0; i<width; i+=width/scl){
		tiles.push(new Tile(i, 1));
	}
	for(let i=0; i<width; i+=width/scl){
		tiles.push(new Tile(i, -1));
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
	constructor(r, dir){
		this.r = r;
		this.posX = 0;
		this.posY = 0;
		this.maxX = map(this.r, 0, width, width/2, 0);
		this.inc = 0;
		this.dir = dir;
	}

	display(){
		rectMode(CENTER);
		strokeWeight(map(this.r, 0, width, .0001, 4));
		// noStroke();
		// fill(map(this.r, 0, width, 100, 255), map(this.r, 0, width, 100, 0));
		
		stroke(255);
		noFill();

		push();
		translate(width/2, height/2);
		rect(this.posX, this.posY, this.r - this.inc, this.r);
		pop();

	}

	update(){
		this.posX = this.dir * map(mouseX, 0, width, 0, this.maxX);
		//this.posY = this.dir * map(mouseY, 0, height, 0, this.maxX);
		this.inc = map(mouseX, 0, width, 0, this.r);

	}
}
