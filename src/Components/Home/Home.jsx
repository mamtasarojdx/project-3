import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section>
        <div className="container-fluid bg-light">
          <div className="row bg-light">
            <div className="col-lg-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carouselIndicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    id="lipsticImg"
                    className=""
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    id="img2"
                    aria-label="Slide 2"
                    className="active"
                    aria-current="true"
                  ></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" id="img3" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="slide-img">
                      <img src={"/Images/banner02.png"} className="lipsticImg" alt="Slide 1" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="slide-img">
                      <img src={"/Images/bobbi-brown11.png"} className="lipsticImg2" alt="Slide 2" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="slide-img">
                      <img src={"/Images/banner04.webp"} className="lipsticImg3" alt="Slide 3" />
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

export default Home;
