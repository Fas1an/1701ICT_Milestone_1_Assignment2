let track = [];

let firstRun = true;
let finishImage;
let trackImage;
let grassImage;

let car;
let carX;
let carY;
let posCx = 0;
let posCy = 0;

let speed = 0;
let trackSize = 40;

let direction = 0;
let rotationSpeed = 1;

function preload() {
  lines = loadStrings("track.txt");
  finishImage = loadImage("image/finishline.png");
  grassImage = loadImage("image/grass-texture2.png");
  roadImage = loadImage("image/road-texture.png");
  carImage = loadImage("image/car2.png");
}

function setup() {
  createCanvas(800, 800);

  outbond = new Group();
  inbound = new Group();
  drawTrack();
}

function draw() {
  drawCar();
  drawSprites(outbond);
  drawSprites(inbound);
  drawSprite(car);
  carReset();
}

function drawTrack() {
  let posX = 0;
  let posY = 0;
  for (let y = 0; y < lines.length; y++) {
    tokens = splitTokens(lines[y]);

    for (let x = 0; x < tokens.length; x++) {
      track[x] = int(tokens[x]);

      if (track[x] == 1) {
        road = createSprite(posX, posY);
        road.addImage(roadImage);
        roadImage.resize(trackSize, trackSize);
        inbound.add(road);
      } else if (track[x] == 0) {
        grass = createSprite(posX, posY);
        grass.addImage(grassImage);
        grassImage.resize(trackSize, trackSize);
        outbond.add(grass);
      } else if (track[x] == 2) {
        finish = createSprite(posX, posY);
        finish.addImage(finishImage);
        finishImage.resize(trackSize, trackSize);
        inbound.add(finish);
        finish.rotation = 90;
        if (firstRun) {
          posCx = posX;
          posCy = posY;
          car = createSprite(posX, posY, 1, 1);
          car.addImage(carImage);
          carImage.resize(trackSize / 4, trackSize / 4);
          car.rotateToDirection = true;
          car.setVelocity(speed, 0);
          firstRun = false;
          car.rotation = 90;
        }
      }
      posX += 40;
    }
    posX = 0;
    posY += 40;
  }
}

function drawCar() {
  if (keyDown(LEFT_ARROW)) car.rotation -= 4;
  if (keyDown(RIGHT_ARROW)) car.rotation += 4;
  if (keyDown(UP_ARROW)) {
    car.addSpeed(0.02, car.rotation);
    car.limitSpeed(2);
  }
  if (keyDown(DOWN_ARROW)) {
    car.addSpeed(-0.2, car.rotation);
    car.limitSpeed(0);
  }
}

function carReset() {
  if (car.collide(outbond)) {
    car.remove();
    car = createSprite(posCx, posCy);
    car.addImage(carImage);
    car.rotateToDirection = true;
    car.setVelocity(speed, 0);
    car.rotation = 90;
  }
}
