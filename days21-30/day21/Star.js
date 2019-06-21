class Star{
	constructor(x, y, siz){ // x and y are the center point of the tile
		this.x = x;
		this.y = y;
		this.stpX = 0;
		this.stpY = 0;
		this.siz = siz;
		this.col = 0;
	}

	display(){
	// setup
	push();
	translate(this.x, this.y) // center origin point

	strokeWeight(2);
	stroke(this.col, 50);

	// right line
	// upper section
	line(this.stpX, 0, this.siz, -this.siz); 
	// lower section
	line(this.stpX, 0, this.siz, this.siz);

	// left line
	// upper section
	line(-this.stpX, 0, -this.siz, -this.siz); 
	// lower section
	line(-this.stpX, 0, -this.siz, this.siz);

	// top line
	// left section
	line(-this.siz, -this.siz, 0, -this.stpY); 
	// right section
	line(this.siz, -this.siz, 0, -this.stpY);

	// bottom line
	// left section
	line(-this.siz, this.siz, 0, this.stpY); 
	// right section
	line(this.siz, this.siz, 0, this.stpY);
	pop();
	}

	update(){
		//this.col = map(mouseY, 0, height, 0, 255);
		this.stpX = map(mouseX, 0, width, 0, this.siz);
		this.stpY = map(mouseY, 0, height, 0, this.siz);
	}
}
