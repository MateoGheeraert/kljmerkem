import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
