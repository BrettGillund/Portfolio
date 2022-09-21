const selfi = require('../images/Selfi.jpg')
const skiing = require('../images/Skiing.jpg')
const sophie = require('../images/Sophie.jpg')
const sophieDirty = require('../images/Sophie_Dirty.jpg')

function About() {
    return(
        <div>
            <div class="about-section">
                <img src={selfi} alt="selfi" class="about-image"/>
                <div class="about-description">
                    <h3>Hello!</h3>
                    <p>
                    Hello, my name is Brett Gillund, and I am a highly motivated full stack developer with a background in corporate account management, customer service, project management, leadership, and education. I have a passion for creating robust applications from initial ideation through production and believe that promoting/ contributing to collaboration and mutual understanding are some of my greatest strengths. Taking an idea and bringing that design to life through the creative and technical art of coding gives me a significant sense of satisfaction.
                    </p>
                    <br />
                    <h3>TECHNICAL SKILLS</h3>
                    <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap, Materialize.</p>
                </div>
                <img src={skiing} alt="skiing" class="about-image"/>
            </div>
            <div class="about-section">
                <img src={sophie} alt="sophie" class="about-image"/>
                <div class="about-description">
                    <h3>History</h3>
                    <p>
                        My professional career began upon graduating from the University of North Dakota in the spring of 2019 with a Bachelor of Business Administration Degree with a focus in entrepreneurship and economics. Shortly after graduating, I gained professional business experience through launching my own business venture in the medical device sector, and working in corporate account management for an S&P 400 traded company. After a number of years in this industry, I found that my true passion was in the highly creative and technical field of coding. After doing a fair amount of individual study in HTML, CSS, and basic JavaScript I decided to enroll in a Full Stack Coding Bootcamp through the University of Minnesota. It was during the course of this program that I became fully enthralled in the world of coding. 
                    </p>
                    <br />
                    <p>
                        Whether it was spending hours at my “battle station” grinding away in VS Code, watching tutorials on concepts I have been struggling with, listening to podcasts on the most effective and efficient ways to build full stack applications, or having conversations with my peers on new projects we had taken on, I have found myself fully integrated into this new technology based culture. 
                    </p>
                    <br />
                    <p>
                        Now, I am seeking a professional Front End Developer position to further hone my technical coding skill set, and dive deeper into this field.
                    </p>
                </div>

                <img src={sophieDirty} alt="sophie_dirty" class="about-image"/>
            </div>
        </div>
    )
}

export default About;