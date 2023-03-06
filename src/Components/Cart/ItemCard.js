import React from "react";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";

function CardItem(props) {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <Card className="card p-0 overflow-hidden h-100 shadow">
        <Card.Img src={props.img} className="card-img-top img-fluid" />
        <Card.Body className="text-center">
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>${props.price}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to cart
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
