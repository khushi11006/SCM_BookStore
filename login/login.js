// Select the login form
const loginForm = document.querySelector('.form-box.login form');

// Function to create and display the notification bar
function showNotification() {
  // Create a notification container
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #4CAF50;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  notification.innerHTML = `
    <span>You have logged in!</span>
    <button style="
      margin-left: 10px;
      padding: 0.5rem 1rem;
      background: white;
      color: #4CAF50;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    ">OK</button>
  `;

  // Append the notification to the body
  document.body.appendChild(notification);

  // Add click event to the "OK" button
  const okButton = notification.querySelector('button');
  okButton.addEventListener('click', () => {
    // Remove the notification
    notification.remove();

    // Redirect to the homepage
    window.location.href = '../home/home.html'; // Update with your actual homepage path
  });
}

// Add event listener to the login form
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get email and password values
  const email = loginForm.querySelector('input[type="email"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();

  // Validate inputs
  if (!email || !password) {
    alert('Please fill out both fields.');
    return;
  }

  // Show the notification bar
  showNotification();
});
