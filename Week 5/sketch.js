let vakken = ["", "", "", "", "", "", "", "", ""];

let speler = "pink";

let winnaar = "";
 
function setup() {

  createCanvas(400, 400);

}
 
function draw() {

  if (winnaar == "") {

    if (speler == "#ff74b7") {

      background("#fff7bd");

    } else {

      background("#fff7bd");

    }

  } else {

    background("#d6ffbd");

  }
 
  fill(0);

  textSize(20);

  textAlign(CENTER);
 
  if (winnaar != "") {

    text("Speler " + winnaar + " heeft gewonnen!", 200, 30);

  } else {

    text("Beurt van: " + speler, 200, 30);

  }
 
  for (let i = 0; i < 9; i++) {

    let x = 50 + (i % 3) * 100;

    let y = 50 + floor(i / 3) * 100;
 
    if (vakken[i] == "pink") fill("#ff74b7");

    else if (vakken[i] == "cyan") fill("#aafff8");

    else fill("white");
 
    rect(x, y, 90, 90);

  }

}
 
function mousePressed() {

  if (winnaar != "") return;
 
  let kolom = floor((mouseX - 50) / 100);

  let rij = floor((mouseY - 50) / 100);

  let plek = rij * 3 + kolom;
 
  if (plek >= 0 && plek < 9 && vakken[plek] == "") {

    vakken[plek] = speler; 
 
    // Horizontaal

    for (let i = 0; i < 9; i += 3) {

      if (vakken[i] != "" &&

          vakken[i] == vakken[i + 1] &&

          vakken[i] == vakken[i + 2]) {

        winnaar = speler;

      }

    }
 
    // Verticaal

    for (let i = 0; i < 3; i++) {

      if (vakken[i] != "" &&

          vakken[i] == vakken[i + 3] &&

          vakken[i] == vakken[i + 6]) {

        winnaar = speler;

      }

    }
 
    // Diagonalen

    if (vakken[0] != "" &&

        vakken[0] == vakken[4] &&

        vakken[0] == vakken[9]) {

      winnaar = speler;

    }
 
    if (vakken[2] !=  "" &&

        vakken[2] == vakken[4] &&

        vakken[2] == vakken[6]) {

      winnaar = speler;

    }
 
    // Beurt wisselen

    if (winnaar == "") {

      if (speler == "pink") {

        speler = "cyan";

      } else {

        speler = "pink";

      }

    }

  }

}

function keyPressed() {
  if (keyCode === ENTER) {
    vakken = ["", "", "", "", "", "", "", "", ""];
}
}
 