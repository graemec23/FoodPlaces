import React, { FunctionComponent } from "react";
import { css } from "emotion"
import { IUpdateUser, } from "../../interface";


interface IUserList {
  updateUser: ({ index, isSelected }: { index: number, isSelected: boolean }) => void
  users: IUpdateUser[]
}
const UserList: FunctionComponent<IUserList> = ({ users, updateUser }: IUserList) => {

  const toggleUser = (selectedUser: { name: string }): void => {
    const { name } = selectedUser;
    const index = users.findIndex(user => user.name === name);
    const user = users[index];
    updateUser({ index, isSelected: !user.isSelected });
  }

  return (
    <div className={css`
    padding: 16px;`}>
      {users.length >= 1 && <h3>Users</h3>}
      {users.map(user => (
        <div key={user.name} className={css`
        margin-bottom: 16px;
        input {
          margin-right: 8px;
        }
        `}>
          <input
            type="checkbox"
            id={user.name}
            value={user.name}
            onChange={() => toggleUser(user)}
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


export default UserList;
