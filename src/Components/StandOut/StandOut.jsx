import React from "react";
import "./StandOut.css";

function StandOut() {
  return (
    <>
      <section>
        <div className="container-fluid  mb-5" id="standPage">
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="standFirst">
                <h6 className="stand-out text-start">We Stand Out</h6>
                <h4 className="head4 text-start">
                  Our passion for beauty is whats drives us
                  <div>to provide top-quality products and </div>
                  <div> exceptional service to our partners!</div>{" "}
                </h4>
              </div>
            </div>
            <div className="col-lg-6 d-flex text-center hover-effect" id="balloon">
              <div className="div-hover1">
                Company Established
                <span className="span1">2009</span>
              </div>
              <div className="div-hover2">
                Beauty Brand
                <span className="span2">12+</span>
              </div>
              <div className="div-hover3">
                Satisfied retailer
                <span className="span3">2500+</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StandOut;
