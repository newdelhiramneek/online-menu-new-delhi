import React from "react";

const Layout = ({ children }) => (
  <div className="app-root">
    <div className="app-background" />
    <div className="app-shell">
      <div className="app-surface">{children}</div>
    </div>
  </div>
);

export default Layout;
