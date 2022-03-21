import React from "react";
// import "./brand.css";
import { Div, Nav, Link, Image } from "../../assets/styles/BrandStyles";

interface BrandProps {
  brand: any;
}

const Brand = ({ brand }: BrandProps) => {
  return (
    <Div>
      <Nav>
        <Link href="#">
          <Image src={brand} alt="logo" />
        </Link>
      </Nav>
    </Div>
  );
};

export default Brand;
