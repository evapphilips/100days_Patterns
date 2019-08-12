// Eva Philips
// August 10, 2019
// 100 Days of Generative Patterns, Day 71

// variables
let tiles = [];



function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	for(let i=0; i<TWO_PI; i+=PI/80){
		tiles.push(new Tile(i));
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
	constructor(theta){		
		this.theta = theta;
		this.r = map(sin(theta), -1, 1, 0, width/2)
		this.inc = 0;
		this.warp = 0;
	}

	display() {
		push();
		translate(width/2, height/8);
		// draw line
		stroke(255);
		strokeWeight(.3);
		line(0, height/2 +this.y, this.x + this.warp, this.y);
		pop();

	}

	update(){
		this.inc = map(mouseX, 0, width, 0, width);
		this.x = (this.r - this.inc) * cos(this.theta);
		this.y = (this.r - this.inc) * sin(this.theta);
		this.warp = map(mouseY, 0, height, -this.y, this.y);

	}
}
