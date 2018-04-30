import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, updateUser } from '../../actions';

class UserList extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    selectUser(name, isSelected) {
      let index = this.props.users.findIndex(user => user.name === name);
      this.props.updateUser({index, isSelected});
    }

    userAdded(user) {
      if (user.isSelected) {
          return (
            <button onClick={this.selectUser.bind(this, user.name, false)}>remove User+</button>
          );
      }

      return (
        <div>
          <button onClick={this.selectUser.bind(this, user.name, true)}>Add User+</button>
        </div>
      );
    }


    render() {
        return (
          <div className="c-user-list">
            {this.props.users.map(user => (
                <div key={user.name} className="c-user-list__item">
                    <div>
                        {user.name}
                    </div>
                    { this.userAdded(user)}
                </div>
            ))}

            {/* <h3>Selected</h3> */}
            {/* {this.props.users.filter(res => res.isSelected).map(user => (
                <div key={user.name} className="c-user-list__item">
                    <div>
                        {user.name}
                    </div>
                    { this.userAdded(user)}
                </div>
            ))} */}
         </div>
        );
    }
}

const mapStateToProps = ({users}) => {
  return { users };
}

export default connect(mapStateToProps, {
  getUsers,
  updateUser
})(UserList);
