export default () => {
  const initialData = [
    {
      name: "RMCordoviz Inc.",
      description:
        "A business consulting company based in the Las Vegas that offers services in Web Development, Game Development, Business Coaching, etc.",
      location: "Las Vegas, Nevada (Remote)",
      date: "Mar 2020 - Sep 2020",
      year: "2020",
      responsibilities: [
        "Design mockups using Figma.",
        "Develop mockups using ReactJs.",
        "Develop APIs for Web Applications.",
        "Design and develop Email Templates.",
        "Manage servers",
      ],
    },
    {
      name: "Twist Resources Inc.",
      description:
        "A software company based in the Philippines that is associated with ToolTwist. TwistResources specialize in high-performance sites and applications optimized for the web and mobile.",
      location: "Pampanga, Philippines",
      date: "Apr 2019 - Jun 2019",
      year: "2019",
      responsibilities: [
        "Design and develop a webpage with SCRUM methodology",
        "Develop back-end services (APIs) with SCRUM methodology",
        "Database Normalization.",
        "Sprint Planning for the company’s Human Resource Management webpage.",
        "Sprint Review",
      ],
    },
  ];
  return [...initialData];
};
