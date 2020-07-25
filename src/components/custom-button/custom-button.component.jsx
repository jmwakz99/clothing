import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  SigninWithGoogle,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      SigninWithGoogle ? "sign-in-google" : ""
    }  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
