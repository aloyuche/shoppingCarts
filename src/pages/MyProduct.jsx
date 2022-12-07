import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data";

const MyProduct = () => {
  const cardItem = (items) => {
    return (
      <div
        className="card my-5 py-4 mx-3 justify-center hover:scale-50 hover:shadow-slate-600"
        key={items.id}
        style={{ width: "18rem" }}
      >
        <img src={items.image} class="card-img-top" alt={items.title} />
        <div className="card-body">
          <h5 className="card-title">{items.title}</h5>
          <p className="lead">${items.price}</p>
          <NavLink
            to={`/myproduct/${items.id}`}
            class="btn btn-outline-primary"
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className=" py-5 bg-slate-100 w-full h-screen">
        <div className="flex flex-row">
          <div className="w-full text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container col-12 h-screen pl-20 justify-around items-center">
        <div className="row justify-around items-center">
          {data.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
