   
const closeFlash=() =>{
   closeButton = document.querySelector('.close-alert');
    console.log(closeButton)
    closeButton.addEventListener('click', () => {
        closeButton.parentElement.remove()
    }); 

}

closeFlash();

function deleteNote(noteId){
    fetch('/delete-note',{
        method: 'POST',
        body: JSON.stringify({noteId: noteId})
    }).then((_res) => {
        window.location.href = "/"
    })
}
