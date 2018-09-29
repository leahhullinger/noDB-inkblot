import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
        <h2>{this.props.person.name}</h2>
        <img src={this.props.person.image} />
        <div className="personality-result">{this.props.person.personality}</div>
      </div>
    )
  }
}

export default ProfileCard;