class Tile{
	constructor(){
		this.w = random(0, width);
		this.cr = 0;
		this.ang = random(0, TWO_PI);
		this.dir = Math.round(Math.random())*2-1
	}

	display(){
		stroke(255);
		push();
		translate(width/2, height/2);
		rotate(this.dir * map(mouseY, 0, height, 0, PI/4) + this.ang);
		if(this.dir<0){
			this.cr = map(mouseX, 0, width, 0, width/4);
		}else{
			this.cr = map(mouseX, 0, width, width/4, 0);
		}
		
		if(this.cr<0){
			this.cr = 0;
		}else if(this.cr>width){
			this.cr = width/4;
		}
		rect(0, 0, this.w, this.w, this.cr);
	pop();
	}
}