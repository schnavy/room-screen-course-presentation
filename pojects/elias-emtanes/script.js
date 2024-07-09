var spruch = Array("Ey, Kollege, haste mal ne Ecke Tabak?",
"Dies, das und so, weeßte ja.",
"Stell dich, du Flitzpiepe.",
"Das letzte Bier gestern war wieder schlecht, du…",
"Ey Hippieschwein. Mach’n Abflug. ",
"Boar, hat wer ne Ibu?", "Ey, sach ma Kollege, kenn wir uns nicht?", "Tschüss, ey!", "Bitte nicht zu nah mit die Pfoten an die Bilder ran, ne?");

var raucherspruch = Array("Ich geh mal eine quarzen",
  "Erst mal eene rochn",
  "Ich geh mal zur Tanke, neue Ziesen holen, brauchste was?",
  "Alter...genug gearbeitet, Zeit für ne Raucherpause", "Oh...ehm...ehm. Scheiße, die Herdplatte!");
  

  var wiederdaspruch = Array("das tat gut",
    "holla, die Waldfee",
    "Hab ich was verpasst?",
    "Zurück an die Arbeit...seufz","solange man lebt, sollte man rauchen", "Boah, du, wird och nich billiger...");

var spruchCounter = 0;
var katziRaucht = false;

function katziHatGeraucht() {
  document.getElementById('katzi').style.display = 'flex';
  document.getElementById('randomSpruch').style.display = 'flex';
  var wiederda = wiederdaspruch[Math.floor(Math.random() * wiederdaspruch.length)];
  document.getElementById('randomSpruch').textContent = wiederda;
  katziRaucht = false;
}

function katziWillRauchen() {
  document.getElementById('katzi').style.display = 'none';
  document.getElementById('randomSpruch').style.display = 'none';
  setTimeout(katziHatGeraucht, 5000);
}

function randomSpruch() {
  if (katziRaucht)
    return;

  if (spruchCounter++ === 5) {
    katziRaucht = true;
    setTimeout(katziWillRauchen, 5000);
    spruchCounter = 0;
    var quarzen = raucherspruch[Math.floor(Math.random() * raucherspruch.length)];
    document.getElementById('randomSpruch').textContent = quarzen;
    return;
  }

  var randomSpruch = spruch[Math.floor(Math.random() * spruch.length)];
  document.getElementById('randomSpruch').textContent = randomSpruch;
  document.getElementById('randomSpruch').style.display = 'flex';
}

function ShowCat() {
  if (katziRaucht)
    return;

  document.getElementById('katzi').style.display = 'flex';
  document.getElementById('hilfebutton').style.display = 'none';

  var modal = document.getElementById("myModal");

  if (modal.style.display === 'block')
  {
    var imageId = document.getElementsByClassName("modal-content")[0].id;
    var image = document.getElementById(imageId)

    randomSpruch();
    if (image)
      document.getElementById('randomSpruch').textContent = image.alt;
    
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  var modal = document.getElementById("myModal");

  if (document.getElementById('katzi').style.display === 'flex')
  {
    randomSpruch();
  }
  modal.style.display = "none";
  document.getElementById('navigation').style.display = 'flex';

}

function initThumbnailClick() {
  var thumbnails = document.getElementsByClassName("thumbnail");
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  for (var i = 0; i < thumbnails.length; ++i) {
    var img = thumbnails[i];

    img.onclick = function() {
      var katzi = document.getElementById('katzi');
      var spruch = document.getElementById('randomSpruch');
      
      document.getElementById('navigation').style.display = 'none';

      if (katzi.style.display === 'flex')
      {
        randomSpruch();
        spruch.textContent = this.alt;

        var zweiMoeglichkeiten = Math.floor(Math.random() * 1000) % 2;
	var posiLeft = Math.floor(Math.random() * 100) % 20;
	var posiTop = Math.floor(Math.random() * 100) % 50;

	if (zweiMoeglichkeiten == 0)
	{
          posiLeft = 90 - posiLeft;
        }
        katzi.style['left'] = posiLeft.toString() + '%';
        spruch.style['left'] = posiLeft.toString() + '%';
	katzi.style['bottom'] = posiTop.toString() + '%';
	spruch.style['bottom'] = posiTop.toString() + '%';
      }
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.id = this.id
    }
  }
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

initThumbnailClick() 