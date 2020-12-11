import React from "react";
import Hero from "../Hero";
import AboutContent from "../Content";

import resume from "../assets/TorresEricD_IT_resume_11072020.pdf"

const About = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <AboutContent>
        <article>
          <p class="text-justify">
            Eric D. Torres is a journeyman coder with experience coding Java,
            Object-Oriented Programming, JavaScript, HTML5, CSS, SQL, AWS, and
            PEGA. Using his foundation of research skills and strong analytical
            problem solving abilities, he has the ability to learn any coding
            language quickly.
          </p>
          <p class="text-justify">
            Eric is passionate about learning new coding design elements,
            cutting-edge coding languages, and creating the logical framework of
            projects from start to finish.
          </p>
          <p>He has the following certifications:</p>
          <ol>
            <li>PEGA Certified System Architect (2/2020);</li>
            <li>PEGA Certified Senior System Architect (3/2020);</li>
            <li>PEGA Certified Business Architect (4/2020);</li>
            <li>PEGA Certified Robotics Architect (5/2020);</li>
            <li>SCRUMStudy Fundamentals of SCRUM (7/2020).</li>
          </ol>
          <p>
            Currently, Eric is further honing his skills by acquiring a
            Certificate in Full Stack Web Development from the University of
            Texas Austin (focus on JavaScript; MERN stack).
          </p>
          <p class="text-justify">
            From his work on local, state, and national political campaigns;
            developing public sector solutions; and creating an independent
            solo-law firm, Eric has the background and experience to understand
            your unique business needs.
          </p>
          <p class="text-justify">
            Eric is looking to diversify his experience as a fullstack
            coder/software developer. You can check out his resume
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
          <p>
            Feel free to reach out to him at{" "}
            <a href="mailto:etorresnotary@gmail.com">etorresnotary@gmail.com</a>
            .
          </p>
        </article>
      </AboutContent>
    </div>
  );
};

export default About;
