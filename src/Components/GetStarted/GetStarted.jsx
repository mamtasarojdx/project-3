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

                <div>
                  <div>
                    <div className="card main__card">
                      <div className="text-center inquire">
                        <span className="card__line card__line_top"></span>
                        Inquire
                        <span className="card__line card__line_bottom"></span>
                      </div>
                    </div>
                  </div>
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
