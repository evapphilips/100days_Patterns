// Eva Philips
// June 21, 2019
// 100 Days of Generative Patterns, Day 21

// variables
let stars = [];
let scl = 8;


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();

	for(let j=-height/(scl); j<height+height/scl; j=j+(height)/(scl)){
		for(let i=-width/(scl); i<width+width/scl; i=i+(width)/(scl)){
			stars.push(new Star(i, j, width/scl))
		}
	}
}

function draw(){
	background(255, 10);

	for(let i=0; i<stars.length; i++){
		stars[i].update();
		stars[i].display();
	}
	

	
}

