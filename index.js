// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
  
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  // Add event listener to the hero button
  document.addEventListener("DOMContentLoaded", function() {
    const heroBtn = document.querySelector(".hero .btn");
  
    heroBtn.addEventListener("click", () => {
      const servicesSection = document.querySelector("#services");
  
      // Smooth scroll to the services section
      servicesSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Add event listener to the window scroll event
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const navHeight = document.querySelector("header").offsetHeight;
  
    // Fix the navigation menu to the top of the window when scrolling down
    if (scrollPosition > navHeight) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  });
  
  // Add event listener to the timetable tabs
  document.addEventListener("DOMContentLoaded", function() {
    const timetableTabs = document.querySelectorAll(".timetable th");
  
    timetableTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabIndex = Array.prototype.indexOf.call(timetableTabs, tab);
        const timetableRows = document.querySelectorAll(".timetable tbody tr");
  
        // Hide all timetable rows
        timetableRows.forEach((row) => {
          row.classList.remove("active");
        });
  
        // Show the timetable row corresponding to the clicked tab
        timetableRows[tabIndex].classList.add("active");
      });
    });
  });
  
  // Add event listener to the contact form
  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact form");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const testName = formData.get("name");
      const testEmail = formData.get("email");
      const testMessage = formData.get("message");
  
      // Send the form data to the server or perform some other action
      console.log(`Name: ${testName}, Email: ${testEmail}, Message: ${testMessage}`);
    });
  });
  
  // Add event listener to the services section
  document.addEventListener("DOMContentLoaded", function() {
    const serviceCards = document.querySelectorAll(".services .card");
  
    serviceCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.classList.add("hover");
      });
  
      card.addEventListener("mouseout", () => {
        card.classList.remove("hover");
      });
    });
  });
  
  
  And here's the updated CSS to reflect the changes:
  
  
  /* Add styles for the fixed navigation menu */
  header.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #120101;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Add styles for the timetable tabs */
  .timetable th {
    cursor: pointer;
  }
  
  .timetable tbody tr {
    display: none;
  }
  
  .timetable tbody tr.active {
    display: table-row;
  }
  
  /* Add styles for the services section */
  .services .card.hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  
  