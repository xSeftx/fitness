
// формы
const toggleForm = () => {
    const body = document.querySelector('body'),        
        freeVisitForm = document.getElementById('free_visit_form'),
        formThx = document.getElementById('thanks'),
        callbackBtn = document.getElementById('callback_form');

    
        body.addEventListener('click', event => {
            let target = event.target;
            
            if(target.matches('.open-popup')){ 
                freeVisitForm.style.display = 'block';
            }else if(target.matches('.open-btn')){
                callbackBtn.style.display = 'block';
            }         
            else if(target.matches('.close_icon') || target.matches('.close-btn')){                
                callbackBtn.style.display = 'none';
                freeVisitForm.style.display = 'none';
                formThx.style.display = 'none';                
                              
            }else{
                target = target.closest('.form-wrapper');
                if(!target){
                    callbackBtn.style.display = 'none';
                    freeVisitForm.style.display = 'none'; 
                    formThx.style.display = 'none';
                }
            } 
        
        });

}

export default toggleForm;