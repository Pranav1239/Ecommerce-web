import React from "react";
import "../styles/Cart.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { remove } from "../redux/CreateSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const HandleRemove = (productsid) => {
    dispatch(remove(productsid));
  };
  const products = useSelector((state) => state.cart);
  return (
    <>
      {products.map((products) => (
        <div className="container">
            <div className="card-cart">
                <div className="img-cart">
                  <img src={products.Img} alt="" />
                </div>
                <div className="h2-cart">
                  <h2>{products.name}</h2>
                </div>
                <div className="p-cart">
                    <p>{products.description}</p>
                </div>
                <div className="btn-cart">
                  <button
                  className="btn btn-danger"
                  onClick={() => HandleRemove(products.id)}
                  >Remove</button>
                </div>
            </div>
        </div>
      ))}
    </>
  );
};

// {products.Img}

// {products.name}

// {products.description}



export default CartPage;
