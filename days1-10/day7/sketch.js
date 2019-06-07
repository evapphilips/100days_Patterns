// Eva Philips
// June 7, 2019
// 100 Days of Generative Patterns, Day 7
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY


// Variables
let inc = 0.1;
let scl = 20;
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
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            let vect = p5.Vector.fromAngle(angle);
            vect.setMag(0.1)
            flowfield[index] = vect;
            xoff += inc;

            push();
            translate(i*scl, j*scl)
            rotate(vect.heading());
            noStroke();
            fill(0, 40);
            let rectSize = map(mouseY, 0, height, 0, 15);
            rect(scl * 1, 0, rectSize, rectSize)
            pop();
        }
        yoff += inc;
    }
}