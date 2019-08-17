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

	for(let i=0; i<50; i++){
		tiles.push(new Tile(i*5));
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
	constructor(r){
		this.r = r;
		this.d = map(r, 0, width, 10, 50);
		this.scl = random(10, 30);
		this.incScl = 0;
		this.start = random(0, TWO_PI);
		this.a = 0;
	}

	display(){
		stroke(255);

		push();
		translate(width/2, height/2);

		for(let i=this.start; i<this.start+TWO_PI; i+=PI/(this.scl+ this.incScl)){
			let x = this.r * cos(i);
			let y = this.r * sin(i);
			line(x + this.a, y, x + this.d, y);
		}
		pop();
		


	}

	update(){
		this.incScl = map(mouseX, 0, width, 4, 10);
		this.a = map(mouseY, 0, height, 0, 50)
	}
}