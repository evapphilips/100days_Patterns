// Eva Philips
// August 7, 2019
// 100 Days of Generative Patterns, Day 68



// variables
let scl = 20;

let tiles = [];


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();


	tiles[0] = new Tile(10, 50, scl);
	tiles[1] = new Tile(80, 100, scl);
	tiles[2] = new Tile(130, 180, scl);
	
	

}



function draw() {
	background(0, 5);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}

}

class Tile{
	constructor(r1, r2, scl){
		this.r1 = r1;
		this.r2 = r2;
		//this.r3 = r2;
		this.inc1 = 0;
		this.inc2 = 0;
		this.incScl = 0;
		this.dir1  = Math.round(Math.random())*2-1;
		this.dir2  = Math.round(Math.random())*2-1;
		
	}

	display(){
		push();
		translate(width/2, height/2);

		for(let i=0; i<TWO_PI; i+= PI/(scl + this.incScl)){
			// Convert polar to cartesian
			let x1 = (this.r1 + this.inc1) * cos(i);
			let y1 = (this.r1 + this.inc1) * sin(i);
			let x2 = (this.r2 + this.inc1) * cos(i);
			let y2 = (this.r2 + this.inc1) * sin(i);

			// draw
			stroke(255);
			strokeWeight(4);
			line(x1, y1, x2, y2);
		}

		pop();

	}

	update(){

		this.inc1 = this.dir1*map(mouseX, 0, width, 0, width/2);
		this.inc2 = this.dir1*map(mouseX, 0, width, 0, width/2);
		this.incScl = this.dir2* map(mouseY, 0, height, 0, 10);


	}
}
