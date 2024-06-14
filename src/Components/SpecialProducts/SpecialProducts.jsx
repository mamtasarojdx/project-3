import React from "react";
import "./SpecialProducts.css";

function SpecialProducts() {
  return (
    <>
      <section>
        <div className="conatiner mt-5 mb-5"  id="specialPage">
          <div className="row ">
            <div className="col-lg-4 text-center " id="cosmeticProducts">
                <h4 className="text-start" id="head4">Our</h4>
                <h4 className="text-start" id="head4">Specialties</h4>
                <h6 className="head6"> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</h6>
            </div>
            <div className="col-lg-8 text-center d-flex" id="cosmeticProducts">
            <img src={"/Images/color-rer.png"} className="lipstic1" />
            <img src={"/Images/hair-re.png"} className="lipstic2" />
            <img src={"/Images/hair-re.png"} className="lipstic3" />
            <img src={"/Images/skin-re.png"} className="lipstic4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialProducts;
