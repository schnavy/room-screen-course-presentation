const walls = document.querySelectorAll(
  ".wall.top,.wall.bottom, .wall.left, .wall.right "
);
const backButton = document.querySelector(".back-button");
const courseTitle = document.querySelector(".course-title");
let isOverview = true;
let isCourseDetail = false;

// JSON data
const jsonData = [
  {
    name: "Marie Teigler",
    title: "ROUND TABLE – Conversations",
    description:
      'As part of the annual exhibition the Information Design class invites to the new format ROUND TABLE – Conversations. Different project partners will come together to present their work and discuss the role of communication design in a socio-political context with the students. To promote the event, „Bierdeckel" (beer mats) were printed and distributed around campus. The website works as the digital translation of this idea.',
    path: "marie-teigler/index.html",
    img: "marie-teigler.jpeg",
  },
  {
    name: "Gue Hyun Lee",
    title: "IS IT A MOUSE IN A MOUTH OR A MOUTH IN A MOUSE?",
    description: "",
    path: "gue-lee/index.html",
    img: "gue.jpeg",
  },
  {
    name: "Elias Emtanes",
    title: "Jugendliche brauchen Rente, keine Arbeitsplätze",
    description:
      "Die Website zeigt ein Portfolio mit verschiedenen Plakaten, die ich über den Verlauf der letzten Jahre gestaltet habe. Bei der Navigation steht ein überaus freundlicher und kompetenter Assistent zur Verfügung",
    path: "elias-emtanes/index.html",
    img: "elias.jpeg",
  },
  {
    name: "Simona Tanase",
    title: "Fish Party",
    description: "",
    path: "simona-tanase/index.html",
    img: "simona-tanase.jpeg",
  },
  {
    name: "Janek Stanisławski",
    title: "What are you waiting for?",
    description: "",
    path: "janek-stanislawski/index.html",
    img: "janek.jpeg",
  },
  {
    name: "Sehee Park",
    title: "Titanic Lovestory",
    description:
      "Go through the story by resizing your screen according to the text. <br/> Click and drag Jack and Rose and move them around! <br/> Draw on the screen to read the credits.",
    path: "sehee-park/index.html",
    img: "sehee.jpeg",
  },
  {
    name: "Eva Dietrich",
    title: "tischtennis.fun",
    description: "Description for project 8",
    path: "eva-dietrich/index.html",
    img: "eva.jpeg",
  },
  {
    name: "Gregor Simon",
    title: "DUQO Website Dummy",
    description: "",
    path: "gregor-simon/index.html",
    img: "gregor.jpeg",
  },
];

// Course description data
const courseDescription =
  "A website can lie in bed on a mobile screen at night, serve as a display board at an crowded airport terminal, make executives sweat on the projector wall in the meeting room, or be part of installations or performative acts as an artistic medium. Screens and their contents always live in relation to the space/room in which they appear. <br/><br/> An introductory web coding course by David Wahrenburg, Summer Semester 2024<br/><br/>This collective Website was designed by Gue Hyun Lee";

// Function to set wall images
function setWallImages(image) {
  walls.forEach((wall) => {
    wall.style.backgroundImage = `url("images/${image}")`;
    wall.classList.remove("gradient");
  });
}

// Populate the content columns dynamically
const contentDiv = document.querySelector(".content");
jsonData.forEach((item, index) => {
  const colDiv = document.createElement("div");
  colDiv.className = "col";
  colDiv.textContent = item.name;
  colDiv.addEventListener("mouseenter", (e) => {
    setWallImages(item.img);
  });
  colDiv.addEventListener("mouseleave", (e) => {
    if (isOverview) {
      walls.forEach((wall) => {
        wall.style.backgroundImage = "";
        wall.classList.add("gradient");
      });
    }
    // Keep the images set, do not revert
  });
  colDiv.addEventListener("click", (e) => {
    openProject(index);
  });
  contentDiv.appendChild(colDiv);
});

backButton.addEventListener("click", (e) => {
  if (isCourseDetail) {
    toggleCourseDetail();
  } else {
    toggleView();
  }
});

courseTitle.addEventListener("click", (e) => {
  toggleCourseDetail();
});

function openProject(index) {
  toggleView();
  const detailWrapper = document.querySelector(".content-detail");
  detailWrapper.querySelector(".col").textContent = jsonData[index].name;
  detailWrapper.querySelector(".title-title").textContent =
    jsonData[index].title;
  detailWrapper.querySelector(".title-name").textContent = jsonData[index].name;
  detailWrapper.querySelector(".desc").innerHTML = jsonData[index].description;
  detailWrapper.querySelector(".link a").href =
    "projects/" + jsonData[index].path;
  setWallImages(jsonData[index].img); // Ensure the correct image is shown when switching to detail view
}

function toggleView() {
  isOverview = !isOverview;

  backButton.style.display = isOverview ? "none" : "flex";
  const overviewWrapper = document.querySelector(".content");
  overviewWrapper.classList.toggle("hide");
  const detailWrapper = document.querySelector(".content-detail");
  detailWrapper.classList.toggle("hide");
}

function toggleCourseDetail() {
  isCourseDetail = !isCourseDetail;
  backButton.style.display = isCourseDetail ? "flex" : "none";
  const courseDetailWrapper = document.querySelector(".content-course-detail");
  const overviewWrapper = document.querySelector(".content");
  const detailWrapper = document.querySelector(".content-detail");

  courseDetailWrapper.classList.toggle("hide");
  overviewWrapper.classList.toggle("hide", isCourseDetail);
  detailWrapper.classList.add("hide");

  if (isCourseDetail) {
    courseDetailWrapper.querySelector(".course-desc").innerHTML =
      courseDescription;
  }
}
