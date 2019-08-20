// Eva Philips
// August 19, 2019
// 100 Days of Generative Patterns, Day 80

// variables
let inc = 0.1;
let scl = 10;
let cols;
let rows;
let zoff = 0;
let limit = 255/2;
let i = 1;

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	background(0);
	cols = floor(width/scl);
	rows = floor(height/scl);	



}

function draw() {
	background(0, 20);
	let yoff = 0;
	for(let y=0; y<rows; y++){
		let xoff = 0;
		for(let x=0; x<cols; x++){
			let index = (x + y * width) *4;
			let r = noise(xoff, yoff, zoff) * 255;
			xoff += inc;
			noStroke();

			if(r<limit){
				stroke(255);
				strokeWeight(.25);
				fill(255);
				noFill();
				rect(x * scl, y * scl, i*scl, i*scl);
			}

		}
		yoff += inc;
		zoff = map(mouseX, 0, width, 0, 2);
		//limit = map(mouseY, 0, height, 255/4, 3*255/4);
		i = map(mouseY, 0, height, 0, 5);

	}

	
}
