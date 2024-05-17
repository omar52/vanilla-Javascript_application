// checking ig the local storage has a color
let mainColor = window.localStorage.getItem("color-option");

if (mainColor !== null) {
  // console.log(mainColor);
  document.documentElement.style.setProperty("--main-color", mainColor);
  // remove active class from all children.
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

// adjusting the appearance of setting box

// let setBox = document.querySelector(".setting-box");
// let setIcon = document.querySelector(".toggle-icon");

// setIcon.onclick = (() => setBox.classList.toggle("open"));

document.querySelector(".toggle-icon").onclick = function () {
  document.querySelector(".setting-box").classList.toggle("open");
};

// adjusting the appearance of setting box

// #######################################################################################

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
// random background option
let backgroundOpt = true;
let backgroundInterval;
let backgroundLocalElement = localStorage.getItem("background_option");
if (backgroundLocalElement !== null){

  if (backgroundLocalElement === "true"){
  
      backgroundOpt = true;
  
  }else{
  
      backgroundOpt = false;
  
  }

//Remove class active from all elements

document.querySelectorAll(".random-background span").forEach((ele) => {

    ele.classList.remove("active");

})

if (backgroundLocalElement === "true"){
  
  document.querySelector(".Yes").classList.add("active");

}else{
 
  document.querySelector(".No").classList.add("active");
  
}

}
function randomize() {
  if (backgroundOpt === true) {
    backgroundInterval = setInterval(() => {
      // getting random number.
      let randomNumb = Math.floor(Math.random() * imgArray.length);
      // change background image.
      landingPage.style.backgroundImage =
        'url("imgs/' + imgArray[randomNumb] + '")';
    }, 1000);
  }
}
randomize();

// changing the landingPage backgroungimage randomly
// ============================================================================.=...............=.=================================

//changing the color dynamically

let colorList = document.querySelectorAll(".colours li");
// array
colorList.forEach((li) => {
  // add click event to all li elements
  li.addEventListener("click", (e) => {
    // change the main color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // adding the selected color to the local storage
    window.localStorage.setItem("color-option", e.target.dataset.color);
    // remove active class from all children.
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // adding active class to the selected color
    e.target.classList.add("active");
  });
});
//changing the color dynamically
//=====================================================================..................==================================================
// switch random background option.

// select the sapan elements array
let randomBackElement = document.querySelectorAll(".random-background span");
// loopin the span elements
randomBackElement.forEach((span) => {
  span.addEventListener("click", (e) => {
    //remove active class from elements
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // adding class element to the selected elemetn
    e.target.classList.add("active");
    if (e.target.dataset.back === "yes") {
      backgroundOpt = true;
      randomize();
      localStorage.setItem("background_option",true);
      // console.log("yes");
    } else {
      // console.log("no");
      backgroundOpt = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option",false);
    }
  });
});

// switch random background option.
//===========================================================================...............=================================================


// Scrollin ti the skills section an increases it animately.

let skillSec = document.querySelector(".skills");

window.onscroll = function(){
// select the height above the element
let sectionOffTop = skillSec.offsetTop;

// select the section itself height 
let sectioNHeight = skillSec.offsetHeight;

//window itsekf height
let windowHeight = this.innerHeight;

//scroll to y height
let windowScroll = this.pageYOffset;

if(windowScroll >= ((sectionOffTop + sectioNHeight)-(windowHeight))){

    let allSkills = document.querySelectorAll(".skills .skill-prog span");
    // console.log(skills)

    allSkills.forEach(skill => {
      
      skill.style.width= skill.dataset.progress;
    
    });

}
}

// adding the popup to the gallery section

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {

  img.addEventListener("click" , (ele) => {

    //create overlay element 
    let popupOverlay = document.createElement("div");
    
    //adding class of popup-overlay to the div element
    popupOverlay.classList.add('popup-overlay');
    
    //adding the element to the body 
    document.body.appendChild(popupOverlay);
    
    //create the popup element
    let popup = document.createElement("div");
    
    //adding class popupwindow
    popup.className="popup-box";
    
    // adding the heading if found
    //adding the picture number
    if (img.alt !== null){

      //create heading element
      let picHeading = document.createElement("h3");
  
      //creating the heading text
      let headingText = document.createTextNode(img.alt);
  
      // adding the heading text to the header
      picHeading.appendChild(headingText);
  
      //adding the heading to the popbox
      popup.appendChild(picHeading);
    }
    
    //creat the img element
    let popupImage = document.createElement("img");

    //define the src
    popupImage.src = img.src;

    // adding the image to the popupbox and popupbox to the doc
    popup.appendChild(popupImage);
    document.body.appendChild(popup);

    //adding the close button
    let closeButton = document.createElement("span");
    
    //creating textnode with x sign
    let xSign = document.createTextNode("X");

    //adding class to the span
    closeButton.className="close-button";

    //appending x sign to the span
    closeButton.appendChild(xSign);

    //appending the close button to the popup box
    popup.appendChild(closeButton);

  });

})

//Closing the popup

document.addEventListener("click" , function(e){

  if(e.target.className ==="close-button"){

    e.target.parentElement.remove();
    document.querySelector(".popup-overlay").remove();

  }
});


// adding the popup to the gallery section