// Eva Philips
// September 5, 2019
// 100 Days of Generative Patterns, Day 97


// variables


function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
}



function draw(){
	background(0);

	let r = map(mouseY, 0, height, -width, width);
	let a = map(mouseX, 0, width, 0, width);

	stroke(255);
	strokeWeight(.25);
	noFill();
	for(let i=0; i<50; i++){
		bezier(width/2, a, (i/10)*width/4 + r, height/4, 3*width/4 - r, 3*height/4, width/2 , height - a);
		bezier(width/2, a, (-i/10)*width/4 - r, height/4, 3*width/4 + r, 3*height/4, width/2, height - a);
	}
	//bezier(0, 0, width/4 + r, height/4, 3*width/4 - r, 3*height/4, width, height);
}
	
