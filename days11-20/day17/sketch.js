// Eva Philips
// June 17, 2019
// 100 Days of Generative Patterns, Day 17

// variables
let scl = 10;
let tiles = [];

let sclTri = scl*2;
let col;



function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(0);
	
	// make tiles
	for(let j=height/(scl*2); j<height; j=j+height/scl){
		for(let i=width/(scl*2); i<width; i=i+width/scl){
			tiles.push(new Tile(i, j));
		}
	}

    
}

function draw(){
	background(255);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
	}
	

    
}


