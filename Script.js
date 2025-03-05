document.addEventListener("DOMContentLoaded", function () {


  // --- Gallery Item Image Switching ---
  const galleryItems = document.querySelectorAll(".galley-item");
  galleryItems.forEach(item => {
    const images = item.querySelectorAll(".viewer .image");
    const listItems = item.querySelectorAll("ul#design-list li");

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

    listItems.forEach((listItem, index) => {
      listItem.addEventListener("mouseenter", () => {
        if (!listItem.classList.contains("no-image")) {
          showImage(index);
        }
      });
      listItem.addEventListener("click", () => {
        if (!listItem.classList.contains("no-image")) {
          showImage(index);
        }
      });
    });

    if (listItems.length > 0) {
      showImage(0);
    };
  });


  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    const scrollContainer = project.querySelector(".gallery-scroll-container");
    const leftBtn = project.querySelector(".leftBtn");
    const rightBtn = project.querySelector(".rightBtn");
    const galleryParent = project.querySelector(".gallery-item-container");
    const scrollAmount = 300;

    if (leftBtn && rightBtn) {
      leftBtn.addEventListener("click", () => {
        if (scrollContainer) {
          scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      });

      rightBtn.addEventListener("click", () => {
        if (scrollContainer) {
          scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      });
    }

    function updateScrollButtons() {
      const computedStyle = window.getComputedStyle(galleryParent);
      const scrollPadding = computedStyle.getPropertyValue("padding-inline");
      const paddingValue = parseInt(scrollPadding, 10);

      if (paddingValue > 0 || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
        project.style.padding = "20px 20px 20px 20px";
      } else {
        leftBtn.style.display = "inline-block";
        rightBtn.style.display = "inline-block";
        project.style.padding = "20px 20px 6px 20px";
      }
    }
    // --- Update Scroll Buttons Based on Gallery Parent Padding ---
    function updateScrollButtons() {
      const computedStyle = window.getComputedStyle(galleryParent);
      const scrollPadding = computedStyle.getPropertyValue("padding-inline");
      const paddingValue = parseInt(scrollPadding, 10);

      if (paddingValue > 0 || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
        project.style.padding = "20px 20px 20px 20px";
      } else {
        leftBtn.style.display = "inline-block";
        rightBtn.style.display = "inline-block";
        project.style.padding = "20px 20px 6px 20px";
      }
    }
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);

    // --- Enable/Disable Navigation Buttons Based on Scroll Position ---
    function updateNavButtons() {
      if (!scrollContainer) return;
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const roundedScrollLeft = Math.round(scrollContainer.scrollLeft);
      const roundedMaxScrollLeft = Math.round(maxScrollLeft);

      if (roundedScrollLeft <= 10) {
        leftBtn.setAttribute("disabled", "true");
      } else {
        leftBtn.removeAttribute("disabled");
      }

      if (roundedScrollLeft >= roundedMaxScrollLeft - 5) {
        rightBtn.setAttribute("disabled", "true");
      } else {
        rightBtn.removeAttribute("disabled");
      }
    }

    if (scrollContainer) {
      updateNavButtons();
      scrollContainer.addEventListener("scroll", updateNavButtons);
    }
  });

});