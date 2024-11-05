// Selectors
const toggleBtn = document.querySelector(".theme-switch__checkbox");
const bodyElement = document.body;
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar-nav");
const scrollToTopButton = document.getElementById("home");

// Toggle theme function
function toggleTheme() {
  bodyElement.classList.toggle("darkmode");
  toggleBtn.checked ? setDarkTheme() : setLightTheme();
}
toggleBtn.checked = false;

// Event listener
toggleBtn.addEventListener("change", toggleTheme);

// Default values
let prevScrollPos = 0;
let isScrollListenerAdded = false;

// Scroll behavior for header and navbar
const handleScroll = () => {
  const currentScrollPos = window.scrollY;
  if (currentScrollPos === 0 || prevScrollPos > currentScrollPos + 10) {
    navbar.classList.remove("opacityHidden");
    header.classList.remove("headerShowebar");
  } else if (prevScrollPos < currentScrollPos - 10) {
    header.classList.add("headerShowebar");
    navbar.classList.add("opacityHidden");
  }

  prevScrollPos = currentScrollPos;
};
//Scroll Up
function scrollToTopOfHeader() {
  const headerPosition = header.getBoundingClientRect().top;
  window.scrollTo({
    top: headerPosition,
    behavior: "smooth",
  });
}

// Show/Hide border on header based on scroll position
const ShowenBorderHeader = () => {
  const currentScrollPos = window.scrollY;
  if (currentScrollPos === 0) {
    header.classList.remove("removeBorder");
  } else if (!header.classList.contains("removeBorder")) {
    header.classList.add("removeBorder");
  }
};
if (scrollToTopButton) {
  scrollToTopButton.addEventListener("click", scrollToTopOfHeader);
}

// Check screen width to add/remove scroll event listener
const checkScreenWidth = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    navbar.classList.remove("opacityHidden");
    header.classList.remove("headerShowebar");
    if (!isScrollListenerAdded) {
      window.addEventListener("scroll", handleScroll);
      isScrollListenerAdded = true;
    }
  } else {
    window.removeEventListener("scroll", handleScroll);
    isScrollListenerAdded = false;
    header.classList.remove("headerShowebar");
    navbar.classList.remove("opacityHidden");
  }
};

// Initial check for screen width
window.addEventListener("scroll", ShowenBorderHeader);
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
Home.addEventListener("click", scrollToTopOfHeader);
