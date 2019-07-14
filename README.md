# project-x - Property pro lite 

 <a href="https://travis-ci.org/Rickytta/project-x"><img src="https://travis-ci.org/Rickytta/project-x.svg?branch=develop" alt="Build Status"/> </a>
<a href="https://codeclimate.com/github/Rickytta/project-x/maintainability"><img src="https://api.codeclimate.com/v1/badges/97ccfc79d21d78d114ad/maintainability" /></a>
<a href='https://coveralls.io/github/Rickytta/project-x?branch=develop'><img src='https://coveralls.io/repos/github/Rickytta/project-x/badge.svg?branch=develop' alt='Coverage Status' /></a>

### PROPERTY PRO LITE

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

## Hosted Pages
[Projext-x-UI]("git+https://github.com/Rickytta/project-x.git")

[Project-x-API](https://copa1fab.heroku.com)


## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You need to install the following to be able to run the project on your local machine. 

To check if you have Node.js installed, run this command in your terminal:

node -v

To confirm that you have npm installed you can run this command in your terminal:

npm -v

## Then 

npm install npm@latest -g

## Installing

  Installing this application is fairly straightforward. After cloning this repository to your local environment,CD into the package folder on your favorite terminal... bash, command prompt or the like and run the following:

      > npm install

  This runs the following script on the background processes;

      > npm install --save-dev babel-watch`

  This command starts the dev server on port 3001.

## Running the api & tests Locally

* To clone this repo: in your terminal => use git clone https://github.com/cop1fab/questioner-final.git
* Switch to develop branch with => git checkout develop 
* Run `npm run dev` You should see: "Server started successfully! App runing on port 3001.
* Run `npm run test` to check if tests are passing.
* Run `npm run cover` to check the coverage.
* With Postman, test if all endpoints work (Find a list of endpoint in the table at the bottom of this page)



 ## RESTful API Routes.

| Method | Endpoint | Description
| --- | --- | -- |
| GET | /api/v1/property | List all property |
| GET | /api/v1/property/:propertyId | Query specific property |
| POST | /api/v1/property | Create a property |
| PUT | /api/v1/property/:propertyId | update property |
| DELETE | /api/v1/property/:propertyId | Delete a property |
| GET | /api/v1/users | List all users |
| POST | /api/v1/users | add a new user |
| GET | /api/v1/users/:userId | Query specfic user|
| PUT | /api/v1/users/:userId | Update user |
| DELETE | /api/v1/users/:userId | Delete user|

# Author
Ruth Mutesi Rehema
  
## Contributors 

* Google
 
 