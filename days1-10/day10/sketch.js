// Eva Philips
// June 10, 2019
// 100 Days of Generative Patterns, Day 10

// variables
let scl = 10;

let tiles = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(0);

	for(let i=0; i<scl; i++){
		for(let j=0; j<scl; j++){
			tiles.push(new Tile(i*(width/scl), j*(height/scl), scl));
		}	
	}

}

function draw(){
	background(0);

	for(let i=0; i<tiles.length; i++){
		tiles[i].update();
		tiles[i].display();
	}
	

	
    

}