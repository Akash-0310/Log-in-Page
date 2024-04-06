function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextform = parent.nextElementSibling;
      console.log("hi click hua hai");
      if (input.type == "text" && validateUser(input)) {
        nextSlide(parent, nextform);
      } else if (input.type == "email" && validateUser(input)) {
        nextSlide(parent, nextform);
      } else if (input.type == "password" && validateUser(input)) {
        nextSlide(parent, nextform);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      parent.addEventListener("animation", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("not enough characters");
    error("rgb(189,87,87)");
  } else {
    error("rgb(87,189,130");
    return true;
  }
}

function validatEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    return true;
  }
}

function nextSlide(parent, nextform) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextform.classList.add("active");
}

function error(color) {
  document.body.style.background = color;
}

animatedForm();
