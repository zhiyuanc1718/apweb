var canvas;
var x, y, r, g, w, h;
var shapes = [];
var particles = [];
const rate = 100; //rate of Shape spawn

function windowResized() {
    w = $('body').width();
    h = $('body').height();
    resizeCanvas(w, h);
}

function setup() {
    w = $('body').width();
    h = $('body').height();
    canvas = createCanvas(w, h);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style('display', 'block');
    rectMode(CENTER)
    x = width;
    y = 4 * height / 5;
    r = 0;
    g = 255;
    lives = 3;
    for (var i = 0; i < 20; i++) {
        particles.push(new particle(-height / 2, height / 2, 0, width, "white"));
    }
}

function Background() {
    background(255, 255, 255);
    fill(0, 0, 0, 230)
    rect(width / 2, height / 2, width, height)
    particleB();
}

function particle(y_min, y_max, x_min, x_max, str) {
    this.x = random(x_min, x_max)
    this.y = random(y_min, y_max)
    this.s = random(0.5, 2)
    var sp;
    if (this.s > 1.5) {
        sp = random(3.3, 3.4)
    }
    else if (this.s >= 1 && this.s <= 1.5) {
        sp = random(3, 3.2)
    }
    else {
        sp = random(2.8, 2.9)
    }
    this.display = function() {
        stroke(str)
        ellipse(this.x, this.y, 1, 1)
    };
    this.move = function() {
        this.y += sp;
    };
}

function particleB() {
    if (frameCount % 60 == 0) {
        for (var i = 0; i < 10; i++) {
            particles.push(new particle(-height / 2, 0, 0, width, "white"));
        }
    }

    for (var t = 0; t < particles.length; t++) {
        particles[t].display()
        particles[t].move()
        if (particles[t].y > height) {
            particles.splice(t, 1)
        }
    }
}

function draw() {
    Background();
    stroke(0);
    ShapeBehavior();
}


function character() {
    particles.push(new particle(y + 17, y + 17, x - 20, x - 20, "orange"));
    particles.push(new particle(y + 17, y + 17, x - 20, x - 20, "red"));
    particles.push(new particle(y + 17, y + 17, x + 20, x + 20, "orange"));
    particles.push(new particle(y + 17, y + 17, x + 20, x + 20, "red"));
    rectMode(CENTER)
    strokeWeight(3)
    fill(0, 0, 255)
    rect(x, y, 15, 60)
    rect(x - 22.5, y + 20, 30, 20)
    rect(x + 22.5, y + 20, 30, 20)
    fill(255, 0, 0)
    ellipse(x - 25, y + 20, 10, 10)
    ellipse(x + 25, y + 20, 10, 10)
    fill(0)
    rect(x - 25, y + 2.5, 5, 15)
    rect(x + 25, y + 2.5, 5, 15)
}

function bullet() {
    this.x = x;
    this.y = y;
    var bSpeed = 6;

    this.display = function() {
        rectMode(CENTER)
        fill(49, 85, 142)
        rect(this.x, this.y - 50, 10, 30, 20)
    };

    this.move = function() {
        this.y -= bSpeed;
    };
}


function polygon(x, y, radius, sides) {
    var angle = TWO_PI / sides;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var pointx = x + cos(a) * radius;
        var pointy = y + sin(a) * radius;
        vertex(pointx, pointy);
    }
    endShape(CLOSE);
}

function Shape() {
    this.x = random(45, (3 / 4) * width - 35);
    this.y = 0;
    this.d_y = random(1, 1.5);
    this.d_x = random(-1, 1) * 2;
    this.sides = floor(random(3, 10));
    this.rad = floor(random(20,25));
    this.display = function() {
        fill(165, 19, 39)
        polygon(this.x, this.y, this.rad, this.sides)
    };
    this.move = function() {
        this.x += this.d_x
        this.y += this.d_y
    };
}

function ShapeBehavior() {
    if (frameCount % rate == 0) {
        shapes.push(new Shape());
    }

    for (var i = 0; i < shapes.length; i++) {
        shapes[i].display();
        shapes[i].move();
        if (shapes[i].x < 30 || shapes[i].x > width - 30) {
            shapes[i].d_x *= -1
        }
    }
}
