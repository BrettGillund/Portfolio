const testPhoto = require('../images/BG.jpg')

function Portfolio() {
    return(
        <div>

            <div>
                <h1 id="portfolio-header">Below you will see a compliation of my most recent projects.</h1>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-column">
                    <h1 class="portfolio-name">Name</h1>
                    <div class="portfolio-links">
                        <a href="/">Deployed Application</a>
                        <a href="/">Github</a>
                    </div>
                </div>
                <p class="portfolio-description"> This will be a section composed of the description of a project.</p>
                <img src={testPhoto} alt="" class="portfolio-image" />
            </div>

        </div>
    )
}

export default Portfolio;