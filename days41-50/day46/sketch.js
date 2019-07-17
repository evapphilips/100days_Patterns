// Eva Philips
// July 16, 2019
// 100 Days of Generative Patterns, Day 46



// variables
let tiles = [];
let scl = 10;



function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=-200; i<width; i+=width/scl){
		for(j=-50; j<height+50; j+=height/scl){
			tiles.push(new Tile(i, j, width/scl, 2*width/scl));
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
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.incW = 0;
		this.incH = 0;
		this.dirX = Math.round(random())*2-1
		this.dirY = Math.round(random())*2-1
		this.dirAng = Math.round(random())*2-1;
		this.Ang = this.dirAng * PI/4;
	}

	display(){
		stroke(255);
		strokeWeight(2);
		fill(0);
		push();
		translate(this.x, this.y);
		rotate(this.Ang);
		rect(0, 0, this.w + this.incW, this.h + this.incH, this.w/2);
		pop();

	}

	update(){
			this.incW = this.dirX * map(mouseX, 0, width, 0, 25);
			this.incH = this.dirY * map(mouseY, 0, height, 0, 100);

		


	}
}