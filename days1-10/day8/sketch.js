// Eva Philips
// June 8, 2019
// 100 Days of Generative Patterns, Day 8

// Variables
let sizV;
let sizH;
let vinc = .008;
let hinc = .009;
let voff = 0;
let hoff = 0;
let sizArray = [];


function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(0);
}

function draw(){
    // setup canvas
    background(0);
    rectMode(CENTER);
    fill(255);
    noStroke();

    // vertical lines
    for(let i=0; i<31; i++){
    sizV = noise(voff) * width;
    //console.log(sizY);
    rect(i*20, height/2, map(mouseX, 0, height, 0, 20), sizV);
    }

    // horizontal lines
    for(let j=0; j<31; j++){
        sizH = noise(hoff) * height;
        //console.log(sizY);
        rect(width/2, j*20, sizH, map(mouseY, 0, height, 0, 20));
    }

    // update offset
    voff += vinc;
    hoff += hinc;
}