// Eva Philips
// August 13, 2019
// 100 Days of Generative Patterns, Day 74

// variables
let tiles = [];

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);	

	for(let i=0; i<TWO_PI; i+= PI/50){
		tiles.push(new Tile(i));
	}
}

function draw() {
	background(0, 20);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	

}

class Tile{
	constructor(theta){
		this.theta = theta;
		this.col = 255;
		this.r = random(0, width/2);
		this.siz = map(this.r, 0, width/2, 0, 20);
		this.x = this.r * cos(this.theta);
		this.y = this.r * sin(this.theta)
		this.inc = 0;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		fill(this.col);
		noStroke();
		push();
		translate(width/2, height/2);
		ellipse(this.x, this.y, this.siz, this.siz);
		pop();
	}

	update(){
		this.incX = this.dir * map(mouseX, 0, width, 0, width/2);
		this.incY = this.dir * map(mouseY, 0, height, 0, height/2);
		this.x = (this.r + this.incX) * cos(this.theta);
		this.y = (this.r + this.incY)  * sin(this.theta);
	}

}
