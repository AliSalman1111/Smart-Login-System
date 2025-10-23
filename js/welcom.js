 let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      document.getElementById("welcomeMsg").textContent =
        `Welcome ${currentUser.name} `;
    } else {
    
      window.location.href = "index.html";
    }


       function logout() {
  // حذف المستخدم الحالي
  localStorage.removeItem("currentUser");

  // توجيهه لصفحة الدخول
  window.location.href = "index.html";
}
