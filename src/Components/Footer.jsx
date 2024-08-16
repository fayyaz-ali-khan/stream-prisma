import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong style={{ fontWeight: "bolder" }}>
          <span style={{ color: "#012970" }}>Stream Prisma</span>
        </strong>
        All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
