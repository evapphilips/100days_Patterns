// Eva Philips
// July 21, 2019
// 100 Days of Generative Patterns, Day 51



// variables
let scl = 15;
let tiles = [];

let r;
let c;





function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	c = 0;
	for(let i=0; i<width+50; i+=width/scl){
		r = 0;
		
		for(let j=0; j<height+50; j+=height/scl){
			
			tiles.push(new Tile(i, j, scl, r, c));
			r++
			
			
		}
		c++
	}

	//tiles[0] = new Tile(width/2, height/2, scl);
	
}


function draw(){
	background(255, 90);

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}

	//tiles[0].display();
	
	// tiles[0].update();
	
}

class Tile{
	constructor(x, y, scl, r, c){
		this.x = x;
		this.y = y;
		this.tileSize = width/scl;
		this.incX = 0;
		this.incY = 0;
		this.r = r;
		this.c = c;
		this.dir = Math.round(random())*2-1;
	}

	display(){
		noFill();
		stroke(0);

		strokeWeight(2);
		
		let p1 = createVector(this.x, this.y);
		let p2 = createVector(this.x, this.y + 3*this.tileSize/5);
		let p3 = createVector(this.x + 8*this.tileSize/9, this.y);
		let p4 = createVector(this.x + this.tileSize, this.y + this.tileSize);

		push();
		if(this.c%2 == 0){
			translate(height, 0);
			scale(-1.0,1.0);
		}

		

		if(this.r%2 == 0){
		bezier(p1.x, p1.y, p2.x, p2.y, p3.x - this.incX, p3.y + this.incY, p4.x + this.incX, p4.y);
		bezier(p1.x, p1.y, p2.x, p2.y, p3.x - 10 - this.incX, p3.y + this.incY, p4.x - 10 + this.incX, p4.y);
		bezier(p1.x, p1.y, p2.x, p2.y, p3.x - 20 - this.incX, p3.y + this.incY, p4.x - 20 + this.incX, p4.y);
		}else{
		push();
		translate(this.x, this.y + this.tileSize);
		scale(1.0,-1.0);
		bezier(0, 0, 0, 3*this.tileSize/5, 8*this.tileSize/9 - this.incX, 0 + this.incY, this.tileSize + this.incX, this.tileSize);
		bezier(0, 0, 0, 3*this.tileSize/5, 8*this.tileSize/9 - 10 - this.incX, 0 + this.incY, this.tileSize - 10 + this.incX, this.tileSize);
		bezier(0, 0, 0, 3*this.tileSize/5, 8*this.tileSize/9 - 20 - this.incX, 0 + this.incY, this.tileSize - 20 + this.incX, this.tileSize);
		pop();

		}

		pop();



	}

	update(){
		this.incX = map(mouseX, 0, width, 0, 100);
		this.incY = this.dir * map(mouseY, 0, height, 0, 100);
	}

}



