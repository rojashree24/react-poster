import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="product">
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        <p>
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span>{" "}
          SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span>{" "}
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD &
          BEVERAGE
          <span>|</span>
        </p>
      </div>

      <p className="prod">
        PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING{" "}
        <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span>{" "}
        AGRICULTURE & RESIDENTIAL
      </p>
    </>
  );
};

export default Products;
