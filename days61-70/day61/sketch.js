// Eva Philips
// July 31, 2019
// 100 Days of Generative Patterns, Day 61



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
	for(let i=0; i<width; i+=tileSize){
		tiles.push(new Tile(i, 0));
	}

	for(let j=0; j<width; j+=tileSize){
		tiles.push(new Tile(j, height));
	}
}



function draw(){
	background(0, 20);

	// tiles[0].display();

	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].update();
	}

	


}

class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.len = random(width/4, width/2);
		this.incX = 0;
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		noStroke();
		fill(255);
		triangle(this.x, this.y, this.x + tileSize/2, this.len + this.incX, this.x + tileSize, this.y);

	}

	update(){
		this.incX = this.dir * map(mouseX, 0, width, 0, width/2);
	}


}

