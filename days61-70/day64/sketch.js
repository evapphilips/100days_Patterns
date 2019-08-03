// Eva Philips
// August 3, 2019
// 100 Days of Generative Patterns, Day 63



// variables
let scl = 10;
let tiles = [];



function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();
	background(255);

	for(let i=0; i<width+50; i+=width/scl){
		for(let j=0; j<height + 50; j+=height/scl){
			tiles.push(new Tile(i, j));
		}
	}


}



function draw() {

	background(255, 5)
	//console.log(height);
	rectMode(CENTER);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}
	
	
	
}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.mx1 = 0;
		this.mx2 = 0;
		this.my = 0;
		this.col = 0
		this.dirX1 = Math.round(Math.random())*2-1;
		this.dirX2 = Math.round(Math.random())*2-1;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		//fill(this.col);
		noFill();
		//noStroke();
		stroke(this.col);
		strokeWeight(2);
		rect(this.x + this.mx1, this.y + this.mx2, width/scl - this.my, height/scl - this.my);
	}

	update(){
		this.mx1 = this.dirX1 * map(mouseX, 0, width, 0, width/scl);
		this.mx2 = this.dirX2 * map(mouseX, 0, width, 0, width/scl);
		this.my = map(mouseY, 0, height, 0, height/scl);
		if(this.dir<0){
			this.col = map(mouseX, 0, width, 0, 255);
		}else{
			this.col = map(mouseX, 0, width, 255, 0);
		}
		

	}
}
