const sliderImage = document.querySelector(".slider__image")
const sliderInput = document.querySelector(".slider__input")

function imageSizeChange(event) {
    const sliderValue = event.target.value;
    const imageSize = 100 + sliderValue * 2;
    sliderImage.style.width = `${imageSize}px`;
    sliderImage.style.height = `${imageSize}px`;
  }
sliderInput.addEventListener('input', _.debounce(imageSizeChange, 500))