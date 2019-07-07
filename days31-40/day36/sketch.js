// Eva Philips
// July 6, 2019
// 100 Days of Generative Patterns, Day 36



// variables
let scl = 20;
let tiles = [];
let colors = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();
	background(220);

	for(let i=-width/scl; i<width; i+=width/scl){
		for(let j=-height/scl; j<height; j+=height/scl){
			tiles.push(new Tile(i, j, scl));
		}
	}

	let col = 255;
	for(let j=0; j<scl; j++){
		let int = 1*255/scl;
		colors.push(col)
		col -= int;
	}

}

function draw(){
	background(255, 5);


	for(let i=0; i<tiles.length; i++){
		tiles[i].display();
		tiles[i].checkColor();
		tiles[i].update();
	}


	
}


class Tile{
	constructor(x, y, scl){
		this.x = x;
		this.y = y;
		this.tileSize = width/scl;

		this.dir = Math.round(random())*2-1;
		this.inc = 0;
		this.ratio = random(0, 6);


	}

	display(){
		//rectMode(CENTER);
		//noStroke();
		stroke(0);
		rect(this.x + (this.ratio * this.inc), this.y + (this.ratio * this.inc), this.tileSize, this.tileSize);
	}

	checkColor(){
		let d = abs(mouseY - this.y);
		let dTiles = floor(d/(width/scl));

		if(colors[dTiles]){
			fill(colors[dTiles]);
		}else{
			fill(0);
		}
		//fill(colors[dTiles]);
		
		// if(dTiles<5){
		// 	fill(255);
		// }else{
		// 	fill(0);
		// }
	}

	update(){
		this.inc = this.dir * map(mouseX, 0, width, 0, 3);

	}
}


