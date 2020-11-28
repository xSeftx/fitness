
// скролл
const scroll = () => {
    const anchors = document.querySelectorAll('a'),
        totop = document.getElementById('totop');
    totop.style.display = 'none';   
    
    totop.addEventListener('click', e => window.scrollBy(pageXOffset, 0));

    for (let anchor of anchors) {
        anchor.addEventListener('click', e => {
            e.preventDefault();            
            let target = e.target;                        
            const blockID = anchor.getAttribute('href'); 
            if(!target.matches('.fa')){ 
                console.log(1);
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })                         
            
            }else{
                return
            }
            
        })
    };

    window.addEventListener('scroll', () => {      
        if(window.scrollY >= 800){                      
                totop.style.display = 'block';                                    
                                    
        }else if(window.scrollY <= 600){
            totop.style.display = 'none';             
        }

        

    });    

};

export default scroll