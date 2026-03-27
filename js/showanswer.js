const allCards = document.querySelectorAll(".questionBox");

allCards.forEach((card) => {
  const button = card.querySelector(".btnShowAnswer");
  const answer = card.querySelector(".answer");

  button.addEventListener("click", () => {
    answer.classList.toggle("is-visible");
  });

  const btnText = button.querySelector("p");

  button.addEventListener("click", () => {
    // btnText.textContent = "Hide Answer";

    if (answer.classList.contains("is-visible")) {
      btnText.textContent = "Hide Answer";
      // btnText.classList.add("blue");
    } else {
      btnText.textContent = "Show Answer";
      // btnText.classList.add("red");
    }
  });
});
