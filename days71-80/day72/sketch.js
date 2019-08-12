// Eva Philips
// August 11, 2019
// 100 Days of Generative Patterns, Day 72

// variables
let tiles = [];
let scl = 20;



function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	// for(let i=0; i<TWO_PI; i+=PI/10){
	// 	tiles.push(new Tile(i));
	// }
	for(let i=0; i<width; i+=width/scl){
		tiles.push(new Tile(i, i*.125));
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
	constructor(r, er){		
		this.r = r;
		this.er = er;
		this.theta = 0;
		this.dir = Math.round(Math.random())*2-1;
		this.incR = 0;
	}

	display() {
		push();
		translate(width / 2, height / 2);
		rotate(this.theta);

		// draw line
		stroke(map(this.r, 0, width, 255, 0));
		noFill();

		for (let i = 0; i < TWO_PI; i += PI/10) {
			let x = this.r * cos(i);
			let y = this.r * sin(i);
			ellipse(x, y, this.er + this.incR);
		}

		pop();

	}

	update(){
		this.theta = this.dir * map(mouseX, 0, width, 0,PI/10);
		this.incR = this.dir * map(mouseX, 0, width, 0, 50);

	}
}
