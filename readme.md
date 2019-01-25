# apollo-typed-lambda

Deploying [graphql-server-typed](https://github.com/tomyitav/graphql-server-typed) on AWS lambda, using:

+ typescript
+ apollo-server 2
+ serverless-offline
+ [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
+ merge-graphql-schemas
+ Dependency injection with `injection-js`

This project demonstrates how to easily deploy a server, based on the [graphql-server-typed](https://github.com/tomyitav/graphql-server-typed)
starter, as AWS lambda.

Execute queries to the demo server [here](https://sbzzpx6y07.execute-api.us-east-1.amazonaws.com/dev/graphql)

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/apollo-typed-lambda.git
npm install
```

## Starting the server locally

Run:
```
npm run build
```

and

```
npm start
```

Or, you can do it in one command as:

```
npm run sls:offline
```

The server will run on port 3000. You can change this by editing config file.

## Code Formatting

We use Prettier and Tslint to format and enforce standards on our code. </br>
Both will run on the project automatically before each commit. </br>

Prettier rewrites code according to the .prettierrc.json configuration file. </br>
If you want to activate prettier manually (on all .ts files inside src folder) without committing, run: </br>

```
npm run prettier
```

Tslint will check rules found in the tslint.json configuration file. <br/>
If you want to check tslint manually (on all .ts files inside src folder) without committing, run: </br>

```
npm run tslint
```

## Run server in production on AWS lambda :rocket:
First, make sure you have the [serverless platform](https://serverless.com/) installed. Then, execute the following command:

```
npm run deploy
```

That's it! The server will be deployed as a lambda on AWS

## Connect to the server from client app

See the following [example](https://github.com/tomyitav/apollo-angular-client-starter) on how to connect to the server using apollo-angular.

