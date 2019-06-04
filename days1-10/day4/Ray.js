class Ray{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.r = random(0, width/2);
        this.ang = random(360);
        this.dx = this.r*cos(this.ang);
        this.dy = this.r*sin(this.ang);
        this.dir = Math.round(Math.random())*2-1;
        this.changeR = 0;
    }

    display(){
        let col = map(this.r, 0, width/2, 0, 255);
        stroke(col);
        line(this.x, this.y, this.x+this.dx, this.y+this.dy);
        fill(col);
        noStroke();
        ellipse(this.x+this.dx, this.y+this.dy, 10);

        if(mouseX<width/2){
            this.changeR = this.dir*map(mouseX, 0, width/2, 5, 0);
        }else{
            this.changeR = -1*this.dir*map(mouseX, width/2, width, 0, 5); 
        }
        this.r += this.changeR * random(0,2);
        constrain(this.r, 0, width/2);
        this.dx = this.r*cos(this.ang);
        this.dy = this.r*sin(this.ang);
    }
}