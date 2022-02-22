# CRUD with Express

## Learning Outcomes

[ ] Review: Make an Express app from scratch

[ ] What's a resource?
[ ] What's CRUD/BREAD mean?
[ ] What is REST?

[ ] GET requests are for requesting to _view_ information
[ ] POST requests are for requesting to _change_ information
[ ] Request-response cycle: Every request _must_ get a response

[ ] HTML forms: The most standard way to make POST requests
[ ] Dev tools: How to use the network tab

[ ] How to do HTTP redirects in Express

## Express Review

* Setting up an Express server from scratch
* Making a few routes
* Server-side state

## CRUD (Or... BREAD)

### What's CRUD stand for?

Create
Read
Update
Delete

### What are the two reasons that we aren't going to use CRUD in this lecture?

Browse
Read
Edit
Add
Delete


## Resources

### What's a resource?

Is a resource just a term for anything that **can be asked for** about a specific **"topic?"**
A **collection** of related data that we can **perform _one or more_ BREAD operations** on
A resource is an entity through which you interact with an application

### Let's make up a bunch of resources

* Users
* Images
* Articles
* Products (e.g. Shopify)
* Songs
* Posts
* Doctors
* Followers
* Wiki
* Dashboard
* Sessions

### Resources and routing

**REST:** REpresentational State Transfer (<- Super pointless acronym)
  * Describes a consistent routing plan for doing BREAD stuff to resources


**RESTful routes for articles**

Browse    - Collection     GET /articles
Read      - Entry          GET /articles/:id
Edit      - Entry          POST /articles/:id
Add       - Collection     POST /articles
Delete    - Entry          POST /articles/:id/delete

GET - Only asking for information, not asking for any changes
POST - Asking for changes

Other HTTP methods that we aren't using:
  PUT
  PATCH
  DELETE

#### Music App
* Sessions
* Dashboard
* Songs


#### Internal Documentation App
* Sessions
* Dashboard
* Articles
* Images

## Let's build a BREAD app

* Setting up initial server state
* Setting up GET routes
* Building a form
* Setting up POST routes
