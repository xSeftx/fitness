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
            
        if(document.documentElement.offsetWidth <= 768) {                             
            window.addEventListener('scroll', () => { 
                const gift = document.querySelector('.fixed-gift'); 
                if(window.scrollY >= 200){            
                    topMenu.style.position = 'fixed';            
                gift.style.display = 'none'; 
                    
                }else if(window.scrollY <= 400){
                    topMenu.style.position = 'relative';
                    gift.style.display = 'block';
                }

            });
        }
    
}

export default burgerMenu