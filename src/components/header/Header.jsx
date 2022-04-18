import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import Burger from "../burger/Burger";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav>
                    <Burger/>
                    <NavLink className={'nav-item'} to="/">Галерея</NavLink>
                    <NavLink className={'nav-item'} to="/about">Обо мне</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;