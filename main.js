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
    path: "marie-teigler",
    img: "marie-teigler.jpg",
  },
  {
    name: "Gue Hyun Lee",
    title: "Project Title 2",
    description: "Description for project 2",
    path: "gue",
    img: "gue.png",
  },
  {
    name: "Elias Emtanes",
    title: "Project Title 3",
    description: "Description for project 3",
    path: "elias-emtanes",
    img: "elias.jpg",
  },
  {
    name: "Simona Tanase",
    title: "Fish Party",
    description: "",
    path: "simona-tanase",
    img: "simona-tanase.jpg",
  },
  {
    name: "Jan Stanisbawski",
    title: "Project Title 5",
    description: "Description for project 5",
    path: "http://example.com/project5",
    img: "test.jpg",
  },
  {
    name: "Marie Lu Teigler",
    title: "Project Title 6",
    description: "Description for project 6",
    path: "http://example.com/project6",
    img: "test3.jpg",
  },
  {
    name: "Sehee Park",
    title: "Project Title 7",
    description: "Description for project 7",
    path: "http://example.com/project7",
    img: "test.jpg",
  },
  {
    name: "Tanase Ioana-Simona",
    title: "Project Title 8",
    description: "Description for project 8",
    path: "http://example.com/project8",
    img: "test2.jpg",
  },
  {
    name: "Dietrich Eva",
    title: "Project Title 9",
    description: "Description for project 9",
    path: "http://example.com/project9",
    img: "test.jpg",
  },
  {
    name: "Hannah Krüger",
    title: "Project Title 10",
    description: "Description for project 10",
    path: "http://example.com/project10",
    img: "test2.jpg",
  },
  {
    name: "Schmitt Anna-Lena",
    title: "Project Title 11",
    description: "Description for project 11",
    path: "http://example.com/project11",
    img: "test3.jpg",
  },
];

// Course description data
const courseDescription =
  "A website can lie in bed on a mobile screen at night, serve as a display board at an crowded airport terminal, make executives sweat on the projector wall in the meeting room, or be part of installations or performative acts as an artistic medium. Screens and their contents always live in relation to the space/room in which they appear. <br/><br/> An introductory web coding course by David Wahrenburg, Summer Semester 2024";

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
  detailWrapper.querySelector(".desc").textContent =
    jsonData[index].description;
  detailWrapper.querySelector(".link a").href = jsonData[index].path;
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
