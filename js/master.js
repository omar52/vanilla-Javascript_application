// changing the landingPage backgroungimage randomly

// access the landing element.
let landingPage = document.querySelector(".landing-page");

// get the array of images.
let imgArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];

// getting random number.

setInterval(() => {
  let randomNumb = Math.floor(Math.random() * imgArray.length);

  // change background image.
  landingPage.style.backgroundImage =
    'url("imgs/' + imgArray[randomNumb] + '")';
}, 10000);

// changing the landingPage backgroungimage randomly
