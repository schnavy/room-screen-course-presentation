const walls = document.querySelectorAll(
  ".wall.top,.wall.bottom, .wall.left, .wall.right "
);
const cols = document.querySelectorAll(".col");
const backButton = document.querySelector(".back-button");
let isOverview = true;

cols.forEach((col) => {
  col.addEventListener("mouseenter", (e) => {
    walls.forEach((wall) => {
      wall.style.backgroundImage = 'url("images/test.jpg")';
      wall.classList.remove("gradient");
    });
  });

  col.addEventListener("mouseleave", (e) => {
    walls.forEach((wall) => {
      wall.style.backgroundImage = "";
      wall.classList.add("gradient");
    });
  });

  col.addEventListener("click", (e) => {
    console.log(e);
    openProject("123");
  });
});

backButton.addEventListener("click", (e) => {
  toggleView();
});

function openProject(id) {
  toggleView();
}

function toggleView() {
  isOverview = !isOverview;

  backButton.style.display = isOverview ? "none" : "flex";
  const overviewWrapper = document.querySelector(".content");
  console.log(overviewWrapper);
  overviewWrapper.classList.toggle("hide");
  const detailWrapper = document.querySelector(".content-detail");
  console.log(detailWrapper);
  detailWrapper.classList.toggle("hide");
}
