import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Footer from "./Footer";
import SliderCheckout from "./SliderCheckout";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div class="checkout__container">
        <div className="checkout__left">
          <div class="">
            <SliderCheckout />
          </div>
          <div>
            <p className="usrName">Hello, {user?.email}</p>
            <p className="checkout__title">Your Shopping Basket</p>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
