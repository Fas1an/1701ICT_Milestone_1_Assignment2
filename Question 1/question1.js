let track;
let grassImage;
let roadImage;
let carImage;
let carSpeed = 1;
let x = 0;
const y = 0;

const trackSize = 20;

function preload() {
  track = loadStrings("track.txt");
  grassImage = loadImage("image/grass-texture.png");
  roadImage = loadImage("image/road-texture.png");
  carImage = loadImage("image/car.png");
  finishImage = loadImage("image/finishline.png");
}

function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0);
  car = createSprite(150, 150, 50, 50);
  car.addImage(carImage);
  car.rotateToDirection = true;
}

function draw() {
  drawSprites();
  drawTrack();
  drive();
}

function drive() {
  if (keyIsDown(UP_ARROW)) {
    car.setSpeed(carSpeed + 0.5, car.getDirection());
  } else if (keyIsDown(DOWN_ARROW)) {
    car.setSpeed(carSpeed - 0.5, car.getDirection());
  } else if (keyIsDown(LEFT_ARROW)) {
    car.setSpeed(carSpeed, car.getDirection() - 1.5);
  } else if (keyIsDown(RIGHT_ARROW)) {
    car.setSpeed(carSpeed, car.getDirection() + 1.5);
  }
}


function drawTrack() {
  let posX = 0;
    let posY = 0;
  for (let i = 0; i < track.length; i++) {
    trackData = splitTokens(track[i], " ");
    for (let j = 0; j < trackData.length; j++) {
      if (trackData[j] == 0) {
        grassImage.resize(trackSize, trackSize);
        grass = createSprite(posX, posY);
        grass.addImage(grassImage);
      } else if (trackData[j] == 1) {
        roadImage.resize(trackSize, trackSize);
        road = createSprite(posX, posY);
        road.addImage(roadImage);
      } else if (trackData[j] == 2) {
        finishImage.resize(trackSize, trackSize);
        finish = createSprite(posX, posY);
        finish.addImage(finishImage);
      }
      console.log(trackData[j] == 2);
    }
    posX += 40
  }
posX = 0
posY += 40
}
