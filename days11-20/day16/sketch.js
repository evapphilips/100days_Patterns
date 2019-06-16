// Eva Philips
// June 16, 2019
// 100 Days of Generative Patterns, Day 16
// References:
    // This code is largely based on Dan Shiffman's Coding Challenge #59: https://www.youtube.com/watch?v=4hA7G3gup-4

// variables
let particles = [];
let scl = 20;


function setup(){
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(0);

    for(let j=0; j<scl; j++){
        for(let i = 0; i<20; i++){
            let yPos = j*(width/scl);
            particles.push(new Particle(random(width), yPos));
        }
    }
}

function draw(){
    background(255);
    
    for(let i=0; i<particles.length; i++){
        particles[i].behaviors();
        particles[i].update();
        particles[i].show();
    }
}