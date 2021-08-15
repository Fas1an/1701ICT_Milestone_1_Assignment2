//center ellipse
var xcenter = 200;
var ycenter = 200;

//rotation speed
var rs1 = 0.01;
var rs2 = 0.02;

//inner ball track - r1/r2 = blue, b1/b2 = red
var r1 = 60;
var r2 = 110;
var b1 = 40;
var b2 = 90;

//starting point in degrees
var ra = 0;
var ba = 90;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    ellipseMode(CENTER);
};

function draw() {
    background(0, 128, 0);
    //grey road
    fill(0, 128, 0)
    stroke(169, 169, 169);
    strokeWeight(40);
    ellipse(xcenter, ycenter, 200, 100);
    // create yellow lanes 
    for (var y1 = 0; y1 <= 5; y1 += 5) {
        fill(255, 255, 0, 0);
        stroke(255, 255, 0);
        strokeWeight(1);
        ellipse(xcenter, ycenter, 200 + y1, 100 + y1);
    }
    noStroke();
    //blue circle - - set up path of rotation
    var rx2 = xcenter + r2 * cos(ra);
    var ry2 = ycenter + r1 * sin(ra);
    fill(0, 0, 255);
    ellipse(rx2, ry2, 15, 15);
    // allows for rotation due to change in angle
    ra += rs1;
    //red circle - set up path of rotation
    var rx1 = xcenter + b2 * cos(ba);
    var ry1 = ycenter + b1 * sin(ba);
    fill(255, 0, 0, );
    ellipse(rx1, ry1, 15, 15);
    //allows for rotation -  due to change in angle
    ba += rs2;
}