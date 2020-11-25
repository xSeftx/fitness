// cлайдер на главной странице
const mainSlider = () => {     
    
    const mainSlider = document.querySelector('.main-slider');
    const slide = mainSlider.querySelectorAll('.slide'); 

    let currentSlide = 0,
        interval;
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = (time = 5000) => {
        interval = setInterval(autoPlaySlide, time);
    };   
     
    startSlide();
    

}

export default mainSlider