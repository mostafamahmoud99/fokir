let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let subject = document.getElementById("subject");
let messageUser=document.getElementById("messageUser");
userName.addEventListener("keyup", function () {
  let value = userName.value;
  if (value == "") {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
  } else {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
  }
});
userEmail.addEventListener("keyup", function () {
  let value = userEmail.value;
  if (value == "") {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
  } else {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
  }
});
subject.addEventListener("keyup", function () {
  let value = subject.value;
  if (value == "") {
    subject.classList.add("is-invalid");
    subject.classList.remove("is-valid");
  } else {
    subject.classList.add("is-valid");
    subject.classList.remove("is-invalid");
  }
});
messageUser.addEventListener("keyup", function () {
  let value = messageUser.value;
  if (value == "") {
    messageUser.classList.add("is-invalid");
    messageUser.classList.remove("is-valid");
  } else {
    messageUser.classList.add("is-valid");
    messageUser.classList.remove("is-invalid");
  }
});

// typing
var typed = new Typed(".type", {
  strings: ["Designer", "Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// counter
$(".counter").counterUp({
  delay: 15,
  time: 1500,
});

// change navbar
let offset = $(".layer-content h3").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= offset) {
    $(".navbar").css("backgroundColor", "#333333");
  } else {
    $(".navbar").css("backgroundColor", "transparent");
  }
});
