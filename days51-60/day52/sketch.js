// Eva Philips
// July 22, 2019
// 100 Days of Generative Patterns, Day 52



// variables
let tiles = [];
let scl = 4;



function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width; i+=width/scl){
		for(let j=0; j<height; j+=height/scl){
			tiles.push(new Tile(i, j, scl));
		}
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
	constructor(x, y, scl){
		this.x = x;
		this.y = y;
		this.incX = 0;
		this.incY = 0;
		this.tileSize = width/scl;
		this.col = 255;
	}

	display(){
		strokeWeight(2);
		stroke(this.col);
		push();
		translate(this.x, this.y);
		line(this.tileSize/2, 0 + this.incX, this.tileSize/2, this.tileSize - this.incX);
		line(this.incY, this.incY, this.tileSize - this.incY, this.tileSize - this.incY);
		line(this.tileSize - this.incY, this.incY, this.incY, this.tileSize - this.incY);
		pop();
	}

	update(){
		this.incY = map(mouseY, 0, height, 0, this.tileSize/2);
		this.incX = map(mouseX, 0, width, 0, this.tileSize/2);
		this.col = map(mouseX, 0, width, 255/2, 255);

	}
}