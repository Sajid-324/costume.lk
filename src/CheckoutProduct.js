import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const classes = useStyles();

  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__image" src={image} />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <Button
            className={classes.margin}
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
            onClick={removeFromBasket}
          >
            <DeleteIcon fontSize="small" /> Remove from Basket
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
