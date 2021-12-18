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