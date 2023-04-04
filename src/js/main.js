import "./../scss/style.scss";

let selectedValue;
const submitButton = document.querySelector(".button");
const allButtons = document.querySelectorAll(".score");

allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    selectedValue = this.value;

    allButtons.forEach((ratingButton) => {
      ratingButton.classList.remove("active");
    });

    this.classList.add("active");
  });
});

submitButton.addEventListener("click", () => {
  document.querySelector("#vote").style.display = "none";
  document.querySelector("#result").style.display = "flex";
  document.querySelector("#result").classList.add("visible");
  if (selectedValue) {
    document.querySelector(".rating--thanks").classList.add("animation");
    document.querySelector(".rating--result").innerHTML =
      "You selected " + selectedValue + " out of 5";
  } else {
    document.querySelector(".rating--thanks").classList.add("animation-sad");
    document.querySelector(".rating--result").innerHTML = "That was wrong";
    document.querySelector(".rating--headline").innerHTML = "Are you stupid?";
    document.querySelector(".rating--text").innerHTML =
      "Choosing a rating value is not that hard - just click on a number before submiting.";
  }
});
