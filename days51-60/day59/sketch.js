// Eva Philips
// July 28, 2019
// 100 Days of Generative Patterns, Day 58



// variables
let incSide = 0;
let incSize = 0;


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();



}


function draw(){
	background(0, 20);

	incSide = map(mouseX, 0, width, 0, 10);
	incSize = map(mouseY, 0, height, 0, height/2);
	let col = map(incSize, 0, height/2, 0, 255);

		push();
		translate(mouseX, mouseY);
		noFill();
		stroke(255)
		strokeWeight(2);
		polygon(0, 0, width/2 - incSize, 2 + incSide);
		pop();

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