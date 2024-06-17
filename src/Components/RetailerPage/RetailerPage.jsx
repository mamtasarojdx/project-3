import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "./RetailerPage.css";

function RetailerPage() {
  return (
    <>
      <section>
        <div className="container containerPart">
          <div className="row mt-5 text-center">
            <div className="col-lg-2">
              <FaChevronLeft className="left-dark" />
              <button className="carouselControlPrev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carouselControlPrevIcon" aria-hidden="true"></span>
                <span className="visually-hidden leftIcon text-dark"> </span>
              </button>
            </div>
            <div className="col-lg-8">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div className="images-carousel">
                    <div class="carousel-item active">
                      <div className="slide-img">
                        <div className="TextPart">
                          <h3 className="head4Text"> our happy reatiler</h3>
                          <div className="hrLine"></div>
                          <h5 className="head5Text">See What They'r Saying</h5>
                          <h6 className="mt-4 head6Text">
                            Legends of Runeterra is a 2020 digital collectible card game developed and published by Riot Games. Inspired by the physical
                            collectible card game Magic: The Gathering, the developers sought to create a game within the same genre that significantly lowered
                            the barrier to entry. Wikipedia
                          </h6>
                          <span className="quote">
                            <FaQuoteLeft />
                          </span>
                        </div>
                        <h5 className="mt-4 sharronText">Sharron Eyers</h5>
                        <h6 className="OwnerText">Owner,Le Visage Cosemetics & Skincare</h6>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="slide-img">
                        <div className="TextPart">
                          <h3 className="head4Text">our happy reatiler</h3>
                          <div className="hrLine"></div>
                          <h5 className="head5Text">See What They'r Saying</h5>
                          <h6 className="mt-4 head6Text">
                            Lorem ipsum, sunt in culpa, coming soon, under construction, asdf, qwert, etaoin shrdlu, now is the time for all good men, the quick
                            brown fox, test image, test description,go through that moment again!
                          </h6>
                          <span className="quote">
                            <FaQuoteLeft />
                          </span>
                        </div>
                        <h5 className="mt-4 sharronText">Beckah Hunt</h5>
                        <h6 className="OwnerText">Owner,Betty Faye Beauty Bar</h6>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="slide-img">
                        <div className="TextPart">
                          <h3 className="head4Text">our happy reatiler</h3>
                          <div className="hrLine"></div>
                          <h5 className="head5Text">See What They'r Saying</h5>
                          <h6 className="mt-4 head6Text">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                            typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                          </h6>
                          <span className="quote">
                            <FaQuoteLeft />
                          </span>
                        </div>
                        <h5 className="mt-4 sharronText">Grace Duduit</h5>
                        <h6 className="OwnerText">Manager and Buyer,Amelia Gray Skincare</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <FaChevronRight className="right-dark" />
              <button className="carouselControlNext" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carouselControlNextIcon" aria-hidden="true"></span>
                <span className="visually-hidden rightIcon"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 lastText">
          Privacy Policy <span className="mx-3">Terms & Conditions</span> <span className="mx-1">Site Map</span>
        </div>
      </section>
    </>
  );
}

export default RetailerPage;
