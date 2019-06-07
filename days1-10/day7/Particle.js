class Particle{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.maxSpeed = 2;
        this.siz = random(0,2);
    }

    update(){
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);

    }

    applyForce(force){
        this.acc.add(force);
    }

    show(){
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.siz);
    }

    borders(){
        if(this.pos.x>width){
            this.pos.x = 0;
        }
        if(this.pos.x<0){
            this.pos.x = width;
        }
        if(this.pos.y>height){
            this.pos.y = 0;
        }
        if(this.pos.y<0){
            this.pos.y = height;
        }
    }

    follow(flowfield){
        let x = floor(this.pos.x/scl);
        let y = floor(this.pos.y/scl);
        let index = x + y * cols;
        let force = flowfield[index];
        this.applyForce(force);

    }
}