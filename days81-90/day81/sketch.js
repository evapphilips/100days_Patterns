// Eva Philips
// August 20, 2019
// 100 Days of Generative Patterns, Day 81

// variables
let scl = 5;
let tiles = [];


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width; i+=width/scl){
			for(let j=0; j<height; j+=height/scl){
			tiles.push(new Tile(i, j, scl))
		}
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
	constructor(x, y, scl){
		this.x = x;
		this.y = y;
		this.incX = 0;
	}

	display(){
		stroke(255);
		noFill();
		strokeWeight(4);
		arc(this.x + width/scl, this.y, width/scl + this.incX, height/scl + this.incY, HALF_PI, PI);
		arc(this.x, this.y + height/scl, width/scl + this.incY, height/scl + this.incX, -PI/2, TWO_PI);
	}

	update(){
		this.incX = map(mouseX, 0, width, 0, width/scl);
		this.incY = map(mouseY, 0, height, 0, width/scl);
	}
}




