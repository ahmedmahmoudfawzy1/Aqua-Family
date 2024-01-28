import React from "react";
import { IoCartOutline } from "react-icons/io5";

import "./ProductCard.scss";
export default function PrductCard({ product }) {
  console.log({ product });
  return (
    <>
      <div className="card" key={product.id}>
        <div className="card_img">
          <div className="img">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="card-title">{product.name}</div>
        <div className="card-subtitle">{product.subTitle}</div>
        <div className="card-footer">
          <div className="card-price">
            <span>EGP</span> {product.price}
          </div>
          <button className="card-btn">
            <IoCartOutline />
          </button>
        </div>
      </div>
    </>
  );
}
