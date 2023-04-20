import { Container, Navbar, Nav, Form, FormControl, Button } from "solid-bootstrap";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

function Navigation({onPressSearch}) {

  const [username, setUserName] = createSignal('');

  const sendData = () => {
    typeof onPressSearch === "function" && onPressSearch(username());
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid class="px-5">
          <Navbar.Brand href="#">Github Viewer</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              class="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <A href="/" end class="btn btn-primary me-2" activeClass="btn-success">Home</A>
              <A href="/favrepos" class="btn btn-primary me-2" activeClass="btn-success">Saved ~ 5</A>
            </Nav>
            <Form class="d-flex">
              <FormControl
                type="search"
                placeholder="Search usernames..."
                class="mx-2"
                aria-label="Search"
                value={username()}
                onInput={(e) => setUserName(e.target.value)}
              />
              <Button variant="outline-success mx-2" onClick={sendData}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default Navigation;
