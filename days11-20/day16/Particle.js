class Particle{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.target = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0, 0);
        this.r = 10;
        this.maxspeed = 10;
        this.maxforce = 1.5;
        this.r = 200;

    }

    update(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    show(){
        stroke(40);
        strokeWeight(2);
        noFill();
        //point(this.pos.x, this.pos.y);
        //line(this.pos.x, this.pos.y, this.pos.x+80, this.pos.y);
        rectMode(CENTER);
        rect
        rect(this.pos.x, this.pos.y, map(mouseX, 0, width, 0, 50), map(mouseY, 0, height, 0, 50), 25);
    }

    behaviors(){
        let arrive = this.arrive(this.target);
        this.applyForce(arrive); 

        let mouse = createVector(mouseX, mouseY);
        let flee = this.flee(mouse);
        this.applyForce(flee);
    }

    applyForce(f){
        this.acc.add(f);
    }

    flee(target){
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        if(d<100){
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            let steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxforce)
            return steer
        }else{
            return createVector(0, 0);
        }
         
    }

    arrive(target){
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        let speed = this.maxspeed;
        if(d<this.r){
            speed = map(d, 0, 100, 0, this.maxspeed)
        }
        desired.setMag(speed);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce)
        return steer 
    }
}