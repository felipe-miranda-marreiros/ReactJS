import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

//Permite o uso de Default Props se caso não houver atributo no JSX
Spinner.defaultProps = {
  message: "Loading",
};
export default Spinner;
