let track;
let grassImage;
let roadImage;
let carImage;
let carSpeed = 1;


function preload(){
track = loadStrings('track.txt')
grassImage = loadImage('image/grass-texture.png')
roadImage = loadImage('image/road-texture.png')
carImage = loadImage('image/car.png')

}


function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0);
 
  road = createSprite(200,200, 50, 50)
  road.addImage(roadImage)


  grass = createSprite(150, 150, 50, 50)
  grass.addImage(grassImage)

 car = createSprite(150, 150, 50,50)
 car.addImage(carImage)
 car.rotateToDirection = true;


}

function draw() {
drawSprites();
drawTrack();
drive();

}

function drawTrack(sceneContent) {
let tw = width / 20
let th = height / 20

  for (var x = 0; x < 15; x ++)
    for (var y = 0; y < 15; y ++){
      let gameTrack = track[x][y];
      
  }


console.log(tw)
console.log(th)


}


function drive(){
 
  if (keyIsDown(UP_ARROW)) {
    car.setSpeed(carSpeed + 0.5, car.getDirection());
  }

  else if (keyIsDown(DOWN_ARROW)) {
    car.setSpeed(carSpeed - .5, car.getDirection());
  }

  else if (keyIsDown(LEFT_ARROW)) {
    car.setSpeed(carSpeed, car.getDirection() - 1.5)
  }

  else if (keyIsDown(RIGHT_ARROW)) {
    car.setSpeed(carSpeed, car.getDirection() + 1.5);
  }
}



