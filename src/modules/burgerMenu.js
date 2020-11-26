// бургер меню
const burgerMenu = () => {      
    
        
        const menuButton = document.querySelector('.menu-button'),
            popupMenu = document.querySelector('.popup-menu');  
            
        menuButton.addEventListener('click', (e) => {
            let target = e.target.parentNode;        
            if(target.matches('.menu-button')){
                popupMenu.style.display = 'block'
            }
        })
        

        popupMenu.addEventListener('click', (event) => {        
            let target = event.target;  
            console.log(target);      
            if(target.closest('.close-menu-btn') || target.closest('a')){
            popupMenu.style.display = 'none'
            }          
        });

        
            
            if(document.documentElement.offsetWidth <= 768) {  
                const menu = document.querySelector('.top-menu'),
                    gift = document.querySelector('.fixed-gift');                 
                window.addEventListener('scroll', () => { 
                        if(window.scrollY >= 200){            
                        menu.style.position = 'fixed';            
                        gift.style.display = 'none'; 
                        
                    }else if(window.scrollY <= 400){
                        menu.style.position = 'relative';
                        gift.style.display = 'block';
                    }                
                })

            }else {
                menu.style.position = 'relative';
            }
        
    
}

export default burgerMenu