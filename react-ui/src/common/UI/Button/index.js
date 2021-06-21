import React from "react";
import classNames from "classnames";

import styles from "./button.module.css";

const Button = ({ bgImage, children, className, ...props }) => {
  return (
    <button
      className={classNames(styles.base, styles[bgImage], className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
