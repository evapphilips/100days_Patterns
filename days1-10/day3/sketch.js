// Eva Philips
// June 3, 2019
// 100 Days of Generative Patterns, Day 3

// variables
let widthSize;
let heightSize;
let tabs = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
    //background(255);

    // create tab instances
    for(let i=0; i<200; i++){
        tabs.push(new Tab());
    }

}

function draw(){
    // clear previous background
    background(30);

    for(let i=0; i<tabs.length; i++){
        tabs[i].display();
    }
}

