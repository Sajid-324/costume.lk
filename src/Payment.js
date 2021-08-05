import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { Card } from "@material-ui/core";
import { db } from "./firebase";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in a currenies subunit
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>> ", clientSecret);

  const handleSubmit = async (event) => {
    //do all the fancy stripe stuff..
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          Card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    //do all the fancy stripe stuff..
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div>
      <div className="payment__container">
        <h3>
          Checkout(
          <Link class="itemNum" to="/Checkout">
            {basket?.length} items
          </Link>
          )
        </h3>
        {/*Payment section - Delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h5>Delivery address</h5>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>345/3 Enderamulla</p>
            <p>Wattala, 11300</p>
          </div>
        </div>

        {/*Payment section - Review items*/}
        <div className="payment__section1 payment__section">
          <div className="payment__title">
            <h5>Review items and delivery</h5>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                className="hideBtn"
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                hideButton={true}
              />
            ))}
          </div>
        </div>

        {/*Payment section - Payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h5>Payment Method</h5>
          </div>
          <div className="payment__details">
            {/**Stripe magic will goes here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="price__container">
                <CurrencyFormat
                  renderText={(value) => <h5>Order Total: {value}</h5>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs. "}
                />
              </div>
              <div class="paymentBtn">
                <Button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </Button>
              </div>
              {/**Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
