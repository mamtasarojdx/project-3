import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <>
      <section style={{ backgroundImage: 'url("call-action.png")' }} className="callImage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex" id="letsGet">
                <div className="col-lg-6" id="letsGet2">
                  {" "}
                  <h4 className="h5Text">Let's Get Started</h4>
                  <h6 className="text-white">For Wholesale inquiries/please click to inquire</h6>
                </div>
                <div className="col-lg-6">
                  <button className="button2">Inquire</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
