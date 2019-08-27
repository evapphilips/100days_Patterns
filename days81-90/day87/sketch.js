// Eva Philips
// August 25, 2019
// 100 Days of Generative Patterns, Day 86

// variables
let off = 30;


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();


}

function draw() {
	background(255);

	let sl = map(mouseY, 0, height, width/2, width);
	let ang = map(mouseY, 0, height, 0, PI/10);

	let l = map(mouseX, 0, width, 0, sl);

	stroke(0);
	strokeWeight(20);
	
	for(let i=0; i<1; i+=.05){
		push();
		rotate(ang);
		line(0, i*height, width + width/2 +l, i*height);
		pop();
	}


	for(let i=0; i<1; i+=.05){
		push();
		rotate(-ang);
		line(width, i*height + off, - width/2 -l, i*height + off);
		pop();
	}
	

}
