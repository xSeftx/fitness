// подарок
const gift = () => {
  
  const gift = document.querySelector('.fixed-gift'),
      popupGift = document.getElementById('gift');


  if (gift === null) {
        return;
      }
  
  gift.addEventListener('click', () => {        
  popupGift.style.display = 'block';        
  gift.style.display = 'none';
  
  });   
  
  popupGift.addEventListener('click', (event) => {
    let target = event.target;        
    if(target.matches('.close_icon, .close-btn', '.overlay')){            
        popupGift.style.display = 'none';
    } else {
        target = target.closest('.form-wrapper');
        if(!target){
            popupGift.style.display = 'none';                
        }
    }
    
  });
  
}
export default gift