import React from "react";
import "./componentStyles.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout-wrapper">
      <div className="Layout-header">
        <div className="Layout-logo">Logo</div>
        <div className="Layout-login">
          <div>登入</div>
        </div>
      </div>
      <div className="Layout-container">{children}</div>
      <div className="Layout-footer">Desserts Wonderland</div>
    </div>
  );
};

export default Layout;
