import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", background: "#303030" }}
    >
      <p style={{ textAlign: "center", width: "100%", color: "#C0C0C0" }}>
        © 2019 Digitech Solutions. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
