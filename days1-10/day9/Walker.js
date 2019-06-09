class Walker {
	constructor(x, y, r, stp){
		this.x = x;
		this.y = y;
		this.r = r;
		this.stp = stp;
	}

	display(){  // display the walker
        fill(map(mouseY, 0, height, 0, 255));
        noStroke();
		ellipse(this.x, this.y, this.r);
	}

	step(){
		let dir = int(random(4)); // direction variables
		//let stp = 5; // step variable


        // move based on direction variable
        let step = map(mouseX, 0, width, 2, 10);
		if(dir == 0){ //move right
			this.x = this.x + step;
		}else if(dir == 1){  // move left
			this.x = this.x - step;
		}else if(dir == 2){ // move up
			this.y = this.y - step;
		}else{ // move down
			this.y = this.y + step;
		}
		constrain(this.x,0,width-1);
		constrain(this.y, 0, height-1);
	}

}