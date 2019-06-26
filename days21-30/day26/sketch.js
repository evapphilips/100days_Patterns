// Eva Philips
// June 26, 2019
// 100 Days of Generative Patterns, Day 26

// variables
let theta1 = 0;
let theta2 = 0;


function setup(){
	// setup canvaas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);


	  

}

function draw(){
	// setup background
	background(255, 20);

	stroke(0);

	let r1 = map(mouseY, 0, width, 0, width/2);
	let r2 = 300;
	theta1 = map(mouseX, 0, width, 0, TWO_PI);
	let a = map(mouseY, 0, height, 0, 100);
	theta2 = map(mouseY, 0, height, 0, TWO_PI);

	// Convert polar to cartesian
	let x1 = r1 * cos(theta1);
	let y1 = r1 * sin(theta1);
	let x2 = r2 * cos(theta2);
	let y2 = r2 * sin(theta2);

	push();
	translate(width/2, height/2);

	line(x1, y1, x2, y2);
	pop();



}
