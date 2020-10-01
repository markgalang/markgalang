const FRONTEND = "Frontend";
const BACKEND = "Backend";
const DEVELOPMENT = "Development";

export default (state = [], action) => {
  const initialData = [
    {
      category: DEVELOPMENT,
      skills: [
        {
          name: "Git",
          logo: "logos/Git.png",
          link: "https://git-scm.com",
        },
        {
          name: "Github",
          logo: "logos/Github.png",
          link: "https://github.com",
        },
        {
          name: "Postman",
          logo: "logos/Postman.png",
          link: "https://www.postman.com",
        },
        {
          name: "Jest",
          logo: "logos/Jest.png",
          link: "https://jestjs.io",
        },
        {
          name: "Figma",
          logo: "logos/Figma.png",
          link: "https://www.figma.com",
        },
        {
          name: "NPM",
          logo: "logos/NPM.png",
          link: "https://www.npmjs.com",
        },

        {
          name: "Test Driven Development",
          logo: "logos/TDD.png",
          link: "https://www.guru99.com/test-driven-development.html",
        },
      ],
    },
    {
      category: FRONTEND,
      skills: [
        {
          name: "ReactJs",
          logo: "logos/ReactJs.png",
          link: "https://reactjs.org",
        },
        {
          name: "JavaScript",
          logo: "logos/Javascript.png",
          link: "https://www.javascript.com",
        },
        {
          name: "SASS",
          logo: "logos/Sass.png",
          link: "https://sass-lang.com",
        },

        {
          name: "Redux",
          logo: "logos/Redux.png",
          link: "https://redux.js.org",
        },
        {
          name: "Bootstrap",
          logo: "logos/Bootstrap.png",
          link: "https://getbootstrap.com",
        },
        {
          name: "HTML",
          logo: "logos/HTML.png",
          link: "https://www.w3schools.com/html/",
        },
        {
          name: "Material UI",
          logo: "logos/Material-UI.png",
          link: "https://material-ui.com",
        },
      ],
    },
    {
      category: BACKEND,
      skills: [
        {
          name: "NodeJS",
          logo: "logos/Node.png",
          link: "https://nodejs.org/en/",
        },
        {
          name: "ExpressJS",
          logo: "logos/Express.png",
          link: "https://expressjs.com",
        },
        {
          name: "Java",
          logo: "logos/Java.png",
          link: "https://www.java.com/",
        },
        {
          name: "Spring Boot",
          logo: "logos/Springboot.png",
          link: "https://spring.io",
        },

        {
          name: "MongoDB",
          logo: "logos/MongoDB.png",
          link: "https://www.mongodb.com",
        },
        {
          name: "MySQL",
          logo: "logos/MySQL.png",
          link: "https://www.mysql.com",
        },
        {
          name: "JUnit",
          logo: "logos/JUnit.png",
          link: "https://junit.org/junit5/",
        },
        {
          name: "Postgres",
          logo: "logos/Postgres.png",
          link: "https://www.postgresql.org",
        },
      ],
    },
  ];
  return [...initialData];
};
