# Vibes Planning

## Brief

This project will be a social "inspiration" website. Similar to Facebook but "only good vibes" are allowed. Clients will be able to post their own "good vibes" along with viewing inspirational quotes from famous people.

## Bronze, Silver, and Gold

### Requirements all

- Node, Express, and Mongoose API with at least 2 non-user models
- CRUD throughout the app
- Both front and back share a git repo
- React leverages API
- React Router to handle multiple views
- Restful routing
- Create a component library using Storybook, which should include at least five reusable components, which are implemented in project
- Authenticate requests to Express back end
- Both front and back deployed
- Planning docs
- README is well documented

### Bronze: minimum viable product

- Nav bar with Home/Vibing, Inspiration, Sign Up on all pages
- React Router takes user to routes
- Model for vibe (user String, password String)
- Model for sign up (user String, password String)
- Model for inspiration (name String, quote String)
- React front end contacts the JSON API on page load
- API responds with list of vibes
- Front end displays vibes and a vibe post/create area
- User can click button to post a vibe
- User can click on vibes to CRUD
- User can sign up for an account, which generates an authentication token
- API responds on completion of CRUD operations
- Website displays well on a 768x1024 screen and larger

### Silver: looks and works better

- Model for vibe (post String, comments Array of Strings)
- User can click on vibes to CRUD, including reading comments for that vibe, update and deleting vibes or comments, etc.
- API responds on completion of CRUD operations, and front end displays created comment, updated or deleted post or comment
- Users name shows with comment
- Website displays well on small phones
- CRUD for comments
- 10 vibes followed by either click for more or automatically loads
- Home page is a login page if the user is not logged in
- Users name shows up with comment
- Model for vibe (userID String or Number, post String, comments Array of Strings)
- Model for logging in (userName, email String, password String)
- Model for signing up (userName, email String, password String)

### Gold: bells and whistles

- User can add an image
- User can respond to post with emoji
- User can search posts
- User can search for other users

## Data

- MongoDB database seeded with vibes
- Mongoose
- Express
- Node.js
- API served by Heroku
- API repo: https://github.com/ThwCorbin/vibing-api
- API documentation: https://github.com/ThwCorbin/vibing-api/blob/master/README.md
- API returns results as JSON
- Vibe JSON response:

```json
 	HTTP/1.1 200 OK
[
  {
    "comments": [
      "Woo hoo",
      "That is so true"
    ],
    "_id": "5f2d55569096400004ca098d",
    "post": "Smile and the world smiles with you",
    "__v": 0
  },
]
```

- Inspiration JSON response:

```json
 	HTTP/1.1 200 OK
[
   {
    "_id": "5f2d55569096400004ca0996",
    "name": "Martin Luther King Jr.",
    "quote": "If you cant't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    "__v": 0
  }
]
```

- Sign up JSON response:

```json
 	HTTP/1.1 200 OK
[
  {
    "_id": "5f2d9373e83a3700173b851d",
    "username": "JohnWayne",
    "password": "password1",
    "__v": 0
  }
]
```
