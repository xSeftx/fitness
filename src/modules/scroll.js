
// скролл
const scroll = () => {
    const anchors = document.querySelector('.hidden-small'),
        totop = document.getElementById('totop');
    totop.style.display = 'none';   
    
    totop.addEventListener('click', e => window.scrollBy(pageXOffset, 0));

    
        anchors.addEventListener('click', e => {
            e.preventDefault();            
            let target = e.target;                        
            const blockID = target.getAttribute('href'); 
            if(!target.matches('.fa') && !target.matches('.clubs-href')){                 
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })                         
            
            }
            
        })
    

    window.addEventListener('scroll', () => {      
        if(window.scrollY >= 800){                      
                totop.style.display = 'block';                                    
                                    
        }else if(window.scrollY <= 600){
            totop.style.display = 'none';             
        }

        

    });    

};

export default scroll