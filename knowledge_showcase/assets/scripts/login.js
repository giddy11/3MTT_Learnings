window.onload = function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      alert('Welcome');
      
      window.location.href = 'index.html';
    });
  }