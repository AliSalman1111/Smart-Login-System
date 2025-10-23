 let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      document.getElementById("welcomeMsg").textContent =
        `Welcome ${currentUser.name} `;
    } else {
    
      window.location.href = "index.html";
    }