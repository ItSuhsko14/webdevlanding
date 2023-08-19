import React from "react";

export const Steps = (props) => {
  return (
    <div id="steps">
      <div className="container">
        <div className="section-title text-center">
          <h2>Етапи роботи</h2>
        </div>
        <div className="row">
          <div className="steps-container">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="steps">
                  
                    <div className="step-number">
                      <h1>{d.number}</h1>                      
                    </div>
                    <div className="steps-content">
                      <div className="testimonial-meta"> 
                        <h3>{d.name}</h3>
                      </div>
                      <div><p>{d.text}</p></div>
                    </div>
                </div>
              ))
            : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
