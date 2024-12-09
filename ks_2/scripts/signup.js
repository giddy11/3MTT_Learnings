document.getElementById('accountType').addEventListener('change', function() {
    const details = document.getElementById('pharmacyDetails');
    details.style.display = this.value === 'pharmacy' ? 'block' : 'none';
});

function handleSignup(event) {
    event.preventDefault();
    const accountType = document.getElementById('accountType').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (accountType === 'pharmacy') {
        const pharmacyName = document.getElementById('pharmacyName').value;
        const pharmacyAddress = document.getElementById('pharmacyAddress').value;
        localStorage.setItem('user', JSON.stringify({ accountType, email, password, pharmacyName, pharmacyAddress }));
    } else {
        localStorage.setItem('user', JSON.stringify({ accountType, email, password }));
    }
    alert('Signup successful!');
    window.location.href = './signin.html';
    // showLogin();
}