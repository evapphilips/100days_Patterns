// Eva Philips
// September 2, 2019
// 100 Days of Generative Patterns, Day 94


// variables
let tiles = [];
let siz = 5;

let inc =.5;
let zoff = 0;



function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	zoff = 10;
	let yoff = 0;
	let xoff = 0;
	for(let i=0; i<width; i+=3*siz){
		let a = noise(xoff, yoff, zoff)*PI/4;
		tiles.push(new Tile(i, a));
		xoff += inc;
	}
	yoff += inc;

}

function draw() {
	background(0);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	
}

class Tile{
	constructor(r, a){
		this.x = width/2;
		this.y = height/2;
		this.r = r;
		//this.start = 0;
		this.start = 0;
		this.fin = a;
		this.off = 0;
		this.range = TWO_PI * random(1, 2);

	}

	display(){
		stroke(255);
		strokeWeight(siz+2);
		noFill();
		arc(this.x, this.y, this.r, this.r, this.start, this.fin + this.off);
		strokeWeight(siz/8);
		//arc(this.x, this.y, this.r, this.r, 0, TWO_PI-.0001);
	}

	update(){
		this.off = map(mouseX, 0, width, 0, this.range);
	}
}




