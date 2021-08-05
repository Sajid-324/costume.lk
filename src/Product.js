import "./Product.css";
import React from "react";
import { useStateValue } from "./StateProvider";
import Button from "@material-ui/core/Button";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //console.log("this is the basket >>> ", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="productTitle">{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <div>
        <img src={image} />
      </div>
      <div>
        <Button variant="contained" size="small" onClick={addToBasket}>
          Add to basket
        </Button>
      </div>
    </div>
  );
}

export default Product;
