import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoNewDark.png";
import { FaHamburger } from "react-icons/fa";

import { useSelector } from "react-redux";
import { isAuth } from "../utility/auth";

function NavbarWebsite() {
  const user = useSelector((state) => state.user);
  return (
    <Navbar
      className="navbar_home navbar-scroll d-flex align-items-center"
      expand="lg"
      data-mdb-navbar-init
    >
      <Container fluid>
        <Link to="/" style={{ width: "85px" }}>
          <Navbar.Brand>
            <img
              style={{ width: "100%" }}
              src={logo}
              alt="Stream Prisma Logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarExample01" className="ps-0">
          <FaHamburger style={{ fontSize: "32px" }} />
        </Navbar.Toggle>

        <Navbar.Collapse
          id="navbarExample01"
          className="justify-content-lg-end align-items-center"
        >
          <Nav className="mb-2 gap-3 mb-lg-0">
            <Link to="/" className="pt-2 nav-link">
              Home
            </Link>
            <Link to="/about" className="pt-2 nav-link">
              About
            </Link>
            <Link to="/pricing" className="pt-2 nav-link">
              Pricing
            </Link>
            <Link to="/contactus" className="pt-2 nav-link">
              Contact
            </Link>
            <Link to="/howitworks" className="pt-2 nav-link">
              How It Works
            </Link>

            {/** Assuming you have a way to check if the user is authenticated in React */}
            {isAuth() ? ( // Replace `true` with your actual authentication check
              <Link to="/dashboard" className="pt-2 nav-link">
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className="pt-2 nav-link">
                Login
              </Link>
            )}

            <Link to="/register">
              <Button className="btn btn-new2">Try free</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWebsite;
