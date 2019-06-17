class Tile{
	constructor(x, y){
		this.posx = x;
		this.posy = y;
		this.dir = Math.round(Math.random())*2-1;
		this.inc = random(1, 2);
		this.sclTri = scl * random(2, 4);
	}

	display(){
		//col = map(mouseY, 0, height, 50, 100);

		push();
		//fill(255);
		noFill();
		//noStroke();
		stroke(0);
		translate(this.posx, this.posy);
		rotate(map(mouseX, 0, width, 0, this.inc*this.dir*TWO_PI));
		triangle(0, -height/this.sclTri, -width/this.sclTri, height/this.sclTri, width/this.sclTri, height/this.sclTri);
		pop();


	}
}
