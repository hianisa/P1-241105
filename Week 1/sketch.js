let image1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);


  text ("1, anisa dehghanzadeh", 30, 50);
 
 
 
 
 
 text ("2", 30, 100);
fill ("#cc0000")
 rect (50, 80, 100, 30)
fill ("#ffffff")
 rect (50, 110, 100, 30)
fill ("#310094")
 rect (50, 140, 100, 30)

text ("3", 30, 230)
fill ("#000000")
 rect (50, 200, 50, 50) 
fill ("#ffffff")
 rect (50, 250, 50, 50)
fill ("#000000")
 rect (50, 300, 50, 50)


fill ("#ffffff")
  rect (100, 200, 50, 50) 
fill ("#000000")
 rect (100, 250, 50, 50)
fill ("#ffffff")
 rect (100, 300, 50, 50)

fill ("#000000")
 rect (150, 200, 50, 50) 
fill ("#ffffff")
 rect (150, 250, 50, 50)
fill ("#000000")
 rect (150, 300, 50, 50)


text ("4", 30, 400)
noFill();
stroke(0)
rect (50, 500, 150, 200)
triangle (50, 500, 120, 400, 200, 500)

text ("5", 250, 50)
fill ("#9b9b9b")
noStroke()
rect (290, 160, 30, 100)
rect (270, 40, 70, 150)
fill ("#d40c0c")
circle (305, 70, 40, 40)
fill ("#ff9700")
circle (305, 115, 40, 40)
fill ("#38ff00")
circle (305, 160, 40, 40)



fill ("#000000")
text ("6", 250, 320)
fill("#ffffff")
stroke(0);
strokeWeight(5);
rect (305, 300, 150, 150)
strokeWeight(1);
fill("#000000")
circle(380, 375, 40, 40)
circle(335, 335, 40, 40)
circle(420, 420, 40, 40)




text ("7", 250, 500)
fill("#ff0000")
noStroke();
rect (290, 470, 100, 20)
rect(270, 490, 200, 15)

fill("#ffddba")
rect (270, 505, 150, 15)
rect (260, 520, 210, 15)
rect (260, 535, 230, 15)
rect (260, 550, 210, 15)
rect (290, 565, 160, 15)

fill("#ff0000")
rect (270, 580, 130, 15)
rect (260, 595, 210, 15)
rect (240, 610, 250, 15)
rect (270, 625, 170, 15)

fill("#ffddba")
rect (240, 625, 50, 15)
rect(440, 625, 50, 15)
rect(240, 640, 70, 30)
rect(420, 640, 70, 30)

fill("#005cff")
rect(310, 625, 110, 45)
rect(290, 665, 150, 15)
rect(290, 665, 60, 45)
rect(380, 665, 60, 45)
rect(335, 610, 60, 15)
rect(335, 580, 15, 50)
rect(380, 590, 15, 50)


fill("#ffef00")
rect(335, 625, 20, 20)
rect(375, 625, 20, 20)

fill("#754f38")
rect(270, 710, 80, 35)
rect(380, 710, 80, 35)
rect(250, 725, 80, 20)
rect(400, 725, 80, 20)

rect(255, 520, 15, 45)
rect(270, 505, 45, 15)
rect(285, 520, 15, 30)
rect(255, 550, 30, 15)
rect(285, 540, 30, 15)

fill("#000000")
rect(405, 505, 15, 30)
rect(420, 535, 15, 15)
rect(405, 550, 65, 15)

text("mario", 500, 500)

text("8 rosalina", 500, 50)
image(image1, 500, 80, 200, 200)
}
function preload() {
  image1 = loadImage("rosalina.jpg");
}




