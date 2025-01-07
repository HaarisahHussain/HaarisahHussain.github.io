 // Typing animation for "Hi I'm..."
 const options = {
    strings: ["Hi, I'm..."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: false
  };
  const typed = new Typed("#greeting", options);

  // Fade in "About Me" section when scrolling
  window.addEventListener('scroll', function () {
    const aboutSection = document.getElementById("about-section");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // If the About Me section is within the viewable area of the window, add fade-in class
    if (sectionPosition < windowHeight - 100) {
      aboutSection.classList.add("fade-in");
    }
  });

  // Ensure the About Me section is initially hidden
  window.onload = function() {
    document.getElementById("about-section").classList.add("hidden");
  };