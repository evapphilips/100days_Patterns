// Eva Philips
// July 8, 2019
// 100 Days of Generative Patterns, Day 38



// variables
let scl = 10;
let tiles = [];


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	for(let i=0; i<scl+1; i++){
		for(let j=0; j<scl+1; j++){

			if(j%2 == 0){
				tiles.push(new Tile(i*(width/scl), j*(height/scl)));
			}else{
				tiles.push(new Tile(i*(width/scl) + width/(2*scl), j*(height/scl)));
			}
		}
	}


}

function draw(){
background(0, 80);
	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.incX = 0;
		this.incY = 0;
		this.tileSize = width/scl;
	}

	display(){
		stroke(255);
		noFill();
		strokeWeight(1);
		push();
		translate(this.x, this.y);
		bezier(0, this.incY, -this.incX, this.tileSize/4, -this.incX, 3*this.tileSize/4, 0 ,this.tileSize-this.incY);
		bezier(0, this.incY, this.incX, this.tileSize/4, this.incX, 3*this.tileSize/4, 0 ,this.tileSize-this.incY);
		pop();
	}

	update(){
		this.incX = map(mouseX, 0, width, -2*this.tileSize, 2*this.tileSize);
		this.incY = map(mouseY, 0, height, 0, 2*this.tileSize)
	}
}