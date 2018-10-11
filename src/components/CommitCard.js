import React from 'react';

class CommitCard extends React.Component {
  render() {
    let formatDate = new Date(this.props.date).toString();
    return ( 
      <div className="col-lg-4">
        <img className="rounded-circle" src={this.props.avatar} alt="Generic placeholder image" width="140" height="140"></img>
        <h4>{this.props.name}</h4>
        <small>{formatDate}</small>
        <p className="commit-message">{this.props.message}</p>
        <p><a className="btn btn-secondary" href={this.props.url} target="_blank" role="button">View details &raquo;</a></p>      
      </div>
    )
    
  }
}

export default CommitCard;