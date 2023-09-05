import React from "react";
import "../styles/Products.css";
import product from "./fruits.json";
import { add } from "../redux/CreateSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const dispatch = useDispatch();

  const HandleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="container">
        <div className="Products-title">
          <h1>
            Products <span>:</span>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {product.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <div
                  className="card bg-transparent text-white my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="img-div">
                    <img
                      src={product.Img}
                      className="card-img-top img-change"
                      alt=""
                    />
                  </div>
                  <div className="card-main-product">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-success">
                      {product.description}
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => HandleAdd(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
