class Ring{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.r = width/(2*scl);
		this.strInit = random(10, 15);
		this.dir = Math.round(random())*2-1;
		this.inc = 0;

	}

	display(){
		noFill();
		stroke(0);
		strokeWeight(this.str);
		ellipse(this.x, this.y, this.r);
	}

	update(){
		this.inc = this.dir *map(mouseX, 0, width, 1, 20);
		this.str = this.strInit + this.inc;
	}
}

