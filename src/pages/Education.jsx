import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h4 className="text-muted">College :</h4>
          <h3 className="mb-0">HINUSTHAN ARTS & SCIENCE,COIMBATORE</h3>
          <div className=" mb-3"style={{ fontSize: '1.1rem',color:"#bd5d38"}}>BSC.COMPUTER SCIENCE WITH COGNITIVE SYSTEMS</div>
          
          <h6>CGPA : 81.70</h6>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary fw-bold">2023 PASSED OUT</span>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h4 className="text-muted">School :</h4>
          <h3 className="mb-0">St Paul's Matric Hr.Sec School</h3>
          <div className=" mb-3" style={{ fontSize: '1.3rem',color:"#bd5d38" }}>Arts & Computer Science</div>
          
          <h6>Percentage : 75.90</h6>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary fw-bold ">2020 PASSED OUT</span>
        </div>
      </div>
    </Section>
  );
}
