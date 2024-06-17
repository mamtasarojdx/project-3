import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <>
      <section>
        <div className="container" id="background-image">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <img src={"/Images/call-action.png"} alt="" className="image2" />
              </div>
              <div className="back-shadow">
                <div className="head-text">
                  <h4 className="LetGet">Let's Get Started</h4>
                  <h6 className="LetGet-2">For wholesale inquiries,please click to inquire</h6>
                </div>
                <button className="button-inquire">Inquire</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
