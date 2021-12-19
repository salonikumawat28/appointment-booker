# Appointment Booker

## Creating project
`meteor create <project name>` command is used to create a meteor project. It adds a basic schema of the project and also adds a package.json which is the heart of any Node application. This package.json is responsible for installing dependencies, running scripts, identifying entry points etc.

We have made some tweaks in the basic schema and this is how our schema will look like:
```
> client: Contains client side code
    > ui: Directory which contains all the react components.
    main.html: Entry point in the client side code. (Meteor adds css and js in this html)
    main.css: Styling 
    main.jsx: Main jsx component which injects react components in the DOM.
> server: Contains server code
    main.js: Entry point of server. Starts the server.
> api: Client server communication API
> db: Communication interface between server-database and client-clientDB(cache)
> tests: Client and server tests
package.json: Metadata of the Node project.
```

## Understanding package.json
Package.json is the heart of any Node application. This is where we define all the metadata of our prokect like project's name, scripts to run, dependencies and meteor's metadata about the project.
For our interest, main things to know from package.json are:
1. You can define dependencies of your projects in the "dependencies" key of the json.
2. `npm start` or `meteor run` can be used to start the project.
3. From package.json, meteor knows the main client module and main server module. In our case, `client/main.jsx` is the main client module and   `server/main.js` is the main server module.

## Running a meteor server
### Nodejs
Meteor server is run on nodejs runtime environment. Nodejs a JavaScript runtime environment which uses chrome's V8 execution engine. Nodejs enables us to run a JavaScript code outside browser and thus we can write our server code in JavaScript.
### meteor run command
You can start your server by running `meteor run` or `npm start` commands.
### Server start flow
When you run `meteor run` command, following happens:
1. Meteor starts the MongoDB database server by default.
2. Meteor runs your `server/main.js` to startup your application server.
3. If you have imported anything in your `main.js` file, they are run first. This is how your `API methods` and `publishers` are registered as part of your application server.
3. Once your application server is up, it runs the after-startup logic which you provided to the `Meteor.startup` method as lambda function.
