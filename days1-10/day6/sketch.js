// Eva Philips
// June 6, 2019
// 100 Days of Generative Patterns, Day 6
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY


// Variables
let inc = 0.1;
let scl = 10;
let rows;
let cols;
let zoff = 0;
let particles = [];
let flowfield = [];

function setup(){
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(255); 
    rows = floor(width/scl);
    cols = floor(height/scl);
}

function draw(){
    background(255);
    zoff = map(mouseX, 0, width, 0, 1);
    let yoff = 0;
    for(let i=0; i<rows; i++){
        let xoff = 0;
        for(let j=0; j<cols; j++){
            let index = (i + j * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI*map(mouseY, 0, height, 1, 3);
            let vect = p5.Vector.fromAngle(angle);
            vect.setMag(0.1)
            flowfield[index] = vect;
            xoff += inc;

            push();
            translate(i*scl, j*scl)
            rotate(vect.heading());
            //line(0, 0, scl * 1, 0);
            noFill();
            stroke(0);
            strokeWeight(2);
            ellipse(scl * 1, 0, 10, 10)
            pop();
        }
        yoff += inc;
    }
}