// Eva Philips
// June 1, 2019
// 100 Days of Generative Patterns, Day 1: rotating and growing squares

// variables
let numTiles = 6 ;
let tiles = [];
let col = 0;
let rot = 0;
let siz = 0;


function setup(){

    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(255);

    // create a tile instance
    for(let i=0; i<numTiles; i++){
        for(let j=0; j<numTiles; j++){
            tiles.push(new Tile(2*i*((width/2)/numTiles)+((width/2)/numTiles), 2*j*((height/2)/numTiles)+((height/2)/numTiles), numTiles, Math.round(Math.random()) * 2 - 1));
        }   
    }
    
}

function draw(){
    // show tiles
    for(let i=0; i<tiles.length; i++){
        tiles[i].display(col, rot, siz);
    }

    // change appearance
    if(col >= 0){
        col += .75
        rot ++
        siz ++
    }
    constrain(col, 0, 255);
    constrain(rot, 0, 2*PI);
    constrain(siz, 0, width/(numTiles*2));
}