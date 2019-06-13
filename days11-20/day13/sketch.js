// Eva Philips
// June 13, 2019
// 100 Days of Generative Patterns, Day 13

// variables
let bars = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(0);

	for(let i=0; i<100; i++){
		bars.push(new Bar());
	}
}

function draw(){
	background(0);
	//line(posX, 0, posX, height)
	for(let i=0; i<bars.length; i++){
		bars[i].display();
	}
}

