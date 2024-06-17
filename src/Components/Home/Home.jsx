import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section>
        <div className="container-fluid bg-light">
          <div className="row bg-light">
            <div className="col-lg-12">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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
