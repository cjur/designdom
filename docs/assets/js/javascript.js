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
                menu.src = "assets/images/inbetweenmenu.png";
                setTimeout(() => {
                  menu.src = "assets/images/openmenu.png"; 
              }, 120);
            } else {
                menu.src = "assets/images/inbetweenmenu.png";
                setTimeout(() => {
                  menu.src = "assets/images/closedmenu.png"; 
              }, 120);
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
              menu.src = "assets/images/inbetweenmenu.png";
              setTimeout(() => {
                menu.src = "assets/images/openmenu.png"; 
            }, 120);
            } else {
                  menu.src = "assets/images/closedmenu.png"; 
            }
          }

        document.querySelectorAll('.animated-heading').forEach((heading) => {
            let isCooldown = false;
          
            const addAnimation = () => {
              // Apply the animation
              heading.style.animation = 'slideInOut 2s ease-in-out forwards';
            };
          
            const triggerAnimation = () => {
              if (!isCooldown) {
                // Reset the animation
                heading.style.animation = 'none';
                heading.offsetHeight; // Trigger reflow
                
                // Start the animation
                addAnimation();
          
                // Start cooldown
                isCooldown = true;
                setTimeout(() => {
                  isCooldown = false;
                }, 3000); // Cooldown period of 3000 milliseconds (3 seconds)
              }
            };
          
            heading.addEventListener('click', triggerAnimation);
            heading.addEventListener('mouseenter', () => {
              if (!isCooldown) {
                addAnimation();
              }
            });
          
            heading.addEventListener('animationend', () => {
              // Reset the animation state at the end to allow for re-hover
              heading.style.animation = 'none';
              isCooldown = false;
            });
          });
          