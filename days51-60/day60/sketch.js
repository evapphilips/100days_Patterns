// Eva Philips
// July 30, 2019
// 100 Days of Generative Patterns, Day 50



// variables
let theta = 0;
let r = 50;


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	background(220);
}


function draw(){
	background(255, 20);
	fill(0);
	rectMode(CENTER);

	r = map(mouseX, 0, width, 0, width/2);
	theta = map(mouseY, 0, height, 0, TWO_PI);



	// Translate the origin point to the center of the screen
	translate(width / 2, height / 2);

	// Convert polar to cartesian
	let x = r * cos(theta);
	let y = r * sin(theta);

	// draw line
	line(mouseX, mouseY, x, y)
	rect(x , y, 20, 20);
}

