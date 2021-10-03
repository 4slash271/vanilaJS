const images =[
    "1.jpg",
    "2.jpg",
    "3.jpg",
]


const chosenImaga = images[Math.floor(Math.random()*images.length)];

const randomBgImages = document.createElement("img");

randomBgImages.src = `../img/${chosenImaga}`;
document.body.appendChild(randomBgImages);