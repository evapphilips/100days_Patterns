// Eva Philips
// August 23, 2019
// 100 Days of Generative Patterns, Day 84

// variables
let scl = 30;
let tiles = [];
let angs = [];


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	angs = [0, PI/2, PI, TWO_PI];


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
		this.ang = angs[floor(random(0, 3))];
		this.incA = 0;
		this.scl = scl;

	}

	display(){
		stroke(255);
		fill(255);
		rectMode(CENTER);
		push();
		translate(this.x + width/(2*this.scl), this.y + height/(2*this.scl));
		rotate(this.ang + this.incA);
		//line(0, 0, this.len, this.len);
		ellipse(this.x, this.y, 10, 10);
		pop();
	}

	update(){
		this.incA = map(mouseX, 0, width, 0, PI/2);
	}
}




