'use strict';

// entry point: prueba que el script se cargó
//console.log('bit-1 script loaded');

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("emailAddress").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Log de evidencia en consola
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    responseMsg.style.display = "block";
    form.reset();
  });
});