// Eva Philips
// July 31, 2019
// 100 Days of Generative Patterns, Day 61



// variables
let scl = 30;
let tileSize;
let tiles = [];


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(220);

	tileSize = width / scl;

	for (let i = 0; i < width; i += tileSize) {
		for (let j = 0; j < height; j += tileSize) {
			tiles.push(new Tile(i, j));
		}
	}


}



function draw() {
	background(0, 20);

	for (let i = 0; i < tiles.length; i++) {
		tiles[i].display();
		tiles[i].update();
	}


}

class Tile {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.theta = random(0, PI/2);
		this.inc = 0;
		this.dir = Math.round(random())*2-1;
		this.xoff = tileSize * cos(this.theta + this.inc);
		this.yoff = tileSize * sin(this.theta + this.inc);

	}

	display() {
		stroke(50);
		strokeWeight(2);

		line(this.x, this.y, this.x + this.xoff, this.y + this.yoff);
	}

	update(){
		if(mouseX>this.x && mouseX<this.x+(5*tileSize) && mouseY>this.y && mouseY<this.y+(5*tileSize)){
			this.inc = this.dir * map(mouseX, 0, width, 0, TWO_PI);
			this.leninc = this.dir * map(mouseY, 0, height, 0, tileSize);
		this.xoff = (tileSize + this.leninc) * cos(this.theta + this.inc);
		this.yoff = (tileSize + this.leninc) * sin(this.theta + this.inc);
		}
		

	}


}

