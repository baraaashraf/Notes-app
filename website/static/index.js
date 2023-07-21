   
const closeFlash=() =>{
   closeButton = document.querySelector('.close-alert');
    console.log(closeButton)
    closeButton.addEventListener('click', () => {
        closeButton.parentElement.remove()
    }); 

}

closeFlash();