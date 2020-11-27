
// слайдер фотогалерея
const gallerySlider = () => {
    const slider = document.querySelector('.gallery-slider'),
        slide = document.querySelectorAll('.gallery-slider .slide');
              
    let currentSlide = 0,
        interval;

    slide[0].classList.add('slide_active');

    const addDots = () => {        
        let newDots = document.createElement('ul'); 
        newDots.classList.add('slider-dots');
        slider.appendChild(newDots);       
        for(let i = 0; i<slide.length; i++){
            let dot = document.createElement('li');
            if (i===0){                    
                dot.classList.add('dot', 'dot-active');
                
            }else {                        
                dot.classList.add('dot');                        
            }
            newDots.append(dot);                   
        }                    
    }; 
    addDots();

    const dot = document.querySelectorAll('.dot');
    
    

    const addStyle = () => {
        let style = document.getElementById('sliderGallery-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderGallery-style';
        }
        style.textContent = `
        .gallery-slider {
            position: relative;
          }
          .gallery-slider .slide {
            display: none;
          }
          
        .gallery-slider .slide_active {                
              display:flex !important;
        }
        
        .slider-dots {                     
            background-color: transparent !important;
              
        }
        .dot { 
            margin: 10px;
            height: 10px;
            width: 10px;
            background-color: #d2d4d6;
            border-radius: 100%;
            cursor: pointer;
        }
        .dot-active {
            background-color: #ffd11a;
        }
        .dot:hover {
            box-shadow: 0px 0px 10px 	#ffd11a;
        }
       
      `;

        document.head.appendChild(style);
    }
    addStyle();

    

    const addArrow = () => {
        let prev = document.createElement('button'),
            next = document.createElement('button');

        prev.textContent = '<<';
        next.textContent = '>>';
        prev.className = 'slider_prev';
        next.className = 'slider_next';

        slider.appendChild(prev);
        slider.appendChild(next);

        const style = document.createElement('style');
        style.textContent = `
                .slider_prev {
                    position: absolute;
                    left: 34px ;
                    top: 45%; 
                    background: #ffd11a;          
                    border-radius: 100%;
                }
                .slider_next {
                    position: absolute;
                    right: 34px;
                    top: 45%;
                    background: #ffd11a;          
                    border-radius: 100%;
                                
                }
                .slider_next:hover,
                .slider_prev:hover{                     
                    box-shadow: 0px 0px 30px 	#708090; 
                    border: solid 3px #ffe900;  
                    
                }
                .slider_prev:focus,
                .slider_next:focus {                    
                    outline: transparent;
                }
                `;
        document.head.append(style);
    }
    addArrow();

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'slide_active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide_active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time=5000) => {
       interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {        
        event.preventDefault();

        let target = event.target;        
        if(!target.matches('.slider_prev, .slider_next, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'slide_active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('.slider_prev')) {
            
            currentSlide--;
        }else if(target.matches('.slider_next')) {
            
            currentSlide++;
        }else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }

        if(currentSlide < 0){
            currentSlide = slide.length-1;
        }

        nextSlide(slide, currentSlide, 'slide_active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {        
        if(event.target.matches('.slider_prev') || event.target.matches('.dot') || event.target.matches('.slider_next')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.slider_prev') || event.target.matches('.dot') || event.target.matches('.slider_next')){
            startSlide();
        }
    });
    
    startSlide(5000);     


}



export default gallerySlider