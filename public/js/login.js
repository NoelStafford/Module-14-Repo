const loginFormHandler = async (event) => {
    event.preventDefault();
    // gather the input from the user 
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    // if it meets the parameters send to the API location
    if (email && password) {
        const response = await fetch ('./api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        // if works send to the profile page
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};
