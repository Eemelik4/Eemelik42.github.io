// Funktio jolla lasketaan kinkkuananaspizzan määrä ja hinta
let kinkkuPizzaYhteishinta; // Luodaan muuttuja johon tallennetaan kinkku pizzojen yhteishinta
var onkoKinkkuValittu; // Muuttuja johon tallennetaan tieto onko checkboxissa rasti
function kinkkuFunktio() {

  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Hankkii tiedon onko checkboxissa rasti
  if (onkoKinkkuValittu.checked) { // JOS checkboxissa on rasti niin seuraavat asiat suoritetaan   
    kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Laskee pizzojen määrän * hinta ja tallentaa ne muuttujaan
    document.getElementById("kinkku").innerHTML = kinkkuAnanasMaara.value + " kinkkuananaspizzaa lisätty joka on yhteensä " + kinkkuPizzaYhteishinta + " €"; // Tulostaa pizzat ja niiden yhteishinnan
  } else if(!onkoKinkkuValittu.checked) { 
    document.getElementById("kinkku").innerHTML = "Laita raksi ruutuun jos näitä haluat :)"; // Tulostaa jos kinkkupizzaa ei valittu mutta silti painaa napppia
  } else {
    document.getElementById("kinkku").innerHTML = "Virhe";
  }
}

let juustoPizzaYhteishinta;
var onkoJuustoValittu;
function juustoFunktio() {
  onkoJuustoValittu = document.getElementById("juustoPizza");
  if (onkoJuustoValittu.checked) {
    juustoPizzaYhteishinta = juustoPizzaMaara.value * 5;
    document.getElementById("juusto").innerHTML = juustoPizzaMaara.value + " juustopizzaa lisätty joka on yhteensä " + juustoPizzaYhteishinta + " €";
  } else if(!onkoJuustoValittu.checked) {
    document.getElementById("juusto").innerHTML = "Laita raksi ruutuun jos näitä haluat :)";
  } else {
    document.getElementById("juusto").innerHTML = "Virhe...";
  }
}
var kaikenYhteisHinta; // Muuttuja johon tulee kaiken yhteishinta
function laskeYhteen() { // Funktio joka laskee pizzojen hinnat yhteen
  kaikenYhteisHinta = kinkkuPizzaYhteishinta + juustoPizzaYhteishinta;
  document.getElementById("kaikenYhteisHinta").innerHTML = "Tilasit " + kinkkuAnanasMaara.value + " kinkkuananas pizzaa ja " + juustoPizzaMaara.value + " juustopizzaa joiden yhteishinta on " + kaikenYhteisHinta + " euroa";
}

function kotiinKuljetus() { // Jos käyttäjä valitsee kuljetuksen
  document.getElementById("kuljetus").innerHTML = "Kotiinkuljetus. Kuljetusaika on noin " + kaikenYhteisHinta * 0.7 + " min. Mihin toimitamme tämän?"; // kaikenYhteisHinta * 0.5 on toimitusaika
  document.getElementById("huvaksu").style.display = "block"; // Kysyy osoitetta jos kotiin kuljetus valitaan
}
function tilausNouto() { // Jos käyttäjä valitsee noudon
  document.getElementById("kuljetus").innerHTML = kaikenYhteisHinta * 0.5 + " min valmistumiseen";
  document.getElementById("huvaksu").style.display = "none"; // Piiloittaa osoitekentän jos noutotilaus valitaan
}