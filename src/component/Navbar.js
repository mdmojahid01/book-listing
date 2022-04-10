// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div>
            <NavLink className="navbar-brand" to="/">
              Book Listing App
            </NavLink>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse style={{ flexGrow: "0" }} id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100%" }}
              navbarScroll
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addbook">
                    Add-book
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/library">
                    Library
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/view-contact">
                    View Contact
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}
export default NavBar;
