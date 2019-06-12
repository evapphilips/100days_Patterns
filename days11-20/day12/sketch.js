// Eva Philips
// June 12, 2019
// 100 Days of Generative Patterns, Day 12

// Variables
let arcStrokes = []; 

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(220);

	for(let i=0; i<200; i++){
		arcStrokes.push(new ArcStroke()); 
	}
}

function draw(){
	background(0);
	for(let i=0; i<arcStrokes.length; i++){
		arcStrokes[i].update();
		arcStrokes[i].display();
	}
}