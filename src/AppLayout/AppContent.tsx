import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

function AppContent({ children }: { children: ReactElement }) {
  return (
    <div>
      <Header />
      <div style={{ minHeight: 400, background: "#ececec" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default AppContent;
