import './navbar.css';
import { Web3Button } from "@web3modal/react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/solscription_logo_white_text.svg';


function Navbar() {

    
  
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div>
                    <img src={Logo} className="logo" />
                </div>
                <div className="navbarMenu">
                <Link to=''>
                    <span className="navbarSpan">Subscriptions</span>
                </Link>
                <Link to=''>
                    <span className="navbarSpan">Subscribed</span>
                </Link>
                </div>
                <div><Web3Button /></div>
            </div>
        </div>
  );
}

export default Navbar;
