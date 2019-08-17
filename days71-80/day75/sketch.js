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

	for(let i=0; i<1; i++){
		tiles.push(new Tile(random(0, width/2)));
	}
}

function draw() {
	background(0, 5);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	
}

class Tile{
	constructor(r){
		this.r = r;
		this.theta1 = random(0, TWO_PI);
		this.theta2 = random(0, TWO_PI);
		this.inc1 = 0;
		this.inc2 = 0;
		this.x1 = this.r * cos(this.theta1 + this.inc1);
		this.y1 = this.r * sin(this.theta1 + this.inc1);
		this.x2 = this.r * cos(this.theta2 + this.inc2);
		this.y2 = this.r * sin(this.theta2 + this.inc2);
		this.w = random(1, 20);
	}

	display(){
		push();
		translate(width/2, height/2);
		stroke(255);
		strokeWeight(this.w);
		//triangle(0, 0, this.x1, this.y1, this.x2, this.y2);
		line(this.x1, this.y1, this.x2, this.y2);
		pop();
	}

	update(){
		this.inc1 = map(mouseX, 0, width, 0, TWO_PI);
		this.inc2 = map(mouseY, 0, height, 0, TWO_PI);
		this.x1 = this.r * cos(this.theta1 + this.inc1);
		this.y1 = this.r * sin(this.theta1 + this.inc1);
		this.x2 = this.r * cos(this.theta2 + this.inc2);
		this.y2 = this.r * sin(this.theta2 + this.inc2);
		
	}
}



