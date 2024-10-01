window.onload = function() {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      alert('Please log in');
      
      window.location.href = 'login.html';
    });
  }