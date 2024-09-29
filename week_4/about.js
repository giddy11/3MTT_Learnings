// Function to handle the login button click
document.querySelector(".login").addEventListener("click", function () {
  alert("Login successful!");
});

// Function to handle form submission
document
  .querySelector("#signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const tel = document.querySelector('input[type="tel"]').value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Update the existing message container with a success message
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = `<p>Registration successful! Welcome, ${name}. A confirmation email has been sent to ${email}.</p>`;
    // messageContainer.innerHTML = `Registration successful! Welcome, ${name}. A confirmation email has been sent to ${email}`;

    // alert(messageContainer.innerHTML);
    // document.querySelector("#register-form").appendChild(messageContainer);
  });
