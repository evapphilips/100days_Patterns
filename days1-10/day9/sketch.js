// Eva Philips
// June 9, 2019
// 100 Days of Generative Patterns, Day 9

// Variables
let walkers = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(0);

    // initialize walker
    for(let i=0; i<20; i++){
        walkers.push(new Walker(random((width/4), (3*(width/4))), height/2, random(0,5), random(8)));
    }

}

function draw(){
    for(let i=0; i<walkers.length; i++){
        walkers[i].display();
        walkers[i].step();
    }
    

}

