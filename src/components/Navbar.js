import Logo from "./../event-logo.png"
import "./../components/Navbar.css"
import {Link} from "react-router-dom"

function NavBar({}) {
    return (
        <div className="navigation">
            <img src={Logo} className="logo"/>
            <div className="authentication"> 
                {/* <a className="authentication-link">Log in</a> */}
                <Link className="authentication-link" to="/Login">Log in/Sign up</Link>
            </div>
            
        </div>
    );
}

export {NavBar};