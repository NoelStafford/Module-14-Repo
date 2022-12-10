const logout = async () => {
    // sends the user to the logout route
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        // error message if it doesnt work
        alert('Could not log out!');
      }
};
document.querySelector('#logout').addEventListener('click', logout);
