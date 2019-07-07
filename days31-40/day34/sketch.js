// Eva Philips
// July 4, 2019
// 100 Days of Generative Patterns, Day 34
// References:
// 1. This code was largely based on Dan Shiffman's Coding Train Challenge #27- https://youtu.be/CKeyIbT3vXI



// variables
let fireworks = [];
let gravity;


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
	cvs.center();


	colorMode(HSB);
	gravity = createVector(0, 0.2);
	stroke(255);
	strokeWeight(4);
	background(0);
	

}

function draw(){
	colorMode(RGB)
	background(5, 25);

	if(random(1)<0.03){
		fireworks.push(new Firework(random(0, width), map(mouseX, 0, width, 1, 100)));
	}

	for(let i=fireworks.length-1; i>=0; i--){
		fireworks[i].update();
		fireworks[i].show();

		if(fireworks[i].done()){
			console.log("here")
			fireworks.splice(i, 1);
		}
	}
}

// function mousePressed(){
// 	fireworks.push(new Firework(mouseX));
// }


