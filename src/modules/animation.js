
// анимация
const animation = () => {
    const logo = document.querySelector('.logo'),
            btn = document.querySelector('button[name="send"]'),
            callbackBtn = document.querySelectorAll('.callback-btn');
    console.log(btn);
            
    logo.style.zIndex = '-1';
    
    const logoAnimation = () => {       
        logo.style.zIndex = '1';
        logo.classList.add('magictime', 'vanishIn')
    }
    setTimeout(logoAnimation, 2000)

    window.addEventListener('scroll', () => {             
        callbackBtn.forEach(item => {
            
            if (window.scrollY >= 2790){
                item.classList.add('magictime', 'tinUpIn')
            }if(window.scrollY >= 720) {
                btn.classList.add('magictime', 'tinRightIn')
            } 
        })            
       

    });


}

export default animation