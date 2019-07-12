// Eva Philips
// July 12, 2019
// 100 Days of Generative Patterns, Day 42



// variables
let scl = 10;
let tiles = [];


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	background(0);

	for(let i=-1; i<scl+1; i++){
		for(let j=-1; j<scl+1; j++){

			if(j%2 == 0){
				tiles.push(new Tile(i*(width/scl), j*(height/scl)));
			}else{
				tiles.push(new Tile(i*(width/scl) + width/(2*scl), j*(height/scl)));
			}
		}
	}


}

function draw(){
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
		this.tileSize = width/scl;
		this.w = 50;
		this.inc = 0;
		this.dir = Math.round(Math.random())*2-1;
		this.weight = 1;
	}

	display(){
		stroke(255);
		noFill();
		strokeWeight( abs(1+ this.weight));
		rectMode(CENTER);
		push();
		translate(this.x, this.y);
		rect(0, 0, this.w + this.inc, height/(scl) + this.inc, 20);

		pop();
	}

	update(){
		this.inc = this.dir* map(mouseX, 0, width, 0, this.tileSize/2);
		this.weight =  - this.dir *map(mouseY, 0, height, 1, 10);
	}
}