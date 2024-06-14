import React from "react";
import "./Footer.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section>
        <div className="container mt-5 mb-5" id="FooterPage">
          <div className="row text-center">
            {/* <div className="col-lg-12 text-center"> */}
            <h2 className="retailer">our happy retailers</h2>
            <hr className="hr-line" />
            <h6>See What They're Saying</h6>
            {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
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
                      
                    </div>
                  
                  </div>
                  <div class="carousel-item">
                    <div class="slide-img">
                      <img src={"/Images/banner04.webp"} class="lipsticImg" alt="..." />
                    </div>
                 
                  </div>
                </div>
              </div> */}

            <div class="col-lg-12">
              {/* </div> */}
              <div id="testmonial-form">
                <span id="left-quote">
                  <FaQuoteLeft />
                </span>
                <div id="left-icon">
                  {" "}
                  <span id="rochak-left" style={{ padding: "28px 10px" }}>
                    <FaAngleLeft />
                  </span>
                </div>
                <div className="div-text">
                  Varoiuseditors now use Lorem Ipsum as their and a search for "lorem ipsum" will uncover many websites still in their infancy. Varoiuseditors
                  now use Lorem Ipsum as their and a search for "lorem ipsum" will uncover many websites still in their infancy. Varoiuseditors now use Lorem
                  Ipsum as their and a search "lorem ipsum" will uncover many websites still in their infancy. Varoiuseditors now use Lorem Ipsum as their and a
                  search for "lorem ipsum" will uncover many websites still in their infancy. Varoiuseditors now use Lorem Ipsum as their and a search for
                  "lorem ipsum" will uncover many websites still in their infancy. Varoiuseditors now use Lorem Ipsum as their and a search "lorem ipsum" will
                  uncover many websites still in their infancy.
                </div>
                <div className="right-icon">
                  {" "}
                  <span id="rochak-right" style={{ padding: "28px 10px" }}>
                    <FaChevronRight />
                  </span>
                </div>
              </div>{" "}
              <h5 className="mt-4">Sharron Eyers</h5>
              <h6 className="head6owner">Owner,Le Visage,Cosmetics and Skincare</h6>
            </div>
          </div>
        </div>

        <div className="last-text">Privacy Policy Terms & Conditions SiteMap</div>
      </section>
    </>
  );
}

export default Footer;
