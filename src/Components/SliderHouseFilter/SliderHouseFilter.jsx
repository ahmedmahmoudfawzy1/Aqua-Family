import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import PrductCard from "../ProductCard/PrductCard";
import "./SliderHouseFilter.scss";
import "swiper/css";
export default function SliderHouseFilter() {
  const { data, isLoading } = useQuery("productSlide", () => {
    return axios.get("http://localhost:3004/products?category=filter");
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="head__lastProduct">
        <h1>اخر المنتجات</h1>
      </div>
      <div className="house__filter">
        {data?.data.map((prodSlide) => {
          return(
            <PrductCard />
          )
        })}
      </div>
    </>
  );
}
