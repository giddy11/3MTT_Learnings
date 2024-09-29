window.onload = function() {
    const loginForm = document.getElementById('register-form');
    
    loginForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      alert('Welcome');
      
      window.location.href = 'index.html';
    });
  }