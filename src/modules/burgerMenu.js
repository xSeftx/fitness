// бургер меню
const burgerMenu = () => {

    
    
    
    const menuButton = document.querySelector('.menu-button'),
        popupMenu = document.querySelector('.popup-menu');

    
    menuButton.addEventListener('click', () => popupMenu.style.display = 'flex');

    popupMenu.addEventListener('click', (event) => {        
        let target = event.target;        
        if(!target.classList.contains('.popup-menu')){
        popupMenu.style.display = 'none'
        }          
    })  
    
    window.addEventListener('scroll', () => {        
        const menu = document.querySelector('.top-menu'),
            gift = document.querySelector('.fixed-gift');

        if(window.scrollY >= 200){            
            menu.style.position = 'fixed';            
            gift.style.display = 'none';
            
            
        }else if(window.scrollY <= 400){
            menu.style.position = 'relative';
            gift.style.display = 'block';
        }         
        
        
    })
}




export default burgerMenu