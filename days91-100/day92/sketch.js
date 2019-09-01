// Eva Philips
// August 31, 2019
// 100 Days of Generative Patterns, Day 92
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY


// variables
let inc1 = 0.01;
let zoff1 = 0;
let inc2 = 0.01;
let zoff2 = 0;
let r;


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

}

function draw() {
	background(0);

	zoff1 = map(mouseX, 0, width, 0, 1);
	let yoff1 = 0;
	let xoff1 = 0;
	zoff2 = map(mouseY, 0, width, 0, 1);
	let yoff2 = 0;
	let xoff2 = 0;
	//let stp = map(mouseY, 0, height, .5, 50);
		for(let i=0; i<width; i+= 5){
			let r1 = noise(xoff1, yoff1, zoff1)*width;
			let r2 = noise(xoff2, yoff2, zoff2)*width;
			xoff1 += inc1;
			xoff2 += inc2;
			push();
			translate(r1, r2);
			
			
	
			strokeWeight(.25);
			stroke(255);
			noFill();
			ellipse(0, 0, r2, r1);
			pop();
		}
		yoff1 += inc1;
		yoff2 += inc2;

	


}



