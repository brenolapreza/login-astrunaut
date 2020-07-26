import React from 'react';
import './style.scss';
import Logo from '../../assets/images/logo01.svg';


const Nav = () => {
    return (
        <nav>
            <ul>
                <div className="nav-primary">
                    <li><a href="#"> <img src={Logo} alt="Logo" /></a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </div>
                <div className="nav-secundary">
                    <li><a href="#">Entrar</a></li>
                    <li><a href="#">Registrar</a></li>
                </div>
            </ul>
        </nav>
    )
}
export default Nav;