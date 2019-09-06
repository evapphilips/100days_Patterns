// Eva Philips
// September 6, 2019
// 100 Days of Generative Patterns, Day 98


// variables
let scl = 100;

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
}



function draw(){
	background(0);

	let r = map(mouseY, 0, height, -height, 0);
	let a = map(mouseX, 0, width, 0, 2*width);

	stroke(255);
	strokeWeight(0.25);
	noFill();
	for(let i=0; i<height/2; i+=height/scl){
		bezier(0, r - i, width/4 + a, height/4 - i, 3*width/4 - a, 3*height/4 - i, width, height - i - r)
		bezier(width, r - i, -a, height/4 - i, a - i, 3*height/4 - i, 0, height - i - r)
	}
}
	
