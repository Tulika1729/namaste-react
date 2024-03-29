import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";


const Header = () => {
    const[loginButton, setLoginButton] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className= "logo"
                    src = {LOGO_URL}
                />
            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-button"
                        onClick={()=>{
                            loginButton === "Login" ?
                            setLoginButton("Logout") : setLoginButton("Login")
                        }}
                    >
                        {loginButton}

                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header