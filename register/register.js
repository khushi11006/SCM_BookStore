const registerForm = document.querySelector("form"); // Select the form

// Create the modal
const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.width = "300px";
modal.style.padding = "20px";
modal.style.backgroundColor = "#fff";
modal.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
modal.style.borderRadius = "10px";
modal.style.textAlign = "center";
modal.style.zIndex = "1000";
modal.style.display = "none"; // Initially hidden
document.body.appendChild(modal);

// Modal message
const modalMessage = document.createElement("p");
modalMessage.textContent = "You have successfully registered!";
modalMessage.style.marginBottom = "20px";
modal.appendChild(modalMessage);

// OK button in modal
const okButton = document.createElement("button");
okButton.textContent = "OK";
okButton.style.padding = "10px 20px";
okButton.style.backgroundColor = "#162938";
okButton.style.color = "#fff";
okButton.style.border = "none";
okButton.style.borderRadius = "5px";
okButton.style.cursor = "pointer";
modal.appendChild(okButton);

// OK button click event - Redirect to home page
okButton.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
  window.location.href = "../home/home.html"; // Redirect to home page
});

// Form submit event
registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const username = registerForm.querySelector("input[type='username']").value.trim();
  const email = registerForm.querySelector("input[type='email']").value.trim();
  const password = registerForm.querySelector("input[type='password']").value.trim();

  // Basic validation
  if (!username || !email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  // Display the modal
  modal.style.display = "block";

  // Clear the form after submission
  registerForm.reset();
});
