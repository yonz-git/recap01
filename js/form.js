const form = document.querySelector('[data-js="form"]');
const submit = document.querySelector('[data-js="submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCardContainer = document.createElement("section");
  document.getElementById("formContent").append(newCardContainer);
  newCardContainer.classList.add("newCardContainer");

  const newCard = document.createElement("article");
  newCardContainer.append(newCard);
  newCard.classList.add("newCard");

  const question = document.createElement("h3");
  const newAnswer = document.createElement("h2");
  newCard.append(question, newAnswer);
  question.classList.add("question");
  newAnswer.classList.add("newAnswer");

  const btnShowAnswer = document.createElement("button");
  newAnswer.append(btnShowAnswer);
  btnShowAnswer.classList.add("btnShowAnswer");
  btnShowAnswer.textContent = "Show Answer";

  btnShowAnswer.addEventListener("click", () => {
    answerParagraph.classList.toggle("is-visible");

    if (answerParagraph.classList.contains("is-visible")) {
      btnShowAnswer.textContent = "Hide Answer";
    } else {
      btnShowAnswer.textContent = "Show Answer";
    }
  });

  const tagList = document.createElement("ul");
  newCard.append(tagList);
  tagList.classList.add("tagList");

  const tag = document.createElement("li");
  tagList.append(tag);
  tag.classList.add("tag");

  //DATA collection

  const formElements = event.target.elements;
  const questionData = formElements.question.value;
  const newAnswerData = formElements.newAnswer.value;
  const tagData = formElements.tag.value;

  question.textContent = questionData;

  tag.textContent = tagData;

  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = newAnswerData;
  answerParagraph.classList.add("answer-text");
});

const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("input", (event) => {
    const currentLength = event.target.value.length;

    const maxLength = event.target.maxLength;

    const remaining = maxLength - currentLength;

    const counter = event.target.nextElementSibling;

    counter.textContent = `${remaining} characters left`;

    if (remaining <= 20) {
      counter.style.color = "red";
    } else {
      counter.style.color = "inherit";
    }
  });
});
