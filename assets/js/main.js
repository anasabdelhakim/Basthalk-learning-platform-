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


