"use strict";

const button = document.querySelectorAll(".showmodel");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelectorAll(".hidden");
const click = document.querySelectorAll(".click");
const close = document.querySelector(".close-modal");

const eventremove = function () {
  for (let i = 0; i < click.length; i++) {
    click[i].classList.remove("hidden");
  }
};

const eventadd = function () {
  for (let i = 0; i < click.length; i++) {
    click[i].classList.add("hidden");
  }
};

for (let i = 0; i < button.length; i++) {
  console.log(button[i].textContent);
  button[i].addEventListener("click", function () {
    eventremove();
  });
}

close.addEventListener("click", eventadd);
overlay.addEventListener("click", eventadd);
model.addEventListener("click", eventadd);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!model.classList.contains("hidden")) {
      eventadd();
    } else {
      console.log("click the wrong button");
    }
  }
});
