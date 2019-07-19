// Eva Philips
// July 19, 2019
// 100 Days of Generative Patterns, Day 49



// variables
let diff = 0;

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	
}



function draw(){
	background(0, 6);
	
	let ang = map(mouseX, 0, width, 0, TWO_PI);
	let off = map(mouseY, 0, height, 0, width);

	push();

	fill(255);
	noStroke();
	rectMode(CENTER);
	translate(width/2, height/2)
	rotate(ang)
	rect(0, 0, off, height/4);
	pop();
	

}