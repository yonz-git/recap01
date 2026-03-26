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
    icon.classList.toggle("is-active");
    console.log("Class toggled! Current classes:", icon.classList.value);
  });
});
