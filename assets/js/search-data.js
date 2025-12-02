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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-tada-our-paper-metro-is-accepted-to-acm-sensys-2023",
          title: ':tada: Our paper METRO is accepted to ACM SenSys 2023!',
          description: "",
          section: "News",},{id: "news-airplane-presented-metro-at-acm-sensys-2023-in-istanbul-türkiye",
          title: ':airplane: Presented METRO at ACM SenSys 2023 in Istanbul, Türkiye.',
          description: "",
          section: "News",},{id: "news-tada-our-paper-polaris-is-accepted-to-acm-mobicom-2024",
          title: ':tada: Our paper Polaris is accepted to ACM MobiCom 2024!',
          description: "",
          section: "News",},{id: "news-microphone-invited-talk-at-microsoft-research-asia-msra-shanghai-on-our-polaris-system",
          title: ':microphone: Invited talk at Microsoft Research Asia (MSRA, Shanghai) on our Polaris system....',
          description: "",
          section: "News",},{id: "news-airplane-presented-polaris-at-acm-mobicom-2024-washington-d-c-usa",
          title: ':airplane: Presented Polaris at ACM MobiCom 2024, Washington, D.C., USA.',
          description: "",
          section: "News",},{id: "news-trophy-honored-to-receive-the-national-scholarship-ph-d-appreciate-our-team-s-great-work",
          title: ':trophy: Honored to receive the National Scholarship (Ph.D.). Appreciate our team’s great work!...',
          description: "",
          section: "News",},{id: "news-smile-served-on-the-acm-mobicom-2025-artifact-evaluation-committee",
          title: ':smile: Served on the ACM MobiCom 2025 Artifact Evaluation Committee.',
          description: "",
          section: "News",},{id: "news-tada-our-paper-dualstrike-is-accepted-to-the-ndss-symposium-2026-congrats-to-xiaomeng",
          title: ':tada: Our paper DualStrike is accepted to the NDSS Symposium 2026. Congrats to...',
          description: "",
          section: "News",},{id: "news-trophy-honored-to-receive-the-best-presentation-award-at-the-rising-star-forum-aiotsys-2025-appreciate-our-team-s-great-work",
          title: ':trophy: Honored to receive the Best Presentation Award at the Rising Star Forum,...',
          description: "",
          section: "News",},{id: "projects-dualstrike-magnetic-eavesdropping-amp-injection-on-hall-effect-keyboards",
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
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
