let track = [];
let images = [];

function preload() {
  images[0] = loadImage("image/grass-texture.png");
  images[1] = loadImage("image/road-texture.png");
  images[2] = loadImage("image/road-texture.png");
}

function setup() {
  createCanvas(400, 400);
  loadStrings("track.txt", getTrack);
}

const imgSize = 20;
const padding = 2;
function draw() {
  background(255);
  for (let x = 0; x < track.length; x++) {
    for (let y = 0; y < track[x].length; y++) {
      let img = getImage(x, y);
      if (img) {
        image(
          img,
          padding + (x * (imgSize + padding)),
          padding + (y * (imgSize + padding)),
          imgSize,
          imgSize
        );
      }
    }
  }
}

function getTrack(arr) {
  for (let i = 0; i < arr.length; i++) {
    let line = arr[i].trim(); //This is to make sure trailing spaces don't break the code
    let tempArr = line.split(" ");
    track.push(tempArr);
  }
  
  console.log('track loaded');
}

function getImage(col, row) {
  return images[track[col][row]];
}