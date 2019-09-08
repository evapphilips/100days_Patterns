// Eva Philips
// September 7, 2019
// 100 Days of Generative Patterns, Day 99


// variables
let scl = 30;
let tiles = [];

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width + 1; i+=2*width/scl){
		for(let j=0; j<height + 1; j+=2*height/scl){
		tiles.push(new Tile(i, j));
		}
	}
}



function draw() {
	background(0);

	//let i = map(mouseX, 0, width, 0, 50);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}


}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.i = 0;
		this.j = 0;
		this.dist = 0;
	}

	display(){
		push();
		translate(this.x, this.y);
		rectMode(CENTER);

		stroke(255);
		fill(255);
		//noFill();
		rect(0, 0, width / scl, height / scl);
		rect((this.i * this.dist), (this.i * this.dist), width / scl, height / scl);

		line(width / (2 * scl), -height / (2 * scl), width / (2 * scl) + (this.i * this.dist), -height / (2 * scl) + (this.i * this.dist));
		line(-width / (2 * scl), -height / (2 * scl), -width / (2 * scl) + (this.i * this.dist), -height / (2 * scl) + (this.i * this.dist));
		line(-width / (2 * scl), height / (2 * scl), -width / (2 * scl) + (this.i * this.dist), height / (2 * scl) + (this.i * this.dist));
		line(width / (2 * scl), height / (2 * scl), width / (2 * scl) + (this.i * this.dist), height / (2 * scl) + (this.i * this.dist));
		pop();

	}

	update(){
		let p = map(mouseY, 0, height, 5, 30);
		this.i = map(mouseX, 0, width, -width/p, width/p);
		this.dist = map(int(dist(width/2, height/2, this.x + this.i, this.y + this.i)), 0, width, 0, width/(4*scl));
		//this.j = map(mouseY, 0, height, 0, height/2);
	}
}

