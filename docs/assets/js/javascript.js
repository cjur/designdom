//Base JS for designdom

//Not sure if this is needed but it solved some problem
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function () {
      const section = this.closest('.collapsible-section');
      section.classList.toggle('expanded');
    });
  });
});

//Opens dropdown menu (Animation?)
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
window.onclick = function (event) {
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

//Animated headers
document.querySelectorAll('.animated-heading').forEach((heading) => {
  let isCooldown = false;

  const addAnimation = () => {
    heading.style.animation = 'slideInOut 2s ease-in-out forwards';
  };

  const triggerAnimation = () => {
    if (!isCooldown) {
      heading.style.animation = 'none';
      heading.offsetHeight; 

      addAnimation();

      isCooldown = true;
      setTimeout(() => {
        isCooldown = false;
      }, 3000); 
    }
  };

  heading.addEventListener('click', triggerAnimation);
  heading.addEventListener('mouseenter', () => {
    if (!isCooldown) {
      addAnimation();
    }
  });

  heading.addEventListener('animationend', () => {
    
    heading.style.animation = 'none';
    isCooldown = false;
  });
});
