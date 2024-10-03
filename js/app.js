const burger = document.querySelector(".burger");
const burgerContent = document.querySelector(".nav-burger-content");
const male = document.querySelector(".male");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerContent.classList.toggle("active");
  male.classList.toggle("active");
});

// кнопка Show more

const lessonItems = document.querySelector("#lesson-2");
const showMore = document.querySelector("#show-more");

showMore.addEventListener("click", () => {
  lessonItems.classList.toggle("active");
  showMore.innerHTML = "Show (3) more";
  if (lessonItems.classList.contains("active")) {
    showMore.innerHTML = "Hide";
  }
});
