import React from "react";
import "./ProductCard.scss";
import { useQuery } from "react-query";
import axios from "axios";

export default function PrductCard({prodSlide}) {
  const { data, isLoading } = useQuery("product", () => {
    return axios.get("http://localhost:3004/products?category=filter?_limit=2");
  });

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="">
      {data?.data.map((product) => {
        return (
          <div className="card" key={product.id}>
            <div className="card-img">
              <div className="img">
                <img src="" alt="" />
              </div>
            </div>
            <div className="card-title">{product.name}</div>
            <div className="card-subtitle">{}</div>
            <hr className="card-divider" />
            <div className="card-footer">
              <div className="card-price">
                <span>EGP</span> {product.price}
              </div>
              <button className="card-btn">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                  <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
