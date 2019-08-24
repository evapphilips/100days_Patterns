// Eva Philips
// August 24, 2019
// 100 Days of Generative Patterns, Day 85

// variables
let scl = 20;
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
		this.len = random(width/(2*scl), width/4);
		this.siz = 20;
	}

	display(){
		stroke(map(this.len, width/(2*scl), width/4, 100, 255));
		noFill();
		strokeWeight(map(this.len, width/(2*scl), width/4, 5, .125));
		push();
		translate(this.x + width/(2*this.scl), this.y + height/(2*this.scl));
		rotate(this.ang + this.incA);
		ellipse(this.len, this.len, this.siz, this.siz);
		pop();
	}

	update(){
		this.incA = map(mouseX, 0, width, 0, PI);
		this.siz = map(mouseY, 0, height, 0, 30);
	}
}




