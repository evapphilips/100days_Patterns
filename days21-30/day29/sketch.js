// Eva Philips
// June 29, 2019
// 100 Days of Generative Patterns, Day 29

// variables
let scl = 30;
let dashes = [];




function setup(){
	// setup canvaas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(255);

	for(let j=height/(2*scl); j<height; j+=height/scl){
		for(let i=0; i<width; i+=width/scl){
			dashes.push(new Dash(i, j));
		}

	}

}

function draw(){
	// setup background
	background(255, 10);

	//line(0, height/(2*scl), width/scl, height/(2*scl))
	for(let i=0; i<dashes.length; i++){
		dashes[i].update();
		dashes[i].display();
	}


}

class Dash{
	constructor(x, y){
		this.x1 = x;
		this.x2 = x + width/scl;
		this.y = y;
		this.inc = 0;
		this.dir = Math.round(Math.random())*2-1;
		this.thickness = random(0, 5);
		this.thickInc = 0;
	}

	display(){
		stroke(0);
		strokeWeight(this.thickness + this.thickInc)
		line(this.x1, this.y + this.inc, this.x2, this.y + this.inc);
	}

	update(){
		this.inc = this.dir * map(mouseX, 0, width, 0, height/scl);
		this.thickInc = map(mouseY, 0, height, 0, 3);
	}
}

