import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand>
          <NavLink style={{ color: "black" }} to="/">
            All Tasks
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
              <NavLink style={{ color: "black" }} to="/task1">
                Task 1
              </NavLink>
            </Nav.Link>
            <Nav.Link style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
              <NavLink style={{ color: "black" }} to="/task2">
                Task 2
              </NavLink>
            </Nav.Link>
            <Nav.Link style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
              <NavLink style={{ color: "black" }} to="/task3">
                Task 3
              </NavLink>
            </Nav.Link>
            <Nav.Link style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
              <NavLink style={{ color: "black" }} to="/task4">
                Task 4
              </NavLink>
            </Nav.Link>

            <Nav.Link style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
              <NavLink style={{ color: "black" }} to="/task5">
                Task 5
              </NavLink>
            </Nav.Link>

            <Nav.Link style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
              <NavLink style={{ color: "black" }} to="/task6">
                Task 6
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
