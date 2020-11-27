
// селкт меню выбор клуба
const selectClub = () => {     
    const clubsList = document.querySelector('.clubs-list'), 
        body = document.querySelector('body'),         
        clubs =  clubsList.querySelector('ul');         
        
        body.addEventListener('click', (e) => {
            let target = e.target.parentNode;                   
            if(target.matches('.clubs-list')){                 
                if(clubs.style.display === 'block'){
                    clubs.style.display = 'none';
                    
                }else{                    
                    clubs.style.display = 'block'; 
                                    
                }   
                             
             
            }else if(!target.closest('.clubs-list')){
                clubs.style.display = 'none'
            }            
        
        });

};


export default selectClub