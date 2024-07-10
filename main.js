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
    img: "marie.jpeg",
  },
  {
    name: "Gue Hyun Lee",
    title: "Is it a mouse in a mouth or a mouth in a mouse?",
    description:
      "This is an experimental website created using the JavaScript library faceapi.js allows users to control the mouse with their face. Instead of the conventional method of browsing with a mouse, users can actively use facial tracking to move the cursor. Clicking is done by opening and closing their mouth.",
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
    path2: "simona-tanase-2/index.html",
    img: "simona-tanase.jpeg",
  },
  {
    name: "Janek Stanisławski",
    title: "What are you waiting for?",
    description:
      "Similarity of the two rooms—a room in the screen and the Giovanni's room—is rather accidental; and rather nobody can figure out, how they really look like",
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
    title: "tischtennisturnier.fun",
    description: "",
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
  {
    name: "Lisa Schuhmann",
    title: "MNC Records",
    description:
      "Beim Betreten der Plattform, sollen Nutzer*innen, über eine einfache Navigation, einen umfassenden Überblick über die aktuellen Geschehnisse bei MNC Records erhalten. Sie werden über die neuesten Releases und bevorstehenden Events informiert, können sich über die Künstler*innen hinter den Projekten erkundigen und erhalten zudem einen Rückblick auf vergangene Ereignisse. <br/><br/> When users enter the platform, they should receive a comprehensive overview of the latest happenings at MNC Records. They will be informed about the newest releases and upcoming events, can learn about the artists behind the projects, and also get a retrospective on past events.",
    path: "lisa-schuhmann/index.html",
    img: "lisa.jpeg",
  },
  {
    name: "Margherita Villani",
    title: "Touchthegrass",
    description:
      "Who needs outside world? Just stay in the internet to touch some grass.",
    path: "margherita-villani/index.html",
    img: "margherita.jpeg",
  },
  {
    name: "Hannah Krüger",
    title: "Hannahs House",
    description:
      'During the course, I started coding a portfolio website, which is currently still a work-in-progress. The projects are sorted by category into rooms, which together form a house and fill the browser viewport of the "homepage". <br/><br/> Im Rahmen des Kurses habe ich angefangen, eine Portfoliowebsite zu coden, momentan noch ein work-in-progress. Die Projekte sind nach Kategorien in Räume sortiert, die zusammen ein Haus ergeben und das Browserfenster der „Homepage" füllen. ',
    path: "hannah-krueger/index.html",
    img: "hannah.jpeg",
  },
];

jsonData.sort((a, b) => a.name.localeCompare(b.name));

// Course description data
const courseDescription =
  "A website can lie in bed on a mobile screen at night, serve as a display board at an crowded airport terminal, make executives sweat on the projector wall in the meeting room, or be part of installations or performative acts as an artistic medium. Screens and their contents always live in relation to the space/room in which they appear. <br/><br/> An introductory web coding course by David Wahrenburg, Summer Semester 2024<br/><br/>This collective website was designed by Gue Hyun Lee";

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
  detailWrapper.querySelector(".link .open-project").href =
    "projects/" + jsonData[index].path;
  if (jsonData[index].path2) {
    detailWrapper.querySelector(".link .open-project-secondary").style.display =
      "inline-block";
    detailWrapper.querySelector(".link .open-project-secondary").href =
      "projects/" + jsonData[index].path2;
  } else {
    detailWrapper.querySelector(".link .open-project-secondary").style.display =
      "none";
  }
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
