//center ellipse
var xcenter = 200;
var ycenter = 200;

//rotation speed
var rs1 = 0.01;
var rs2 = 0.02;

//inner ball track - r1 = blue, r2 = red
var r1 = 60;
var r2 = 110;
var r3 = 40;
var r4 = 90;

//starting point in degrees
var ra = 150;
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
    //yellow line 1
    fill(255, 255, 0, 0);
    stroke(176, 178, 52);
    strokeWeight(1);
    ellipse(xcenter, ycenter, 200, 100);
    //yellow line 2
    fill(255, 255, 0, 0);
    stroke(176, 178, 52);
    strokeWeight(1);
    ellipse(xcenter, ycenter, 210, 105);
    //blue circle
    var rx2 = xcenter + r2 * cos(ra);
    var ry2 = ycenter + r1 * sin(ra);
    fill(0, 0, 255);
    ellipse(rx2, ry2, 15, 15);
    // allows for rotation
    ra += rs1;
    //red circle
    var rx1 = xcenter + r4 * cos(ba);
    var ry1 = ycenter + r3 * sin(ba);
    fill(255, 0, 0, );
    ellipse(rx1, ry1, 15, 15);
    //allows for rotation
    ba += rs2;


}