// Eva Philips
// August 4, 2019
// 100 Days of Generative Patterns, Day 65



// variables
let tiles = [];
let scl = 20;





function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	for (let i = 0; i < width + 1; i += width / scl) {
		for (let j = 0; j < height + 1; j += height / scl) {
			tiles.push(new Tile(i, j));
		}
	}

}



function draw() {

	background(0, 20);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}

}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.ang = PI/4;
		this.siz = 0;
		this.dirX = Math.round(random())*2-1;
		this.dirY = Math.round(random())*2-1;
	}

	display(){
		stroke(255);
		noFill();
		rectMode(CENTER);
	

		push();
		translate(this.x, this.y);
		rotate(this.ang);
		rect(0, 0, this.siz, this.siz);
		pop();
	}

	update(){
		this.ang = this.dirX * map(mouseX, 0, width, 0, TWO_PI);
		if(this.dirY>0){
			this.siz = map(mouseY, 0, height, 0, width/scl);
		}else{
			this.siz = map(mouseY, 0, height, width/scl, 0);
		}


		
	}
}