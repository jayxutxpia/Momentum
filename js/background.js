const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.id = "bg";
// append: 가장 아래에 추가 prepend: 가장 위에 추가
