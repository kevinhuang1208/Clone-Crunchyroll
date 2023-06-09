# PhillyRoll

This is a full-stack project reflecting what we have learned over the course of the program. PhillyRoll (https://phillyroll.onrender.com/), tasked to clone CrunchyRoll (https://www.crunchyroll.com/), is a project that encorporates the backend (databases, servers, routes) as well as the frontend (user/client side). Various technologies were used to help us achieve the site that it is today (listed below).

## Technologies

Technologies used were Javascript, REACT, Redux, Amazon Web Services, Python, Flask, SQLAlchemy ,PostgreSQL.

## Note
Demo User Login and Demo Studio Login serve different purposes
 * Demo Studio Login provides full access along with posting an anime and posting episodes to your anime
 * Demo Login does NOT have access to posting videos/anime and has view only permissions. 

## Home Page View
![readme-example-1](https://cdn.discordapp.com/attachments/1113213089702228038/1116850373982949407/snip-anime-page.PNG)

## Launching the App Locally

1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
7. Open a new terminal while keeping the terminal running `flask` running.

8. In a NEW terminal, `cd` into `react-app` directory and run `npm install` to install all your dependencies before starting up the application. 

9. Run `npm start` and it will open up your browser to http://localhost:3000

10. Test our features!


## Live Site

We also have a live site for you to test our features at https://phillyroll.onrender.com/



## Contributors:
* Steven (Taylor) Cornwall
   * Github: https://github.com/taylorcornwall766
   * LinkedIn: https://www.linkedin.com/in/steven-cornwall-b4551b20b/

* Taylor Lim
   * GitHub: https://github.com/tayjlim
   * Linkdin: https://www.linkedin.com/in/tayjlim0592/

* Danish Prasla
   * GitHub: https://github.com/danishprasla
   * Linkdin: https://www.linkedin.com/in/danish-prasla-819a7199/

* Kevin Huang
   * GitHub: https://github.com/kevinhuang1208
   * Linkdin: https://www.linkedin.com/in/kevin-huang-a53139186/