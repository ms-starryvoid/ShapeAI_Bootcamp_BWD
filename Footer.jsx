import React from "react";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <p>copy right @ {year}</p>
    </footer>
  );
}
export default Footer;
