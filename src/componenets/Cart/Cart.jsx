import React from "react";
import { useReducer, useEffect } from "react";
import "./cart-style.scss";
import ps from "../../assets/images/ps.jpg";
import Button from "../button/Button";
import IconButton from "../IconButton/IconButton";
import { clsx } from "clsx";
import { cartActions, cartReducer } from "./cart.reducer";
const Cart = ({ open, handleClose }) => {
  const [products, dispatch] = useReducer(cartReducer, [
    {
      id: 1,
      image: ps,
      name: " کالای یک ",
      price: 22_000_000,
      count: 1,
    },
    {
      id: 2,
      image: ps,
      name: "کالای دو",
      price: 22_000_000,
      count: 2,
    },
  ]);
  const totalcount = products.reduce((prev, p) => prev + p.count, 0);
  const totalprice = products.reduce(
    (total, p) => total + p.price * p.count,
    0
  );
  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [handleClose]);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={clsx("Cart", !open && "cart__hidden")}
    >
      <header>
        <p>تعداد کالا: {totalcount}</p>
        <a href="/cart">مشاهده ی سبد خرید</a>
      </header>
      <div>
        {products.length ? (
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                <div>
                  <img src={p.image} alt="" />
                </div>
                <div>{p.name}</div>
                <div className="Cart___count">
                  <IconButton
                    onClick={() =>
                      dispatch({
                        type: cartActions.add,
                        payload: p,
                      })
                    }
                  >
                    {"+"}
                  </IconButton>
                  {p.count}
                  <IconButton
                    onClick={() =>
                      dispatch({
                        type: cartActions.decrease,
                        payload: p,
                      })
                    }
                  >
                    {"-"}
                  </IconButton>
                </div>
                <div>{p.price * p.count}تومان</div>
              </li>
            ))}
          </ul>
        ) : (
          <h2>سبد کالای شما خالی است</h2>
        )}
      </div>
      <footer>
        <p>{"مبلغ قایل پرداخت"}</p>
        <p>{totalprice}تومان</p>

        <Button>{"ثبت سفارش"}</Button>
      </footer>
    </div>
  );
};

export default Cart;
