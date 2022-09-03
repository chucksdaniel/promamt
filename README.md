# PROMAMT

PROMAMT is a project management web application that helps you keep track of all the project you are currently working on with the owners (client) informations.

To start the app on your local machine, make sure the following tools are installed on your machine

-  node version 12.x up
-  mongoose
-  Text editor (vs code)

## Server Folder houses the API code

```
cd server
```

Install all the dependencies the api needs to run by running the command

```
npm install
```

To start the backend server

```
npm run start:dev
```

if you have no error, your api can be accessible on

```
http://localhost:8080/v1/graphql
```

## Client Folder houses the view of the application

The frontend is built with reactjs and apollo client. To set up the frontend

```
cd client
```

To install all the dependencies the client side needs to run locally, run the command

```
npm install
```

To start the application on the frontend

```
npm start
```
