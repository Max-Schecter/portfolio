document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".item"); // Select all `.item` containers

  items.forEach((item) => {
      let images = item.querySelectorAll(".viewer .image"); // Get images inside this `.item`
      let listItems = item.querySelectorAll("ul#design-list li"); // Get list items inside this `.item`

      function showImage(index) {
        requestAnimationFrame(() => {
            images.forEach(img => img.classList.remove("showing"));
            if (images[index]) {
                images[index].classList.add("showing");
            }
    
            listItems.forEach(li => li.classList.remove("active"));
            if (listItems[index]) {
                listItems[index].classList.add("active");
            }
        });
    }
    
      // Add event listeners for hover (desktop) and click (mobile)
      listItems.forEach((listItem, index) => {
        listItem.addEventListener("mouseenter", function () {
            if (!listItem.classList.contains("no-image")) {
                showImage(index);
            }
        });
    
        listItem.addEventListener("click", function () {
            if (!listItem.classList.contains("no-image")) {
                showImage(index);
            }
        });
    });
      // Ensure the first item is "selected" properly on page load
      if (listItems.length > 0) {
          showImage(0); // Set the first image as visible and apply styles
      }
  });
});
