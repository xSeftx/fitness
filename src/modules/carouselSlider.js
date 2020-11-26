
// карусель слайдер
const carouselSlider = () => {
    class SliderCarousel {
        constructor({
            main,
            wrap,
            infinity = false,
            position = 0,
            slidesToShow = 3,
            responsive = []
        }) {            
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / slidesToShow),
                maxPosition: this.slides.length - this.slidesToShow
            };
            this.responsive = responsive;
        }
    
        init() {   

            this.addStyle();
    
            if (this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
    
            if (this.responsive) {
                this.responseInit();
            }
        } 
    
        addStyle() {
            let style = document.getElementById('sliderCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }
    
            style.textContent = `
                .wrapper {
                    overflow: hidden !important;
                    position: relative;
                }
                .services-slider {
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                    padding: 0;
                }
                .slide {
                    align-items: center;
                    justify-content: center;
                    flex: 0 0 ${this.options.widthSLide}% !important;
                    margin: 0 auto !important;
                }
            `;
    
            document.head.appendChild(style);
        }
    
        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }
    
        prevSlider() {
            if (this.options.position > 0 || this.options.infinity) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSLide}%)`;
            }
        }
    
        nextSlider() {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSLide}%)`;
    
            }
        }
    
        addArrow() {
            this.prev = document.createElement('button');
            this.next = document.createElement('button');
    
            this.prev.textContent = '<';
            this.next.textContent = '>';
    
            this.prev.className = 'slider__prev';
            this.next.className = 'slider__next';
    
            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);
    
            const style = document.createElement('style');
            style.textContent = `
                .slider__prev {
                    position: absolute;
                    left: 34px ;
                    top: 45%; 
                    background: #ffd11a;          
                    border-radius: 100%;
                }
                .slider__next {
                    position: absolute;
                    right: 34px;
                    top: 45%;
                    background: #ffd11a;          
                    border-radius: 50%;
                                
                }
                .slider__next:hover,
                .slider__prev:hover{                     
                    box-shadow: 0px 0px 10px 	#708090; 
                    border: solid 3px #ffe900;  
                    
                }
                .slider__prev:focus,
                .slider__next:focus {                    
                    outline: transparent;
                }
                `;
            document.head.append(style);
        }
    
        responseInit() {
            const slidesToShowDefault = this.slidesToShow,
                allResponse = this.responsive.map(item => item.breakpoint),
                maxResponse = Math.max(...allResponse),
    
                checkResponse = () => {
                    const widthWindow = document.documentElement.clientWidth;
                    if (widthWindow < maxResponse) {
                        for (let i = 0; i < allResponse.length; i++) {
                            if (widthWindow < allResponse[i]) {
                                this.slidesToShow = this.responsive[i].slidesToShow;
                                this.options.widthSLide = Math.floor(100 / this.slidesToShow);
                                this.addStyle();
                            } 
                        }
                    } else {
                        this.slidesToShow = slidesToShowDefault;
                        this.options.widthSLide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                };
            checkResponse();
    
            window.addEventListener('resize', checkResponse);
        }
    }
    
    
    const carousel = new SliderCarousel ({
        main: '#services .wrapper',
        wrap: '.services-slider',
        slides: '.slide',
        slidesToShow: 4,
        infinity: true,
    
        responsive: [{
            breakpoint: 1024,
            slidesToShow: 3
        }, 
        {
            breakpoint: 820,
            slidesToShow: 2
        }, 
        {
            breakpoint: 576,
            slidesToShow: 1
        }]
        
    });
    
    carousel.init();

}


export default carouselSlider