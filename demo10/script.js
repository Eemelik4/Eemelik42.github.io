// Funktio jolla lasketaan kinkkuananaspizzan määrä ja hinta
let kinkkuPizzaYhteishinta; // Luodaan muuttuja johon tallennetaan kinkku pizzojen yhteishinta
function kinkkuFunktio() {
  var onkoKinkkuValittu; // Muuttuja johon tallennetaan tieto onko checkboxissa rasti
  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Hankkii tiedon onko checkboxissa rasti
  if (onkoKinkkuValittu.checked) { // JOS checkboxissa on rasti ja määränä ei ole 0 niin seuraavat asiat suoritetaan
    document.getElementById("kinkku").innerHTML = kinkkuAnanasMaara.value + " kinkkuananas pizzaa lisätty"; // Tulostaa montako kinkkuananas pizzaa lisättiin
    kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Laskee pizzojen määrän * hinta ja tallentaa ne muuttujaan
    document.getElementById("ostoskorinSumma").innerHTML = kinkkuPizzaYhteishinta + " euroa"; // Tulostaa yhteishinnan
  } else { 
    document.getElementById("kinkku").innerHTML = "Virhe..."; // Tulostaa jos käyttäjä syötti jotain mitä ei olisi saanut
  }
}
let juustoPizzaYhteishinta;
function juustoFunktio() {
  var onkoJuustoValittu;
  onkoJuustoValittu = document.getElementById("juustoPizza");
  if (onkoJuustoValittu.checked) {
    document.getElementById("juusto").innerHTML = juustoPizzaMaara.value + " juustopizzaa lisätty ostoskoriin";
    juustoPizzaYhteishinta = juustoPizzaMaara.value * 5;
    document.getElementById("juustoKorinSumma").innerHTML = juustoPizzaYhteishinta + " euroa";
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
  document.getElementById("kuljetus").innerHTML = "Kotiinkuljetus. Kuljetusaika on noin " + kaikenYhteisHinta * 0.5 + " min. Mihin toimitamme tämän?";
}
function tilausNouto() { // Jos käyttäjä valitsee noudon
  document.getElementById("kuljetus").innerHTML = "Nouto";
}