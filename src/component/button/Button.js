import React from "react";
import "./button.css";

const Button = (props) => {
  let variantClassNames = { fill: "button-style", ghost: "button-style-ghost" };
  // console.log(
  //   variantClassNames,
  //   props.variant,
  //   variantClassNames[props.variant]
  // );
  return (
    <>
      <button
        // type={props.type}
        className={
          `common-button-style ${variantClassNames[props.variant]}`

          // props.variant === "fill" ? "button-style" : "button-style-ghost"
        }
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </>
  );
};

{
  /* <button type="button" className="button">
        Login
      </button> */
}

Button.defaultProps = {
  type: "submit",
  variant: "fill",
  className: "common-button-style",
};
export default Button;
