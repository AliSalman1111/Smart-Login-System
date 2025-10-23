var signupsname=document.getElementById("signupName")
var signupEmail=document.getElementById("signupEmail")
var signupPassword=document.getElementById("signupPassword")
var loginbtn=document.getElementById("signupBtn")


var users=[];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

loginbtn.addEventListener("click",function(){


var user={
    name: signupsname.value,
    email: signupEmail.value,
    password: signupPassword.value

}

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user.email)) {
    alert(" من فضلك أدخل إيميل صحيح (مثلاً: example@gmail.com)");
    return;
  }


 let exist = users.some(u => u.email === user.email);


 if(exist){

   alert("⚠️ الإيميل ده مسجل قبل كده!");
    return;

 }
users.push(user);
 localStorage.setItem("users", JSON.stringify(users));


  localStorage.setItem("currentUser", JSON.stringify(user));


  window.location.href = "welcome.html";
})




   