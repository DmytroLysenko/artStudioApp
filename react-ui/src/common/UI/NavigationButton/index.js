import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./navigationButton.module.css";

function NavigationButton({ children, to, className, ...props }) {
  return (
    <Link to={to} className={classNames(styles.base, className)} {...props}>
      {children}
    </Link>
  );
}

NavigationButton.protoTypes = {
  to: PropTypes.string.isRequired,
};

export default NavigationButton;
