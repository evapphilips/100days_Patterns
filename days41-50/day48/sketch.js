// Eva Philips
// July 18, 2019
// 100 Days of Generative Patterns, Day 48



// variables
let scl = 10;
let tiles = [];





function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width+50; i+=width/scl){
		for(let j=0; j<height+50; j+=height/scl){
			tiles.push(new Tile(i, j, scl));
		}
	}
	
}


function draw(){
	background(0);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	
}

class Tile{
	constructor(x, y, scl){
		this.x = x;
		this.y = y;
		this.tileSize = width/scl;
		this.incX = 0;
		this.incY = 0;
	}

	display(){
		noFill();
		stroke(255);
		bezier(this.x, this.y, this.x, this.y + 3*this.tileSize/4 - this.incY, this.x + 3*this.tileSize/4 - this.incX, this.y + this.tileSize/4 - this.incY, this.x + this.tileSize - this.incX, this.y + this.tileSize - this.incY);
		bezier(this.x, this.y, this.x, this.y + 3*this.tileSize/4 - this.incY, this.x + 3*this.tileSize/4-(20 + this.incX), this.y + this.tileSize/4 - this.incY, this.x + this.tileSize - this.incX, this.y + this.tileSize - this.incY);
		bezier(this.x, this.y, this.x, this.y + 3*this.tileSize/4 - this.incY, this.x + 3*this.tileSize/4-(40 + this.incX), this.y + this.tileSize/4 - this.incY, this.x + this.tileSize - this.incX, this.y + this.tileSize - this.incY);
		
	}

	update(){
		this.incX = map(mouseX, 0, width, 0, 50);
		this.incY = map(mouseY, 0, height, 0, 50);
		this.incW = map(mouseY, 0, height, 0, 2);

	}
}



