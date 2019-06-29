// Eva Philips
// June 28, 2019
// 100 Days of Generative Patterns, Day 28

// variables
let dashes = []; 
let scl = 20;



function setup(){
	// setup canvaas
	let cvs = createCanvas(600, 600);
	//cvs.center();
	background(0);

	// create new dashes
	for(let j=0; j<height+1; j+=height/scl){
		for(let i=0; i<width +1; i+=width/scl){
			dashes.push(new Dash(i, j, width/scl));
		}
	}


}

function draw(){
	// setup background
	background(0, 20);

	for(let i=0; i<dashes.length; i++){
		dashes[i].display();
		dashes[i].update();
	}
	
	

}

class Dash{
	constructor(x, y, siz){
		this.x = x;
		this.y = y;
		this.y1 = y + siz/2;
		this.y2 = y - siz/2;
		this.ang = PI/4;
		this.inc = 0;
	}

	display(){
		push();
		translate(this.x, this.y);
		rotate(this.ang + this.inc);
		stroke(255);
		line(0, 0, 0, width/scl);
		pop();
	}

	update(){
		this.inc = map(mouseX, 0, width, 0, 10);
	}
}
