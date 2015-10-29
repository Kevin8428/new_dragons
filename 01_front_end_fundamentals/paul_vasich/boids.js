function Flock() {
  this.boids = {};

  this.flap = function() {
    for (boid in this.boids) {
      boid.flap(this.boids);
    }
  }
}

function Boid() {
  this.loc = [];
  this.acc = [];
  this.r   = 0;
  this.maxF = 0;
  this.maxS = 0;

  this.angle = Math.random()*(Math.PI*2);
  this.vel   = [Math.cos(this.angle), Math.sin(this.angle)]
}
