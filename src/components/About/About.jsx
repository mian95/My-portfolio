import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/myPicture.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1> About Me </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="section-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="section-right">
          <div className="about-para">
            <p>
              I completed My Matirc at Centre of Excellence, High School,
              Jarawala and  FSc pre-Medical at Punjab Group of
              college, Jarawala and NOW I'm a Student of BS. Computer Science at the
              university of Agriculture, Fasailabad.
            </p>
            <p>
              I'm a frontend web developer and I fully exited and motivated to
              become a fullstack developer in the end of 2024
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & CSS</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p> <hr style={{ width: "52%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p> <hr style={{ width: "28%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p> <hr style={{ width: "25%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>Months of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>18+</h1>
          <p>Project Completed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
