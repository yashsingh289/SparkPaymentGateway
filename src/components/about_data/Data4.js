import React from "react";

const Data4 = ({ tm1, tm2 }) => {
  return (
    <div className="data4">
      <div className="container">
        <h1>Founding Team</h1>
        <div className="row">
          <div className="col-lg-8 col-md-auto">
            <h3>Priyesh Kumar</h3>
            <h6>Founder</h6>
            <p>
              Priyesh is a technology enthusiast at his core. He is known for
              architecting, designing and developing large scale applications,
              and ensure security, scalability, and maintainability. A graduate
              of Indian Institute of Technology Delhi, and National University
              of Singapore, he works with VISA, NUS, and the likes with some of
              the large-scale projects of impact and his expertise is in
              Application Innovation, Machine Learning and Artificial
              Intelligence. He brings in more than 12 years of versatile
              experience to build The Sparks Foundation into an innovative
              social enterprise with impact at scale. He does a lot of volunteer
              work and mentorship; helping learners know more about latest
              technologies, methodologies and innovations.
            </p>
          </div>
          <div className="col mx-2">
            <img
              style={{ borderRadius: "50%" }}
              src={tm1}
              width={200}
              alt=" "
            />
          </div>
        </div>
        <h1 className="mt-5">Management Team</h1>
        <div className="row">
          <div className="col-lg-8 col-md-auto">
            <h3>Tanwi Kaushik</h3>
            <h6>Co-Founder and Executive Manager</h6>
            <p>
              Tanwi is a social entrepreneur and researcher. She is a double
              masters in Life Sciences from Cornell University (USA) and NUS
              (Singapore) with 6 years of experience in research and
              development. Having worked in India, USA and Singapore has given
              her a tremendous exposure and a chance to understand the academia
              and the industry internationally. After a vast understanding of
              academics in various countries from her own and others'
              experiences, she comprehended the gaps that still persist in the
              education system and hinder students from progressing to their
              full potential. This drove her to startup a social enterprise that
              works towards educational advancement.
            </p>
          </div>
          <div className="col mx-2">
            <img
              style={{ borderRadius: "50%" }}
              src={tm2}
              width={200}
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data4;
