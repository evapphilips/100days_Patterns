// Eva Philips
// August 25, 2019
// 100 Days of Generative Patterns, Day 86

// variables


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();


}

function draw() {
	background(0, 10);

	let l = map(mouseX, 0, width, -width/4, width/4);
	let r = map(mouseX, 0, height, width/4, -width/4);
	let a = map(mouseY, 0, height, 0, height);
	let b = map(mouseY, 0, height, height, 0);

	stroke(map(mouseY, 0, height, 0, 255));
	strokeWeight(10);
	for(let i=0; i<3; i+=.1){
		line(0, i, width/2 + l, i*height - a);
	}

	stroke(map(mouseY, 0, height, 255, 0));
	for(let i=0; i<3; i+=.1){
		line(width, i, width/2 + r, i*height - b);
	}
	

}
