// Eva Philips
// September 8, 2019
// 100 Days of Generative Patterns, Day 100


// variables
let scl = 80;
let oneDots = [];
let zeroDots = [];

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	// setup the dots for the one
	for(let i=height/3; i<2*height/3; i+=height/scl){
		oneDots.push(new OneDot(width/5 + width/80, i));
	}

	// setup the dots for the first zero
	for(let i=0; i<TWO_PI; i+=TWO_PI/(scl)){
		zeroDots.push(new ZeroDot(i, 2));
	}

	// setup the dots for the second zero
	for(let i=0; i<TWO_PI; i+=TWO_PI/(scl)){
		zeroDots.push(new ZeroDot(i, 3.5));
	}


}



function draw() {
	background(0);

	// show left and right one dots and move them
	for(let i=0; i<oneDots.length; i++){
		oneDots[i].display();
		oneDots[i].update();
	}

	// show first zero
	for(let j=0; j<zeroDots.length; j++){
		zeroDots[j].display();
		zeroDots[j].update();
	}
}

class OneDot{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.siz = scl/20;
		this.dir1 = Math.round(Math.random())*2-1;
		this.dir2 = Math.round(Math.random())*2-1;
		this.incY1 = 0;
		this.incY2 = 0;
	}

	display(){
		noStroke();
		fill(255);
		ellipse(this.x, this.y + this.incY1, this.siz, this.siz);
		ellipse(this.x + width / 20, this.y + this.incY2, this.siz, this.siz);
		stroke(255);
		strokeWeight(.5);
		noFill();
		line(this.x, this.y + this.incY1, this.x + width / 20, this.y + this.incY2);

	}

	update(){
		this.incY1 = this.dir1 * map(mouseY, 0, height, -height/4, height/4);
		this.incY2 = this.dir2 * map(mouseY, 0, height, -height/4, height/4);
	}
}

class ZeroDot{
	constructor(theta, which){
		this.theta = theta;
		this.which = which;
		this.x1 = width/8 * cos(this.theta);
		this.y1 = width/6 * sin(this.theta);
		this.x2 = (width/8 - width/20) * cos(this.theta);
		this.y2 = (width/6- width/20) * sin(this.theta);
		this.siz = scl/20;
		this.incT = 0;
		this.dir = Math.round(Math.random())*2-1;
		this.a = random(0, 1);
		this.incS = 0;
	}

	display(){
		push();
		translate(this.which*width/5 + (width/20), height/2);
		noStroke();
		fill(255);
		ellipse(this.x1, this.y1, this.siz, this.siz);
		ellipse(this.x2, this.y2, this.siz, this.siz);
		stroke(255);
		strokeWeight(.5);
		noFill();
		line(this.x1, this.y1, this.x2, this.y2);
		pop();
	}

	update(){
		this.incT = this.dir * map(mouseX, 0, height, -PI/4, PI/4);
		this.incS = this.dir * map(mouseY, 0, height, -height/4, height/4);

		this.x1 = (width/8) * cos(this.theta + this.incT);
		this.y1 = (width/6 + this.incS) * sin(this.theta + this.incT);
		this.x2 = (width/8 - width/20) * cos(this.theta + (this.a * this.incT));
		this.y2 = (width/6- width/20) * sin(this.theta + (this.a * this.incT));
	}
}
