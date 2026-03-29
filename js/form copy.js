const form = document.querySelector('[data-js="form"]');
const submit = document.querySelector('[data-js="submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCardContainer = document.createElement("section");
  document.getElementById("formContent").append(newCardContainer);

  const newCard = document.createElement("article");
  newCardContainer.append(newCard);

  const question = document.createElement("h3");
  const newAnswer = document.createElement("h2");

  newCard.append(question, newAnswer);

  const btnShowAnswer = document.createElement("button");
  newAnswer.append(btnShowAnswer);

  const showAnswer = document.createElement("span");
  btnShowAnswer.append(showAnswer);
  showAnswer.textContent = "Show Answer";

  const tagList = document.createElement("ul");
  newCard.append(tagList);

  const tag = document.createElement("li");

  tagList.append(tag);

  newCardContainer.classList.add("newCardContainer");
  newCard.classList.add("newCard");
  question.classList.add("question");
  newAnswer.classList.add("newAnswer");
  btnShowAnswer.classList.add("btnShowAnswer");
  showAnswer.classList.add("showAnswer");
  tagList.classList.add("tagList");
  tag.classList.add("tag");

  //DATA collection

  const formElements = event.target.elements;
  const questionData = formElements.question.value;
  const newAnswerData = formElements.newAnswer.value;
  const tagData = formElements.tag.value;

  question.textContent = questionData;
  newAnswer.textContent = newAnswerData;
  tag.textContent = tagData;
});
