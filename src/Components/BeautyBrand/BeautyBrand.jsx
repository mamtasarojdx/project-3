import React from "react";
import Style from "../BeautyBrand/BeautyBrand.module.css";

function BeautyBrand() {
  return (
    <>
      <section  className={`${Style.BeautyBrandPage}`}>
        <h1 className={` text-uppercase ${Style.head1}`}>your no one source for unique beauty brands</h1>
        <hr className={` ${Style.hrLine}`} />
        <div className="container">
          <div className="row">
              {/* -----------1st row---------- */}
            <div className="col-lg-4 mt-3 mb-5">
              <div className={`${Style.BrandImages}`}>
                <img src={"/Images/Diptyque-(1)-logo.png"} className={`  ${Style.img1}`} />
              </div>
              <div className={` mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/Bobbi-brown.png"} className={`  ${Style.img2}`} />
              </div>
              <div className={` mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/revive-logo.png"} className={`  ${Style.img3}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/Bumblea-and-bumble.png"} className={`  ${Style.img4}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/Kevyn-Aucoin-Cosmetics-logo.png"} className={`  ${Style.img5}`} />
              </div>
            </div>{" "}
            {/* -----------2nd row---------- */}
            <div className="col-lg-4 mt-3">
            <div className={`${Style.BrandImages}`}>
                <img src={"/Images/Byredo logo.jpg"} className={`  ${Style.img6}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/esteelauder.png"} className={`  ${Style.img7}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/RCO_LOGO.jpg"} className={`  ${Style.img8}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/BY TERRY logo.jpg"} className={`  ${Style.img9}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/smashbox logo.jpg"} className={`  ${Style.img10}`} />
              </div>
            </div>{" "}
            {/* --------------3rd row------------ */}
            <div className="col-lg-4 ">
            <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/Maison Margiela logo.png"} className={`${Style.img11}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/RMS Beauty logo.png"} className={`${Style.img12}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/bleu-logo.png"} className={`${Style.img13}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/Susanne Kaufmann logo.jpg"} className={`${Style.img14}`} />
              </div>
              <div className={`mt-3 ${Style.BrandImages}`}>
                <img src={"/Images/Eve-Lom-(1)-logo.png"} className={`${Style.img15}`} />
              </div>
            </div>{" "}
          
          </div>
        </div>
      </section>
    </>
  );
}

export default BeautyBrand;
