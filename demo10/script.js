// Funktio jolla lasketaan kinkkuananaspizzan määrä ja hinta
let kinkkuPizzaYhteishinta; // Luodaan muuttuja johon tallennetaan kinkku pizzojen yhteishinta
function kinkkuFunktio() {
  var onkoKinkkuValittu; // Muuttuja johon tallennetaan tieto onko checkboxissa rasti
  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Hankkii tiedon onko checkboxissa rasti
  if (onkoKinkkuValittu.checked) { // JOS checkboxissa on rasti niin seuraavat asiat suoritetaan   
    kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Laskee pizzojen määrän * hinta ja tallentaa ne muuttujaan
    document.getElementById("kinkku").innerHTML = kinkkuAnanasMaara.value + " kinkkuananaspizzaa lisätty joka on yhteensä " + kinkkuPizzaYhteishinta + " €"; // Tulostaa pizzat ja niiden yhteishinnan
  } else { 
    document.getElementById("kinkku").innerHTML = "Virhe..."; // Tulostaa jos käyttäjä syötti jotain muuta mitä ei olisi saanut
  }
}
let juustoPizzaYhteishinta;
var onkoJuustoValittu;
function juustoFunktio() {
  onkoJuustoValittu = document.getElementById("juustoPizza");
  if (onkoJuustoValittu.checked) {
    juustoPizzaYhteishinta = juustoPizzaMaara.value * 5;
    document.getElementById("juusto").innerHTML = juustoPizzaMaara.value + " juustopizzaa lisätty joka on yhteensä " + juustoPizzaYhteishinta + " €";
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
  document.getElementById("kuljetus").innerHTML = "Kotiinkuljetus. Kuljetusaika on noin " + kaikenYhteisHinta * 0.5 + " min. Mihin toimitamme tämän?"; // kaikenYhteisHinta * 0.5 on toimitusaika
}
function tilausNouto() { // Jos käyttäjä valitsee noudon
  document.getElementById("kuljetus").innerHTML = "Nouto";
}