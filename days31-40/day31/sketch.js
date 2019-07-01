// Eva Philips
// July 1, 2019
// 100 Days of Generative Patterns, Day 31

// variables
let walkers = [];



function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(0);

	// initialize walker
	for(let i=0; i<80; i++){
		walkers.push(new Walker());
	}

}

function draw(){
	background(0, 10);

	for(let i=0; i<walkers.length; i++){
		walkers[i].display();
		walkers[i].update();
		walkers[i].step();
	}
	
}

	
  
