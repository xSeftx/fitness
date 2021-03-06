// бургер меню
const burgerMenu = () => {  
        const menuButton = document.querySelector('.menu-button'),
            popupMenu = document.querySelector('.popup-menu'),
            topMenu = document.querySelector('.top-menu');
        topMenu.style.position = 'static';     
        topMenu.style.zIndex = '500';
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
            
        window.addEventListener('resize', () =>{
            topMenu.style.position = 'static';
        })
        
                                   
        window.addEventListener('scroll', () => {             
        
            if(document.documentElement.offsetWidth <= 768) { 
                          
                if(window.scrollY >= 200){            
                    topMenu.style.position = 'fixed'; 
                                        
                                        
                }else if(window.scrollY <= 400){
                    topMenu.style.position = 'static';
                 
            }else if(document.documentElement.offsetWidth <= 768) {
                topMenu.style.position = 'static'
            }

            }

        });
        
    
}

export default burgerMenu