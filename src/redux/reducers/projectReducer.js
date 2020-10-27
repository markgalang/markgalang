export default () => {
  const initialData = [
    {
      title: "That's My Shift",
      description:
        "An application that allows administrators to oversee and manage their employees through a user-friendly environment. Schedules, Leaves, Projects, and Team Management all are inculcated in one tool.",
      link: null,
      preview: "previews/TMS-preview.png",
      keyFeatures: ["Realtime monitoring", "Shift Monitoring", "Kanban Board"],
      techStack: [
        {
          name: "NodeJS",
          logo: "logos/Node.png",
          link: "https://nodejs.org/en/",
        },
        {
          name: "ReactJs",
          logo: "logos/ReactJs.png",
          link: "https://reactjs.org",
        },
        {
          name: "MongoDB",
          logo: "logos/MongoDB.png",
          link: "https://www.mongodb.com",
        },
      ],
    },
    {
      title: "RMCordoviz Website",
      description:
        "The official Company Website of RMCordoviz Inc., That gives information on what RMCordoviz has to offer. With the capability  of sending email requests for ebooks and inquiries with just one click",
      // link: "https://rmcordoviz.com/",
      preview: "previews/RMC-preview.png",
      keyFeatures: ["Responsive Website"],
      techStack: [
        {
          name: "NodeJS",
          logo: "logos/Node.png",
          link: "https://nodejs.org/en/",
        },
        {
          name: "ReactJs",
          logo: "logos/ReactJs.png",
          link: "https://reactjs.org",
        },
        {
          name: "HTML",
          logo: "logos/HTML.png",
          link: "https://www.w3schools.com/html/",
        },
      ],
    },
    {
      title: "iPark: Online App for parking reservation",
      description:
        "A Parking management system that can handle parking reservations and can be used for monitoring the current status of the parking facility. Booking a parking spot in advance is made possible by paying for the reservation fee using an online payment integrated through the said system.",
      // link: "https://ipark-app.netlify.app",
      preview: "previews/iPark-preview.png",
      keyFeatures: ["Cashless Payment", "License Plate Recognition"],
      techStack: [
        {
          name: "NodeJS",
          logo: "logos/Node.png",
          link: "https://nodejs.org/en/",
        },
        {
          name: "ReactJs",
          logo: "logos/ReactJs.png",
          link: "https://reactjs.org",
        },
      ],
    },
    {
      title: "Social Ape",
      description:
        "A web application that mimics the feature of twitter while having a different look. Built using the Redux Library for state management.",
      // link: "https://social-ape-47363.firebaseapp.com/",
      preview: "previews/Social-ape-preview.png",
      keyFeatures: ["Realtime Update"],
      techStack: [
        {
          name: "NodeJS",
          logo: "logos/Node.png",
          link: "https://nodejs.org/en/",
        },
        {
          name: "ReactJs",
          logo: "logos/ReactJs.png",
          link: "https://reactjs.org",
        },
        {
          name: "Redux",
          logo: "logos/Redux.png",
          link: "https://redux.js.org",
        },
      ],
    },
  ];
  return [...initialData];
};
