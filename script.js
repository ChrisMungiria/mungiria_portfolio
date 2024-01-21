// Get the links in the navbar
const links = document.querySelectorAll(".links a");
// Get the active background
const activeBg = document.getElementById("active-bg");

// Set initial position of active background
// 1. Get the active link
const initialLink = document.querySelector(".links a.active");
// 2. Get the active link dimensions
const initialLinkDimensions = initialLink.getBoundingClientRect();
// 3. Get the links container dimensions
const linksContainerDimensions =
  initialLink.parentElement.getBoundingClientRect();

// 4. Set the active background width and position
activeBg.style.width = `${initialLinkDimensions.width}px`;
activeBg.style.left = `${
  initialLinkDimensions.left - linksContainerDimensions.left
}px`;

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to clicked link
    this.classList.add("active");

    // Set the active background width and position
    const linkDimensions = this.getBoundingClientRect();

    // Get the links container dimensions
    const linksContainerDimensions = this.parentElement.getBoundingClientRect();

    // Set the active background width and position
    activeBg.style.width = `${linkDimensions.width}px`;
    activeBg.style.left = `${
      linkDimensions.left - linksContainerDimensions.left
    }px`;
  });
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(37, 37, 37, 0.174)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "none";
  }
});

// Scroll to tech stacks when clicked on the button
document
  .querySelector(".arrow-container")
  .addEventListener("click", function () {
    document.querySelector("#stacks").scrollIntoView({ behavior: "smooth" });
  });

const stacks = {
  html: "I have experience in building HTML/CSS web applications. From using HTML semantics, to CSS selectors and media queries, I am comfortable around web development.I have also taken to TailwindCSS since it reduces thinking time for class names😅.",
  js: "Using JavaScript to interact with the browser elements, using event listeners which involves creating custom functions which run when the user interacts with page elements has helped me add functionality to web pages",
  reactjs:
    "ReactJS is a JavaScript framework that uses the power of JavaScript to create JSX code. I have been able to make component-based and modular web applications using this which has reduced development time drastically",
  reactnative:
    "React Native is a library built on the concepts of ReactJS. It is similar to Google’s Flutter, allowing one codebase to run on multiple devices. I have built some projects on React Native as an Expo managed project, including a fun IoT one😉",
  figma:
    "Not so much a tech stack but a platform I use to develop websites and applications. I am familiar with the various tools on the platform, to create designs to guide me through th development process.",
};

const stackItems = ["html", "js", "reactjs", "reactnative", "figma"];
const progressBar = document.querySelector(".progress-bar");

stackItems.forEach((item) => {
  document.getElementById(item).addEventListener("click", function () {
    // Remove the white colour on all stack items
    stackItems.forEach(
      (item) =>
        (document.getElementById(item).style.color = "rgba(255, 255, 255, 0.5)")
    );
    // Add the white colour to the clicked stack item
    this.style.color = "white";

    document.querySelector(".stack-desc p").innerHTML = stacks[item];
    // Increase or decrease the height of the progress bar
    if (item === "html") {
      progressBar.style.height = "20%";
    } else if (item === "js") {
      progressBar.style.height = "40%";
    } else if (item === "reactjs") {
      progressBar.style.height = "60%";
    } else if (item === "reactnative") {
      progressBar.style.height = "80%";
    } else if (item === "figma") {
      progressBar.style.height = "100%";
    }
  });
});

// Projects

const projects = {
  reactjs: ["car-showcase", "expense-tracker", "image-gallery"],
  reactnative: ["greenleaf", "live-score", "recipe-app"],
};

const allSelector = document.getElementById("all-selector");
const reactjsSelector = document.getElementById("reactjs-selector");
const reactnativeSelector = document.getElementById("reactnative-selector");

allSelector.addEventListener("click", function () {
  // ReactJS Projects
  const reactjsProjects = projects.reactjs;
  reactjsProjects.forEach((project) => {
    // Set the display of the project to block
    document.getElementById(project).style.display = "block";
  });
  // ReatNative Projects
  const reactnativeProjects = projects.reactnative;
  reactnativeProjects.forEach((project) => {
    // Set the display of the project to block
    document.getElementById(project).style.display = "block";
  });
});

reactjsSelector.addEventListener("click", function () {
  // ReactJS Projects
  const reactjsProjects = projects.reactjs;
  reactjsProjects.forEach((project) => {
    // Set the display of the project to block
    document.getElementById(project).style.display = "block";
  });
  // ReatNative Projects
  const reactnativeProjects = projects.reactnative;
  reactnativeProjects.forEach((project) => {
    // Set the display of the project to none
    document.getElementById(project).style.display = "none";
  });
});

reactnativeSelector.addEventListener("click", function () {
  // ReactJS Projects
  const reactjsProjects = projects.reactjs;
  reactjsProjects.forEach((project) => {
    // Set the display of the project to none
    document.getElementById(project).style.display = "none";
  });
  // ReatNative Projects
  const reactnativeProjects = projects.reactnative;
  reactnativeProjects.forEach((project) => {
    // Set the display of the project to block
    document.getElementById(project).style.display = "block";
  });
});
