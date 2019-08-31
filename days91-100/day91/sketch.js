// Eva Philips
// August 29, 2019
// 100 Days of Generative Patterns, Day 90
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY


// variables
let inc = 0.01;
let zoff = 0;
let r;





function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

}

function draw() {
	background(0);
	

	push();
	translate(width/2, height/2);
	inc = map(mouseY, 0, height, 0, .1);
	zoff = map(mouseX, 0, width, 0, 1);
	let yoff = 0;
	let xoff = 0;
	let stp = map(mouseY, 0, height, .5, 50);
		for(let i=0; i<width; i+= stp){
			let r = noise(xoff, yoff, zoff)*width;
			xoff += inc;
	
			strokeWeight(1);
			stroke(255);
			noFill();
			ellipse(0, 0, i, r);
		}
		yoff += inc;
	
	pop();

}



