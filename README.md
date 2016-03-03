# GitHub GraphQL Server

Basic GraphQL server that translates GraphQL requests from the GitHub API.


## Installation
```
npm install
```

## Running
```
npm start
```

## Executing
In your browser go to: [http://localhost:3000/graphql](http://localhost:3000/graphql)

## Example
In the [GraphiQL](https://github.com/graphql/graphiql) in-browser IDE, try the following:
```
query {
  user(username: "liormb") {
    created_at,
    id,
    login,
    name,
    avatar,
    following {
      login,
      url,
      repos_url
    },
    followers {
      login,
      url,
      repos_url,
    }
  }
}
```