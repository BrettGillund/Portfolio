const selfi = require('../images/Selfi.jpg')
const skiing = require('../images/Skiing.jpg')
const sophie = require('../images/Sophie.jpg')
const sophieDirty = require('../images/Sophie_Dirty.jpg')

function About() {
    return(
        <div>
            <h1>About Page!</h1>
            <div class="about-section">
                <img src={selfi} alt="selfi" class="about-image"/>
                <p class="about-description">Information about me</p>
                <img src={skiing} alt="skiing" class="about-image"/>
            </div>
            <div class="about-section">
                <img src={sophie} alt="sophie" class="about-image"/>
                <p class="about-description">Information about Sophie</p>
                <img src={sophieDirty} alt="sophie_dirty" class="about-image"/>
            </div>
        </div>
    )
}

export default About;