const commentFormHandler = async function (event) {
    event.preventDefault();
    const post_Id = document.querySelector('input[name="post-id"]').value;
    const material = document.querySelector('#comment-input').value;

    if (material) {
        await fetch('./api/comment', {
            method: 'POST',
            body: JSON.stringify({
                content, post_Id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.reload();
}
};
document.querySelector('#new-comment-form').addEventListener("click", commentFormHandler);
