// Eva Philips
// July 25, 2019
// 100 Days of Generative Patterns, Day 55



// variables
let tiles = [];
let scl = 20;
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
	background(255, 20);

	

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
	}

	display(){
		strokeWeight(2);
		stroke(0);
		noFill();
		//point(this.pos.x, this.pos.y);
		ellipse(this.pos.x, this.pos.y, this.siz, this.siz);
	}

	update(){
		// let d = m.sub(this.pos);
		// if(d.mag()< width/8){
		// 	this.siz = this.inc;
		// }else{
		// 	if(this.siz < 10){
		// 		this.siz = 10
		// 	}else{
		// 		this.siz -= .5;
		// 	}
			
		// }
		let d = abs(mouseX - this.pos.x)
		if(d<50){
			this.siz = 20;
		}else if(d>=50 && d<100){
			this.siz = 10;
		}else{
			this.siz = 5;
		}

		
	}
}