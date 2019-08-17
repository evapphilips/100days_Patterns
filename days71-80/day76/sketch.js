// Eva Philips
// August 14, 2019
// 100 Days of Generative Patterns, Day 75

// variables
let tiles = [];




function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);	

	for(let i=0; i<10; i++){
		tiles.push(new Tile());
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
	constructor(){
		this.rx = random(0, width/2);
		this.ry = random(0, height/2);
		this.incX = 0;
		this.incY = 0;
		this.dirX = Math.round(Math.random())*2-1;
		this.dirY = Math.round(Math.random())*2-1;
		this.strokeW = random(0, 10);


	}

	display(){
		noFill();
		stroke(map(this.rx + this.incX, 0, width, 255, 0));
		strokeWeight(this.strokeW);
		push();
		translate(width/2, height/2)
		ellipse(0, 0, this.rx + this.incX, this.ry + this.incY);
		pop();

	}

	update(){
		this.incX = this.dirX * map(mouseX, 0, width, 0, width/2);
		this.incY = this.dirY * map(mouseY, 0, height, 0, height/2);
	}
}