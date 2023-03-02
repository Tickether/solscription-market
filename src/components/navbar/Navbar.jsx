import './navbar.css';
import { Web3Button } from "@web3modal/react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';


function Navbar() {

    
  
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div>
                    <img src={Logo} className="logo" />
                </div>
                <Link to=''>
                    <span className="">Subscriptions</span>
                </Link>
                <Link to=''>
                    <span className="">Subscribed</span>
                </Link>
                <Web3Button />
            </div>
        </div>
  );
}

export default Navbar;
