// Eva Philips
// June 23, 2019
// 100 Days of Generative Patterns, Day 23

// variables
let rings = [];
let scl = 10;


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();

	for(let j=-height/(scl); j<height+height/scl; j=j+(height)/(scl)){
		for(let i=-width/(scl); i<width+width/scl; i=i+(width)/(scl)){
			rings.push(new Ring(i, j))
		}
	}
}

function draw(){
	background(255, 50);


	for(let i=0; i<rings.length; i++){
		rings[i].update();
		rings[i].display();
	}
	
}

c