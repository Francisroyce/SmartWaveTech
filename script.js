let eventDetails = {};

// Function to show a screen and hide others
function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => screen.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
}

document
  .getElementById("get-started-btn")
  .addEventListener("click", function () {
    showScreen("signup-screen");
  });

document.getElementById("go-to-login").addEventListener("click", function () {
  showScreen("login-screen");
});

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Sign up successful!");
    showScreen("profile-setup-screen");
  });

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login successful!");
    showScreen("dashboard-screen");
  });

document
  .getElementById("profile-setup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Profile setup complete!");
    showScreen("dashboard-screen");
  });

document
  .getElementById("create-event-btn")
  .addEventListener("click", function () {
    showScreen("create-event-screen");
  });

document
  .getElementById("view-events-btn")
  .addEventListener("click", function () {
    showScreen("event-details-screen");
    displayEventDetails();
  });

document
  .getElementById("create-event-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    eventDetails = {
      title: document.getElementById("event-title").value,
      category: document.getElementById("event-category").value,
      start: document.getElementById("event-start").value,
      end: document.getElementById("event-end").value
    };
    showScreen("congratulations-screen");
  });

document
  .getElementById("go-to-dashboard")
  .addEventListener("click", function () {
    showScreen("dashboard-screen");
  });

document
  .getElementById("back-to-dashboard")
  .addEventListener("click", function () {
    showScreen("dashboard-screen");
  });

function displayEventDetails() {
  const eventDetailsContainer = document.getElementById("event-details");
  eventDetailsContainer.innerHTML = `
        <h3>${eventDetails.title}</h3>
        <p>Category: ${eventDetails.category}</p>
        <p>Start: ${new Date(eventDetails.start).toLocaleString()}</p>
        <p>End: ${new Date(eventDetails.end).toLocaleString()}</p>
    `;
}
