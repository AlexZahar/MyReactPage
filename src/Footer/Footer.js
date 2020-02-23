import React from "react";

import "./Footer.css";

const footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <div className="footer_wrapper">
      <div className="copyright_containter">
        <p className="copyright_text">
          Alexandru Zahar &#124; {currentYear} &#124; Personal Portfolio
        </p>
      </div>
    </div>
  );
};

export default footer;
