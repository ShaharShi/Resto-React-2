import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { ConfigurationContext } from "App";

export default function ConfigurationPage() {
  const [configState, configDispatch] = useContext(ConfigurationContext);

  function onColorChange(color: string): void {
    configDispatch({type: 'CHANGE_STAR_COLOR', payload : color });
  }

  const configButtonsColor = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "orange",
    "salmon",
  ];

  return (
    <div>
      <h1 className="jumbotron"> Configuration </h1>
      <div>
        {configButtonsColor.map((color) => {
          return <ButtonWrapper color={color} />;
        })}
      </div>
    </div>
  );

  function ButtonWrapper(props: { color: string }) {
    const { color } = props;
    return (
      <Button
        onClick={() => {
          onColorChange(color);
        }}
        variant="primary"
        size="lg"
        active
      >
        {color}
      </Button>
    );
  }
}
