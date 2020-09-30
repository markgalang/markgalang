import React from "react";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="u-container">
        <h1 className="section-header">About me</h1>

        <div className="about__content">
          <p className="about__paragraph">
            Hi! I’m <strong>Mark</strong>, A Software engineer based in the
            Philippines.
          </p>

          <p className="about__paragraph">
            I love solving real-world problems through code and by building
            responsive websites with great User Experience in mind. JavaScript
            is my main programming language in solving these problems but I am
            also knowledgeable with other languages such as Java and Python
          </p>

          <p className="about__paragraph">
            Aside from coding, I also play football occasionally. If I'm not
            playing sports, I usually use my time learning new stuff online and
            helping others solve their coding problems.
          </p>

          <p className="about__paragraph">
            I also like to travel and explore different cultures around the
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
