const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Sliding functionality for forms
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false; // Prevent default action
};

// Handle login form submission
document.querySelector('.login').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  
  const email = loginForm.querySelector('input[type="text"]').value; // Get email
  const password = loginForm.querySelector('input[type="password"]').value; // Get password

  // Admin credentials (replace these with secure methods in production)
  const adminEmail = 'admin@example.com'; // Replace with actual admin email
  const adminPassword = 'admin123'; // Replace with actual admin password

  // Check if the entered credentials are for the admin
  if (email === adminEmail && password === adminPassword) {
    // Redirect to admin dashboard on success
    window.location.href = 'admin_dashboard.html'; // Replace with actual admin dashboard page
  } else {
    alert('Invalid credentials. Please try again.'); // Alert for invalid credentials
  }
});

// Handle signup form submission
document.querySelector('.signup').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  const email = signupForm.querySelector('input[type="text"]').value; // Get email
  const password = signupForm.querySelector('input[type="password"]').value; // Get password
  const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value; // Get confirm password

  if (password === confirmPassword) {
    // Perform signup logic (e.g., send data to server)
    alert('Signup successful!'); // Replace with actual signup logic
  } else {
    alert('Passwords do not match. Please try again.'); // Alert for password mismatch
  }
});
