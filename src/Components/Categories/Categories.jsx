import axios from "axios";

import React from "react";
import { useQuery } from "react-query";
import "./Categories.scss";
import { FaAngleDoubleLeft } from "react-icons/fa";
import apiLink from "../../Services/api";
import Loading from "../Loading/Loading"
export default function Categories() {
  const { data, isLoading } = useQuery("categories", () => {
    return axios.get(`${apiLink}/categories`);
  });

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <div className="category__head">
        <div class="loader0">
          <span>الاقسام</span>
          <span>الاقسام</span> 
        </div>
      </div>
      <div className="mainCategory">
        {data?.data.map((category) => {
          return (
            <div className="myCard" key={category.id}>
              <div className="innerCard">
                <div className="frontSide">
                  <div className="categoryImage">
                    <img src={category.image} alt="" className="title" />
                  </div>
                  <div className="name__icon">
                    <p>{category.name} </p>
                    <FaAngleDoubleLeft />
                  </div>
                </div>
                <div className="backSide">
                  <p className="title">{category.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
