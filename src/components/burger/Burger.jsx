import './burger.css'
import {useDispatch, useSelector} from "react-redux";

const Burger = () => {
    const dispatch = useDispatch()
    const isBurgerActive = useSelector(state => state.isBurgerActive)

    const toggleBurger = () => {
        dispatch({type: 'SWITCH_BURGER'})
    }

    return (
        <div onClick={toggleBurger} className={isBurgerActive ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic"}>
            <div className="hamburger-box">
                <div className="hamburger-inner"/>
            </div>
        </div>
    );
};

export default Burger;