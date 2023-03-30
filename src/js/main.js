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
  if (selectedValue) {
    document.querySelector("#vote").style.display = "none";
    document.querySelector("#result").style.display = "flex";
    document.querySelector(".rating--result").innerHTML =
      "You selected " + selectedValue + " out of 5";
  }
});
