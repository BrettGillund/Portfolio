// import { NavLink } from "react-router-dom"; // remember to use this when creating the nav bar links to the various routes.

function Header(){
    return(
        <header>
            <nav id="nav">
                    <a href="/" className="nav-component">HOME</a>
                    <a href="/portfolio" className="nav-component">PORTFOLIO</a>
                    <a href="/about" className="nav-component">ABOUT</a>
                    <a href="/contact" className="nav-component">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header;

// MAKE THE CURRENT SELECTION UNDERLINED. 
// ADD NICE CSS AND ANIMATIONS WHERE A LINE GOES ACROSS THE BOTTOM OF EACH CATEGORY
// MAKE EACH NAV LINK A ROUTE