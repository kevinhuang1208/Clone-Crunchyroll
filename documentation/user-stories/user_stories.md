# User Stories

## Landing Page
* When navigating to the website, I should see signup page `/signup` with an option to click login for already existing users.

## Users (CR)
### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the lob-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.



### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button for either a studio demo profile or a viewer user profile to log me in and allow me access the site's functionality based off the user's permissions.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying the landing page.


## Anime (CRUD)

### Viewing all Anime
* I should be able to visit the home page `/` of the website which displays all the available anime on the website.
  * I should be able to continue to the home page as a guest user if I do not wish to log in
    * I should be able to view all the anime available
  * On hover over the anime tile, I should see the anime's title, description, avg rating, number of episodes, and number of seasons. I should also see a favorite button and a play button.

### Viewing a Specific Anime Page
* As a guest or logged in user, I should be able to click on an anime "tile" which takes me to a page which displays the anime's information `/anime/:animeId` including description, rating, display image, the ability to favorite the anime, reviews, and episodes
* I should see a episodes section with tiles for the episodes and below that, I should see a review section.
  * I should have the ability to click on an episode tile from the anime's page which will redirect me to another page to view the episode `/:animeId/:episodeId`
    * The ability to click on an anime's episodes should be disabled if I am viewing as a guest (not logged in)


### Creating an Anime Page

* As a logged in user with studio permission, an option to create an anime should be displayed
  * When clicking on the create anime option, I should be redirected to another page/modal `/anime/new` with a form to enter the anime details including the name, description, and picture
* When logged into a user without studio permission, the button to create an anime should not be displayed and I should not have access to the create an anime page/modal
* If I am the creator of the anime page, I should have the ability to edit the information for that anime along with having the option to delete it.

## Episodes(CRD)

### Posting Episode to the Anime Page

* Only when logged in as a user with producer permissions, I should have the ability to add episodes to my anime's page `/anime/:animeId/new`.
  * I should also have the ability to edit and delete the episodes on this page only if I am the producer that posted the anime. 

## Reviews (CRUD)

* I should have the ability to post a review for a certain anime only if I am not the poster of that anime `/anime/:animeId/review/new`.
  * When I visit an anime where I have a posted review, buttons displaying options to delete and edit the review should be available for my review only.
* I should be able to visit an anime and view all reviews for that pertaining anime. This should be displayed at the anime's page `/anime/:animeId`.
  * If I have a review for the anime, my review should be displayed at the top of the review list. 


## Favorites Section (CRD)
* I should be able to click on another user's name (from the reviews section or anywhere else) `/user/:userId`. 
  * If clicking on another user's name, I should be redirected to their user profile anime favorites section which will display all the anime the user has favorited as tiles (similar to the home page)
* When navigating to my own profile I should be shown my profile page which also includes my favorites list.
  * In the favorites list, I should be able to delete an item from my favorites list



