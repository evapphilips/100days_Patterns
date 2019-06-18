// Eva Philips
// June 18, 2019
// 100 Days of Generative Patterns, Day 28

// variables
let scl = 10;

let tiles = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(220);
	
	// create new tiles
	for(let j=0; j<height; j+=height/(2*scl)){
		for(let i=0; i<width; i+=width/(2*scl)){
			tiles.push(new Tile(i, j));
		}
	}
    
}

function draw(){
	background(0);
	//scl = map(mouseX, 0, width, 0, 20);

	for(let i=0; i<tiles.length; i++){
		tiles[i].update();
		tiles[i].display();
	}
  
}

class Tile{
	constructor(x, y){
		this.x = x 
		this.y = y
		this.w = 0;
		//this.w = width/(2*scl);
		this.h = 0;
		this.dir = Math.round(Math.random())*2-1
		let start = 0;
		let fin = PI;

	}

	update(){
		this.w = map(mouseX, 0, width, 0, width/(scl))
		this.h = map(mouseY, 0, height, 0, height/(2*scl));
	}

	display(){
		noFill();
		stroke(255);
		strokeWeight(3);

		if(this.dir<1){
			this.start = PI;
			this.fin = TWO_PI;
		}else{
			this.start = 0;
			this.fin = PI;
		}
		arc(this.x, this.y, this.w, this.h, this.start, this.fin);

	}

}