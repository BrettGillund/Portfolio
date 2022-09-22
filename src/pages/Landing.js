const landingPhoto = require('../images/header-image.png')

function Header() {
    return(
    <div className="landing-div">
            <h1 id="landing-header">Brett Gillund</h1>
            <h1 id="landing-subheader">Fullstack Developer</h1>
            <div id="landing-span">
                <span>Knowledge |</span>
                <span> Wisdom |</span>
                <span> Expertise</span>
            </div>
            {/* <p id="landing-p">Please use any of the options above to navigate around the application</p> */}
        <img src={landingPhoto} id="landing-img" alt="landing-img" />
    </div>
    )
}
export default Header;