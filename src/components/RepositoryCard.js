import React from 'react';
import ReactDOM from 'react-dom';
import CommitPage from './CommitPage';

class RepositoryCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleRepositoryClick = this.handleRepositoryClick.bind(this);
    this.handleCommitClick = this.handleCommitClick.bind(this);
  }

  handleRepositoryClick() {
    window.open(
      `${this.props.url}`,
      '_blank'
    );
  }

   handleCommitClick() {

    let template = <div class="container text-center">
                    <h3 class="mb-5">20 last Commits from <span id="repository-name" class="my-text-yellow" onClick={this.handleRepositoryClick}>{this.props.name}</span></h3>
                    <div class="card-deck mb-3 text-center">
                      <CommitPage repository={this.props.name} />
                    </div>
                  </div>

    ReactDOM.render(template, document.getElementById('root'));
  }

  render() {
    let formatCreatedDate = new Date(this.props.created).toString();
    let formatUpdatedDate = new Date(this.props.updated).toString();
    return (
      <div class="card mb-4 shadow-sm">
        <div id="repository-name" class="card-header">
          <h4 class="my-0 font-weight-normal" onClick={this.handleRepositoryClick}>{this.props.name}</h4>
        </div>
        <div class="card-body">
          <h6 class="my-text-yellow d-inline mr-4"><i class="fas fa-star"></i> {this.props.stars}</h6>
          <h6 class="my-text-yellow d-inline"><i class="fas fa-code-branch"></i> {this.props.forks}</h6>
          <ul class="list-unstyled mt-3 mb-4">
            <li>created at {formatCreatedDate}</li>
            <li>updated at {formatUpdatedDate}</li>
            <li class="text-primary">{this.props.language}</li>
            <li class="text-danger">{this.props.issues} open issues</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-dark" onClick={this.handleCommitClick}>See commits</button>
        </div>
      </div>
    );
  }
}

export default RepositoryCard;