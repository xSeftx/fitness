
// формы
const toggleForm = () => {
    const body = document.querySelector('body'),
        forms = document.querySelectorAll('.popup'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackBtn = document.getElementById('callback_form');

    
        body.addEventListener('click', event => {
            let target = event.target;
            
            if(target.matches('.open-popup, .callback-btn')){            
                forms.forEach(item => {
                    
                    if(item.matches('#free_visit_form')){
                        item.style.display = 'block';
                            
                    }else if(item.matches('#callback_form')){
                        item.style.display = 'block';
                    }                    
                });
            
            }else if(target.matches('.close_icon')){                
                callbackBtn.style.display = 'none';
                freeVisitForm.style.display = 'none';                
                              
            }else{
                target = target.closest('.form-wrapper');
                if(!target){
                    callbackBtn.style.display = 'none';
                    freeVisitForm.style.display = 'none'; 
                }
            } 
        
        });

}

export default toggleForm;