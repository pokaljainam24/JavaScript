// const sliderContainer = document.querySelector(".slider-container");
// const slidesLeft = document.querySelector(".left-slide");
// const slidesRight = document.querySelector(".right-slide");
// const upButton = document.querySelector(".up-button");
// const downButton = document.querySelector(".down-button");

// const slidesLength = slidesRight.querySelectorAll("div").length;

// let activeSlidesIndex = 0;

// // position for left slides
// slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// // up and down buttons
// upButton.addEventListener("click", () => changeSlide("up"));
// downButton.addEventListener("click", () => changeSlide("down"));

// // Function to change the active slide
// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight;
//     if (direction === "up") {
//         activeSlidesIndex++;
//         if (activeSlidesIndex > slidesLength - 1) {
//             activeSlidesIndex = 0;
//         }
//     } else if (direction === "down") {
//         activeSlidesIndex--;
//         if (activeSlidesIndex < 0) {
//             activeSlidesIndex = slidesLength - 1;
//         }
//     }

//     // change the slide position
//     slidesRight.style.transform = `translateY(-${activeSlidesIndex * sliderHeight
//         }px)`;
//     slidesLeft.style.transform = `translateY(${activeSlidesIndex * sliderHeight
//         }px)`;
// };

// Type-2 (Object)

class Slider {
    constructor(sliderContainerSelector, slidesLeftSelector, slidesRightSelector, upButtonSelector, downButtonSelector) {
        this.sliderContainer = document.querySelector(sliderContainerSelector);
        this.slidesLeft = document.querySelector(slidesLeftSelector);
        this.slidesRight = document.querySelector(slidesRightSelector);
        this.upButton = document.querySelector(upButtonSelector);
        this.downButton = document.querySelector(downButtonSelector);

        this.slides = this.slidesRight.querySelectorAll("div");
        this.slidesLength = this.slides.length;
        this.activeSlidesIndex = 0;

        // Set initial top position for left slides
        this.topPosition = (this.slidesLength * 100) - 100;
        this.slidesLeft.style.top = `-${this.topPosition}vh`;

        // Add event listeners for buttons
        this.upButton.addEventListener("click", () => this.changeSlide("up"));
        this.downButton.addEventListener("click", () => this.changeSlide("down"));
    }

    changeSlide(direction) {
        const sliderHeight = this.sliderContainer.clientHeight;

        if (direction === "up") {
            this.activeSlidesIndex++;
            if (this.activeSlidesIndex >= this.slidesLength) {
                this.activeSlidesIndex = 0;
            }
        } else if (direction === "down") {
            this.activeSlidesIndex--;
            if (this.activeSlidesIndex < 0) {
                this.activeSlidesIndex = this.slidesLength - 1;
            }
        }

        // Change the slide position
        this.slidesRight.style.transform = `translateY(-${this.activeSlidesIndex * sliderHeight}px)`;
        this.slidesLeft.style.transform = `translateY(${this.activeSlidesIndex * sliderHeight}px)`;
    }
}

// Initialize the slider
const slider = new Slider(".slider-container", ".left-slide", ".right-slide", ".up-button", ".down-button");
