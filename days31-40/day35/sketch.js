// Eva Philips
// July 5, 2019
// 100 Days of Generative Patterns, Day 35



// variables
let scl = 20;
let tiles = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	background(220);


	for(let i=width/(2*scl); i<width; i+=width/scl){
		for(let j=height/(2*scl); j<height; j+=height/scl){
			tiles.push(new Tile(i, j, scl));
		}
	}
}

function draw(){
	background(255, 20)

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
}

class Tile{
	constructor(x, y, scl){
		this.x = x
		this.y1 = y - height/(2*scl) + scl/10;
		//this.y = y;
		this.y2 = y + height/(2*scl) - scl/10;
		this.y = random(this.y1, this.y2);
		this.dir = Math.round(random())*2-1;
		this.dirR = Math.round(random())*2-1;
		this.inc = 0;
		this.r = 5;
		this.stW = random(0, 4);
		this.incS = 0;
		this.dirS = Math.round(random())*2-1;;
	}

	display(){
		stroke(0);
		strokeWeight(this.stW)
		fill(0);
		line(this.x, this.y1, this.x, this.y2);
		//line(width/2, height/2 - (height/(2*scl)), width/2, height/2 + (height/(2*scl)));
		ellipse(this.x, this.y + this.inc, this.r + this.incR);

	}

	update(){
		this.inc = this.dir * map(mouseY, 0, height, 10, height/scl - scl/10);
		this.incR = this.dirR * map(mouseX, 0, width, 0, 10);
		this.stW = this.dirS * map(mouseX, 0, width, 0, 4);

	}
}


