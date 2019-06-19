// Eva Philips
// June 19, 2019
// 100 Days of Generative Patterns, Day 19

// variables
let inc = 0.05;
let scl = 5;
let rows;
let cols;
let zoff = 0;


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
	background(220);

	rows = floor(width/scl);
	//cols = floor(height/scl);
	cols = 1;

}

function draw(){
	background(0);
	//inc = map(mouseY, 0, height, 0, .1)
	//sep = map(mouseY, 0, height, 1, 4);
	zoff1 = map(mouseX, 0, width, 0, 1);
	zoff2 = map(mouseY, 0, width, 0, 1);
    let yoff = 0;
    for(let i=0; i<rows+1; i++){
        let xoff = 0;
        for(let j=0; j<cols; j++){
            let index = (i + j * cols);
			let top = noise(xoff, yoff, zoff1) * width/1.2;
			let bot = noise(xoff, yoff, zoff2) * width/1.2; // /sep
            xoff += inc;
            stroke(255)
			noFill();
			strokeWeight(2);
			line(i*scl, j*scl, i*scl, (j*scl) + top);
			line(i*scl, height - (j*scl), i*scl, height - (j*scl) - bot);
        }
        yoff += inc;
    }
}

	
  
