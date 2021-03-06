import './aside.css'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import {toggleBurgerAction} from "../../redux/redux";

const Aside = () => {
    const dispatch = useDispatch()
    const isBurgerActive = useSelector(state => state.isBurgerActive)
    return (
        <aside className={isBurgerActive ? 'aside active' : 'aside'}>

            <NavLink onClick={() => setTimeout(() => dispatch(toggleBurgerAction()), 300)} className={'menu-item'} to="/">Галерея</NavLink>
            <NavLink onClick={() => setTimeout(() => dispatch(toggleBurgerAction()), 300)} className={'menu-item'} to="/about">Обо мне</NavLink>
            <div className={'personal-info'}>
                <div className={'name-row'}>
                    <Image className={'avatar-img'} src="./avatar.jpg" alt="аватар" roundedCircle/>
                    <h3 className={'name'}>Vagrant</h3>
                </div>
                <a href={'mailto:quazacotl@gmail.com'} className={'mail'}>quazcotl@gmail.com</a>
            </div>

        </aside>
    );
};

export default Aside;