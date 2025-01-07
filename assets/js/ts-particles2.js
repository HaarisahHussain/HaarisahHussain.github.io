tsParticles.load("particles-js", {
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: "circle"
      },
      color: {
        value: "#D3D3D3"
      },
      opacity: {
        value: 50,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 10
        }
      },
      size: {
        value: 3,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.05
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      }
    }
  });