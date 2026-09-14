function setup() {
  createCanvas(400, 400);
}

let mijnNaam = "gabriel";
let textKleur = 0;

function draw() {
  background(220);


  fill(textKleur);
         

  text(mijnNaam, 20, 20);

  textKleur = textKleur + 1;
  text(textKleur, 20, 40);
}
   