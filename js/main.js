// //find elements btn:
// var showPrevBtn = document.getElementById("show-prev");
// var showNextBtn = document.getElementById("show-next");
// var slideImage = document.getElementById("slide-img")

// //add events:
// showPrevBtn.addEventListener('click', onShowPrevBtnClick);
// showNextBtn.addEventListener('click', onShowNextBtnClick);

// //images array here:
// var imagesStack = ["img/2000000053.jpeg", "img/2000000054.jpeg", "img/2000000055.jpeg", "img/2000000056.jpeg"]

// var currentImageIndex = 0;
// slideImage.src = imagesStack[currentImageIndex];
// showPrevBtn.hidden = true;

// //function definitions:
// function onShowPrevBtnClick() {
//     currentImageIndex--;
//     slideImage.src = imagesStack[currentImageIndex];
//     showNextBtn.hidden = false;

//     //disable prev button
//     if (currentImageIndex === 0 ) {
//         showPrevBtn.hidden = true;
//     }
// }
// function onShowNextBtnClick() {
//     currentImageIndex++;
//     slideImage.src = imagesStack[currentImageIndex];
//     showPrevBtn.hidden = false;

//     //disable next button
//     if (currentImageIndex === (imagesStack.length - 1) ) {
//         showNextBtn.hidden = true;
//     }
// }
slider1.start();
