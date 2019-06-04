// Eva Philips
// May 31, 2019
// 100 Days of Generative Patterns Day 4:


//variables
let rays = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
    angleMode(DEGREES);
    for(let i=0; i<600; i++){
        rays.push(new Ray());
    }    

}

function draw(){
    background(255);

    for(let i=0; i<rays.length; i++){
        rays[i].display();
    }
}

