# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Users

* A not logged in user can sign in using the route:
    * `POST /api/user/signin`
    ```py
    {
        'credential': test
        'password': password
    }
    ```
    * Response
    ```py
    {
        'success!'
    }
    ```
* A not logged in user can sign up using the route:
    * `POST /api/user/signup`
    ```py
    {
        'username': testing
        'password': password
        'email': testing@gmail.com
    }
    ```
     * Response
    ```py
    {
        'username': testing
        'password': password
        'email': testing@gmail.com
        'id': 1
    }
    ```

  * A signed in user should be able to delete their profile using the route:
    * `DELETE /api/user/:userId`
     * Response
    ```py
    {
        f'user {id} successfully deleted
    }
    ```

  * A signed in user should be able to edit their profile details using the route:
    * `PUT /api/user/:userId`
     * Body
     ```py
    {
        'username': newUsername
        'email': newEmail@gmail.com
        'password': password
    }
     ```
     * Successful Response
     ```py
     {
        'username': newUsername
        'password': password
        'email': newEmail@gmail.com
        'id': 1
     }
    ```
     * Unsuccessful Response
     ```py
     {
        'errors':{
            'username': 'username is not available'
            'email': 'email is not available'
        }
     }
    ```

  * As a not signed in or signed in user I can get a users details with the route:
    *`GET /api/user/:userId`
     * Successful Response
    ```py
    {
        'username': username1
        'reviews': [
            {
                'id': 1
                'user_id': 1
                'rating': 5
                'review': 'this was a great show'
            }...
        ]
        'favorites':[
            {
                'id': 1
                'showname' : 'king of the hill'
                'episode_count' : 500
                'description' : 'rednecks'
                'avg_rating' : 5
                'num_reviews' : 100
            }...
        ]
    }
    ```
## Anime

* A not logged in or logged in user can see all of the anime at the route:
 *`GET /api/anime`
  * Successful Response
  ```py
  {
    'anime':[
        {
                'id': 1
                'showname' : 'king of the hill'
                'episode_count' : 500
                'description' : 'rednecks'
                'avg_rating' : 5
                'num_reviews' : 100
        },
        {
                'id': 2
                'showname' : 'spongebob'
                'episode_count' : 1000
                'description' : 'sponge'
                'avg_rating' : 4
                'num_reviews' : 1000
        }...
    ]
  }
  ```
  * A logged in STUDIO user can post an anime at the route:
   *`POST /api/anime/new`
    *Body
    ```py
    {
        'showname': 'rick and morty'
        'description': 'old man and young child'
        'release_date': 'mm-dd-yyyy'
        'cover_picture': 'image.url'
    }
    ```
    * Successful Response
    ```py
    {
        'showname': 'rick and morty'
        'description': 'old man and young child'
        'release_date': 'mm-dd-yyyy'
        'cover_picture': 'image.url'
        'user_id': 1
    }
    ```
    * A logged in STUDIO user should be able to delete their own anime at the route
     * `DELETE /api/anime/:animeId`
      * Successful Response
      ```py
      'Success!'
      ```
    * A logged in or not logged in user should be able to view an animes details at the route
     * `GET /api/anime/:animeId`
      * Successful Response
        ```py
        {
            'id': 1
            'showname' : 'king of the hill'
            'episode_count' : 500
            'description' : 'rednecks'
            'avg_rating' : 5
            'num_reviews' : 100
            'reviews':[
                {
                    'id': 1
                    'user_id': 1
                    'rating': 5
                    'review': 'this was a great show'
                }...
            ]
            'episodes':[
                {
                    'episode_num': 1
                    'anime_id': 1
                    'description': 'naruto fights orochimaru'
                    'video_link': 'amazonawsvideo.url'
                    'release_date': 'mm-dd-yyyy'
                }...
            ]
        }
        ```
    * A logged in STUDIO user should be able to change an anime's details that they have posted at the route
     * `PUT /api/anime/:animeId`
      *Body
      ```py
      {
        'showname' : 'king of the hill revamped'
        'description' : 'reddernecks'
      }
      ```
      * Successful Response
      ```py
         {
            'id': 1
            'showname' : 'king of the hill revamped'
            'episode_count' : 500
            'description' : 'reddernecks'
            'avg_rating' : 5
            'num_reviews' : 100
            'reviews':[
                {
                    'id': 1
                    'user_id': 1
                    'rating': 5
                    'review': 'this was a great show'
                }...
            ]
            'episodes':[
                {
                    'episode_num': 1
                    'anime_id': 1
                    'description': 'naruto fights orochimaru'
                    'video_link': 'amazonawsvideo.url'
                    'release_date': 'mm-dd-yyyy'
                }...
            ]
        }
      ```
## Episodes
 * A logged in user can get the details of an episode at the route
  * `GET /api/anime/:animeId/:episodeId`
   * Successful Response
   ```py
    {
        'episode_num': 1
        'anime_id': 1
        'description': 'naruto fights orochimaru'
        'video_link': 'amazonawsvideo.url'
        'release_date': 'mm-dd-yyyy'
    }
   ```

 * A logged in STUDIO user can post an episode to an anime they posted at the route
  * `POST /api/anime/:animeId/new`
   * Body
   ```py
    {
        'anime_id': 1
        'episode_num': 1
        'description': 'sasuke fights orochimaru'
        'video_link': 'amazonawsvideo.url'
        'release_date': 'mm-dd-yyyy'
    }
   ```
   * Response
   ```py
   {
        'id': 1
        'episode_num': 1
        'anime_id': 1
        'description': 'sasuke fights orochimaru'
        'video_link': 'amazonawsvideo.url'
        'release_date': 'mm-dd-yyyy'
    }
    ```
## Reviews
 * A logged in user can add to their favorites at the route:
  *

## FauxLikes

* A logged in user can FauxLike or FauxUnlike a FauxTweet or FauxComment with visible confirmation without causing a refresh/redirect.

  * `POST /api/fauxtweets/:id/likes`
  * `POST /api/fauxcomments/:id/likes`
  * `DELETE /api/fauxtweets/:id/likes`
  * `DELETE /api/fauxcomments/:id/likes`
