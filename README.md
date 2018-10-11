# GitHub Portfolio App

Project of a GitHub portfolio app. The goal of this project is to create an app that connects to the [GitHub API](https://developer.github.com/), and lists all the public repositories and the last commits of an user.

## version 1.0.0

- lists all public repositories and the 20 last commits of an user;
- search field for filtering the commits by the term inserted into the field.

## Getting Started

Download this repository to get you a copy of the project and follow the instructions bellow to run it on your local machine for development and testing purposes.

### Installing

```
$ npm install
```

### Running the application

```
$ npm start
```

## Running the tests

```
$ npm run test
```

or

```
$ npm test
```

## ES6+ features

### Template Literals
Used as a way to output variables in the string with the new syntax ${NAME}:

```
let reporitories = await fetch(`https://api.github.com/users/${user}/repos`)
let url = `https://api.github.com/repos/${user}/${this.props.repository}/commits`
```

### Arrow Functions
Functions with one line statement:

```
.then(
  (result) => result,
  ...
)
```

### Classes
Used for object-oriented programming (OOP) with components that interact with each other to bring out the solution:

```
class RepositoryCard extends React.Component {
  ...
}
export default RepositoryCard;
```

## Built With

* [Reactjs](https://reactjs.org/) - JavaScript library
* [react-test-renderer](https://reactjs.org/docs/test-renderer.html) - React Testing Library
* [enzyme](https://airbnb.io/enzyme/docs/api/) - Testing Library
* [Bootstrap](https://getbootstrap.com/) - Web Framework

## Roadmap of the Project

#### version 3.0.0 (forecast november/2018, contributions are accepted)
- contains the possibility to filter the order of the repositories that are shown (by stars, name, etc).

#### version 2.0.0 (forecast october/2018)
- [Marerial - UI](https://material-ui.com/) as web framework.

#### version 1.0.0 (released)
- lists all public repositories and the 20 last commits of an user;
- search field for filtering the commits by the term inserted into the field.

## Author

* **Andreia Trianon** - [andreiatrianon](https://github.com/andreiatrianon)