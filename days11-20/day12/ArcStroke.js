class ArcStroke{
	constructor(){
		this.r = random(0, width);
		this.siz = random(0, TWO_PI);
		this.rot = 0;
		this.weight = random(.5, 5);
		this.offset = random(0, TWO_PI);
		this.inc = random(0, TWO_PI);
		this.dir = Math.round(Math.random())*2-1;
	}

	display(){
		stroke(255);
		strokeWeight(this.weight);
		noFill();
		push();
		translate(width/2, height/2);
		arc(0, 0, this.r, this.r, 0 + this.rot + this.offset, this.siz + this.rot + this.offset);
		pop();
		
	}

	update(){
		this.rot = this.dir * map(mouseX, 0, width, 0, this.inc);
		this.weight = map(mouseY, 0, height, 0, 5);
	}
}
