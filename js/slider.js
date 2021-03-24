var slider1 = {
  //images array:  
  imagesStack: [
    "img/2000000053.jpeg",
    "img/2000000054.jpeg",
    "img/2000000055.jpeg",
    "img/2000000056.jpeg",
  ],
  currentImageIndex: 0,
  //find elements btn:
  showPrevBtn: document.getElementById("show-prev"),
  showNextBtn: document.getElementById("show-next"),
  slideImage: document.getElementById("slide-img"),

  start: function () {
      var that = this;

    //add events:
    this.showPrevBtn.addEventListener("click", function(e) { 
        that.onShowPrevBtnClick(e)
    });
    this.showNextBtn.addEventListener("click", function(e) { 
        that.onShowNextBtnClick(e) 
    });

    this.slideImage.src = this.imagesStack[this.currentImageIndex];
    this.showPrevBtn.hidden = true;
  },

  onShowPrevBtnClick: function (event) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesStack[this.currentImageIndex];
    this.showNextBtn.hidden = false;

    //disable prev button
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.hidden = true;
    }
  },

  onShowNextBtnClick: function (event) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesStack[this.currentImageIndex];
    this.showPrevBtn.hidden = false;

    //disable next button
    if (this.currentImageIndex === this.imagesStack.length - 1) {
      this.showNextBtn.hidden = true;
    }
  },
};
