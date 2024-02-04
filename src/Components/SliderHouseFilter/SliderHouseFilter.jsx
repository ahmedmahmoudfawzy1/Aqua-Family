import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "./SliderHouseFilter.scss";
import apiLink from "../../Services/api";
import ProductSection from "../ProductSection/ProductSection";
import Loading from "../Loading/Loading";
export default function SliderHouseFilter() {
  const {  isLoading } = useQuery("productSlide", () => {
    return axios.get(`${apiLink}/products?category=filter`);
  });

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <div className="house__filter">
        <ProductSection />
      </div>
    </>
  );
}
