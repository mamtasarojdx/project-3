import React from "react";
import "./StandOut.css";

function StandOut() {
  return (
    <>
      <section>
        <div className="container mt-5 mb-5" id="standPage">
          <div className="row">
            <div className="col-lg-6 text-center">
              <h6 className="stand-out ">We Stand Out</h6>
              <h4 className="head4">
                Our passion for beauty is whats drives us
                <div>to provide top-quality products and </div>
                <div> exceptional service to our partners!</div>{" "}
              </h4>
            </div>
            <div className="col-lg-6 d-flex text-center" id="balloon">
              <div className="emptyDiv1">
                <span className="span1">2009</span>
              </div>
              <div className="emptyDiv2">
              <span className="span2">12+</span>
              </div>
              <div className="emptyDiv3">
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
