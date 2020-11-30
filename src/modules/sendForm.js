
//send-ajax-form

const sendForm = () => {    
    try {        
        const modalMessage = document.getElementById('thanks'),
            bodyContent = document.querySelector('body'),
            formContent = modalMessage.querySelector('.form-content'),
            freeVisitForm = document.getElementById('free_visit_form'),
            statusMessage = document.createElement('div'),
            preLoader = document.createElement('div'),
            loader = document.createElement('img'),
            callbackBtn = document.getElementById('callback_form');
        preLoader.style.cssText = `position: fixed;
                                display: none;
                                left: 0;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                z-index: 99999;`;
        loader.style.cssText = `position: absolute;
                                left: 50%;top: 48%;
                                margin-left:-125px;
                                margin-top:-75px;                              
                                `;
        loader.src = '/images/spinner.gif'; 
        preLoader.appendChild(loader); 
        bodyContent.appendChild(preLoader);
        statusMessage.style.cssText = `font-size: 1.1rem; margin: 10px; color: #FF0000`;            
                  
        let body = {};

        const postData = body => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
        
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {            
            form.addEventListener('submit', event => {
                
                event.preventDefault();
                form.appendChild(statusMessage)
                const arrCkeck = form.querySelector('input[type="checkbox"]'),
                    mozaikaCheck = form.querySelector('#footer_leto_mozaika'),
                    schelkovoCheck = form.querySelector('#footer_leto_schelkovo') ;             
                if (arrCkeck && !arrCkeck.checked || mozaikaCheck && !mozaikaCheck.checked && schelkovoCheck && !schelkovoCheck.checked) {
                    statusMessage.textContent = 'Вы должны дать согласие на обработку данных';
                    
                    return;
                } else {
                    preLoader.style.display = 'block';
                    callbackBtn.style.display = 'none';
                    freeVisitForm.style.display = 'none';
                    statusMessage.textContent = '';                    
                    const formData = new FormData(form);
                    formData.forEach((item, index) => {
                        body[index] = item;
                    });
                    

                    postData(body)
                    .then(response => {
                        if (response.status !== 200) {                           
                            statusMessage.textContent = '';                             
                            throw new Error('Что-то пошло не так...');
                        }else{
                            modalMessage.style.display = 'block';
                            statusMessage.textContent = ''; 
                            preLoader.style.display = 'none';
                        }
                          
                        
                    })
                    .catch(error => {
                        formContent.innerHTML = `
                            <h4>Ошибка отправки!</h4>
                            <p>
                            Пожалуйста, попробуйте позже...</p>
                            <br>
                        `;
                        preLoader.style.display = 'none';
                        modalMessage.style.display = 'block';
                    })
                    .finally(() => {
                        setTimeout(() => {
                            modalMessage.style.display = 'none';
                        },7000)
                        form.querySelectorAll('input').forEach(elem => {
                            if (elem.getAttribute('type') !== 'radio') {
                                elem.value = '';
                            }
                            elem.checked = '';
                        });
                        body = {};
                    });
                }
            });
        });
        
    } catch (error) {
        console.warn('sendForm.js', error);
    }
 };

export default sendForm;