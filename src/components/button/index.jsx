import React from "react";

import "./style.css";

function Button({ title, description, href, target = "_blank" }) {
  return (
    <a className="link-button" href={href} target={target}>
      <strong>{title}</strong>

      <p>{description}</p>
    </a>
  );
}

export default Button;
