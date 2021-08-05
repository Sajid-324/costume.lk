import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/**Home work*/}
              Subtotal ({basket.length} items) :<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" Rs. "}
      />
      <Button
        variant="outlined"
        onClick={(e) => history.push("/Payment")}
      >
        Proceed to checkout
      </Button>
    </div>
  );
}

export default Subtotal;
//onClick={history.push("/payment")}
