  let img;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  textSize(30);
  textAlign(BOTTOM);
  background(220);
  stroke('white')
  textFont('Timesnewroman')
  
  setClockBackgroundColor('green');
  drawClockTime(hour(), minute(), second());
  drawClockMessageAndimage("Hello")
}
 function setClockBackgroundColor(thecolor) {
  fill(thecolor);
  rect(10,10,380,380);
 }
function drawClockTime(hour, minute, seconds) {
  fill('white');
  text(hour + ":" + minute + ":" + seconds, 20, 50);
}

function drawClockMessageAndimage(thetext){
  text(thetext,20,80);
}