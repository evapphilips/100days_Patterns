// Eva Philips
// September 4, 2019
// 100 Days of Generative Patterns, Day 96


// variables
let scl = 10;
let tiles = [];
let angs = [];


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	angs = [0, PI/2];


	for(let i=0; i<width; i+=width/scl){
			for(let j=0; j<height; j+=height/scl){
			tiles.push(new Tile(i, j, scl))
		}
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
	constructor(x, y, scl){
		this.x = x;
		this.y = y;
		this.ang = angs[floor(random(0, 2))];
		this.incA = 0;
		this.scl = scl;

	}

	display(){
		noStroke();
		fill(255);
		push();
		translate(this.x + width/(2*this.scl), this.y + height/(2*this.scl));
		rotate(this.ang + this.incA);
		arc(0, 0, width/(this.scl), width/(this.scl), 0, PI);

		stroke(255);
		noFill();
		arc(0, 0, width/(this.scl), width/(this.scl), PI, TWO_PI);
	
		pop();
	}

	update(){
		this.incA = map(mouseX, 0, width, 0, PI/2);
	}
}




