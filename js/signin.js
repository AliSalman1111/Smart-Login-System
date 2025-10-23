 let loginEmail = document.getElementById("signinEmail");
let loginPassword = document.getElementById("signinPassword");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find(
    u => u.email === loginEmail.value && u.password === loginPassword.value
  );

  if (found) {
 
    // ممكن هنا تخزن اسمه كـ "currentUser"
    localStorage.setItem("currentUser", JSON.stringify(found));
    // وبعدها تروح لصفحة home مثلًا
    window.location.href = "welcome.html";
  } else {
       alert(" من فضلك أدخل إيميل صحيح (مثلاً: example@gmail.com)");

  }
});
