# Vibes Planning

## Brief

This project will be a social "inspiration" website. Similar to Facebook but "only good vibes" are allowed. Clients will be able to post their own "good vibes" along with viewing inspirational quotes from famous people.

- Login Model for logging in/signing up (email String, password String)
- Vibe Model for vibe (post String, comments Array of Strings)
- Inspiration Model for inspiration (name String, quote String)
- - Silver plan adds user String to Login and Vibe Models

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

- Nav bar with Home/Vibing, Inspiration, Login, Create Account on all pages
- React Router takes user to routes
- Model for logging in/signing up (email String, password String)
- Model for vibe (post String, comments Array of Strings)
- Model for inspiration (name String, quote String)
- React front end contacts the JSON API on page load
- API responds with 10 vibes
- Front end displays vibes and a vibe post/create area
- User can click button to post a vibe
- User can click on vibes to CRUD, including reading comments for that vibe, update and deleting vibes or comments, etc.
- API responds on completion of CRUD operations, and front end displays created comment, updated or deleted post or comment
- Users name does NOT show with comment
- Website displays well on a 768x1024 screen and larger
- CRUD form is basic

### Silver: looks and works better

- Website displays well on small phones
- CRUD form is fancy
- 10 vibes followed by either click for more or automatically loads
- API documentation and a link to it on nav bar
- Search posts via search input
- Home page is a login page if the user is not logged in
- Users name shows up with comment
- Model for vibe (userID String or Number, post String, comments Array of Strings)
- Model for logging in (userName, email String, password String)
- Model for signing up (userName, email String, password String)

### Gold: bells and whistles

- User can add an image
- User can respond to post with emoji
- User can search for other users

## Data

- MongoDB database seeded with ten vibes
- Mongoose
- Express
- Node.js
- API served by Heroku
- API documentation on /doc route
- API returns results as JSON
- Vibe JSON format:

```json
 	HTTP/1.1 200 OK
[
 {
   "post": "We are all in this together!",
   "comments": [
     "Classic post!",
     "I love it",
     "You are a legend"
    ],
   "_id": "5f21f0650619bc73ac0f57b3",
   "__v": 0
 },
 follwed by 9 more vibe objects
]
```

- Inspiration JSON format:

```json
 	HTTP/1.1 200 OK
[
 {
   "quote": "This is an inspiring quote!",
   "quoteAuthor": John Q Positive,
   "_id": "5f21f0650619bc73ac0f57b3",
   "__v": 0
 },
 follwed by 9 more vibe objects
]
```

- Login/Sign up format:

```json
 	HTTP/1.1 200 OK
[
 {
   "user-name": "tomtom", // only in silver plan
   "email": "tom@tom.com",
   "password": "password1",
   "web-token": "something-is-here",
   "_id": "5f21f0650619bc73ac0f57b3",
   "__v": 0
 }
]
```
