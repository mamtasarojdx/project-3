import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section>
        <div className="container" id="aboutPage">
          <div className="row">
            <div className="col-lg-6 mt-5 text-center mb-3">
              <div className="text-content">
                <h5 className="head5">About Us</h5>
                <h1 className="head1">The Beauty Solution You Want</h1>
                <div className="missionContent">
                  <img src={"/Images/mission01.png"} className="missionImg" />
                  <h5 className="text-uppercase" id="headMission">
                    our mission
                  </h5>
                  <h6 className="head6Text">
                    To provide a curated collection of the best niche beauty brands and and top indpendent retailers,while providing unmatched service with high
                    personal touch
                  </h6>
                </div>
                <div className="missionContent">
                  <img src={"/Images/touchService02.png"} className="missionImg" />
                  <h5 className="text-uppercase" id="headMission">
                    high touch service
                  </h5>
                  <h6 className="head6Text">Superior and consistent and personal service, education and contact that anticipates and understands needs.</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={"/Images/About Us.png"} className="bottleImg" />
                  </div>
                  <div class="carousel-item">
                    <img src={"/Images/smashbox-product.png"} class="bottleImg" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={"/Images/3.png"} class="bottleImg" alt="..." />
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

export default About;
