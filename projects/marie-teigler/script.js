let flipped = false;

function flip() {
    if (!flipped) {
    document.getElementById("flipper").classList.add("sizer");
    setTimeout(function() {
        // Code, der erst nach 2 Sekunden ausgeführt wird
        document.getElementById("flipper").classList.add("flip");
      }, 2000);

    var container = document.getElementById("flip-container");
    container.style.left = "25vw";
    container.style.top = "5vh";    
    flipped = true;
    } else {
        document.getElementById("flipper").classList.remove("flip");
        setTimeout(function() {
            // Code, der erst nach 2 Sekunden ausgeführt wird
            document.getElementById("flipper").classList.remove("sizer");
            var container = document.getElementById("flip-container");
            container.style.left = "20vw";
            container.style.top =  "20vh";

          }, 1000);
          flipped = false;
    
    }
    
}

const images = [
    './IMAGES/U_07.png',
    './IMAGES/U_09.png',
    './IMAGES/U_11.png',
    './IMAGES/U_13.png',
    './IMAGES/U_14.png',
    './IMAGES/U_15.png',
    './IMAGES/U_20.png',
    './IMAGES/U_21.png',
    './IMAGES/U_16.png',
    './IMAGES/U_22.png',
    './IMAGES/U_17.png',
]

function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length)
    image = images[randomIndex];
    document.body.style.backgroundImage = `url(${image})`;
}

function setRandomPosition() {
    const Bierdeckel = document.querySelector(".flip-container")
    let randomleft= Math.floor(Math.random() * 40) +10;
    let randomtop= Math.floor(Math.random() * 40) +10;
    console.log( Bierdeckel.getBoundingClientRect());
    Bierdeckel.style.left= randomleft+"%";
    Bierdeckel.style.top= randomtop+"%";
    Bierdeckel.style.display= "block";
}

window.onload = (event ) => {
    setRandomImage();
    setRandomPosition();
    // document.getElementById("flip-container").style.left = left;
}