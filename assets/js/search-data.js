// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-dualstrike-magnetic-eavesdropping-amp-injection-on-hall-effect-keyboards",
          title: 'DualStrike — Magnetic Eavesdropping &amp;amp; Injection on Hall-effect Keyboards',
          description: "DualStrike demonstrates non-invasive keystroke eavesdropping and per-key injection attacks on commodity Hall-effect keyboards.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dualstrike_project/";
            },},{id: "projects-metro-magnetic-road-markings-for-all-weather-perception",
          title: 'METRO — Magnetic Road Markings for All-weather Perception',
          description: "A robust road surface marking system using passive magnetic tags and a low-cost magnetometer array.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metro_project/";
            },},{id: "projects-polaris-vision-free-magnetic-fiducials",
          title: 'Polaris — Vision-free Magnetic Fiducials',
          description: "A full-stack magnetic fiducial system for mobile robots, providing reliable pose estimation and high-capacity ID encoding capabilities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/polaris_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6B%65%77%61%6E%67@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wjk5117", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-7145-4608", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=L90n6MUAAAAJ", "_blank");
        },
      },];
