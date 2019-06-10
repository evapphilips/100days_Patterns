class Tile{
	constructor(x, y, scl){
		this.scl = scl;
		this.w = 0;
		this.h = height/scl;
		this.dir = Math.round(Math.random())*2-1;
		this.x = x;
		this.y = y;
		this.newX = 0;
		this.newY = 0;
		this.col = 0;
		
	}

	display(){
		fill(this.col);
		noStroke();
		rect(this.newX, this.newY, this.w, this.h);
	}

	update(){
		if(this.dir>0){
			this.w = map(mouseX, 0, width, 0, width/this.scl);
			this.h = map(mouseY, 0, height, 0, height/this.scl);
			this.newX = this.x;
			this.newY = this.y;
			this.col = 255;
		}else if(this.dir<0){
			this.w = map(mouseX, 0, width, width/this.scl, 0);
			this.h = map(mouseY, 0, height, height/this.scl, 0);
			this.newX = this.x + width/this.scl - this.w;
			this.newY = this.y + height/this.scl - this.h;
			this.col = 255;
		}
	}

}