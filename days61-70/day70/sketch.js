// Eva Philips
// August 9, 2019
// 100 Days of Generative Patterns, Day 70



// variables
let tiles = [];




function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	for(let i=0; i<50; i++){
		tiles.push(new Tile(width/i, -1));
	}
	for(let i=0; i<50; i++){
		tiles.push(new Tile(width/i, 1));
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
	constructor(w, dir){
		this.w = w;
		this.h = w;
		this.incW = 0;
		this.posX = 0;
		this.incX = 0;
		this.dir = dir;

		this.stk = map(this.w, 0, width, 1, 10);


	}

	display(){
		rectMode(CENTER);
		push();
		noFill();
		stroke(255);
		strokeWeight(this.stk);
		translate(width/2, height/2);
		rect(this.posX + this.incX, 0, this.w + this.incW, this.w + this.incW);
		pop();

	}

	update(){
		this.incW = map(mouseX, 0, width, 0, width/4);
		this.posX = this.dir * map(mouseX, 0, width, 0, this.h);

	}
}

