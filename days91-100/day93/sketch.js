// Eva Philips
// September 1, 2019
// 100 Days of Generative Patterns, Day 93
// References:
    // This code is largely based on Dan Shiffman's...

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
		for(let i=0; i<TWO_PI; i+= PI/50){
			let r = noise(xoff, yoff, zoff)*width/2;
			let x = r * cos(i);
			let y = r * sin(i);
			xoff += inc;

	
			strokeWeight(.125);
			stroke(255);
			fill(255, 20);
			rect(x, y, x*0.5, x*0.5);
		}
		yoff += inc;
	
	pop();

}




