let sunx = 150
let sunspeed = 1.5
let cloudx1 = 220
let cloudx2 = 120
let cloudx3 = 150
let cloudspeed1 = 1.5
let cloudspeed2
let cloudspeed3

let treemove1 = 0
let treemove2 = 0

let car1 = 1
let car2 = 350
let car3 = 450
let carspeed1 = 1
let carspeed2 = 20
let ca3speed3 = 30



function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(153, 219, 255);


noStroke()


// boven stukje gras
fill("#1a4a23")
rect(0, 410, 800, 170)

//de weg
fill("#787878")
rect (0, 430, 800, 170)


//de lijnen op de weg
fill("#ffe872")
rect(50, 500, 80, 10)
rect(170, 500, 80, 10)
rect(290, 500, 80, 10)
rect(410, 500, 80, 10)
rect(530, 500, 80, 10)
rect(650, 500, 80, 10)





//sun
fill("#ffd100");
circle(sunx, 80, 90);

sunx = sunx + 0.7;
console.log(sunx);

if (sunx > 900 ){
  sunx = 0;
}



fill("#474747")
triangle(0, 410, 400, 410, 100, 150)
triangle(800, 410, 500, 410, 700, 100)

fill("#5e5e5e")
triangle(350, 410, 700, 410, 500, 200)


// stoplicht
fill("#212121")
rect(600, 280, 40, 100)
rect(615, 350, 10, 80)

//rood oranje en groen is de stoplicht
fill("#ff0000")
circle(620, 300, 25)

fill("#ff9000")
circle(620, 330, 25)

fill("#0eff00")
circle(620, 360, 25)


drawwolk(cloudx1,100);

cloudx1 = cloudx1 - 0.6;
console.log(cloudx1)

if (cloudx1 < -100 ){
  cloudx1 = 900;
}

drawwolk(cloudx2,200);
cloudx2 = cloudx2 - 0.8

cloudx2 = cloudx2 - 0.8;
console.log(cloudx2)

if (cloudx2 < -100 ){
cloudx2 = 900;
}


drawwolk(cloudx3,50);
cloudx3 = cloudx3 - 0.5

cloudx3 = cloudx3 - 0.5;
console.log(cloudx3)

if (cloudx3 < -100 ){
  cloudx3 = 900;
}


//boomstammen
fill("#332318")
rect(30, 340, 20, 90)
rect(170, 340, 20, 90)
rect(310, 340, 20, 90)
rect(450, 340, 20, 90)


//onder stuk gras
fill("#31522e") 
rect(0, 580, 800, 50)


//boom blaadjes achter
fill("#569931")
circle(treemove1 + 40, 340, 60, 60)
circle(treemove1 + 180, 340, 60, 60)
circle(treemove1 + 320, 340, 60, 60)
circle(treemove1 + 460, 340, 60, 60)

//blaadjes voor
fill("#517829")
circle(treemove2 + 35, 340, 60, 60)
circle(treemove2 + 175, 340, 60, 60)
circle(treemove2 + 315, 340, 60, 60)
circle(treemove2 + 455, 340, 60, 60)

treemove1 = 0 + Math.sin(frameCount * 0.05) * 5
treemove2 = 0 + Math.sin(frameCount * 0.075) * 5



//linker auto

drawcar ("#ffb5d2" ,car1,350);

car1 = car1 + 1;
console.log(car1);

if (car1 > 900 ) {
  car1 = -50
}

//auto rechts
drawcar("#ff5cb5", 450, 350)




//auto midden
drawcar("#ff008b", 370, 450);  





//onderste boom
fill("#332318")
rect(380, 510, 20, 90)
//blaaadjes achter
fill("#569931")
circle(treemove1 + 390, 510, 60, 60)
//blaadjes voor
fill("#517829")
circle(treemove2 + 385, 510, 60, 60)









}

// functie om een wolk te tekenen
function drawwolk(xpos,ypos) {
  fill("#ffffff");
  circle(xpos, ypos, 50);
  circle(xpos + 40, ypos, 70);
  circle(xpos + 80 , ypos, 50);
}

function drawcar(carColor, xPos, yPos){
  fill(carColor)
  rect(xPos, yPos, 100, 100)
  rect(xPos, yPos + 50, 150, 50)
  fill("#2b2b2b")
  circle(xPos + 30, yPos + 100, 50, 50)
  circle(xPos + 120, yPos + 100, 50, 50)
}

function drawblaadjesachtern  (xpos,ypos) {
  fill("#569931"); 
circle(40, 340, 60, 60)
circle(180, 340, 60, 60)
circle(320, 340, 60, 60)
circle(460, 340, 60, 60)
circle(390, 510, 60, 60)



}



//xpos= 170 ypos = 100

