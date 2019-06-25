// Eva Philips
// June 25, 2019
// 100 Days of Generative Patterns, Day 25

// variables
let curves = [];


function setup(){
	// setup canvaas
	let cvs = createCanvas(600, 600);
	cvs.center();

	for(let i=0; i<10; i++){
		curves.push(new myCurve(0, 0));
	}
	for(let j=0; j<10; j++){
		curves.push(new myCurve(width, 0));
	}
	

}

function draw(){
	// setup background
	background(0, 20);

	for(let i=0; i<curves.length; i++){
		curves[i].update();
		curves[i].display();
	}
	

}

class myCurve{
	constructor(x, y){
		this.x1 = x;
		this.y1 = y;
		this.x2 = random(100, width);
		this.y2 = random(100, height);
		this.x3 = random(100, width);
		this.y3 = random(100, height);
		this.x4 = random(100, width);
		this.y4 = random(100, height);
		this.incX = 0;
		this.incY = 0;
		this.dirX = Math.round(Math.random())*2-1;
		this.dirY = Math.round(Math.random())*2-1;
		this.pt = floor(random(0, 3));
		//console.log(this.pt);
	}

	display(){
		stroke(255);
		noFill();
		bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4 + (this.incX*this.dirX), this.y4 + (this.incY*this.dirY));
	}

	update(){
		this.incX = mouseX
		this.incY = mouseY



	}
}
