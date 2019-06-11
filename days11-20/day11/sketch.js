// Eva Philips
// June 11, 2019
// 100 Days of Generative Patterns, Day 11

// Variables


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(255);

}

function draw(){
	stroke(0);
	noFill();
	push();
	translate(width/2, height/2)
	let siz = map(mouseX, 0, width, 0, width)
	let pos = map(mouseY, 0, height, 0, TWO_PI);
	arc(0, 0, siz, siz, 0 + pos, PI/2 + pos);
	pop();
	

    

}
