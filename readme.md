# apollo-typed-lambda

Deploying [graphql-server-typed](https://github.com/tomyitav/graphql-server-typed) on AWS lambda, using:

+ typescript
+ serverless-http
+ [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
+ merge-graphql-schemas
+ Dependency injection with `injection-js`

This project demonstrates how to easily deploy a server, based on the [graphql-server-typed](https://github.com/tomyitav/graphql-server-typed)
starter, as AWS lambda

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/apollo-typed-lambda.git
npm install
```

## Starting the server locally

```
npm run sls:offline
```

The server will run on port 3000. You can change this by editing config file.

## Run server in production on AWS lambda :rocket:

```
npm run sls:deploy
```

That's it! The server will be deployed as a lambda on AWS

## Connect to the server from client app

See the following [example](https://github.com/tomyitav/apollo-angular-client-starter) on how to connect to the server using apollo-angular.

