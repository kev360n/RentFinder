// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block"; // Show button when scrolled down
  } else {
    backToTopBtn.style.display = "none"; // Hide button when at the top
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

// Function to open the side menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  // Function to close the side menu
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // Dropdown functionality
  document.querySelector('.dropdown-icon').addEventListener('click', function() {
      const dropdown = document.querySelector('.dropdown-content');
      dropdown.classList.toggle('show');  // Toggle the visibility of the dropdown menu
  });
  
  // Close the dropdown if clicked outside
  window.onclick = function(event) {
      if (!event.target.matches('.dropdown-icon')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }
  }
  // JavaScript to get image to the card in the main page
window.onload = function() {
    const firstImage = localStorage.getItem('firstImage');
    if (firstImage) {
        document.getElementById('card-image').src = firstImage;
    }
};
 // Javascript to go to the next page
 document.addEventListener("DOMContentLoaded", function() {
    const cardsPerPage = 16; // Number of cards per page
    const cards = document.querySelectorAll(".card");
    const paginationLinks = document.querySelectorAll(".pagination a.page-num");
    const prevButton = document.querySelector(".pagination a.prev");
    const nextButton = document.querySelector(".pagination a.next");

    let currentPage = 1;
    const totalPages = paginationLinks.length; // Total number of pages

    function displayCards(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            card.style.display = (index >= start && index < end) ? "block" : "none";
        });

        paginationLinks.forEach(link => link.classList.remove("active"));
        paginationLinks[page - 1].classList.add("active");

        // Disable prev/next buttons if at the first/last page
        prevButton.style.pointerEvents = (currentPage === 1) ? "none" : "auto";
        nextButton.style.pointerEvents = (currentPage === totalPages) ? "none" : "auto";
    }

    // Add event listeners to page numbers
    paginationLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = index + 1;
            displayCards(currentPage);
        });
    });

    // Add event listener to Previous button
    prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayCards(currentPage);
        }
    });

    // Add event listener to Next button
    nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayCards(currentPage);
        }
    });

    displayCards(currentPage); // Display the first page of cards on load
});

