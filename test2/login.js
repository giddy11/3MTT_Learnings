document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Retrieve user data (in a real app, you'd validate this with a server)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login successful!');
      window.location.href = 'home.html'; // Redirect to home page after login
    } else {
      alert('Invalid credentials');
    }
  });
  