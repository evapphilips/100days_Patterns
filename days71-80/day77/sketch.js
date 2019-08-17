// Eva Philips
// August 16, 2019
// 100 Days of Generative Patterns, Day 77

// variables
let tiles = [];




function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);	

	for(let i=0; i<20; i++){
		tiles.push(new Tile(random(0, width)));
	}

}

function draw() {
	background(0, 10);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	
	
}

class Tile{
	constructor(r){
		this.r = r;
		this.theta = random(0, TWO_PI);
		this.thetaInc = 0;
		this.x = this.r * cos(this.theta + this.thetaInc);
		this.y = this.r * sin(this.theta + this.thetaInc);

	}

	display(){
		fill(255);
		noStroke();
	
		push();
		translate(width/2, height/2)
		ellipse(this.x, this.y, this.r/8);
		pop();

	}

	update(){
		this.thetaInc = map(mouseX, 0, width, 0, 5* TWO_PI);
		this.r = map(mouseY, 0, height, 0, width/2);
		this.x = this.r * cos(this.theta + this.thetaInc);
		this.y = this.r * sin(this.theta +  this.thetaInc);
	}
}