import React from 'react';
import ReactDOM from 'react-dom';
import CommitPage from './CommitPage';

class RepositoryCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleRepositoryClick = this.handleRepositoryClick.bind(this);
    this.handleCommitClick = this.handleCommitClick.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  handleRepositoryClick() {
    window.open(
      `${this.props.url}`,
      '_blank'
    );
  }

   handleCommitClick() {

    let template = <div class="container text-center d-flex flex-column align-items-center">
                    <h3 class="mb-5">20 last Commits from <span id="repository-name" class="my-text-yellow" onClick={this.handleRepositoryClick}>{this.props.name}</span></h3>
                    <input type="search" class="form-control w-25 mb-5" id="search-input" placeholder="Search commit..." onInput={this.onSearchInput}></input>
                    <div class="card-deck mb-3 text-center">
                      <CommitPage repository={this.props.name} />
                    </div>
                  </div>

    ReactDOM.render(template, document.getElementById('root'));
  }

  onSearchInput() {
    let inputValue = document.getElementById('search-input').value;
    let inputValueLength = inputValue.length;
    Array.prototype.map.call(document.querySelectorAll(".commit-message"), commit => {
      let msg = commit.textContent;
      let msgLetters = msg.slice(0, inputValueLength);
      if (msgLetters.toLowerCase() === inputValue.toLowerCase()) {
        commit.closest('.col-lg-4').style.display = 'block'; 
      } else {
        commit.closest('.col-lg-4').style.display = 'none';;
      }
    });
  }

  render() {
    let formatCreatedDate = new Date(this.props.created).toString();
    let formatUpdatedDate = new Date(this.props.updated).toString();
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header repository-name">
          <h4 className="my-0 font-weight-normal" onClick={this.handleRepositoryClick}>{this.props.name}</h4>
        </div>
        <div className="card-body">
          <h6 className="my-text-yellow d-inline mr-4"><i className="fas fa-star"></i> {this.props.stars}</h6>
          <h6 className="my-text-yellow d-inline"><i className="fas fa-code-branch"></i> {this.props.forks}</h6>
          <ul className="list-unstyled mt-3 mb-4">
            <li>created at {formatCreatedDate}</li>
            <li>updated at {formatUpdatedDate}</li>
            <li className="text-primary">{this.props.language}</li>
            <li className="text-danger">{this.props.issues} open issues and pull requests</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-outline-dark" onClick={this.handleCommitClick}>See commits</button>
        </div>
      </div>
    );
  }
}

export default RepositoryCard;