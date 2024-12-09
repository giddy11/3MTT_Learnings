let userType = null;

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    userType = user.accountType;
    if (userType === "pharmacy") {
    alert('Login successful!');
    window.location.href = './pharmacyDashboard.html';
    } else {
        alert('Login successful!');
        window.location.href = './userDashboard.html';
    }
  } else {
    alert("Invalid credentials");
  }
}