import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5 p-3 border border-light rounded">
  <div className="flex-grow-1">
    <h3 className="mb-0 text-primary">React Developer Intern</h3>
    <div className="mb-2 text-muted" style={{ fontSize: '1.3rem' }}>BlueKode Academy Pvt. Ltd.</div>

    <p className="mb-0">
      <strong className="d-block mb-2">Roles/Responsibilities:</strong>
      <ul className="list-unstyled mb-0">
        <li className="mb-1"><i className="bi bi-check-circle text-success"></i> Responsible for handling the frontend.</li>
        <li className="mb-1"><i className="bi bi-check-circle text-success"></i> Implement new features on the website.</li>
        <li className="mb-1"><i className="bi bi-check-circle text-success"></i> Optimize website performance.</li>
        <li className="mb-1"><i className="bi bi-check-circle text-success"></i> Develop alternative solutions for problems.</li>
      </ul>
    </p>
  </div>
  <div className="flex-shrink-0 d-flex align-items-center">
    <span className="text-primary fw-bold fs-5">June 2024 - Present</span>
  </div>
</div>

     
    </Section>
  );
}
