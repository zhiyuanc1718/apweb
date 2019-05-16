var canvas;
var x, y, w, h;
var shapes = [];
var particles = [];
const rate = 100; //rate of Shape spawn

//responsive canvas
function windowResized() {
    w = $('body').width();
    h = $('body').height();
    resizeCanvas(w, h);
}

//define all variables and generate falling objects
function setup() {
    w = $('body').width();
    h = $('body').height();
    canvas = createCanvas(w, h);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style('display', 'block');
    x = w;
    y = 4 * h / 5;
    for (var i = 0; i < 20; i++) {
        particles.push(new particle(-h / 2, h / 2, 0, w));
    }
}

function Background() {
    background(0);
    particleB();
}

//white falling
function particle(y_min, y_max, x_min, x_max) {
    this.x = random(x_min, x_max)
    this.y = random(y_min, y_max)
    this.s = random(0.5, 2)

    if (this.s > 1.5) {
        this.sp = random(3.3, 3.6)
    }
    else if (this.s >= 1 && this.s <= 1.5) {
        this.sp = random(3, 3.2)
    }
    else {
        this.sp = random(2.5, 2.9)
    }
    this.display = function() {
        stroke("white")
        ellipse(this.x, this.y, 1, 1)
    };
    this.move = function() {
        this.y += this.sp;
    };
}

//activating falling animation and spawn new objects
function particleB() {
    if (frameCount % 60 == 0) {
        for (var i = 0; i < 10; i++) {
            particles.push(new particle(-h / 2, 0, 0, w));
        }
    }
    for (var t = 0; t < particles.length; t++) {
        particles[t].display()
        particles[t].move()
        if (particles[t].y > h) {
            particles.splice(t, 1)
        }
    }
}

function draw() {
    Background();
    stroke(0);
}
