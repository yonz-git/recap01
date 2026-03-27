const form = document.querySelector('[data-js="form"]');
const submit = document.querySelector('[data-js="submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCardContainer = document.createElement("section");
  const newCard = document.createElement("article");
  const question = document.createElement("h2");
  const answer = document.createElement("p");
  const btnShowAnswer = document.createElement("button");
  const showAnswer = document.createElement("span");
  const tag = document.createElement("ul");

  const formElements = event.target.elements;
  const questionData = formElements.question.value;
  const answerData = formElements.answer.value;

  const tagData = formElements.tag.value;

  document.getElementById("formContent").append(newCardContainer);
  newCard.classList.add("newCard");

  newCardContainer.append(newCard);
  newCard.append(question, answer, btnShowAnswer);
  btnShowAnswer.append(showAnswer);
  showAnswer.append(tag);

  //DATA collection

  question.textContent = questionData;
  answer.textContent = answerData;
  tag.textContent = tagData;

  console.log(formElements.question);
  console.log(formElements.question.value);

  console.log(formElements.answer);
  console.log(formElements.answer.value);

  console.log(formElements.tag);
  console.log(formElements.tag.value);
});

// const userInput = document.querySelector("formElements").value;

// userInput = document.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });
