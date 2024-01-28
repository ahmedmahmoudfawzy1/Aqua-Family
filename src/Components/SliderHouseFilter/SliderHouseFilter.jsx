import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
// import PrductCard from "../ProductCard/PrductCard";
import "./SliderHouseFilter.scss";
import "swiper/css";
import apiLink from "../../Services/api";
import ProductSection from "../ProductSection/ProductSection";
export default function SliderHouseFilter() {
  const {  isLoading } = useQuery("productSlide", () => {
    return axios.get(`${apiLink}/products?category=filter`);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {/* <div className="head__lastProduct">
        <h1>اخر المنتجات</h1>
      </div> */}
      <div className="house__filter">
        <ProductSection />
      </div>
    </>
  );
}
