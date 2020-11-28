// подарок
const gift = () => {

    const body = document.querySelector('body'),
        giftBtn = document.querySelector('.fixed-gift'),
        giftPopup = document.querySelector('#gift');

  if (giftPopup === null) {
    return;
  }
  body.addEventListener('click', (e) => {
    let target = e.target,
        targetClos = target.closest('.fixed-gift');
    if (targetClos === giftBtn) {
      console.log(giftPopup);
      giftPopup.style.display = 'block';
      giftBtn.remove();
    }
    if (giftPopup.style.display === 'block' && (target.classList.contains('overlay', 'close_icon', 'close-btn') || target.classList.contains('close_icon') || target.classList.contains('close-btn'))) {
      giftPopup.style.display = 'none';
    }
  });

};


export default gift