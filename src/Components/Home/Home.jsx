import React from "react";
import "./Home.css"

function Home() {
  return (
    <>
      <section>
        <div className="container bg-light">
          <div className="row bg-light">
            {/* <div className="col-lg-12">
              <img src={"/Images/bobbi-brown11.png"} alt="Bobbi Brown Image" className={`${Style.lipsticImg}`} />
            </div> */}
            <div class=" col-xxl-8 col-lg-12 col-md-12 col-sm-12 ">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" id="lipsticImg" class="" aria-label="Slide 1"></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    id="img2"
                    aria-label="Slide 2"
                    class="active"
                    aria-current="true"
                  ></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" id="img3" aria-label="Slide 3" class=""></button>
                </div>
                <div class="images-carousel">
                  <div class="carousel-item">
                    <div class="slide-img">
                      {" "}
                      <img src={"/Images/bobbi-brown11.png"} class="lipsticImg " alt="..." />
                    </div>
                   
                  </div>
                  <div class="carousel-item active">
                    <div class="slide-img">
                      <img src={"/Images/banner02mobile.png"} class="lipsticImg" alt="..." />
                    </div>
                  
                  </div>
                  <div class="carousel-item">
                    <div class="slide-img">
                      <img src={"/Images/banner04.webp"} class="lipsticImg" alt="..." />
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
