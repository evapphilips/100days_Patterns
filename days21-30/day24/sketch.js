// Eva Philips
// June 24, 2019
// 100 Days of Generative Patterns, Day 24

// variables
let tiles = [];


function setup(){
	// setup canvaas
	let cvs = createCanvas(600, 600);
	cvs.center();
	rectMode(CENTER);

	for(let i=0; i<30; i++){
		tiles.push(new Tile());
	}	
}

function draw(){
	background(0, 50);

	noFill();
	strokeWeight(2);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
	}
}

