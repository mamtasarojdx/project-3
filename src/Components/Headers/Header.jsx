import React from "react";

import Style from "../Headers/Header.module.css";

function Header() {
  return (
    <>
      <section>
        <nav className={`navbar navbar-expand-lg navbar-light ${Style.NavBar}`}>
          <div class="container-fluid">
            <img src={"/Images/btif-sale-logo.png"} className={`${Style.FirstImg}`} alt="..." />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <span className={`${Style.About}`} aria-current="page" href="#">
                About Us
              </span>

              <span className="mx-3" href="#">
                Brands
              </span>

              <span className="mx-2" href="#">
                Wholesale Inquaries
              </span>

              <div className={`d-flex ${Style.lastContent}`}>
                <div className={`mx-3 ${Style.education}`}>Education</div>
                <div className={`${Style.education}`}>Customer Support</div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
