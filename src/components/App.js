import React, { Component } from 'react';
import './App.css';

import RepositoryCard from './RepositoryCard';

const user = 'reactjs';

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
    let reporitories = await fetch(`https://api.github.com/users/${user}/repos`)
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
      return items.map((item, index) => 
        <RepositoryCard key={index}
                        name={item.name}
                        url={item.html_url} 
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