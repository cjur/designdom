document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.collapsible-section');
            section.classList.toggle('expanded');
        });
    });
});

        function toggleDropdown() {
            var dropdown = document.getElementById("dropdown");
            var menu = document.getElementById("menu");

            dropdown.classList.toggle("show");

            if (dropdown.classList.contains("show")) {
                menu.src = "assets/images/openmenu.png"; // Image when the menu is open
            } else {
                menu.src = "assets/images/closedmenu.png"; // Image when the menu is closed
            }
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.closest('header')) {
                var dropdown = document.getElementById("dropdown");
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }

            if (dropdown.classList.contains("show")) {
                menu.src = "assets/images/openmenu.png"; // Image when the menu is open
            } else {
                menu.src = "assets/images/closedmenu.png"; // Image when the menu is closed
            }
        }

        const heading = document.getElementById('animated-heading');

        heading.addEventListener('click', () => {
          // Reset the animation
          heading.style.animation = 'none';
          heading.offsetHeight; // Trigger reflow
          heading.style.animation = null;
        
          // Add the animation
          heading.style.animation = 'slideInOut 2s ease-in-out forwards';
        });
        