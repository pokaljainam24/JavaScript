// Select elements
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// Slider data
const sliderData = [
    {
        name: "Lamborghini",
        description: "All in Black-Edition",
        backgroundColor: "rgb(13, 30, 109)",
        image: "./car-img/car-8778216_1280.jpg",
    },
    {
        name: "PORSCHE GT3",
        description: "All in White",
        backgroundColor: "rgb(155,155,157)",
        textColor: "#252e33",
        image: "./car-img/porsche-4795519_1280.jpg",
    },
    {
        name: "Ferrari",
        description: "All in Red-Edition",
        backgroundColor: "rgb(211,0,0)",
        image: "./car-img/Ferrari_2012-18_F12_berlinetta_Pininfarina_Black_541005_1280x854.jpg",
    },
    {
        name: "Mustang",
        description: "Sports Car",
        backgroundColor: "rgb(1,31,141)",
        image: "./car-img/4k-ultra-hd-mustang-blue-car-8t1qwil5xrimb3pl.webp",
    }
];

let leftSlideHTML = '';
let rightSlideHTML = '';

sliderData.forEach(item => {
    leftSlideHTML += `
        <div style="background-color: ${item.backgroundColor};">
            <h1>${item.name}</h1>
            <p style="font-size: 1.5rem; color: ${item.textColor || '#fff'};">${item.description}</p>
        </div>
    `;

    rightSlideHTML += `
        <div style="background: url('${item.image}') no-repeat center center; background-size: cover;"></div>
    `;
});

leftSlide.innerHTML = leftSlideHTML;
rightSlide.innerHTML = rightSlideHTML;

let activeSlideIndex = 0;
const totalSlides = sliderData.length;

function updateSlides() {
    // Set the transform property to show the correct slide
    const leftSlideHeight = leftSlide.clientHeight;
    const offset = -activeSlideIndex * leftSlideHeight;
    leftSlide.style.transform = `translateY(${offset}px)`;
    rightSlide.style.transform = `translateY(${offset}px)`;
}

// Event listeners for button clicks
upButton.addEventListener('click', () => {
    activeSlideIndex = (activeSlideIndex + 1) < totalSlides ? activeSlideIndex + 1 : 0;
    updateSlides();
});

downButton.addEventListener('click', () => {
    activeSlideIndex = (activeSlideIndex - 1) >= 0 ? activeSlideIndex - 1 : totalSlides - 1;
    updateSlides();
});
