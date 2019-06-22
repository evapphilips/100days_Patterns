class Ray{
	constructor(x, y){
        //this.r = width/(2*scl);
        this.r = random(width/(2*scl), width/(scl));
		this.ang = random(0, TWO_PI);
		this.dx = this.r*cos(this.ang);
		this.dy = this.r*sin(this.ang);
		this.inc = random(0, 0.06)
		//this.startX = random(0, width);
		//this.startY = random(0, height);
		this.startX = x;
		this.startY = y;
		this.dir = Math.round(random())*2-1;
	}

	display(){
		stroke(255);
		fill(255);
		push()
		translate(this.startX, this.startY);
		line(0, 0, this.dx, this.dy);
		//ellipse(this.dx, this.dy, 5);
		pop()
	}

	update(){
		this.ang += this.dir *map(mouseX, 0, width, -.1, .1);
		this.dx = this.r*cos(this.ang);
		this.dy = this.r*sin(this.ang);
	}
}