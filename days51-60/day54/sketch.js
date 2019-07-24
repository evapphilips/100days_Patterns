// Eva Philips
// July 24, 2019
// 100 Days of Generative Patterns, Day 54



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
		this.siz = 10;
		this.inc = random(10, 40);
	}

	display(){
		strokeWeight(this.siz);
		stroke(0);
		point(this.pos.x, this.pos.y);
	}

	update(){
		let d = m.sub(this.pos);
		if(d.mag()< width/8){
			this.siz = this.inc;
		}else{
			if(this.siz < 10){
				this.siz = 10
			}else{
				this.siz -= .5;
			}
			
		}

		
	}
}