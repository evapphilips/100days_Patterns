// Eva Philips
// June 20, 2019
// 100 Days of Generative Patterns, Day 20

// variables
let rays = [];
let scl = 20;

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();

	// create rays
	for(let i=0; i<width+1; i=i+width/scl){
		for(let j=0; j<height+1; j=j+height/scl){
			rays.push(new Ray(i, j));
		}
	}

}

function draw(){

	background(0, map(mouseY, 0, height, 0, 100));

	for(let i=0; i<rays.length; i++){
		rays[i].display();
		rays[i].update();
	}	
}

