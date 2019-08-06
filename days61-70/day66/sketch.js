// Eva Philips
// August 5, 2019
// 100 Days of Generative Patterns, Day 66



// variables
let scl = 10;
let tiles = [];

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width+1; i+=2*width/scl){
		for(let j=0; j<height+1; j+=2*height/scl){
		tiles.push(new Tile(i, j));
		}
	}
	

}



function draw() {
	background(0, 50);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
	}
	

	
}

class Tile{
	constructor(a, b){
		this.r = width/scl;
		this.a = a;
		this.b = b;
		this.dirX = Math.round(Math.random())*2-1;
		this.dirY = Math.round(Math.random())*2-1;

	}

	display(){
		push();
		// Translate the origin point to the center of the screen
		translate(this.a, this.b);

		for (let i = 0; i < TWO_PI; i += PI / scl) {
			// Convert polar to cartesian
			let x = this.r * cos(i);
			let y = this.r * sin(i);

			stroke(255);
			strokeWeight(4);
			//line(map(mouseX, 0, width, 0, r)*cos(i), map(mouseY, 0, height, 0, r)*sin(i), x, y);
			line(this.dirX*map(mouseX, 0, width, 0, this.r), this.dirY*map(mouseY, 0, height, 0, this.r), x, y);
		}
		pop();
	}
}