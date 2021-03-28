function Slider() {
  this.imagesStack = [
    "img/2000000053.jpeg",
    "img/2000000054.jpeg",
    "img/2000000055.jpeg",
    "img/2000000056.jpeg",
  ];
  this.currentImageIndex = 0;
  this.showPrevBtn = null;
  this.showNextBtn = null;
  this.slideImage = null;
  this.start = function (elId) {
    var that = this;
    var elSelector = "#" + elId;
    var el = document.querySelector(elSelector);
    //find elements btn:
    this.showPrevBtn = el.querySelector(".button-prev");
    this.showNextBtn = el.querySelector(".button-next");
    this.slideImage = el.querySelector(".slide-img");
    //add events:
    this.showPrevBtn.addEventListener("click", function (e) {
      that.onShowPrevBtnClick(e);
    });
    this.showNextBtn.addEventListener("click", function (e) {
      that.onShowNextBtnClick(e);
    });
    this.slideImage.src = this.imagesStack[this.currentImageIndex];
    this.showPrevBtn.hidden = true;
  };
  this.onShowPrevBtnClick = function (event) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesStack[this.currentImageIndex];
    this.showNextBtn.hidden = false;
    //disable prev button
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.hidden = true;
    }
  };
  this.onShowNextBtnClick = function (event) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesStack[this.currentImageIndex];
    this.showPrevBtn.hidden = false;
    //disable next button
    if (this.currentImageIndex === this.imagesStack.length - 1) {
      this.showNextBtn.hidden = true;
    }
  };
}
