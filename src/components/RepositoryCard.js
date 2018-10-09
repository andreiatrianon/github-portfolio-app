import React from 'react';
import ReactDOM from 'react-dom';
import CommitPage from './CommitPage';

class RepositoryCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    ReactDOM.render(<CommitPage repository={this.props.name} />, document.getElementById('root'));
  }

  render() {
    let formatCreatedDate = new Date(this.props.created).toString();
    let formatUpdatedDate = new Date(this.props.updated).toString();
    return (
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">{this.props.name}</h4>
        </div>
        <div class="card-body">
          <h4 class="my-text-yellow d-inline mr-4"><i class="fas fa-star"></i> {this.props.stars}</h4>
          <h4 class="my-text-yellow d-inline"><i class="fas fa-code-branch"></i> {this.props.forks}</h4>
          <ul class="list-unstyled mt-3 mb-4">
            <li>created at {formatCreatedDate}</li>
            <li>updated at {formatUpdatedDate}</li>
            <li class="text-primary">{this.props.language}</li>
            <li>{this.props.issues} open issues</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-dark" onClick={this.handleClick}>See commits</button>
        </div>
      </div>
    );
  }
}

export default RepositoryCard;