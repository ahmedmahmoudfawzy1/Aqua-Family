import React from "react";
import "./productSection.scss";
import { useQuery } from "react-query";
import axios from "axios";
import apiLink from "../../Services/api";
import PrductCard from "../ProductCard/PrductCard";

export default function ProductSection() {
  const { data, isLoading } = useQuery("product", () => {
    return axios.get(`${apiLink}/products?category=filter`);
  });

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="filter__house">
      {data?.data.map((product) => {
        return (
          <PrductCard product={product}/>
        );
      })}
    </div>
  );
}

