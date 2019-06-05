// Eva Philips
// June 5, 2019
// 100 Days of Generative Patterns, Day 5
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY

// variables
let inc = 0.1;
let scl = 10;
let rows;
let cols;
let zoff = 0;

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();

    // setup rows
    rows = floor(width/scl);
    cols = floor(height/scl);

}

function draw(){
    background(0);

    zoff = map(mouseX, 0, width, 0, 1);
    let yoff = 0;
    for(let i=0; i<rows; i++){
        let xoff = 0;
        for(let j=0; j<cols; j++){
            let index = (i + j * width) / 4;
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            let vect = p5.Vector.fromAngle(angle);
            xoff += inc;
            push();
            translate(i*scl, j*scl)
            rotate(vect.heading());
            stroke(noise(xoff, yoff)*255)
            line(0, 0, scl * map(mouseY, 0, height, 0, 10), 0);
            pop();
        }
        yoff += inc;
    }

}