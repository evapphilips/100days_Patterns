// Eva Philips
// June 2, 2019
// 100 days of Generative Patterns Day 2

// variables
let numTiles = 20; // number of tiles across
let tiles = [];
let dots = [];

function setup(){
    // setup canvas
    let cvs = createCanvas(600, 600);
    cvs.center();
    background(220);

    // create new tiles and dots
    for(let i=0; i<width; i+=width/numTiles){
        for(let j=0; j<height; j+=height/numTiles){
            tiles.push(new Tile(i + width/(2*numTiles), j + height/(2*numTiles), width/numTiles, height/numTiles));
            dots.push(new Dot(i + width/(2*numTiles), j + height/(2*numTiles), numTiles))
        }  
    }
}

function draw(){
    background(220);
    // show tiles and dots
    for(let i=0; i<tiles.length; i++){
        tiles[i].display();
        dots[i].display();
    }

}


