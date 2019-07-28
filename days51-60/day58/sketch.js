// Eva Philips
// July 28, 2019
// 100 Days of Generative Patterns, Day 58



// variables
let scl = 10;
let siz;

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();

	siz = width/scl;


}


function draw(){
	background(0, 20);

	let incX = map(mouseX, 0, width, 0, 20);
	let incY = map(mouseY, 0, height, 0, 8);

	for(let i=0; i<width+1; i+=width/scl){
		for(let j=0; j<height+1; j+=height/scl){
		push();
		translate(i, j);
		noFill();
		stroke(255)
		strokeWeight(2);
		polygon(0, 0, siz + incX, 6 + incY);
		pop();
		}
	}

}


function polygon(x, y, radius, npoints) {
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
	  let sx = x + cos(a) * radius;
	  let sy = y + sin(a) * radius;
	  vertex(sx, sy);
	}
	endShape(CLOSE);
}