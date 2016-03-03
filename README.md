# GitHub GraphQL Server

Basic GraphQL server that translates GraphQL requests from the GitHub API.

Translates GraphQL requests to service API calls.

## Installation
```
npm install
```

## Running
```
npm start
```

## Executing
In your browser goto: http://localhost:3000/graphql

## Example
In the GraphiQL in-browser IDE, try the following:
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