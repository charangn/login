document.getElementById("loginForm").addEventListener("submit", function(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    event.preventDefault();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Get form, remember checkbox, username and password fields
  var loginForm = document.getElementById('loginForm');
  var rememberCheckbox = document.getElementById('remember');
  var usernameField = document.getElementById('username');
  var passwordField = document.getElementById('password');

  // Check if there are saved credentials in localStorage
  var savedUsername = localStorage.getItem('username');
  var savedPassword = localStorage.getItem('password');

  // If there are saved credentials, populate the fields and check the remember checkbox
  if (localStorage.getItem("savedEmail") && localStorage.getItem("savedPassword")) {
    emailInput.value = localStorage.getItem("savedEmail");
    passwordInput.value = localStorage.getItem("savedPassword");
    rememberMeCheckbox.checked = true;
  }

  // Add submit event listener to form
  loginForm.addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Get username and password values
    var username = usernameField.value;
    var password = passwordField.value;

    // For simplicity, let's assume username and password are correct
    // In a real-world scenario, you would validate against a database or an API
    // Here, I'm just displaying a message
    alert('Login successful!');

    // If remember me is checked, save the username and password to localStorage
    if (rememberCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // If remember me is not checked, clear saved credentials from localStorage
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    loginForm.reset();
    
    
  });

  // Add click event listener to forgot password link
  document.getElementById('forgotPassword').addEventListener('click', function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Display alert message
    alert('Forgot Password?');

    
  });

  
});
