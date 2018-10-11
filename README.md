# GitHub Portfolio App

Project of a GitHub portfolio app. The goal of this project is to create an app that connect to the [GitHub API](https://developer.github.com/), and list all public repositories from an user, and the last commits for the repositories.

## version 1.0.0

- list all public repositories from an user, and the 20 last commits for the repositories;
- search field for filtering the commits by the term inserted into the field.

## Getting Started

Download this repository to get you a copy of the project up and following the instructions bellow to run on your local machine for development and testing purposes.

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

####Template Literals
Used as way to output variables in the string with new syntax ${NAME} inside it:

```
let reporitories = await fetch(`https://api.github.com/users/${user}/repos`)
let url = `https://api.github.com/repos/${user}/${this.props.repository}/commits`
```

####Arrow Functions
Used with one line statement, becoming an expression and implicitly returning the result of that single statement:

```
.then(
        (result) => result,
        ...
```

####Classes
Used to object-oriented programming (OOP) with of components that interact with each other to bring the solution:

```
class RepositoryCard extends React.Component {
  ...
}
export default RepositoryCard;
```

## Built With

* [Reactjs](https://reactjs.org/) - JavaScript library
* [react-test-renderer](https://reactjs.org/docs/test-renderer.html) - library of tests
* [enzyme](https://airbnb.io/enzyme/docs/api/) - library of tests
* [Bootstrap](https://getbootstrap.com/) - web framework

## Roadmap of project

#### version 3.0.0 (forecast november/2018, contributions are accepted)
- possible to change the order the repositories are shown (by stars, name, etc).

#### version 2.0.0 (forecast october/2018)
- [Marerial - UI](https://material-ui.com/) as web framework.

#### version 1.0.0 (released)
- list all public repositories from an user, and the 20 last commits for the repositories;
- search field for filtering the commits by the term inserted into the field.

## Author

* **Andreia Trianon** - [andreiatrianon](https://github.com/andreiatrianon)

## Acknowledgments

Laboratoria's mentors:

* **Juliana Amoasei** - [JulianaAmoasei](https://github.com/JulianaAmoasei)
* **Daniel Cukier** - [danicuki](https://github.com/danicuki)
* **Rafael Cerri** - [rafaelbcerri](https://github.com/rafaelbcerri)