import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getUsers, updateUser } from '../../actions';

class UserList extends Component {


  toggleUser(selectedUser) {
    const { name } = selectedUser;
    const index = this.props.users.findIndex(user => user.name === name);
    const user = this.props.users[index];
    this.props.updateUser({ index, isSelected: !user.isSelected });
  }

  render() {
    console.log('props', this.props)
    return (
      <div className="c-user-list">
        {this.props.users.map(user => (
          <div key={user.name} className="c-user-list__item">
            <input
              type="checkbox"
              id={user.name}
              value={user}
              onChange={this.toggleUser.bind(this, user)}
              checked={user.isSelected === true}
            />
            <label htmlFor={user.name}>
              {user.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
