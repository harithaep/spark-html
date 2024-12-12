// Check if the user has already accepted the cookie policy
window.onload = function () {
  if (!localStorage.getItem("cookieAccepted")) {
    document.getElementById("cookie-popup").style.display = "block";
  }

  // Accept cookie
  document.getElementById("accept-cookie").onclick = function () {
    localStorage.setItem("cookieAccepted", "true");
    document.getElementById("cookie-popup").style.display = "none";
  };

  // Decline cookie
  document.getElementById("decline-cookie").onclick = function () {
    localStorage.setItem("cookieAccepted", "false");
    document.getElementById("cookie-popup").style.display = "none";
  };
};
