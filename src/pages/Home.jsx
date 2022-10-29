import React from "react";
import Products from "../shop/Products";

const Home = () => {
  return (
    <div className="shopping">
      <div className="row">
        <div class="card bg-dark text-white">
          <img
            src="https://res.cloudinary.com/cheloytec/image/upload/v1665333619/online-shop/myDes_i8oaco.jpg"
            class="card-img-top"
            alt="before_the_throne"
            height={"500px"}
          />
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 class="card-title display-1 fw-bold mb-0">Newly Arrival</h5>
              <p class="card-text lead fs-2">Check out All the Trends</p>
            </div>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Home;
