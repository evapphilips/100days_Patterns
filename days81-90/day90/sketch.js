// Eva Philips
// August 29, 2019
// 100 Days of Generative Patterns, Day 90
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY


// variables
let inc = 0.01;
let zoff = 0;
let r;
// let rows;
// let cols;
// let zoff = 0;





function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	// setup rows and cols
	// rows = floor(width)


}

function draw() {
	background(0);
	

	push();
	inc = map(mouseY, 0, height, 0, .1);
	zoff = map(mouseX, 0, width, 0, 1);
	let yoff = 0;
	let xoff = 0;

	for(let i=0; i<width; i+= map(mouseY, 0, height, 1, 50)){
		let r1 = noise(xoff, yoff, zoff)*width/2;
		let r2 = noise(xoff, yoff, zoff)*height/2;
		let r3 = noise(xoff, yoff, zoff)*width/4;
		let r4 = noise(xoff, yoff, zoff)*height/4;
		xoff += inc;

		strokeWeight(10);
		stroke(255);
		point(i, r1);
		point(i, r3 + width/2);
		point(i, r3 + 3*width/4);
		point(r2, i);
		point(r4 + height/2, i);
		point(r4 + 3*height/4, i);
	}
	yoff += inc;
	pop();

}

class Wiggle{
	contructor(){

	}

	display(){

	}
}

