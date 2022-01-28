import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand nav_logo">
            Flossy Flippers
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto navbar_items">
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/flossy.flippers/"
                  className="nav-link"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="#streetwear" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#sellers" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
{
  /* <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Flossy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Questions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */
}
