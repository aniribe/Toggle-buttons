let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox5 = document.getElementById("checkbox5");

checkbox2.addEventListener("click", function () {
  this.parentElement.classList.toggle("active");
});

checkbox3.addEventListener("click", function () {
  this.parentElement.classList.toggle("active");
});

checkbox5.addEventListener("click", function () {
  this.parentElement.classList.toggle("active");
});

document.querySelector(".toggle").addEventListener("click", function () {
  document.querySelector(".text").classList.toggle("check");
});
