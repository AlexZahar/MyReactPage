import React from "react";

import "./Footer.scss";

const footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <div className="footer_wrapper">
      <div className="copyright_containter">
        <p className="copyright_text">
          Alexandru Zahar <span>&#124;</span> {currentYear} <span>&#124;</span>{" "}
          Portfolio
        </p>
      </div>
    </div>
  );
};

export default footer;
