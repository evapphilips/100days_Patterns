// Eva Philips
// August 6, 2019
// 100 Days of Generative Patterns, Day 67



// variables
let scl = 30;
let r;

function setup() {
	// setup canvas
	let cvs = createCanvas(600, 600);
	cvs.center();

	r = (width/2);
	

}



function draw() {
	background(0, 50);

	// for(let i=0; i<tiles.length; i++){
	// 	tiles[i].display();
	// }

	push();
		// Translate the origin point to the center of the screen
		translate(width/2, height/2);

		for (let i = 0; i < TWO_PI; i += PI / scl) {
			// Convert polar to cartesian
			let x = r * cos(i);
			let y = r * sin(i);

			stroke(255);
			strokeWeight(4);
			line(map(mouseX, 0, width, 0, r)*cos(i), map(mouseY, 0, height, 0, r)*sin(i), x/2, y/2);
		}
		pop();
}
