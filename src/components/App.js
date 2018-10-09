import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import RepositoryCard from './RepositoryCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    let reporitories = await fetch("https://api.github.com/users/andreiatrianon/repos")
      .then(res => res.json())
      .then(
        (result) => result,
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      this.setState({
        isLoaded: true,
        items: reporitories
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items.map(item => 
        <RepositoryCard name={item.name} 
                        stars={item.stargazers_count} 
                        forks={item.forks_count} 
                        created={item.created_at} 
                        updated={item.updated_at} 
                        language={item.language} 
                        issues={item.open_issues_count} />
      )
    }
  }
}

export default App;