// Eva Philips
// July 26, 2019
// 100 Days of Generative Patterns, Day 56



// variables
let tiles = [];
let scl = 30;
let m;




function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<width; i+=width/scl){
		for(let j=0; j<height; j+=height/scl){
			tiles.push(new Tile(i, j));
		}
	}
	


	
}


function draw(){
	background(255);

	

	for(let i=0; i<tiles.length; i++){
		m = createVector(mouseX, mouseY);
		tiles[i].display();
		tiles[i].update();
	}
	

	

}

class Tile{
	constructor(x, y){
		this.pos = createVector(x, y);
		this.siz = 5;
		this.col = 255;
		this.inc = 0;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		noStroke();
		fill(this.col);
		//point(this.pos.x, this.pos.y);
		ellipse(this.pos.x + this.inc, this.pos.y + this.inc, this.siz, this.siz);
	}

	update(){

		let d = m.sub(this.pos).mag();
		this.siz = map(d, 0, height, 5, 30);
		this.col = map(d, 0, height, 255, 0);
		this.inc = map(d, 0, height, 0, 20);

	}
}