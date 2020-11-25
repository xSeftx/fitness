
// селкт меню выбор клуба
const selectClub = () => { 
    const clubsList = document.querySelector('.clubs-list'),         
        clubs =  clubsList.querySelector('ul'); 
        
        clubsList.addEventListener('click', (e) => {
        let target = e.target.parentNode;
        
        if(target.matches('.clubs-list')){            
            
            clubs.style.display = 'block'
        }        
        
    })
}







export default selectClub