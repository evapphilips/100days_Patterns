// Eva Philips
// July 13, 2019
// 100 Days of Generative Patterns, Day 43



// variables
let scl = 10;
let tiles = [];



function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width+1; i+=width/scl){
		for(let j=-50; j<height+1; j+=1.5*height/scl){
			tiles.push(new Tile(i, j, scl));
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
	constructor(x, y, scl){
		this.x = x;
		this.y = y;
		this.tileSize = width/scl;
		this.inc = 0;
		this.incStk = 0;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		push();
		translate(this.x, this.y);
		rotate(PI/6);
		
		strokeWeight(1 + this.incStk);
		
		stroke(255);
		noFill();
		rect(0, 0, this.tileSize + this.inc, this.tileSize + this.inc);
		rect(0, 0, this.tileSize/2 + this.inc, this.tileSize/2 + this.inc);
		rect(0, 0, this.tileSize/4 + this.inc, this.tileSize/4 + this.inc);
		
		fill(255);
		stroke(255);
		//rect(0, 0, 50+ this.inc, 50+ this.inc);


pop();

	}

	update(){
		this.inc = this.dir*map(mouseX, 0, width, -20, 20);
		this.incStk = this.dir*map(mouseY, 0, height, 0, 3);

	}
}
