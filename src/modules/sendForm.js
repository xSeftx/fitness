
//send-ajax-form

const sendForm = () => {
    try {
        const modalMessage = document.getElementById('thanks'),
            formContent = modalMessage.querySelector('.form-content'),
            statusMessage = document.createElement('div');
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
                const arrCkeck = form.querySelector('input[type="checkbox"], input[type="radio"]');
                console.log(arrCkeck);
                if (arrCkeck && !arrCkeck.checked) {
                    statusMessage.textContent = 'Вы должны дать согласие на обработку данных';
                    
                    return;
                } else {
                    
                    const formData = new FormData(form);
                    formData.forEach((item, index) => {
                        body[index] = item;
                    });
                    statusMessage.textContent = 'Загрузка...';

                    postData(body)
                    .then(response => {
                        if (response.status !== 200) {                           
                            statusMessage.textContent = '';  
                            throw new Error('Что-то пошло не так...');
                        }else{
                            modalMessage.style.display = 'block';
                            statusMessage.textContent = ''; 
                        }
                          
                        
                    })
                    .catch(error => {
                        formContent.innerHTML = `
                            <h4>Ошибка отправки!</h4>
                            <p>
                            Пожалуйста, попробуйте позже...</p>
                            <br>
                        `;
                        modalMessage.style.display = 'block';
                    })
                    .finally(() => {
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