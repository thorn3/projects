// Create snow particles
let snow = [];
let numParticles = 500;
let colors = ['#fdfcfb', '#ECE9E6', '#333333'];

// Create canvas to draw particles
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colors[2]);

  // Create particle objects
  for (let i = 0; i < numParticles; i++) {
    snow.push(new particle());
  }
}

// Animate snow particles
function draw() {
  background(colors[2]);
  
  // Add more particles to the top
  if (snow.length < numParticles) {
    snow.push(new particle());
  }
  
  // Draw and animate particles
  for (let i = 0; i < snow.length; i++) {
    let p = snow[i];
    p.update();
    p.show();

    // Remove particles when they reach the bottom of canvas
    if (p.pos.y > height) {
      snow.splice(i, 1);
    }
  }
}

// Particle object constructor
class particle {
  constructor(x, y) {
    this.pos = createVector(random(0, width), random(-50, 0));
    this.vel = createVector(random(-1, 1), random(2, 4));
    this.accel = createVector(0, 0.2);
    this.color = colors[0];
    this.size = random(1, 4);
  }

  // Update position
  update() {
    this.vel.add(this.accel);
    this.pos.add(this.vel);
  }

  // Draw particle
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}