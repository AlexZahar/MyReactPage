import React from "react";

import "./Footer.css";


const footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear(); 
  
  return (
    <div className="footer_wrapper">
      <div className="copyright_containter"> <p className="copyright_text">Copyright &copy; Alexandru Zahar {currentYear} </p> </div>
    </div>
  );
};

export default footer;
