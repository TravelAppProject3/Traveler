# Traveler

It is said that about **10% of the world population** travels every year. Traveling can occur in groups or by yourself. Our idea focuses on “yourself” or the solo travelers. Our idea is a web platform that enables solo travelers to keep track of their trips, see what else they can do while on their trips and then socialize with other solo travelers while doing so! The value proposition is when traveling, everything is seemingly in so many different places. Hotels, restaurants, events, socializing, it is all on a different website or inside a different application. We present to you a solution where it is all in one.

## The pressure was on ...

The project details were of the following:

1.  We expect whatever you build to have utility
2.  We expect you to have market or real-world research that evidences your idea has REAL value to people.
3.  We expect you to have done research on other web / mobile applications in your domain.
4.  We expect you to put serious time and thought into this.
5.  We expect you to report problems you are facing along the way.
6.  We expect you to utilize some form of project management system.
7.  We expect you to dig deep into documentation and external resources to learn what you need.
8.  Must use ReactJS, Vue, or Angular in some way (even if minimal)
9.  Must use a Node and Express Web Server
10. Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM
11. Must have both GET and POST routes for retrieving and adding new data
12. Must be deployed using Heroku (with Data)
13. Must utilize at least two libraries, packages, or technologies that we haven’t discussed
14. Must allow for or involve the authentication of users in some way
15. Must have a polished frontend / UI
16. Must meet good quality coding standards (folder structure, indentation, scoping, naming)
17. Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md

## API Routes

### User Data

- api/users
  - GET - returns list of users
- api/users/:id
  - GET - returns user information of user with id in params

### Trip Data

- api/trips/
  - GET - Returns all trips of all users
- api/trips/:tripId
  - GET - Returns all trip information for tripId in req.params
  - PUT - Update the trip by passing in object in req.body
  - DELETE - Delete the trip from database
- api/trips/new
  - POST - create a new trip - tripUser and tripName required in req.body
- api/trips/getUserTrips/:userId
  - GET - Returns all trips for a user based on userId
- api/trips/addTripLeg/:tripId
  - POST - Adds the Tripleg to the array in the Trip collection passing in city, arrivalDate, and departureDate
- api/trips/addShelter/:tripLegId
  - POST - Add a shelter item to the trip leg
- api/trips/addShelter/:tripLegId
  - POST - Add a shelter item to the trip leg
- api/trips/addActivity/:tripLegId
  - POST - Add an activity item to the trip leg

### Shelter Data

- api/shelter/:id
  - GET Get information about the shelter including the guests
- api/shelter/addGuest/:userId/:shelterId
  - PUT - add user to hotel list

### Activity Data

- api/activity/:id
  - GET - get information about the activity including the participants
- api/activity/addParticipant/:userId/:activityId
  - PUT - add participant to activity list
