const deletebtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/post/${id}`, {
          method: 'DELETE',
        });  
    if (response.ok) {
        document.location.reload();
      } else {
        alert('This blog could not be deleted');
      }
    }
};
const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach(deleteBtn => deleteBtn.addEventListener('click', delButtonHandler));