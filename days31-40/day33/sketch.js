// Eva Philips
// July 3, 2019
// 100 Days of Generative Patterns, Day 33
// References: 
// 1. This code is largely based on code from this Dan Shiffman video: https://www.youtube.com/watch?v=E1B4UoSQMFw



// variables
let angle;
// let axiom = "F";
// let sentence = axiom;
let len = 20;
// let rules = [];
// rules[0] = {
// 	a: "F",
// 	b: "FF+[+F-F-F]-[-F+F+F]"
// }
let scl = 3;


let sentence = "FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]+[+FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]-FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]-FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]]-[-FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]+FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]+FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]]"


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();

	
	// for(let i=0; i<3; i++){
	// 	generate();
	// }

	

}

function draw(){

	background(255);
	angle = radians(map(mouseX, 0, width, -20, 20));
	len = map(mouseY, 0, height, 30, 20)

	turtle(3*width/8, height, -1)
	turtle(5*width/8, height, 1)

	
}


function turtle(x, y, dir){
	//background(220);
	resetMatrix();
	translate(x, y);
	strokeWeight(2);
	fill(0);
	stroke(0); 
	for (let i=0; i<sentence.length; i++) {
		let current = sentence.charAt(i);
	
		if (current == "F") {
		  line(0, 0, 0, -len);
		  
		  ellipse(0, -len, 5, 5);
		  translate(0, -len );
		} else if (current == "+") {
		  rotate(dir * angle);
		} else if (current == "-") {
		  rotate(dir * -angle)
		} else if (current == "[") {
		  push();
		} else if (current == "]") {
		  pop();
		}
	  }

}
	
  
