import React from "react";

// node modules
import PropTypes from "prop-types";

// Primary button
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ""
  }) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          className={"btn btn-primary " + classes}
        >
          {label}
          {icon && (
            <span className="material-symbols-rounded ml-2" aria-hidden="true">
              {icon}
            </span>
          )}
        </a>
      );
    } else {
      return (
        <button className={"btn btn-primary " + classes}>
          {label}
          {icon && (
            <span className="material-symbols-rounded ml-2" aria-hidden="true">
              {icon}
            </span>
          )}
        </button>
      );
    }
  };

// Outline button
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ""
  }) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          className={"btn btn-outline " + classes}
        >
          {label}
          {icon && (
            <span className="material-symbols-rounded ml-2" aria-hidden="true">
              {icon}
            </span>
          )}
        </a>
      );
    } else {
      return (
        <button className={"btn btn-outline " + classes}>
          {label}
          {icon && (
            <span className="material-symbols-rounded ml-2" aria-hidden="true">
              {icon}
            </span>
          )}
        </button>
      );
    }
  };

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}

export { ButtonPrimary, ButtonOutline } 