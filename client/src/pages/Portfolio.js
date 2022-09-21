const gamrPhoto = require('../images/Gamr.jpg')
const offTheShelf = require('../images/off_the_shelf.jpg')
const drinkFinder = require('../images/Drink-finder.jpg')

function Portfolio() {
    return(
        <div>

            <div>
                <h1 id="portfolio-header">Below you will see a compliation of my most recent projects.</h1>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-column">
                    <h1 class="portfolio-name">GamR</h1>
                    <div >
                        <a href="https://gamr-applicaiton.herokuapp.com/" target="_blank" rel="noreferrer" class="portfolio-links">- Deployed Application: Gamr</a>
                        <a href="https://github.com/BrettGillund/Gamr" target="_blank" rel="noreferrer" class="portfolio-links">- Github: Gamr</a>
                    </div>
                </div>
                <p class="portfolio-description"> GamR is an application made for gamers, by gamers. Upon launching the application the user is presented with a landing page that walks the user through how to use the application and all the features. A new user is able to register or login in the top right corner. Once the user is logged in they are able to navigate to the sidebar on the left which includes a Profile page and a Users page. Profile allows a user to view and edit their information, while visiting the Users page allows the logged in user to browse other GamR's profile's and connect with people with similar interests!</p>
                <img src={gamrPhoto} alt="" class="portfolio-image" />
            </div>

            <div class="portfolio-item">
                <div class="portfolio-column">
                    <h1 class="portfolio-name">Off The Shelf</h1>
                    <div >
                        <a href="https://off-the-shelf-project-2.herokuapp.com/" target="_blank" rel="noreferrer" class="portfolio-links">Deployed Application: Off The Shelf</a>
                        <a href="https://github.com/jbuck123/Project-2" target="_blank" rel="noreferrer" class="portfolio-links">Github: Off The Shelf</a>
                    </div>
                </div>
                <p class="portfolio-description">Off the shelf is an application that allows a user to create a profile and save their library collection to their profile. There they can manage their book collection, and utilize their list to pick which book they would like to read next.</p>
                <img src={offTheShelf} alt="" class="portfolio-image" />
            </div>

            <div class="portfolio-item">
                <div class="portfolio-column">
                    <h1 class="portfolio-name">Drink Finder</h1>
                    <div >
                        <a href="https://b-alt-del.github.io/Project-One/" target="_blank" rel="noreferrer" class="portfolio-links">Deployed Application: Drink Finder</a>
                        <a href="https://github.com/B-alt-del/Project-One" target="_blank" rel="noreferrer" class="portfolio-links">Github: Drink Finder</a>
                    </div>
                </div>
                <p class="portfolio-description"> Drink Finder is an application that allows the user to create cocktails or mixed drinks based on the ingredients they select. The user will be able to look at whatever alcohol they have on hand or plan on purchasing, select that alcohol in the app, and generate a list of recipes for cocktails based on their selection. The app will also feature a map function where the user can search for liquor stores to find the nearest stores near them to purchase any ingredients they need.</p>
                <img src={drinkFinder} alt="" class="portfolio-image" />
            </div>

        </div>
    )
}

export default Portfolio;