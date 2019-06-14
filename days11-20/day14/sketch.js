// Eva Philips
// June 14, 2019
// 100 Days of Generative Patterns, Day 14
// References:
    // This code is largely based on Dan Shiffman's Perlin Noise Flow Field: https://www.youtube.com/watch?v=BjoM9oKOAKY


// Variables
let inc = 0.05;
let scl = 20;
let rows;
let cols;
let zoff = 0;
let flowfield = [];

function setup(){
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(255); 
    rows = floor(width/scl);
    cols = floor(height/scl);
}

function draw(){
    inc = map(mouseY, 0, height, 0.02, .05)
    background(255);
    zoff = map(mouseX, 0, width, 0, 1);
    let yoff = 0;
    for(let i=0; i<rows; i++){
        let xoff = 0;
        for(let j=0; j<cols; j++){
            let index = (i + j * cols);
            let r = noise(xoff, yoff, zoff) * 255;
            let p = noise(xoff, yoff, zoff) * width/2;
            xoff += inc;
            stroke(r)
            noFill();
            rectMode(CENTER);
            rect(i*scl, j*scl, p, p)
        }
        yoff += inc;
    }
}