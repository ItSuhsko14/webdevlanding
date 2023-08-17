import React from "react";

export const Steps = (props) => {
  return (
    <div id="steps">
      <div className="container">
        <div className="section-title text-center">
          <h2>Етапи роботи</h2>
        </div>
        <div className="row grid-container">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="steps grid-item">
                    <div className="step-number">
                      <h1>{d.number}</h1>
                      
                    </div>
                    <div className="steps-content">
                      <div className="testimonial-meta"> {d.name} </div>
                      <div><p>{d.text}</p></div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
