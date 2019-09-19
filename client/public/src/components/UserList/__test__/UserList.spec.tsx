import React from "react";
import ReactDom from "react-dom";
import { render, Simulate, fireEvent } from "@testing-library/react";

import UserList from "../index";

describe("UserList", () => {


  test('gets list of users', () => {
    const testUser = [
      {
        "name": "John Davis",
        "wont_eat": [
          "Fish"
        ],
        "drinks": [
          "Cider",
          "Rum",
          "Soft drinks"
        ]
      }
    ];
    const foo = () => { };
    // expect()
    // const div = document.createElement("div");
    const { getByText, getByLabelText, container } = render(<UserList updateUser={foo} users={testUser} />);
    const selectUserNode = getByText("John Davis");
    console.log("selected", selectUserNode);
    expect(selectUserNode.checked).toEqual(false);
    // fireEvent.click(selectUserNode);
    // expect(selectUserNode.checked).toEqual(true);
  });

  test('Adds user to selected list', () => {
    // expect()
  });

  test('removes user from selected list', () => {
    // expect();
  });
});
