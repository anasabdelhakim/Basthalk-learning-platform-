
// Selectors
const toggleBtn = document.querySelector(".theme-switch__checkbox");
const bodyElement = document.body;
const links = document.querySelectorAll("a");
const header = document.querySelector("header");
const Textarea = document.querySelector("textarea");
const navbar = document.querySelector(".navbar-nav");
const cards = document.querySelectorAll(".card");
const sectionTitles = document.querySelectorAll(".Section-title");
const footer = document.querySelector(".footer-preference");
const contactInputs = document.querySelectorAll(
  ".Contact-us-form-inputs input"
);

// Set styles for light theme
function setLightTheme() {
  updateLinkStyles("black");
  header.classList.remove("headerBackground");
  updateCardStyles(false);
  updateSectionTitleStyles("white");
  footer.style.backgroundColor = "white";
  updateInputStyles("black", false);
}

// Set styles for dark theme
function setDarkTheme() {
  updateLinkStyles("white");
  header.classList.add("headerBackground");
  updateCardStyles(true);
  updateSectionTitleStyles("#02050c");
  footer.style.backgroundColor = "#02050c";
  updateInputStyles("white", true);
}

// Update link styles
function updateLinkStyles(color) {
  links.forEach((link) => (link.style.color = color));
}

// Update card styles
function updateCardStyles(isDark) {
  cards.forEach((card) => {
    if (isDark) {
      card.classList.add("cardBackground");
    } else {
      card.classList.remove("cardBackground");
    }
  });
}

// Update section title styles
function updateSectionTitleStyles(color) {
  sectionTitles.forEach((section) => {
    section.style.backgroundColor = color;
  });
}

// Update input styles
function updateInputStyles(color, isDark) {
  contactInputs.forEach((input) => {
    input.classList.toggle("headerBackground", isDark);
    input.style.color = color;
  });
  Textarea.classList.toggle("headerBackground", isDark);
  text.style.color = color;
}

// Toggle theme function
function toggleTheme() {
  bodyElement.classList.toggle("dark-mode");
  toggleBtn.checked ? setDarkTheme() : setLightTheme();
}

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
  const header = document.querySelector("header");
  const headerPosition = header.getBoundingClientRect().top;
  window.scrollTo({
    top: headerPosition,
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



//main section


//Section 1

// Function to toggle the dropdown visibility and arrow rotation
const toggleDropdown = (selectElement) => {
  const optionsElement = selectElement.querySelector(".options");
  const arrowElement = selectElement.querySelector(".arrow");
  optionsElement.classList.toggle("optionShowen");
  arrowElement.classList.toggle("Rotatarrow");
};

// Function to update the displayed value based on the selected option
const updateSelectedValue = (selectElement, value) => {
  const selectedElement = selectElement.querySelector(".selected");
  selectedElement.childNodes[0].nodeValue = value;
};

// Get all select elements
const selectElements = document.querySelectorAll(".select");
selectElements.forEach((selectElement) => {
  const selectedElement = selectElement.querySelector(".selected");
  const options = selectElement.querySelectorAll(".options input");

  // Add click event listener to the selected element to toggle dropdown
  selectedElement.addEventListener("click", () =>
    toggleDropdown(selectElement)
  );

  // Add change event listener to each radio button
  options.forEach((option) => {
    option.addEventListener("change", () => {
      if (option.checked) {
        const newValue = option.nextElementSibling.getAttribute("data-txt");
        updateSelectedValue(selectElement, newValue);
        toggleDropdown(selectElement);
      }
    });
  });
});






