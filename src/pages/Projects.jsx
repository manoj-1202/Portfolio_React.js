import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    id: 1,
    title: 'To-Do-List',
    image: 'images/todo.png',
    sourceCode: 'https://github.com/manoj-1202/ToDoList_Js.git',
    liveDemo: 'https://manoj-1202.github.io/ToDoList_Js/',
  },
  {
    id: 2,
    title: 'Weather Monitor',
    image: 'images/weather.png',
    sourceCode: 'https://github.com/manoj-1202/Weather_Monitor_js',
    liveDemo: 'https://manoj-1202.github.io/Weather_Monitor_js/',
  },
  {
    id: 3,
    title: 'Quiz-App',
    image: 'images/quiz.png',
    sourceCode: 'https://github.com/manoj-1202/Quiz-App_JavaScript',
    liveDemo: 'https://manoj-1202.github.io/Quiz-App_JavaScript/',
  },
  {
    id: 4,
    title: 'calculator',
    image: 'images/calculator.png',
    sourceCode: 'https://github.com/manoj-1202/Calculatore_apk',
    liveDemo: 'https://manoj-1202.github.io/Calculatore_apk/',
  },
  {
    id: 5,
    title: 'Bootstrap-Website',
    image: 'images/website.png',
    sourceCode: 'https://github.com/manoj-1202/Bootstrap_restaurant_Homepage',
    liveDemo: 'https://manoj-1202.github.io/Bootstrap_restaurant_Homepage/',
  },
  {
    id: 6,
    title: 'Css-Website',
    image: 'images/website-css.png',
    sourceCode: 'https://github.com/manoj-1202/Css_Responsive_website',
    liveDemo: 'https://manoj-1202.github.io/Responsive_website/',
  }
  
];

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-start mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <div className="mt-auto">
                  <a href={project.sourceCode} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                  <a href={project.liveDemo} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                    View Output
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
