 // Try Us Page
 const tryUsLink = document.getElementById("try-us");
 if (tryUsLink) {
     tryUsLink.addEventListener("click", function() {
         window.location.href = "try-us-page.html";
     });
 }

 // Home Page
 const homeLink = document.getElementById("home");
 if (homeLink) {
     homeLink.addEventListener("click", function() {
         window.location.href = "home-page.html";
     });
 }

 // Contact Page
 const contactLink = document.getElementById("contact");
 if (contactLink) {
     contactLink.addEventListener("click", function() {
         window.location.href = "contact-us-page.html";
     });
 }

 // Timetable Page
 const timetableLink = document.getElementById("timetable");
 if (timetableLink) {
     timetableLink.addEventListener("click", function() {
         window.location.href = "timetable-page.html";
     });
 }

 // Get Pass Button
 const getPassButtons = document.querySelectorAll(".class-details-button");
 getPassButtons.forEach(button => {
     button.addEventListener("click", function() {
         window.location.href = "login-page.html";
     });
 });