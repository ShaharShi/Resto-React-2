import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "components/ui-components/rating";

export interface IMeal {
  name: string;
  description: string;
  image: string;
  action: Function;
  actionTitle: string;
  cls: string;
  rating: number;
}
export default function Meal(props: IMeal) {
  const { action } = props;

  function onAction() {
    const { name, image, description, rating } = props;
    action({ name, image, description, rating });
  }
  return (
    <Card className="col-lg-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant={props.cls || "primary"} onClick={onAction}>
          {props.actionTitle}
        </Button>
        <Rating stars={props.rating} />
      </Card.Body>
    </Card>
  );
}
