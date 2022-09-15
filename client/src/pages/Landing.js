const landingPhoto = require('../images/header-image.png')

function Header() {
    return(
    <div class="landing-div">
        <h1 id="landing-header" class="landing-block">Brett Gillund</h1>
        <h2 id="landing-subheader" class="landing-block">Fullstack Developer</h2>
        <div>
            <span>Knowledge |</span>
            <span> Wisdom |</span>
            <span> Expertise</span>
        </div>
        <p>Coding and design are my passions.</p>
        <img src={landingPhoto} id="landing-img" alt="landing-img"></img>
    </div>
    )
}
export default Header;