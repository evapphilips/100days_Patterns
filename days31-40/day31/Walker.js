// Define the walker class
class Walker {
	constructor(){
		this.x = random(0, width);
		this.r = random(0, 5);
		this.stp = random(0, 1);
		this.dir = Math.round(Math.random())*2-1;
		if(this.dir == -1){
			this.y = height;
		}
		if(this.dir == 1){
			this.y = 0;
		}
		this.incR = 0;
		this.incS = 0;
	}

	display(){  // display the walker
		fill(255);
		noStroke();
		ellipse(this.x, this.y, this.r + this.incR);
	}

	update(){
		this.incR= map(mouseX, 0, width, 0, 12);
		this.incS = map(mouseY, 0, height, 0, 5);
	}

	step(){
		let dir = int(random(4)); // direction variables
		//let stp = 5; // step variable


		// move based on direction variable
		if(dir == 0){ //move right
			this.x = this.x + (this.stp + this.incS);
		}else if(dir == 1){  // move left
			this.x = this.x - (this.stp + this.incS);
		}else if(dir == 2){ // move up
			this.y = this.y + (this.dir * (this.stp + this.incS));
		}else{ // move down
			this.y = this.y + (this.dir * (this.stp + this.incS));
		}

		if(this.y > height){
			this.y = 0;
		}
		if(this.y < 0){
			this.y = height;
		}
	}

}