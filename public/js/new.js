const savePost = async (event) => {
    event.preventDefault();

    const blogTitle = document.querySelector('#post-title').value;
    const blogContent = document.querySelector('#post-body').value;
    
    if (blogTitle && blogContent) {
        await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                blogTitle,
                blogContent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};
document.querySelector('#new-post').addEventListener("click", savePost);
