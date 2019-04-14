const imageContainer = document.querySelector('.art'); //???

imageContainer.addEventListener('click', e => {
    console.log(e);
    //e.preventDefault();
    
    const modalToggle = e.target.closest('.modal-link')
    //console.log(modalToggle);
    
    if(! modalToggle) return;
    
    const modal = modalToggle.nextElementSibling;
    const modalClose = modal.querySelector('.modal-close');
    //console.log(modal);
    
    modal.classList.add('is-open');
    
    modalClose.addEventListener('click', _ => {
        modal.classList.remove('is-open')
    })
});