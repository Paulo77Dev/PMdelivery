import './styles.css';
import {ReactComponent as Logo} from './ptlogo.svg'
import { Link } from 'react-router-dom';

function Navbar(){
    return (

        <nav className="main-navbar">

            <Logo />
            <Link to="/"className="logo-text">PM Delivery</Link>

        </nav>

    )


}

export default Navbar;