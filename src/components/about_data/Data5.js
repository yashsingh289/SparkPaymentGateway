import React from "react";

const Data5 = ({ p1, p2, p3 }) => {
  return (
    <div className="data5">
      <div className="container">
        <h1>AINE AI</h1>
        <div className="row">
          <div className="col-lg-8 col-md-auto">
            <p>
              Xaltius is a technology driven company with expertise to provide
              innovative software solutions to customers around the globe. We
              work to enhance and drive superior business performance. They are
              a multi-cultural and diverse team mainly focused on delivering
              solutions in Data Science & Analytics, Computer Vision and
              Knowledge Management. They are also host to an innovation hub
              which works towards building sustainable and reusable idea-driven
              products having a high social impact and benefiting the general
              society.
            </p>
          </div>
          <div className="col mx-2">
            <img src={p1} width={200} alt="" />
          </div>
          <a href="https://aine.ai/">
            <div className="btn btn-warning">VISIT SITE</div>
          </a>
        </div>
        <hr />
        <h1 className="mt-5">Xaltius</h1>
        <div className="row">
          <div className="col-lg-8 col-md-auto">
            <p>
              Xaltius is a technology driven company with expertise to provide
              innovative software solutions to customers around the globe. We
              work to enhance and drive superior business performance. They are
              a multi-cultural and diverse team mainly focused on delivering
              solutions in Data Science & Analytics, Computer Vision and
              Knowledge Management. They are also host to an innovation hub
              which works towards building sustainable and reusable idea-driven
              products having a high social impact and benefiting the general
              society.
            </p>
          </div>
          <div className="col mx-2">
            <img src={p2} width={200} alt="" />
          </div>
          <a href="https://xaltius.tech/">
            <div className="btn btn-warning">VISIT SITE</div>
          </a>
        </div>
        <hr />
        <h1 className="mt-5">Code For India</h1>
        <div className="row">
          <div className="col-lg-8 col-md-auto">
            <p>
              Xaltius is a technology driven company with expertise to provide
              innovative software solutions to customers around the globe. We
              work to enhance and drive superior business performance. They are
              a multi-cultural and diverse team mainly focused on delivering
              solutions in Data Science & Analytics, Computer Vision and
              Knowledge Management. They are also host to an innovation hub
              which works towards building sustainable and reusable idea-driven
              products having a high social impact and benefiting the general
              society.
            </p>
          </div>
          <div className="col mx-2">
            <img src={p3} width={200} alt="" />
          </div>
          <a href="http://codefor.in/">
            <div className="btn btn-warning">VISIT SITE</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Data5;
