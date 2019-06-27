// Eva Philips
// June 27, 2019
// 100 Days of Generative Patterns, Day 27

// variables
let theta = 0;


function setup(){
	// setup canvaas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);


}

function draw(){
	// setup background
	background(0, 20);
	stroke(255);

	let a = map(mouseX, 0, width, 1, 3);
	let b = map(mouseY, 0, height, 1, 3);

	for(let i=0; i<10; i++){

		
		let r = 100;
		
		// Convert polar to cartesian
		let x = r * cos(theta);
		let y = r * sin(theta);
		
		push();
		translate(width/2, height/2);
		rotate(map(mouseY, 0, height, 0, TWO_PI))
		line(x*b, y*b, x*a, y*a);
		pop();
		
		theta += PI/4;
	}

	
	



}
