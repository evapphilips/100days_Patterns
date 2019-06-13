class Bar{
	constructor(){
		this.posT = random(width);
		this.posB = random(width);
		this.incT = random(0, 1);
		this.incB = random(0, 1);
		this.col = random(0, 255);
		this.weight = random(0, 10);
		this.dirT = Math.round(Math.random())*2-1;
		this.dirB = Math.round(Math.random())*2-1;
		this.hT = random(0, height);
		this.hB = random(0, height)
	}

	display(){
		stroke(this.col);
		strokeWeight(this.weight);
		line(this.posT, this.hT, this.posB , this.hB);
		if(mouseX > width/2){
			this.posT += this.dirT * this.incT;
		}else{
			this.posT -= this.dirT * this.incT;
		}
		if(mouseY > height/2){
			this.posB += this.dirB * this.incB;
		}else{
			this.posB -= this.dirB * this.incB;
		}
	}
}
