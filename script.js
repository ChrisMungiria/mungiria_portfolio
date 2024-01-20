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
