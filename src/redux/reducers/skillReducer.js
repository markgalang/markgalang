const FRONTEND = "Frontend";
const BACKEND = "Backend";
const DEVELOPMENT = "Development";
const DEPLOYMET = "Deployment";

export default (state = [], action) => {
  const initialData = [
    { name: "JavaScript", category: FRONTEND, logo: "logos/Javascript.png" },
  ];
  return [...initialData];
};
