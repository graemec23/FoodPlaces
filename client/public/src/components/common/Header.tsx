/** @cx cx */
import React, { FunctionComponent } from "react";
import { css } from "emotion";

const color = "white";

const Header: FunctionComponent = () => (
  <div className={css`
    padding: 32px;
    background-color: aquamarine;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
    }
  `}>
    <h1>Food Places</h1>
  </div>
);

export default Header;
