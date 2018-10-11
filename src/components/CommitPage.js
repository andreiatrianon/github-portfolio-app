import React, { Component } from 'react';

import CommitCard from './CommitCard';

const user = 'reactjs';

class CommitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    let url = `https://api.github.com/repos/${user}/${this.props.repository}/commits`
    let commits = await fetch(url)
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
        items: commits
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items.slice(0, 20)
              .map((item, index) =>
              <CommitCard key={index} 
                          avatar={item.committer? item.committer.avatar_url:''}
                          name={item.commit? item.commit.committer.name:''}
                          date={item.commit? item.commit.committer.date:''}
                          message={item.commit? item.commit.message:''}
                          url={item.html_url? item.html_url:''}/>
              )
    }
  }
}

export default CommitPage;