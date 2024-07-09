const images=[
    "assets/picture/Connwax.jpg",
    "assets/picture/3x4_Poster_Poster.jpg",
    "assets/picture/Maniac_Plakat_Anniversary.jpg",
    "assets/picture/NeueWelle.jpg"
]

let index=0
function nextimage() {
    const imageElement=document.querySelector(".image-events img")
    if(index>=images.length-1){
        index=0
    } else{index=index+1}
    imageElement.src=images[index]
    
}