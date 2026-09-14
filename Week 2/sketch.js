let sunx = 80
let sunspeed = 1.5
let cloudx1 = 90
let cloudx2 = 120
let cloudx3 = 150
let cloudspeed1
let cloudspeed2
let cloudspeed3








function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(153, 219, 255);


noStroke()


// boven stukje gras
fill("#1a4a23")
rect(0, 410, 800, 170)

fill("#787878")
rect (0, 430, 800, 170)

fill("#ffe872")
rect(50, 500, 80, 10)
rect(170, 500, 80, 10)
rect(290, 500, 80, 10)
rect(410, 500, 80, 10)
rect(530, 500, 80, 10)
rect(650, 500, 80, 10)

fill("#474747")
triangle(0, 410, 400, 410, 100, 150)
triangle(800, 410, 500, 410, 700, 100)

fill("#5e5e5e")
triangle(350, 410, 700, 410, 500, 200)

fill("#212121")
rect(600, 280, 40, 100)
rect(615, 350, 10, 80)

fill("#ffd100")
circle(sunx, 80, 90, 90)
sunx = sunx + sunspeed 
if (sunx >= 850){
  sunx = -50;
}
fill("#ff0000")
circle(620, 300, 25, 25)

fill("#ff9000")
circle(620, 330, 25, 25)

fill("#0eff00")
circle(620, 360, 25, 25)


drawwolk(cloudx1,90);
cloudx1 = cloudx1 + cloudspeed1
if (cloudx1 <= -50){
  cloudx1 = 850;
}
drawwolk(cloudx2,110);
drawwolk(cloudx3,140);






fill("#332318")
rect(30, 340, 20, 90)
rect(170, 340, 20, 90)
rect(310, 340, 20, 90)
rect(450, 340, 20, 90)

fill("#31522e")
rect(0, 580, 800, 50)

fill("#31522e")
circle(40, 340, 60, 60)
circle(180, 340, 60, 60)
circle(320, 340, 60, 60)
circle(460, 340, 60, 60)

fill("#ffb5d2")
rect(40, 350, 100, 100)
rect(40, 400, 150, 50)
fill("#2b2b2b")
circle(70, 450, 50, 50)
circle(160, 450, 50, 50)

fill("#ff5cb5")
rect(450, 350, 100, 100)
rect(450, 400, 150, 50)
fill("#2b2b2b")
circle(480, 450, 50, 50)
circle(570, 450, 50, 50)

fill("#ff008b")
rect(370, 450, 100, 100)
rect(370, 500, 150, 50)
fill("#2b2b2b")
circle(400, 550, 50, 50)
circle(490, 550, 50, 50)

fill("#332318")
rect(380, 510, 20, 90)
fill("#31522e")
circle(390, 510, 60, 60)










}
function drawwolk(xpos,ypos) {
  fill("#ffffff");
  circle(xpos, ypos, 50);
  circle(xpos + 40, ypos, 70);
  circle(xpos + 80 , ypos, 50);
}
//xpos= 170 ypos = 90

