class Firework {
    constructor(x, siz){
        this.hu = random(255);
        this.firework = new Particle(x, height, this.hu, true);
        this.exploded = false;
        this.particles = [];
        this.siz = siz;

    }
    
  
    done(){
      if (this.exploded && this.particles.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  
    update(){
      if (!this.exploded) {
        this.firework.applyForce(gravity);
        this.firework.update();
        
        if (this.firework.vel.y >= 0) {
          this.exploded = true;
          this.explode();
        }
      }
      
      for (var i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        
        if (this.particles[i].done()) {
          this.particles.splice(i, 1);
        }
      }
    }
  
    explode(){
      for (var i = 0; i < this.siz; i++) {
        var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
        this.particles.push(p);
      }
    }
  
    show(){
      if (!this.exploded) {
        this.firework.show();
      }
      
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].show();
      }
    }
  }