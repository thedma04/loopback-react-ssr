# Loopback Backend with React

This project uses loopback - A nodejs framework for building API and React JS- A minimalistic JavaScript framework. This application is a simple blogging platform that uses ReactJS on the frontend and loopback at the backend. The app uses HashRouter from React-router-dom to sink the routing from both frontend and backend.

Users are to login or signup before they can add a post but can view a post even when not signed in

## Example

```
  <HashRouter>
        <Route path='/' component={Home}>
  </HashRouter>

```
This will return ```http://localhost:3000/#/```
HashRouter works well when you want to sink your routing on the client side to backend ie on page refresh you don't want server to send 404 page

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To be able to run this application successully on your machine, you need to install nodejs on your machine. Preferably, your nodejs should be above version 4.
The Operating System used to build this application was Ubuntu v16.04, however its supports most OS
The node package manager used is yarn
To install yarn with npm run:

```
 npm i -g yarn
```

### Installing

This step by step series of examples will help you run the application on development


Clone the applicaton

```
git clone github.com/thedma04/skillnav-test
```


Once cloned change directory into the folder and open your terminal and checkout to ## secondSolution branch 

```
 git checkout secondSolution

```
After checking out run

```
yarn 
or 
npm install

```

Once all the packages are installed, you can run 

```
 yarn start

```
This will take sometime to start using nodemon and webpack bundle
Check the terminal to see when the bundle is done and go to your browser

```http:localhost:3000```
You can also visit ```http:localhost:3000/explorer``` to view the API docs generated by loopback


## Running the tests

This project used jest to run unit testing

### Break down into end to end tests

This tests components by creating snapShots and also matching some elements in the component
When runned the command below any file with .test.js will be run
Components and routes were tested as well

```
 yarn test
 or
 npm run test
```

To run the coverage
```
  yarn test-coverage

```

## Starting the APP

To start the application, one must first install all packages
Then open the directory containing the application in the terminal
There they can simply type:

```
 yarn start
```

Check the terminal to see whether the application has started well

```
    Web server listening at: http://localhost:3000
    Browse your REST API at http://localhost:3000/explorer
    webpack built 3646c16014cac55a0083 in 3486ms

```

Once you see this in your terminal, go to your browser and type ```http://localhost:3000```
The application should be running perfectly


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Loopback](https://loopback.io/) - The server framework used
* [React](https://reactjs.org/) - The web framework used
* [React Router Dom](https://reacttraining.com/react-router/web/guides/philosophy) - For routing on the client side
* [Webpack](https://webpack.js.org/) - For bundling the client side into one file
* [Jest](http://jestjs.io/) - Used for testing


## Note
There is mlab temporal account in the datasources.json, this is a test account that is why it included in the repo.

