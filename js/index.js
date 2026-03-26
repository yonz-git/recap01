// const bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]');

// bookmarkIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     icon.classList.toggle("is-active");
//   });

//   console.log("Bookmark toggled!", icon.classList.contains("is-active"));
// });

const bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]');

bookmarkIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    console.log("Class toggled! Current classes:", icon.classList.value);
  });
});

// add bookedmarked card

const mainContent = document.querySelector('[data-js="mainContent"]');

mainContent.innerHTML = `
div class="questionBoxContainer">
        <div class="questionBox questionBox01" data-id="1">
          <svg
            data-js="bookmarkIcon"
            class="iconBookmark active" 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
            
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 3H7a2 2 0 0 0-2 2v15.138a.5.5 0 0 0 .748.434l5.26-3.005a2 2 0 0 1 1.984 0l5.26 3.006a.5.5 0 0 0 .748-.435V5a2 2 0 0 0-2-2"
            />
          </svg>
          <p class="question">What does CSS stand for?</p>

          <p class="answer">Cascading Style Sheets</p>
          <button class="btnShowAnswer">
            <p class="showAnswer">Show Answer</p>
          </button>
          <ul class="answerList">
            <li>CSS</li>
            <li>Web Dev</li>
            <li>Styling</li>
          </ul>
        </div>
      </div>
`;

// 3. NOW you can add your event listeners because the elements exist!
const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("is-active");
});
