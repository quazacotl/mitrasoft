import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import Burger from "../burger/Burger";
import {NavLink} from "react-router-dom";
import {toggleBurgerAction} from "../../redux/redux";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const isBurgerActive = useSelector(state => state.isBurgerActive)
    return (
        <Navbar bg="info" expand="lg">
            <Container>
                <Nav>
                    <Burger/>
                    <NavLink
                        onClick={() => isBurgerActive ? dispatch(toggleBurgerAction()) : null}
                        className={'nav-item'}
                        to="/"
                    >Галерея
                    </NavLink>
                    <NavLink
                        onClick={() => isBurgerActive ? dispatch(toggleBurgerAction()) : null}
                        className={'nav-item'}
                        to="/about"
                    >Обо мне
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;