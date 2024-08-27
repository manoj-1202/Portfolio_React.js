import React from "react";
import Section from "../components/Section";
import { FaGithub } from "react-icons/fa6";
import { RiFilePaper2Fill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import Oracle from "../assets/Oracle.pdf";
import GoogleDigital from "../assets/GoogleDigital.pdf";
import GreatLearning from "../assets/GreatLearning.pdf";
import Sololearnpython from "../assets/Sololearnpython.pdf";
import HicsDBT from "../assets/HicsDBT.pdf";


export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <div className="container">
        <div className="row mb-4">
      <div className="col-12">
        <h4 className="text-primary mb-3 border-bottom pb-2">Achievements</h4>
        <ul className="list-unstyled">
          <li className="d-flex align-items-start mb-3">
            <span className="bg-light rounded-circle p-3 me-3 shadow-sm">
              <FaGithub size={30} className="text-primary" />
            </span>
            <div>
              <h6 className="text-dark mb-1">
                <strong>E-commerce Platform:</strong>
              </h6>
              
              <p className="text-muted mb-0">
              <strong>*</strong> Developed a fully functional e-commerce website utilizing React.js for dynamic and interactive user interfaces.
                </p>
                <p className="text-muted mb-0">
                <strong>*</strong> Implemented user authentication features to manage secure logins, registrations, and personalized user experiences.
                  </p>
                  <p className="text-muted mb-0">
                  <strong>*</strong> Integrated payment gateways to support various payment methods, ensuring a seamless and secure checkout process.
                    </p>
                    <p className="text-muted mb-0">
                    <strong>*</strong>  Designed and optimized a responsive layout to provide an optimal viewing experience across different devices and screen sizes.
                    </p>
                    <p className="text-muted mb-0">
                    <strong>*</strong> Utilized React Hooks and Context API for efficient state management, improving application performance and user interaction.
                    </p>
                
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span className="bg-light rounded-circle p-3 me-3 shadow-sm">
              <FaGithub size={30} className="text-primary" />
            </span>
            <div>
              <h6 className="text-dark mb-1">
                <strong>Portfolio Website:</strong>
              </h6>
              <p className="text-muted mb-0">
              <strong>*</strong> Developed a comprehensive personal portfolio website using React.js and CSS modules to effectively showcase projects, skills, and achievements.
              </p>
              <p className="text-muted mb-0">
              <strong>*</strong> Designed a sleek and modern user interface with a focus on user experience, ensuring intuitive navigation and a visually appealing layout.
              </p>
              <p className="text-muted mb-0">
              <strong>*</strong> Implemented dynamic components using React.js to present project details, skills in an organized and engaging manner.
              </p>
              <p className="text-muted mb-0">
              <strong>*</strong> Utilized CSS modules for modular and maintainable styling, ensuring consistent design across different sections of the portfolio.
              </p>
              <p className="text-muted mb-0">
              <strong>*</strong> Optimized the website for performance and responsiveness, ensuring compatibility across various devices and screen sizes.
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span className="bg-light rounded-circle p-3 me-3 shadow-sm">
              <FaGithub size={30} className="text-primary" />
            </span>
            <div>
              <h6 className="text-dark mb-1">
                <strong>Weather Monitor:</strong>
              </h6>
              <p className="text-muted mb-0">
              <strong>*</strong> Our Weather App, built using JavaScript, is designed to provide users with up-to-date and accurate weather information for any location around the globe. 
              </p>
              <p className="text-muted mb-0">
              <strong>*</strong> The app leverages various JavaScript technologies and APIs to deliver a seamless user experience with real-time weather updates, intuitive interfaces, and responsive design.
                </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  
          <div className="row">
            <div className="col-12">
              <h4 className="text-primary mb-3">Certifications</h4>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <span className="p-2">
                    <RiFilePaper2Fill className="text-warning" size={24} />
                  </span>
                  <button
                    onClick={() => window.open(GoogleDigital)}
                    className="text-dark btn btn-link p-0"
                  >
                    The Fundamentals of Digital Marketing
                  </button>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="p-2">
                    <RiFilePaper2Fill className="text-warning" size={24} />
                  </span>
                  <button
                    onClick={() => window.open(Oracle)}
                    className="text-dark btn btn-link p-0"
                  >
                    Java Using Alice Workshop
                  </button>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="p-2">
                    <RiFilePaper2Fill className="text-warning" size={24} />
                  </span>
                  <button
                    onClick={() => window.open(GreatLearning)}
                    className="text-dark btn btn-link p-0"
                  >
                    Sentiment Analysis Using Python
                  </button>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="p-2">
                    <RiFilePaper2Fill className="text-warning" size={24} />
                  </span>
                  <button
                    onClick={() => window.open(Sololearnpython)}
                    className="text-dark btn btn-link p-0"
                  >
                    Solo Learn Python Core
                  </button>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="p-2">
                    <RiFilePaper2Fill className="text-warning" size={24} />
                  </span>
                  <button
                    onClick={() => window.open(HicsDBT)}
                    className="text-dark btn btn-link p-0"
                  >
                    Two days Workshop on DataScience
                  </button>
                </li>
                
              </ul>
            </div>
          </div>


        </div>
      </Section>
    </React.Fragment>
  );
}
