// Eva Philips
// July 7, 2019
// 100 Days of Generative Patterns, Day 37



// variables
let scl = 20;
let tileSize;

let tiles = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	background(220);

	tileSize = width/scl;

	for(let i=-tileSize; i<scl; i++){
		for(let j=-tileSize; j<scl; j++){
			if(j%2 == 0){
				tiles.push(new Tile(i*tileSize, j*tileSize));	
			}else{
				tiles.push(new Tile(i *tileSize + tileSize/2, j*tileSize ));
			}
		}
		
	}
	



}

function draw(){
	background(255);

	for(let i=0; i<tiles.length; i++){
		tiles[i].update();
		tiles[i].display();
	}
	

	
	
}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.stk = 0;
		this.inc = 0;
		this.dir = Math.round(random())*2-1;
		this.ratio = random(0, .5);

	}

	display(){
		stroke(0);
		strokeWeight(this.stk);
		noFill();
		push();
		translate(this.x, this.y);
		triangle(tileSize/2 + this.inc, 0 + this.inc, 0 + this.inc, tileSize + this.inc, tileSize + this.inc, tileSize + this.inc);
		pop();

	}
	
	update(){
		let d = abs(mouseY-this.y);
		let dTiles = floor(d/tileSize);
		//console.log(width/d)
		this.stk = map(dTiles, 0, scl, 1.5 *scl/2, 1);

		this.inc = this.ratio * this.dir* map(mouseX, 0, width, 0, 10);

	}
}
