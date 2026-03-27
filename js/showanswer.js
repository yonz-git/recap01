const allCards = document.querySelectorAll(".questionBox");

allCards.forEach((card) => {
  const button = card.querySelector(".btnShowAnswer");
  const answer = card.querySelector(".answer");

  button.addEventListener("click", () => {
    answer.classList.toggle("is-visible");
  });

  const btnText = button.querySelector("span");

  button.addEventListener("click", () => {
    // btnText.textContent = "Hide Answer";

    if (answer.classList.contains("is-visible")) {
      btnText.textContent = "Hide Answer";
      button.classList.add("pink");
    } else {
      btnText.textContent = "Show Answer";
      button.classList.remove("pink");
    }
  });
});
