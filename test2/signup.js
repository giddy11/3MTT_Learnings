document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Store user data (simplified for demo purposes)
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Save to localStorage (this should be handled securely on a server)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
  
    alert('Account created successfully!');
    window.location.href = 'login.html'; // Redirect to login page after sign-up
  });
  