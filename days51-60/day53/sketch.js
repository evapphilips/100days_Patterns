// Eva Philips
// July 23, 2019
// 100 Days of Generative Patterns, Day 53



// variables
let tiles = [];
let scl = 2;
let ang = 0;



function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<12; i++){
		tiles.push(new Tile(ang, scl));
		ang += PI/6;
	}
	


	
}


function draw(){
	background(0, 5);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	

	

}

class Tile{
	constructor(ang, scl){
		this.x = width/2;
		this.y = height/2;
		this.incX = 0;
		this.incY = 0;
		this.tileSize = width/scl;
		this.col = 255;
		this.ang = ang;
		this.incA = 0;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		strokeWeight(2);
		stroke(this.col);
		push();
		translate(this.x, this.y);
		rotate(this.ang + this.incA)
		line(this.tileSize/2, 0 + this.incX, this.tileSize/2, this.tileSize - this.incX);
		line(this.incY, this.incY, this.tileSize - this.incY, this.tileSize - this.incY);
		line(this.tileSize - this.incY, this.incY, this.incY, this.tileSize - this.incY);
		pop();
	}

	update(){
		this.incY = this.dir * map(mouseX, 0, width, 0, this.tileSize/2);
		this.incX = this.dir * map(mouseX, 0, width, 0, this.tileSize/2);
		this.incA = -  map(mouseY, 0, height, 0, PI/2);
		this.col = map(mouseX, 0, width, 255/2, 255);

	}
}