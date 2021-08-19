function setup() {
    createCanvas(500, 500);
}

function draw() {
    //background square
    noStroke();
    fill(105, 106, 225);
    rectMode(CORNER);
    rect(0, 0, 500, 120);
    //alpha change by x / 430. x increments in 90
    for (var x = 70; x <= 430; x += 90) {
        fill(104, 202, 153, (x / 430 * 255));
        stroke(0);
        strokeWeight(1);
        rectMode(CENTER);
        rect(x, 60, 70, 70, 15);
    }
}

