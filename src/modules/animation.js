
// анимация
const animation = () => {
    if (document.documentElement.offsetWidth >= 768){
    const logo = document.querySelector('.logo'),
            gift = document.querySelector('.fixed-gift'),
            btn = document.querySelector('button[name="send"]'),
            callbackBtn = document.querySelectorAll('.callback-btn'),
            clubsRight = document.querySelector('.right>.image'),
            clubsLeft = document.querySelector('.image'),            
            mainSlider = document.querySelector('.main-slider'),
            slideMain = mainSlider.querySelectorAll('.slide');
            // gift.style.display = 'none';
            // clubsRight.style.zIndex = '-1';
            // clubsLeft.style.zIndex = '-1';    
            
    // logo.style.zIndex = '-1';

    if (gift === null) {
        return;
    }

    gift.style.display = 'none';
    clubsRight.style.zIndex = '-1';
    clubsLeft.style.zIndex = '-1';  
    logo.style.zIndex = '-1';

    setTimeout(() => {
        gift.style.display = 'block';
        gift.classList.add('magictime', 'twisterInUp');
    }, 2000);
    
    const logoAnimation = () => {       
        logo.style.zIndex = '1';
        logo.classList.add('magictime', 'vanishIn')
    }
    setTimeout(logoAnimation, 1500)

    window.addEventListener('scroll', () => {             
        callbackBtn.forEach(item => {            
            if (window.scrollY >= 2700){
                item.classList.add('magictime', 'swashIn');

            }if(window.scrollY >= 720) {
                btn.classList.add('magictime', 'tinRightIn');

            }if(window.scrollY >= 350){
                clubsRight.style.zIndex = '1';
                clubsLeft.style.zIndex = '1'; 
                clubsRight.classList.add('magictime', 'slideRightReturn');
                clubsLeft.classList.add('magictime', 'slideLeftReturn');
            }
        })            
       

    });   

    slideMain.forEach(item => {
        item.classList.add('magictime', 'swashIn');
    })

    }


}

export default animation