import { Container, Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand><NavLink to='/' className='link-underline-off'>Home Page</NavLink></Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to='/users' className='link-underline-off mx-3 my-3'>
                            Users
                        </NavLink>

                        <NavLink to='/groups' className='link-underline-off mx-3 my-3'>
                            Groups
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;