import Section from "../components/Section";
import {  SiGit, SiGithub, SiGitlab, SiHtml5, SiJavascript, SiReact, SiVisualstudiocode } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      {/* Coding Languages */}
      <div className="subheading mb-3">Coding Languages</div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "80%" }}>
          Javascript
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "90%" }}>
          HTML 5
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "85%" }}>
          CSS 3
        </div>
      </div>

      {/* Frameworks / Libraries */}
      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "90%" }}>
          React.js
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "85%" }}>
         React Hooks
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: "80%" }}>
          Bootstrap
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: "75%" }}>
          Material-UI
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "70%" }}>
          Tailwind-CSS
        </div>
      </div>
      <div className="subheading mb-3">Technologies and Tools</div>

      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "95%" }}>
          GitHub
        </div>
      </div>
     
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "85%" }}>
          Virtual DOM
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "75%" }}>
          Vercel
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "85%" }}>
          SPA
        </div>
      </div>

      {/* Programming Languages, Tools & Technologies */}
      <div className="subheading mb-3">Programming Languages, Tools & Technologies</div>
      <div className="d-flex flex-wrap">
        <div className="list-inline-item dev-icons">
          <SiGit />
        </div>
        <div className="list-inline-item dev-icons">
          <SiGithub />
        </div>
        <div className="list-inline-item dev-icons">
          <SiGitlab />
        </div>
        <div className="list-inline-item dev-icons">
          <SiJavascript />
        </div>
        <div className="list-inline-item dev-icons">
          <SiHtml5 />
        </div>
       
        <div className="list-inline-item dev-icons">
          <SiReact />
        </div>
        <div className="list-inline-item dev-icons">
          <SiVisualstudiocode />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
