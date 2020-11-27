// бургер меню
const burgerMenu = () => {  
        const menuButton = document.querySelector('.menu-button'),
            popupMenu = document.querySelector('.popup-menu'),
            topMenu = document.querySelector('.top-menu');  
        
        menuButton.addEventListener('click', (e) => {
            let target = e.target.parentNode;        
            if(target.matches('.menu-button')){
                popupMenu.style.display = 'block'
            }
        })
        

        popupMenu.addEventListener('click', (event) => {        
            let target = event.target;                  
            if(target.closest('.close-menu-btn') || target.closest('a')){
            popupMenu.style.display = 'none'
            }          
        });        
            
        
                                   
        window.addEventListener('scroll', () => {             
        
            if(document.documentElement.offsetWidth <= 768) { 
                          
                if(window.scrollY >= 200){            
                    topMenu.style.position = 'fixed'; 
                    topMenu.style.zIndex = '500';                    
                                        
                }else if(window.scrollY <= 400){
                    topMenu.style.position = 'relative';
                    
            }else {
                topMenu.style.position = 'relative'
            }

            }

        });
        
    
}

export default burgerMenu