function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("#2c0735");
  translate(width / 2, height / 2);
  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();

  stroke("4e148c");
  noFill();
  strokeWeight(4.7);

  stroke("#613dc1");
  let secondsAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsAngle);

  push();
  rotate(secondsAngle);
  stroke("#4e148c");
  line(0, 0, 90, 0);
  pop();

  stroke("4f518c");

  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  stroke("4f518c");
  line(0, 0, 70, 0);
  pop();

  stroke("#907ad6");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 220, 220, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke("#907ad6");
  line(0, 0, 60, 0);
  pop();

  stroke("ced4da");
  strokeWeight(15);
  point(0, 0);
  push();
  strokeWeight(1);
  rotate(90);
  text("Leen Shomar", 0, 30);
  pop();

  push();
  fill(255);
  rotate(+90);
  textSize(20);
  push();
  strokeWeight(2);
  text("12", -13, -105);
  text("9", -125, +10);
  text("3", 110, +10);
  text("6", -10, 125);
  noFill();
  pop();
}
