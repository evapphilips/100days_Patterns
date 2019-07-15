// Eva Philips
// July 14, 2019
// 100 Days of Generative Patterns, Day 44



// variables
let scl = 30;
let tiles = [];



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
background(255);

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
		this.dir = Math.round(Math.random())*2-1;
		this.incX = 0;
		this.incY = 0;
		this.posVect = createVector(this.x, this.y);
	}

	display(){

		noStroke();

		fill(0);
		
		if(this.dir>0){
			triangle(this.x + this.incX, this.y + this.incY, this.x+this.tileSize + this.incX, this.y + this.incY, this.x+this.tileSize + this.incX, this.y+this.tileSize + this.incY);
		}else{
			triangle(this.x + this.incX, this.y+this.tileSize + this.incY, this.x+this.tileSize, this.y, this.x+this.tileSize, this.y+this.tileSize);
		}
	}

	update(){
		let mVect = createVector(mouseX, mouseY);
		let d = p5.Vector.sub(this.posVect, mVect);


		if(d.mag()<height/6){
			this.incX = map(mouseX, 0, width, 0, 50);
			this.incY =  map(mouseY, 0, height, 0, 50);
		}
	}
}
